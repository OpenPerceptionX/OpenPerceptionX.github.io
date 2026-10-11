/* ViRA: benchmark tables and accessible progressive enhancement. */
(() => {
  "use strict";
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const data = window.VIRA_BENCHMARKS;
  const gain = value => value == null ? "" : '<span class="gain" aria-label="Gain of ' + escapeHTML(value) + ' points">+' + escapeHTML(Number(value).toFixed(1)) + '</span>';
  const score = (value, delta) => '<span class="score-content"><span class="score-value">' + escapeHTML(value) + '</span>' + gain(delta) + '</span>';
  const captions = { navtest: "NAVSIM v2 navtest performance", navhard: "NAVSIM v2 navhard performance, combined EPDMS across stages", hugsim: "Zero-shot HUGSIM performance across four difficulties" };
  document.querySelectorAll("[data-table]").forEach(container => {
    const key = container.dataset.table;
    const benchmark = data?.[key];
    if (!benchmark) {
      container.innerHTML = '<p class="table-note">Full results are available in <a href="https://arxiv.org/html/2610.09695v1#S3">Tables 1–3 of the paper</a>.</p>';
      return;
    }
    const isHard = key === "navhard";
    const isHug = key === "hugsim";
    const colCount = 1 + benchmark.columns.length + (isHard ? 2 : 0);
    const columnClasses = ["col-method", ...(isHard ? ["col-stage"] : []), ...benchmark.columns.map((column, index) => (isHug ? index === 9 : !isHard && column.key.toLowerCase() === "epdms") ? "col-score" : "col-metric"), ...(isHard ? ["col-score"] : [])];
    const colgroup = '<colgroup>' + columnClasses.map(name => '<col class="' + name + '">').join("") + '</colgroup>';
    let header = "";
    if (isHug) {
      header = '<tr><th class="method" scope="col" rowspan="2">Method</th>' + ["Easy", "Medium", "Hard", "Extreme", "Overall"].map(label => '<th scope="colgroup" colspan="2" class="pair-end">' + label + ' ↑</th>').join("") + '</tr><tr>' + benchmark.columns.map((column, index) => '<th scope="col" title="' + escapeHTML(column.title) + '" class="' + (index % 2 ? "pair-end " : "") + (index === 9 ? "score" : "") + '">' + escapeHTML(column.label) + '</th>').join("") + '</tr>';
    } else {
      header = '<tr><th class="method" scope="col">Method</th>' + (isHard ? '<th class="stage" scope="col">Stage</th>' : "") + benchmark.columns.map(column => '<th scope="col" title="' + escapeHTML(column.title) + '" class="' + (column.key.toLowerCase() === "epdms" ? "score" : "") + '">' + escapeHTML(column.label) + ' ↑</th>').join("") + (isHard ? '<th scope="col" class="score" title="Combined Extended PDM Score">EPDMS ↑</th>' : "") + '</tr>';
    }
    let group = "";
    let body = "";
    benchmark.rows.forEach(row => {
      if (row.group !== group) {
        group = row.group;
        if (group !== "Reference") body += '<tr class="group"><th scope="colgroup" colspan="' + colCount + '">' + '<span class="group-label">' + escapeHTML(group) + '</span></th></tr>';
      }
      const firstStage = !isHard || row.stage === "S1";
      const lastStage = !isHard || row.stage === "S2";
      const className = (row.aligned ? "improved " : "") + (row.reference ? "reference " : "") + (!row.reference && !row.aligned && firstStage ? "method-start " : "") + (row.aligned && lastStage ? "method-end " : "") + (isHard && firstStage ? "stage-start" : "");
      body += '<tr class="' + className.trim() + '">';
      if (firstStage) {
        const span = isHard ? ' rowspan="2" scope="rowgroup"' : ' scope="row"';
        body += '<th class="method"' + span + '>' + escapeHTML(row.method).replace(/\*/g, "<sup>*</sup>") + '</th>';
      }
      if (isHard) body += '<td class="stage">' + escapeHTML(row.stage) + '</td>';
      body += row.values.map((value, index) => {
        const isScore = isHug ? index === 9 : !isHard && benchmark.columns[index].key.toLowerCase() === "epdms";
        const className = (isScore ? "score " : "") + (isHug && index % 2 ? "pair-end" : "");
        return '<td class="' + className.trim() + '">' + (isScore ? score(value, row.delta) : escapeHTML(value)) + '</td>';
      }).join("");
      if (isHard && firstStage) body += '<td class="score" rowspan="2">' + score(row.combinedScore, row.delta) + '</td>';
      body += '</tr>';
    });
    container.innerHTML = '<table class="results-table results-table--' + key + '"><caption>' + captions[key] + '</caption>' + colgroup + '<thead>' + header + '</thead><tbody>' + body + '</tbody></table>';
  });

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  function activateTab(tab, focus = false) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute("aria-controls"); });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", event => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      activateTab(tabs[next], true);
    });
  });

  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");
  function closeMenu() {
    mobileNav.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }
  menuButton?.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(expanded));
    menuButton.setAttribute("aria-label", expanded ? "Close navigation" : "Open navigation");
    mobileNav.hidden = !expanded;
  });
  mobileNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && mobileNav && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
  });
  window.matchMedia("(min-width: 521px)").addEventListener?.("change", event => { if (event.matches) closeMenu(); });

  const dialog = document.querySelector("#figure-dialog");
  let figureTrigger;
  document.querySelectorAll("[data-zoom]").forEach(button => {
    button.addEventListener("click", () => {
      const source = button.querySelector("img");
      if (!dialog || typeof dialog.showModal !== "function") { window.open(source.src, "_blank", "noopener"); return; }
      figureTrigger = button;
      dialog.querySelector("img").src = source.src;
      dialog.querySelector("img").alt = source.alt;
      dialog.querySelector("#dialog-title").textContent = button.dataset.zoom;
      dialog.querySelector("#dialog-source").href = source.src;
      dialog.showModal();
      document.body.classList.add("modal-open");
    });
  });
  if (dialog) {
    dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("modal-open");
      figureTrigger?.focus();
    });
  }

  // Freeze the currently displayed GIF frame on a canvas.
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.querySelectorAll(".demo-toggle").forEach(button => {
    const image = document.getElementById(button.getAttribute("aria-controls"));
    const canvas = image.parentElement.querySelector("canvas");
    let pendingPause = reducedMotion.matches;
    button.setAttribute("aria-label", "Pause " + button.dataset.name);
    button.disabled = !image.complete || !image.naturalWidth;
    function setPlaying(playing) {
      if (!image.complete || !image.naturalWidth) { pendingPause = !playing; return; }
      if (!playing) {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        canvas.getContext("2d").drawImage(image, 0, 0);
      }
      image.hidden = !playing;
      canvas.hidden = playing;
      button.setAttribute("aria-pressed", String(playing));
      button.textContent = playing ? "Ⅱ Pause" : "▷ Play";
      button.setAttribute("aria-label", (playing ? "Pause " : "Play ") + button.dataset.name);
    }
    image.addEventListener("load", () => { button.disabled = false; setPlaying(!pendingPause); });
    image.addEventListener("error", () => { button.disabled = true; });
    if (image.complete && image.naturalWidth) setPlaying(!pendingPause);
    button.addEventListener("click", () => setPlaying(button.getAttribute("aria-pressed") !== "true"));
    reducedMotion.addEventListener?.("change", event => { if (event.matches) { pendingPause = true; setPlaying(false); } });
  });

  const copyButton = document.querySelector("#copy-citation");
  const citation = document.querySelector("#bibtex");
  copyButton?.addEventListener("click", async () => {
    const label = copyButton.querySelector("span");
    const status = document.querySelector("#copy-status");
    try {
      await Promise.race([
        navigator.clipboard.writeText(citation.textContent),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Clipboard unavailable")), 1500))
      ]);
      label.textContent = "Copied ✓";
      status.textContent = "BibTeX citation copied to clipboard.";
      setTimeout(() => { label.textContent = "Copy citation"; }, 2200);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Citation selected. Press Ctrl+C or Command+C to copy.";
      label.textContent = "Selected · Ctrl/Cmd+C";
    }
  });

  const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach(link => {
          if (link.getAttribute("href") === "#" + entry.target.id) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    sectionLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section) observer.observe(section);
    });
  }
})();
