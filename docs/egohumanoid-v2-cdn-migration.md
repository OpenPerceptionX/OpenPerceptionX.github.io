# EgoHumanoid-V2: CDN handoff

The 2026-10-21 asset handoff requests images, videos, fonts, PDFs and download
archives outside the website Git repository. The uploader wants a ZIP containing
only files at its root. Flatten a project-relative path with `__`, for example
`assets/videos/human-laptop.mp4` becomes `assets__videos__human-laptop.mp4`.
Keep HTML/CSS/JS/JSON source in Git. This follows the supplied PingpongDuo example;
it does not authorize migrating unrelated projects or rewriting Git history.

## Prepare

For the original pre-migration packaging, run from the repository root with an empty output directory outside Git:

```sh
python tools/prepare_egohumanoid_v2_cdn.py \
  --output /path/outside/repository/EgoHumanoid-V2-CDN \
  --base-url https://assets.archonrobotics.tech/odl/project/EgoHumanoid-V2/ \
  --mirror /path/to/LambdaHumanoid.github.io
```

The uploader confirmed the `odl/project/EgoHumanoid-V2/` object prefix. The
confirmed public base URL is `https://assets.archonrobotics.tech/odl/project/EgoHumanoid-V2/`.
The earlier URL without `/odl/` returns 404 and must not be used.
All 171 objects passed HTTP/size checks; font CORS and MP4 Range/206 checks passed.
Production source now uses this base, and the migrated binary files have been
removed from the current main and mirror project trees. The verified original
upload ZIP remains outside Git. No repository history was rewritten.

The utility creates the flat media ZIP, SHA-256/size manifest, CSV URL mapping,
reviewable main/mirror patches, staged source, and cleanup lists. It does not
modify website source, delete resources, upload, commit, or deploy. Include the
entire project asset collection, including previous video versions, so the
uploader receives all files requested. The teaser GIF used by the main research
pages and the project's shared OpenDriveLab logo are included as well.

## Cut over after upload

1. Confirm the actual CDN directory. If different, regenerate using `--base-url`.
2. Run the same utility with `--output <existing-handoff-directory> --verify`.
   This checks every uploaded object's status/size, font CORS, and MP4 byte ranges.
3. Recheck both working trees. Use `git apply --check` on each corresponding patch
   before applying it. The patches preserve query strings, project DOM/IDs, media
   posters and metadata. Next Image already allows `assets.archonrobotics.tech`.
4. Review and remove migrated project resources using the generated cleanup lists.
   Retain the shared lab logo: other projects still use it. Check remaining
   consumers before deleting the original main-site teaser GIF.
5. Follow repository build/preview constraints. The user should check desktop and
   mobile figures, animated GIF, posters and seeking, figure/WeChat dialogs,
   fonts, favicon, downloads, and main-site publication previews before deployment.

Removing current files does not remove old binary blobs from Git history. A
history rewrite or repository replacement requires maintainer coordination and
separate authorization; do not force-push as part of this migration.

## Preparation verification (2026-10-21)

- 171 unique flat upload files, 627.98 MiB before ZIP overhead.
- Every ZIP member checked against manifest size and SHA-256; archive CRC passed.
- All rewritten CDN filenames present in the archive; patched JSON parses.
- Main and mirror HTML tag sequences/IDs unchanged.
- Both generated patches passed `git apply --check` against their source trees.
- No preview server or application build started for this preparation.
- Confirmed CDN base includes `/odl/`; all 171 upload checks passed.
- Main-site build and both project JS syntax checks passed after URL replacement.
- Main project media reduced from approximately 627 MiB to source/JSON only;
  mirror project local media removed as well. Shared lab logo kept for other projects.
- Unused root favicons were archived separately outside Git before removal.
- Browser checks and deployment status are recorded in `docs/design/verification.md`.
- Preparation commands are historical: once local media is removed, use `--verify`
  with the saved handoff, or upload new media directly to the confirmed CDN prefix.
