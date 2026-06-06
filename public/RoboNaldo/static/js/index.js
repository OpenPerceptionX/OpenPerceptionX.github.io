// BibTeX copy
document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = "Copied";
      button.classList.add("copied");
      window.setTimeout(() => {
        button.textContent = "Copy";
        button.classList.remove("copied");
      }, 1600);
    } catch (error) {
      console.error("Unable to copy BibTeX", error);
    }
  });
});

// Video loading state
document.querySelectorAll(".hero-bg, .reel-frame video, .video-card video, .video-mini video").forEach((video) => {
  const frame = video.closest(".hero, .reel-frame, .video-card, .video-mini");
  if (!frame) return;
  const setReady = () => frame.classList.remove("is-video-loading");

  frame.classList.add("is-video-loading");
  video.addEventListener("loadeddata", setReady, { once: true });
  video.addEventListener("playing", setReady, { once: true });
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) setReady();
});

// Top navigation: active section + scroll progress
(function () {
  const topnav = document.querySelector(".topnav");
  const progressBar = document.querySelector(".top-progress-bar");
  if (!topnav) return;
  const links = Array.from(topnav.querySelectorAll("a[data-target]"));
  const sections = links
    .map((a) => document.getElementById(a.dataset.target))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((a) => a.classList.toggle("active", a.dataset.target === id));
  };

  const onScroll = () => {
    const probeY = window.innerHeight * 0.35;
    let currentId = sections[0]?.id;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= probeY) currentId = sec.id;
    }
    setActive(currentId);

    if (progressBar) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressBar.style.width = `${Math.max(0, Math.min(100, ratio * 100))}%`;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
