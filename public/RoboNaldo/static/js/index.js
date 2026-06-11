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

// Lazy-load non-primary videos so in-app browsers do not open every stream at once.
(function () {
  const heroVideos = Array.from(document.querySelectorAll("video[data-hero-video]"));
  const videos = Array.from(document.querySelectorAll("video[data-lazy-video]"));
  const primaryDeferredVideos = Array.from(document.querySelectorAll("video[data-defer-inapp-video]"));
  if (!heroVideos.length && !videos.length && !primaryDeferredVideos.length) return;
  const ua = navigator.userAgent || "";
  const isIOS = /iP(?:hone|ad|od)/i.test(ua);
  const isKnownIOSBrowser = /Version\/[\d.]+.*Safari|CriOS|FxiOS|EdgiOS/i.test(ua);
  const isIOSWebView = isIOS && !isKnownIOSBrowser;
  const isConstrainedBrowser = isIOSWebView || /Twitter|MicroMessenger|FBAN|FBAV|Instagram|Line|LinkedInApp|Feishu|Lark|Bytedance|Aweme|MQQBrowser|QQ\//i.test(ua);

  const hydrate = (video) => {
    if (video.dataset.loaded === "true") return;

    video.querySelectorAll("source[data-src]").forEach((source) => {
      source.src = source.dataset.src;
      source.removeAttribute("data-src");
    });

    video.dataset.loaded = "true";
    video.load();
  };

  const tryPlay = (video, force = false) => {
    if (!force && !video.autoplay) return;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  };

  const addTapToPlayButton = (video, onActivate) => {
    const parent = video.parentElement;
    if (!parent || parent.querySelector(".video-play-button")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "video-play-button";
    button.setAttribute("aria-label", "Play video");
    button.title = "Play video";

    const activate = (event) => {
      event.preventDefault();
      event.stopPropagation();
      button.classList.add("is-loading");
      onActivate();
    };

    button.addEventListener("click", activate);
    video.addEventListener("playing", () => button.remove(), { once: true });
    video.addEventListener("error", () => button.classList.remove("is-loading"));
    parent.appendChild(button);
  };

  if (isConstrainedBrowser) {
    heroVideos.forEach((video) => {
      video.autoplay = false;
    });

    [...primaryDeferredVideos, ...videos].forEach((video) => {
      video.autoplay = false;
      video.controls = true;
      video.dataset.tapToLoad = "true";
      const loadAndPlay = () => {
        hydrate(video);
        tryPlay(video, true);
      };

      addTapToPlayButton(video, loadAndPlay);
      video.addEventListener("click", loadAndPlay, { once: true });
    });
    return;
  }

  heroVideos.forEach((video) => {
    hydrate(video);
    tryPlay(video);
  });

  primaryDeferredVideos.forEach((video) => {
    hydrate(video);
    tryPlay(video);
  });

  if (!("IntersectionObserver" in window)) {
    videos.slice(0, 4).forEach((video) => {
      hydrate(video);
      tryPlay(video);
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          hydrate(video);
          tryPlay(video);
        } else if (video.dataset.loaded === "true" && !video.paused) {
          video.pause();
        }
      });
    },
    {
      rootMargin: "600px 0px",
      threshold: 0.01,
    }
  );

  videos.forEach((video) => observer.observe(video));
})();
