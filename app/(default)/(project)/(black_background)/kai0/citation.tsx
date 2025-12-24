'use client';

import { useRef, useState } from 'react';

export default function CitationBlock() {
  const blockRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!blockRef.current) return;

    try {
      await navigator.clipboard.writeText(blockRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="mt-6 flex flex-row gap-6 justify-center">
      <div />
      <div className="relative w-full max-w-4xl">
        {/* 右上角复制按钮 */}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-sm bg-transparent hover:bg-black/10 transition"
          title="Copy"
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h2" />
            </svg>
          )}
        </button>

        {/* Citation Code Block (wrap, no scroll) */}
        <pre
          ref={blockRef}
          className="
            w-full p-4 rounded-sm
            bg-black/10
            font-mono text-sm
            text-muted-foreground
            leading-relaxed

            whitespace-pre-wrap
            break-words
          "
        >
<code>{`@article{hkummlab2025kai0,
  title = {A Live-Stream Robotic Teamwork for Clothing Manipulation from Zero to Hero},
  author = {HKU MMLab},
  journal = {HKU MMLab Research Blog},
  year = {2025},
  note = {https://mmlab.hk/research/kai0},
}`}</code>
        </pre>
      </div>
      <div />
    </div>
  );
}
