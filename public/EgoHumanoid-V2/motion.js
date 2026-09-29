/* Hallmark · existing photographic theme · P5 H5 E4 S5 R5 V4 */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const rows = [...document.querySelectorAll('[data-matrix-row]')];
  const rowObserver = new IntersectionObserver(entries => entries.forEach(({target, isIntersecting}) => {
    target.dataset.visible = String(isIntersecting);
    target.querySelectorAll('video').forEach(video => {
      if (isIntersecting && target.dataset.paused !== 'true' && !document.hidden) {
        if (!video.src) { video.src = video.dataset.src; video.load(); }
        video.play().catch(() => {});
      } else video.pause();
    });
  }), {threshold: .15});
  rows.forEach(row => {
    row.dataset.paused = String(reduce.matches || Boolean(navigator.connection?.saveData));
    const button = row.querySelector('.matrix-play');
    const update = () => {
      const playing = [...row.querySelectorAll('video')].some(v => !v.paused);
      button.textContent = playing ? 'Pause row' : 'Play row';
      button.setAttribute('aria-pressed', String(playing));
    };
    row.querySelectorAll('video').forEach(v => ['play', 'pause', 'ended'].forEach(event => v.addEventListener(event, update)));
    button.addEventListener('click', () => {
      const playing = [...row.querySelectorAll('video')].some(v => !v.paused);
      row.dataset.paused = String(playing);
      row.querySelectorAll('video').forEach(v => {
        if (playing) v.pause();
        else { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); }
      });
    });
    update(); rowObserver.observe(row);
  });
  document.addEventListener('visibilitychange', () => rows.forEach(row => {
    row.querySelectorAll('video').forEach(v => {
      if (document.hidden) v.pause();
      else if (row.dataset.visible === 'true' && row.dataset.paused !== 'true') v.play().catch(() => {});
    });
  }));
  const figures = [...document.querySelectorAll('[data-motion]')];
  const motionObserver = new IntersectionObserver(entries => entries.forEach(({target,isIntersecting}) => {
    target.dataset.visible = String(isIntersecting); syncMotion(target);
  }), {threshold: .15});
  function syncMotion(fig) {
    const stopped = fig.dataset.paused === 'true' || fig.dataset.visible !== 'true' || document.hidden;
    fig.classList.toggle('motion-paused', stopped);
    fig.querySelectorAll('svg').forEach(svg => stopped ? svg.pauseAnimations() : svg.unpauseAnimations());
  }
  figures.forEach(fig => {
    fig.dataset.paused = String(reduce.matches);
    const button = fig.querySelector('.motion-toggle, .alignment-toggle');
    const update = () => {
      if (!button) { syncMotion(fig); return; }
      button.textContent = fig.dataset.paused === 'true' ? 'Play animation' : 'Pause animation';
      button.setAttribute('aria-pressed', String(fig.dataset.paused === 'true')); syncMotion(fig);
    };
    button?.addEventListener('click', () => { fig.dataset.paused = String(fig.dataset.paused !== 'true');update(); });
    reduce.addEventListener('change', () => { fig.dataset.paused = String(reduce.matches);update(); });
    document.addEventListener('visibilitychange', () => syncMotion(fig));
    update();motionObserver.observe(fig);
  });
  const action = document.querySelector('.action-figure');
  const stages = [
    {score: '21.25', position: '11.21', orientation: '21.22', x: 310, width: 310},
    {score: '47.08', position: '4.45', orientation: '13.77', x: 675, width: 300},
    {score: '51.67', position: '3.41', orientation: '6.71', x: 1030, width: 970}
  ];
  let stage = 0, elapsed = 0;
  function showStage(index) {
    stage = index; const data = stages[index];
    action.querySelector('.stage-spotlight').setAttribute('x',data.x);
    action.querySelector('.stage-spotlight').setAttribute('width',data.width);
    document.querySelector('#live-score').textContent = `${data.score}%`;
    document.querySelector('#live-position').innerHTML = `${data.position} <small>cm</small>`;
    document.querySelector('#live-orientation').innerHTML = `${data.orientation}<small>°</small>`;
    action.querySelectorAll('.alignment-step').forEach((b,i) => {b.classList.toggle('is-active',i === index);b.setAttribute('aria-pressed',String(i === index));});
    document.querySelectorAll('#results .chart-row, #results .endpoint-table tbody tr').forEach((row,i) => row.classList.toggle('stage-selected',i % 3 === index));
  }
  action.querySelectorAll('.alignment-step').forEach(b => b.addEventListener('click', () => {showStage(Number(b.dataset.stage)); elapsed = 0;}));
  setInterval(() => {
    if (action.classList.contains('motion-paused')) return;
    elapsed += 250;
    if (elapsed >= 3000) {elapsed = 0;showStage((stage + 1) % stages.length);}
  },250);
  showStage(0);
})();

// The four workflow stages represent the same source-frame timeline.
setInterval(() => {
  document.querySelectorAll('[data-sync="true"]').forEach(row => {
    if (row.dataset.visible !== 'true' || row.dataset.paused === 'true' || document.hidden) return;
    const videos = [...row.querySelectorAll('video')];
    const leader = videos[0];
    if (leader.paused || leader.readyState < 2) return;
    videos.slice(1).forEach(video => {
      if (video.readyState >= 2 && Math.abs(video.currentTime - leader.currentTime) > .15) video.currentTime = Math.min(leader.currentTime, video.duration);
    });
  });
}, 500);
