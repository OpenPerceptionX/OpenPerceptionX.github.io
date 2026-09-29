"use client";

import { useEffect, useRef } from "react";

/** Original designer document, served unchanged. */
const SRC = "/TAMEn-gripper/gripper_auto_designer_english_v33(1)(1)(1)(1).html";

/**
 * Width at which the designer page reaches its own 1480px cap
 * (`min(1480px, calc(100% - 24px))`). Layout is measured at this size,
 * then the whole iframe is scaled. The HTML file is not modified.
 */
const DESIGN_WIDTH = 1504;

export function GripperDesignerFrame() {
  const shellRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const shell = shellRef.current;
    const iframe = iframeRef.current;
    if (!shell || !iframe) return;

    let docObserver: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let outerObserver: ResizeObserver | null = null;
    let frame = 0;
    let lastKey = "";

    const fit = () => {
      const doc = iframe.contentDocument;
      const host = shell.parentElement;
      if (!doc?.documentElement || !doc.body || !host) return;

      const available = host.clientWidth;
      const video = document.querySelector("#methodology video");
      const target =
        video instanceof HTMLElement
          ? video.getBoundingClientRect().width
          : available;
      if (available <= 0 || target <= 0) return;

      const layoutWidth = Math.max(1, Math.min(available, DESIGN_WIDTH));
      const box = getComputedStyle(shell);
      const borderX =
        (parseFloat(box.borderLeftWidth) || 0) +
        (parseFloat(box.borderRightWidth) || 0);
      const borderY =
        (parseFloat(box.borderTopWidth) || 0) +
        (parseFloat(box.borderBottomWidth) || 0);
      const innerTarget = Math.max(1, target - borderX);
      const scale = Math.min(1, innerTarget / layoutWidth);

      const widthPx = `${layoutWidth}px`;
      if (iframe.style.width !== widthPx) iframe.style.width = widthPx;

      const contentHeight = Math.ceil(
        Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight),
      );
      if (contentHeight <= 0) return;

      const key = `${layoutWidth}:${contentHeight}:${scale.toFixed(4)}`;
      if (key === lastKey) return;
      lastKey = key;

      iframe.style.height = `${contentHeight}px`;
      iframe.style.transform = `scale(${scale})`;
      shell.style.width = `${layoutWidth * scale + borderX}px`;
      shell.style.height = `${contentHeight * scale + borderY}px`;
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };

    const bind = () => {
      const doc = iframe.contentDocument;
      if (!doc?.documentElement || !doc.body) return;
      schedule();
      docObserver?.disconnect();
      mutationObserver?.disconnect();
      docObserver = new ResizeObserver(schedule);
      docObserver.observe(doc.documentElement);
      docObserver.observe(doc.body);
      mutationObserver = new MutationObserver(schedule);
      mutationObserver.observe(doc.body, {
        subtree: true,
        childList: true,
        attributes: true,
      });
    };

    outerObserver = new ResizeObserver(schedule);
    if (shell.parentElement) outerObserver.observe(shell.parentElement);
    const video = document.querySelector("#methodology video");
    if (video instanceof HTMLElement) outerObserver.observe(video);

    iframe.addEventListener("load", bind);
    bind();

    return () => {
      cancelAnimationFrame(frame);
      iframe.removeEventListener("load", bind);
      docObserver?.disconnect();
      mutationObserver?.disconnect();
      outerObserver?.disconnect();
    };
  }, []);

  return (
    <div
      ref={shellRef}
      className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-lg border border-white/20 bg-black"
    >
      <iframe
        ref={iframeRef}
        src={SRC}
        title="Adaptation to Heterogeneous Grippers"
        className="absolute left-0 top-0 block max-w-none border-0 bg-[#f4f6f9]"
        style={{ transformOrigin: "top left", height: "80vh" }}
      />
    </div>
  );
}
