'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function TextTip({
  html,
  tipList,
  offset = 0,
}: {
  html: string;
  tipList: Record<
    number,
    {
      content: ReactNode; // ⭐ 关键：支持 JSX
      link?: string;
      top?: number;
    }
  >;
  offset?: number;
}) {
  const [htmlNow, setHtmlNow] = useState('');
  const [tipListNow, setTipListNow] = useState<typeof tipList>({});
  const timeSetRef = useRef<number | null>(null);

  useEffect(() => {
    if (!html) return;

    // ❗不要直接改 props
    let htmlTemp = html;

    Object.keys(tipList).forEach(num => {
      htmlTemp = htmlTemp.replace(
        `<sup>${num}</sup>`,
        `<sup id="id${num}"  class="hidden xl:inline-block">${Number(num) + offset}</sup>`
      );
    });

    setHtmlNow(htmlTemp);
    setTipListNow(tipList);

    if (timeSetRef.current) clearTimeout(timeSetRef.current);

    timeSetRef.current = window.setTimeout(() => {
      const tipListNew: any = {};
      Object.keys(tipList).forEach(k => {
        tipListNew[k] = { ...tipList[Number(k)] };
      });

      const rectDiv = document
        .getElementById('htmlDiv')
        ?.getBoundingClientRect();
      if (!rectDiv) return;

      const arr: number[] = [];

      Object.keys(tipListNew).forEach(num => {
        const rect = document
          .getElementById(`id${num}`)
          ?.getBoundingClientRect();
        if (!rect) return;

        const before = arr[arr.length - 1] || 0;

        let top =
          Math.floor(rect.top) -
          Math.floor(rectDiv.top) -
          Math.floor(before);

        if (before) {
          top = top > 0 ? top : 20;
        } else {
          top = top > 0 ? top : 0;
        }

        tipListNew[num].top = top;

        const rectTip = document
          .getElementById(`tip${num}`)
          ?.getBoundingClientRect();

        if (rectTip) {
          arr.push(
            Math.floor(rect.top) -
              Math.floor(rectDiv.top) +
              Math.floor(rectTip.height)
          );
        }
      });

      setTipListNow(tipListNew);
    }, 300);

    return () => {
      if (timeSetRef.current) clearTimeout(timeSetRef.current);
    };
  }, [html, tipList, offset]);

  return (
    <div className="relative flex justify-center px-6">
      <div className="w-full max-w-4xl">
        <div
          id="htmlDiv"
          className="overflow-hidden"
          dangerouslySetInnerHTML={{ __html: htmlNow }}
        />
      </div>
      
      {/* Tips sidebar - absolute positioned to not affect centering */}
      {Object.keys(tipListNow).length > 0 && (
        <div className="hidden xl:block absolute right-0 top-0 w-32 2xl:w-48 pl-3 text-xs">
          {Object.keys(tipListNow).map(num => (
            <div
              key={num}
              id={`tip${num}`}
              // className="overflow-hidden"
              style={{ marginTop: 6 }}
            >
              {tipListNow[Number(num)].link ? (
                <Link
                  className="animated-underline-gray "
                  href={tipListNow[Number(num)].link!}
                  target="_blank"
                >
                  <sup>{Number(num) + offset}</sup>{' '}
                  {tipListNow[Number(num)].content}
                </Link>
              ) : (
                <>
                  <sup>{Number(num) + offset}</sup>{' '}
                  {tipListNow[Number(num)].content}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
