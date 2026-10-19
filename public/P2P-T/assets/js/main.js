const navLinks = [...document.querySelectorAll('.nav a')];
const sections = navLinks.map(link => document.querySelector(link.hash)).filter(Boolean);
const progress = document.querySelector('#progress');
const topbar = document.querySelector('.topbar');

function updatePagePosition() {
  const range = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${range > 0 ? window.scrollY / range * 100 : 0}%`;
  topbar?.classList.toggle('is-scrolled', window.scrollY > 24);
  const current = sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1);
  navLinks.forEach(link => {
    const active = current && link.hash === `#${current.id}`;
    link.classList.toggle('active', Boolean(active));
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => { updatePagePosition(); scheduled = false; });
}, {passive: true});
window.addEventListener('resize', updatePagePosition);
window.addEventListener('load', updatePagePosition);
updatePagePosition();

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const citation = document.querySelector(button.dataset.copy);
    const text = citation.textContent.trim();
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.top = '-9999px';
      document.body.append(textarea);
      textarea.select();
      try { copied = document.execCommand('copy'); } catch { /* Manual selection below. */ }
      textarea.remove();
      button.focus();
    }
    if (!copied) {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
    button.textContent = copied ? 'Copied' : 'Select and copy';
    window.setTimeout(() => { button.textContent = 'Copy'; }, 1800);
  });
});

document.querySelectorAll('[data-task-player]').forEach(player => {
  const video = player.querySelector('video');
  const source = video.querySelector('source');
  const buttons = [...player.querySelectorAll('[data-video]')];
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(item => item.setAttribute('aria-selected', String(item === button)));
      video.pause();
      source.src = button.dataset.video;
      video.poster = button.dataset.poster;
      video.setAttribute('aria-label', `${button.dataset.label} ZIP demonstration`);
      video.load();
      video.play().catch(() => {});
    });
  });
});

document.querySelectorAll('[data-protocol-videos]').forEach(group => {
  const videos = [...group.querySelectorAll('video')];
  if (!videos.length || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      videos.forEach(video => { video.currentTime = 0; });
      videos.forEach(video => { video.play().catch(() => {}); });
    } else {
      videos.forEach(video => video.pause());
    }
  }, { threshold: 0.35 });
  observer.observe(group);
});

document.querySelectorAll('[data-pipeline-animation]').forEach(animation => {
  const arts = [...animation.querySelectorAll('[data-pipeline-art]')];
  const buttons = [...animation.querySelectorAll('[data-pipeline-button]')];
  const step = animation.querySelector('[data-pipeline-step]');
  const title = animation.querySelector('[data-pipeline-title]');
  const description = animation.querySelector('[data-pipeline-description]');
  const model = animation.querySelector('[data-pipeline-model]');
  const progress = animation.querySelector('.pipeline-progress span');
  const stages = [
    { title: 'Current and target frames', description: 'Raw RGB observations provide the current tool state and the target frame for the demonstration.', model: 'Input sequence' },
    { title: 'Tool mask extraction', description: 'Grounded-SAM isolates the task-relevant tool from the surrounding scene before geometry is reconstructed.', model: 'Grounded-SAM · SAM 3D' },
    { title: 'Tool mesh reconstruction', description: 'SAM 3D lifts the mask into an instance-specific mesh that FoundationPose can align to each frame.', model: 'SAM 3D · FoundationPose' },
    { title: '6D pose tracking', description: 'FoundationPose tracks the tool through the sequence and produces a continuous SE(3) trajectory for learning.', model: '6D homogeneous pose' },
  ];
  let active = 0;
  let timer;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const render = index => {
    active = index;
    arts.forEach(art => art.classList.toggle('is-active', art.dataset.pipelineArt === String(index)));
    buttons.forEach(button => {
      const isActive = button.dataset.pipelineButton === String(index);
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });
    const current = stages[index];
    step.textContent = `0${index + 1} / 04`;
    title.textContent = current.title;
    description.textContent = current.description;
    model.textContent = current.model;
    progress.style.transform = `scaleX(${(index + 1) / stages.length})`;
  };
  const schedule = () => {
    window.clearTimeout(timer);
    if (reduced) return;
    timer = window.setTimeout(() => { render((active + 1) % stages.length); schedule(); }, 3600);
  };
  buttons.forEach(button => button.addEventListener('click', () => { render(Number(button.dataset.pipelineButton)); schedule(); }));
  render(0);
  schedule();
});

document.querySelectorAll('[data-workflow-animation]').forEach(board => {
  const lanes = [...board.querySelectorAll('[data-workflow-lane]')];
  const status = board.querySelector('[data-workflow-status]');
  const progress = board.querySelector('.workflow-progress span');
  const labels = ['Human demonstrations', 'Automated preprocessing', 'Object-centric world model', 'Pose-aware control'];
  let active = 0;
  let timer;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const render = index => {
    active = index;
    lanes.forEach(lane => lane.classList.toggle('is-active', Number(lane.dataset.workflowLane) === index));
    status.textContent = `${labels[index]} → next stage`;
    progress.style.transform = `scaleX(${(index + 1) / lanes.length})`;
  };
  const schedule = () => {
    window.clearTimeout(timer);
    if (reduced) return;
    timer = window.setTimeout(() => { render((active + 1) % lanes.length); schedule(); }, 2800);
  };
  render(0);
  schedule();
});
