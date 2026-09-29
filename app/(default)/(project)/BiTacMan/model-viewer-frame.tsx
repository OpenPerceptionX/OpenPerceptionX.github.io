"use client";

import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

const shellClass =
  "relative mx-auto w-full max-w-[320px] md:max-w-[480px] lg:max-w-[640px] md:w-[480px] lg:w-[640px] h-[240px] md:h-[360px] lg:h-[480px] overflow-hidden rounded-lg border-2 md:border-4 border-white bg-black transition-colors duration-300 hover:border-[#174BE5]";

export function ModelViewerFrame({
  iframeSrc,
  posterSrc,
  title,
}: {
  iframeSrc: string;
  posterSrc: string;
  title: string;
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const handleIframeLoad = useCallback(() => {
    setIframeLoaded(true);
  }, []);

  return (
    <div className={shellClass}>
      {!iframeLoaded && !posterFailed && (
        <img
          src={posterSrc}
          alt=""
          decoding="async"
          onError={() => setPosterFailed(true)}
          className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover"
        />
      )}
      {!iframeLoaded && posterFailed && (
        <div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-zinc-950 text-[11px] sm:text-xs text-white/55"
          aria-live="polite"
        >
          Loading 3D viewer…
        </div>
      )}
      <iframe
        src={iframeSrc}
        title={title}
        onLoad={handleIframeLoad}
        className={cn(
          "absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500",
          iframeLoaded && "opacity-100",
        )}
      />
    </div>
  );
}
