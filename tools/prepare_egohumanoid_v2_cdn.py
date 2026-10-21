#!/usr/bin/env python3
"""Prepare a flat CDN upload and reviewable patches without changing live assets."""
import argparse
import csv
import difflib
import hashlib
import io
import json
import re
import subprocess
import zipfile
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlsplit
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
PROJECT = Path('public/EgoHumanoid-V2')
SUFFIXES = {'.mp4', '.webm', '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg',
            '.ico', '.woff', '.woff2', '.ttf', '.pdf', '.zip', '.txt'}
SHARED = [Path('public/assets/publication/egohumanoid-v2-teaser.gif'),
          Path('public/resources/logo/OpenDriveLab/D.png')]


def read_asset(path):
    local = ROOT / path
    if local.is_file():
        return local.read_bytes()
    return subprocess.run(['git', 'show', f'HEAD:{path.as_posix()}'], cwd=ROOT,
                          check=True, capture_output=True).stdout


def verify(output):
    manifest = json.loads((output / 'manifest.json').read_text())
    def check(item):
        try:
            request = Request(item['cdn_url'], method='HEAD')
            with urlopen(request, timeout=25) as response:
                size = response.headers.get('Content-Length')
                if response.status != 200 or size is None or int(size) != item['bytes']:
                    return f"{item['flat_name']}: HTTP/size mismatch"
                content_type = response.headers.get('Content-Type', '').lower()
                if 'text/html' in content_type or 'application/xml' in content_type:
                    return f"{item['flat_name']}: unexpected content type {content_type}"
                if Path(item['flat_name']).suffix == '.woff2':
                    if response.headers.get('Access-Control-Allow-Origin') != '*':
                        return f"{item['flat_name']}: fonts need CORS Access-Control-Allow-Origin: *"
            return None
        except (HTTPError, URLError, TimeoutError, OSError) as error:
            return f"{item['flat_name']}: {error}"
    with ThreadPoolExecutor(max_workers=6) as pool:
        failures = [failure for failure in pool.map(check, manifest['files']) if failure]
    # Browsers seek MP4s using byte-range requests. Do not download whole videos.
    movie = next(item for item in manifest['files'] if item['flat_name'].endswith('project-overview-v21.mp4'))
    try:
        with urlopen(Request(movie['cdn_url'], headers={'Range': 'bytes=0-0'}), timeout=25) as response:
            if response.status != 206 or not response.headers.get('Content-Range', '').startswith('bytes 0-0/'):
                failures.append('Overview MP4: CDN must support HTTP byte ranges (206).')
    except (HTTPError, URLError, TimeoutError, OSError) as error:
        failures.append(f'Overview MP4 range check: {error}')
    (output / 'cdn-verification.json').write_text(json.dumps({'failures': failures}, indent=2))
    for failure in failures:
        print(failure)
    if failures:
        raise SystemExit(f'{len(failures)} CDN checks failed. Keep current media and references.')
    print('All CDN files, sizes, font CORS and MP4 byte-range checks passed.')


def patch_file(source, target, before, after, patches):
    if before == after:
        return
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(after)
    patches.extend(difflib.unified_diff(before.splitlines(True), after.splitlines(True),
                                      fromfile='a/' + source.as_posix(),
                                      tofile='b/' + source.as_posix()))


def prepare(output, base, mirror):
    if any(output.iterdir()):
        raise SystemExit('Output must be empty; existing handoff files are preserved.')
    paths = sorted(p.relative_to(ROOT) for p in (ROOT / PROJECT / 'assets').rglob('*')
                   if p.is_file() and p.suffix.lower() in SUFFIXES)
    if not paths:
        raise SystemExit("Project media has already moved to CDN. Use --verify with the existing handoff.")
    paths += SHARED
    files = []
    names = set()
    archive = output / 'EgoHumanoid-V2-CDN-assets.zip'
    with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_STORED, allowZip64=True) as package:
        for path in paths:
            relative = path.relative_to(PROJECT) if path.is_relative_to(PROJECT) else path.relative_to('public')
            flat = '__'.join(relative.parts)
            if flat in names:
                raise SystemExit(f'Flattened filename collision: {flat}')
            names.add(flat)
            data = read_asset(path)
            package.writestr(flat, data)
            files.append({'source': path.as_posix(), 'flat_name': flat,
                          'cdn_url': base + quote(flat), 'bytes': len(data),
                          'sha256': hashlib.sha256(data).hexdigest()})
    with zipfile.ZipFile(archive) as package:
        assert all('/' not in name and '\\' not in name for name in package.namelist())
        assert package.testzip() is None

    replacements = {}
    for item in files:
        source = Path(item['source'])
        if source.is_relative_to(PROJECT):
            relative = source.relative_to(PROJECT).as_posix()
            for old in (relative, '/EgoHumanoid-V2/' + relative,
                        'https://opendrivelab.com/EgoHumanoid-V2/' + relative):
                replacements[old] = item['cdn_url']
        else:
            replacements['/' + source.relative_to('public').as_posix()] = item['cdn_url']
    # The mirror has a local copy of the shared OpenDriveLab icon.
    replacements['assets/logos/opendrivelab.png'] = next(
        item['cdn_url'] for item in files if item['source'] == SHARED[1].as_posix())
    # Match complete URL tokens; preserve query strings/fragments and avoid partial replacements.
    tokens = re.compile(r'''(?:https?://[^\s"'<>]+|/?[A-Za-z0-9_./-]+)(?:\?[^\s"'<>]*)?''')
    def rewrite(text):
        def replace(match):
            token = match.group(0)
            plain = re.split(r'[?#]', token, maxsplit=1)[0]
            return replacements.get(plain, plain) + token[len(plain):]
        return tokens.sub(replace, text)

    candidates = sorted(p for p in (ROOT / PROJECT).rglob('*')
                        if p.is_file() and p.suffix in {'.html', '.css', '.js', '.json'})
    candidates.append(ROOT / 'data/publications.tsx')
    patches = []
    for path in candidates:
        relative = path.relative_to(ROOT)
        before = path.read_text()
        patch_file(relative, output / 'staged-main' / relative,
                   before, rewrite(before), patches)
    (output / 'main-site-cdn.patch').write_text(''.join(patches))
    if mirror:
        patches = []
        for path in sorted((mirror / 'EgoHumanoid-V2').rglob('*')):
            if not path.is_file() or path.suffix not in {'.html', '.css', '.js', '.json'}:
                continue
            before = path.read_text()
            relative = path.relative_to(mirror)
            patch_file(relative, output / 'staged-mirror' / relative,
                       before, rewrite(before), patches)
        (output / 'mirror-site-cdn.patch').write_text(''.join(patches))

    manifest = {'cdn_base': base, 'status': 'PREPARED_NOT_UPLOADED_OR_APPLIED',
                'files': files, 'total_bytes': sum(item['bytes'] for item in files)}
    (output / 'manifest.json').write_text(json.dumps(manifest, indent=2, ensure_ascii=False))
    with (output / 'file-mapping.csv').open('w', newline='') as stream:
        writer = csv.DictWriter(stream, fieldnames=files[0].keys())
        writer.writeheader()
        writer.writerows(files)
    # Include binary deletions as lists, rather than huge binary patches. Never remove shared lab logos.
    cleanup = [item['source'] for item in files if item['source'].startswith(str(PROJECT) + '/')]
    (output / 'main-files-to-remove-after-verification.txt').write_text('\n'.join(cleanup) + '\n')
    (output / 'mirror-files-to-remove-after-verification.txt').write_text(
        '\n'.join(path.removeprefix('public/') for path in cleanup) +
        '\nEgoHumanoid-V2/assets/logos/opendrivelab.png\n')
    (output / 'HANDOFF.md').write_text(f'''# EgoHumanoid-V2 CDN 交接

状态：已打包、已生成待切换代码；尚未上传、未切换线上、未删除原资源。

- 交给上传人的文件：`{archive.name}`；解压后全部是根目录文件，**没有子目录**。
- 共 {len(files)} 个文件，原始总大小 {manifest['total_bytes'] / 2**20:.2f} MiB。
- 包含项目全部图片/视频（包括历史版本）、字体及许可证、PDF、下载 ZIP，以及首页 teaser GIF 和项目使用的共享 Logo。
- HTML/CSS/JS/JSON 源码保留在 Git，不需要把源码包上传 CDN。
- 建议目录：`{base}`。这是按示例拟定的目录，须由上传人确认；若不同，用实际 URL 重新运行准备脚本。
- 文件命名示例：`assets/videos/human-laptop.mp4` → `assets__videos__human-laptop.mp4`。
- `file-mapping.csv` / `manifest.json` 记录每个文件的路径、URL、大小和 SHA-256。

## 上传后

1. 全部文件上传至确认的 CDN 目录，保留文件名；图片保持原始动图格式。
2. 字体应返回 `Access-Control-Allow-Origin: *`，MP4 应支持 Range/206，MIME 类型应正确。
3. 在源码仓库执行：
   `python tools/prepare_egohumanoid_v2_cdn.py --output '{output}' --verify`
4. 验证通过后，先用 `git apply --check` 检查两个站点的补丁，再分别应用对应补丁；补丁包含资源引用变更，不含资源删除。
5. 按对应 `*-files-to-remove-after-verification.txt` 清理已搬迁的项目资源。共享 OpenDriveLab Logo 仍被其他页面使用，不在清理清单中。首页 GIF 需检查其他消费者后再删。
6. 遵守仓库约束：由用户运行预览，确认图片/动图、视频、弹窗、下载、手机布局后再提交部署。不要在上传前应用补丁或删除文件。

注意：删除当前分支文件不会清除 Git 历史里的大文件。历史瘦身需要仓库维护者协调，不能直接 force-push 重写整个团队的历史。
''')
    print(f'Prepared {len(files)} files; {manifest["total_bytes"] / 2**20:.2f} MiB')
    print(archive)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--base-url', default='https://assets.archonrobotics.tech/odl/project/EgoHumanoid-V2/')
    parser.add_argument('--mirror', type=Path)
    parser.add_argument('--verify', action='store_true')
    args = parser.parse_args()
    args.output = args.output.resolve()
    args.output.mkdir(parents=True, exist_ok=True)
    if args.verify:
        verify(args.output)
    else:
        if urlsplit(args.base_url).scheme != 'https':
            parser.error('CDN base URL must use HTTPS.')
        prepare(args.output, args.base_url.rstrip('/') + '/', args.mirror)


if __name__ == '__main__':
    main()
