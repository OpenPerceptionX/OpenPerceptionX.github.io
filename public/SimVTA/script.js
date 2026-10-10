document.querySelector('#copy-citation').addEventListener('click', async () => {
  const text = document.querySelector('#bibtex').textContent;
  try {
    await navigator.clipboard.writeText(text);
    document.querySelector('#copy-status').textContent = 'Citation copied.';
  } catch {
    const range = document.createRange(); range.selectNodeContents(document.querySelector('#bibtex'));
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    document.querySelector('#copy-status').textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
  }
});

// Report media failures without changing the video source.
document.querySelectorAll('video').forEach(video => {
  video.preload = 'auto';
  const source = video.querySelector('source');
  const help = document.createElement('p');
  help.style.cssText = 'font-size:11px;line-height:1.6;margin:8px 0;color:inherit;opacity:.8';
  const link = document.createElement('a');
  link.href = source.src;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Open video file ↗';
  help.append(link);
  video.after(help);
  const report = () => {
    if (video.error && !help.querySelector('span')) {
      const message = document.createElement('span');
      message.textContent = 'Video playback failed (code ' + video.error.code + '). ';
      help.prepend(message);
    }
  };
  video.addEventListener('error', report);
  report();
});
