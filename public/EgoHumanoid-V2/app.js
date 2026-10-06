"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const announce = (message) => { $("#announcement").textContent = message; };
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const copyCitationButton = $("#copy-citation");
let citationFeedbackTimer;
copyCitationButton.addEventListener("click", async () => {
  clearTimeout(citationFeedbackTimer);
  const code = $("#citation-code");
  const feedback = $("#citation-feedback");
  copyCitationButton.disabled = true;
  feedback.textContent = "";
  try {
    await navigator.clipboard.writeText(code.textContent.trim());
    copyCitationButton.textContent = "Copied!";
    copyCitationButton.classList.add("copied");
    feedback.textContent = "BibTeX citation copied to clipboard.";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyCitationButton.textContent = "Copy";
    copyCitationButton.classList.remove("copied");
    feedback.textContent = "Automatic copying is unavailable. The citation is selected; press Ctrl+C or ⌘C, or use your device’s Copy menu.";
  } finally {
    copyCitationButton.disabled = false;
  }
  if (copyCitationButton.classList.contains("copied")) {
    citationFeedbackTimer = setTimeout(() => {
      copyCitationButton.textContent = "Copy";
      copyCitationButton.classList.remove("copied");
      feedback.textContent = "";
    }, 2000);
  }
});
const heroVideos = $$("video[data-hero]");
let previewsPaused = reducedMotion.matches || Boolean(navigator.connection?.saveData);

function nearViewport(video) {
  const rect = video.getBoundingClientRect();
  return rect.bottom > -240 && rect.top < innerHeight + 240;
}

function loadVideo(video) {
  if (!video.getAttribute("src")) {
    video.src = video.dataset.src;
    video.preload = "metadata";
    video.load();
  }
}

function clearFeedback(video) {
  const frame = video.closest(".video-frame");
  frame?.querySelector(".media-error")?.remove();
  frame?.querySelector(".media-status")?.remove();
}

const videoLoader = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) loadVideo(target);
  });
}, { rootMargin: "200px 0px" });

$$('.video-frame video').forEach((video) => {
  videoLoader.observe(video);
  let waitingTimer;
  video.addEventListener("waiting", () => {
    clearTimeout(waitingTimer);
    waitingTimer = setTimeout(() => {
      const frame = video.closest(".video-frame");
      if (video.paused || video.error || frame.querySelector(".media-status")) return;
      const status = Object.assign(document.createElement("span"), { className: "media-status", textContent: "Loading video…" });
      status.setAttribute("role", "status");
      frame.append(status);
    }, 800);
  });
  ["playing", "canplay", "emptied", "pause"].forEach((event) => video.addEventListener(event, () => {
    clearTimeout(waitingTimer);
    video.closest(".video-frame").querySelector(".media-status")?.remove();
  }));
  video.addEventListener("error", () => {
    if (!video.getAttribute("src") || !video.error || video.error.code === 1) return;
    clearFeedback(video);
    const error = Object.assign(document.createElement("div"), { className: "media-error" });
    const message = Object.assign(document.createElement("p"), { textContent: "This video could not load." });
    const retry = Object.assign(document.createElement("button"), { textContent: "Retry video", type: "button" });
    retry.addEventListener("click", () => { clearFeedback(video); video.load(); video.play().catch(() => {}); });
    const link = Object.assign(document.createElement("a"), { href: video.dataset.src, textContent: "Open MP4", target: "_blank", rel: "noopener" });
    error.append(message, retry, link);
    video.closest(".video-frame").append(error);
  });
});

function updatePreviewButton() {
  const button = $("#preview-toggle");
  button.setAttribute("aria-pressed", String(previewsPaused));
  button.querySelector(".play-icon").textContent = previewsPaused ? "▶" : "Ⅱ";
  button.lastElementChild.textContent = previewsPaused ? "Play previews" : "Pause previews";
}

function playPreview(video) {
  if (previewsPaused || document.hidden || !nearViewport(video)) return;
  loadVideo(video);
  video.play().catch(() => {
    previewsPaused = true;
    heroVideos.forEach((preview) => preview.pause());
    updatePreviewButton();
  });
}

const previewObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) playPreview(target);
    else target.pause();
  });
}, { threshold: .15 });
heroVideos.forEach((video) => previewObserver.observe(video));
updatePreviewButton();
$("#preview-toggle").addEventListener("click", () => {
  previewsPaused = !previewsPaused;
  heroVideos.forEach((video) => previewsPaused ? video.pause() : playPreview(video));
  updatePreviewButton();
});
reducedMotion.addEventListener("change", (event) => {
  if (event.matches) {
    previewsPaused = true;
    heroVideos.forEach((video) => video.pause());
    updatePreviewButton();
  }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) $$("video").forEach((video) => video.pause());
  else heroVideos.forEach(playPreview);
});

const navToggle = $(".nav-toggle");
function closeNavigation() {
  navToggle.setAttribute("aria-expanded", "false");
  $("#section-links").classList.remove("is-open");
}
navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(open));
  $("#section-links").classList.toggle("is-open", open);
});
$(".section-nav").addEventListener("keydown", (event) => {
  if (event.key === "Escape") { closeNavigation(); navToggle.focus(); }
});
$$('.section-links a').forEach((link) => link.addEventListener("click", closeNavigation));
document.addEventListener("click", (event) => {
  if (!event.target.closest(".section-nav")) closeNavigation();
});
window.matchMedia("(min-width: 75rem)").addEventListener("change", closeNavigation);

const sections = $$('main > section[id]');
const sectionLinks = $$(".section-links a");
let scrollUpdatePending = false;
function updateScrollPosition() {
  const total = document.documentElement.scrollHeight - innerHeight;
  const progress = total > 0 ? Math.min(1, Math.max(0, scrollY / total)) : 0;
  $(".reading-progress").style.transform = `scaleX(${progress})`;
  $(".masthead").classList.toggle("is-scrolled", scrollY > 40);
  $(".section-nav").classList.toggle("on-hero", $("#introduction").getBoundingClientRect().bottom > innerHeight * .5);
  let current = sections[0].id;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= innerHeight * .33) current = section.id;
  });
  if (progress > .99) current = sections.at(-1).id;
  current = ({ scaling: "demonstrations" })[current] || current;
  sectionLinks.forEach((link) => {
    if (link.hash === `#${current}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollUpdatePending = false;
}
function scheduleScrollUpdate() {
  if (scrollUpdatePending) return;
  scrollUpdatePending = true;
  requestAnimationFrame(updateScrollPosition);
}
window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
window.addEventListener("resize", scheduleScrollUpdate, { passive: true });
$$('details').forEach((details) => details.addEventListener("toggle", scheduleScrollUpdate));
updateScrollPosition();

// The source image stays directly accessible when JavaScript is unavailable.
const figureDialog = $(".figure-dialog");
let figureOpener = null;
$$('[data-figure]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    figureOpener = link;
    const source = link.querySelector("img");
    $("#figure-dialog-image").src = link.href;
    $("#figure-fullsize").href = link.href;
    $("#figure-dialog-image").alt = source.alt;
    $("#figure-dialog-caption").textContent = link.closest("figure").querySelector("h3")?.textContent || "EgoHumanoid-V2 · Research figure";
    figureDialog.showModal();
  });
});
$("#close-figure").addEventListener("click", () => figureDialog.close());
figureDialog.addEventListener("click", (event) => {
  if (event.target !== figureDialog) return;
  const rect = figureDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) figureDialog.close();
});
figureDialog.addEventListener("close", () => figureOpener?.focus({ preventScroll: true }));

// Keep a real frame visible until the first decoded video frame is ready.
$$('video').forEach(video => {
  const thumb = video.parentElement.querySelector('.video-thumbnail');
  const pending = () => {
    if (thumb) thumb.src = video.poster;
    video.classList.add('poster-pending');
    video.parentElement.classList.remove('video-ready');
  };
  const ready = () => { if (video.readyState >= 2) {video.classList.remove('poster-pending');video.parentElement.classList.add('video-ready');} };
  ['loadstart','emptied','error'].forEach(event => video.addEventListener(event,pending));
  ['loadeddata','canplay','playing','seeked'].forEach(event => video.addEventListener(event,ready));
  new MutationObserver(pending).observe(video,{attributes:true,attributeFilter:['poster']});
  ready();
});
