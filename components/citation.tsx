"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  useId,
  useMemo,
  type ReactNode,
} from "react";
import Link from "next/link";

type FootnoteData = {
  id: number;
  content: ReactNode;
  link?: string;
  element: HTMLElement;
};

type FootnoteContextType = {
  register: (id: number, data: Omit<FootnoteData, "id">) => void;
  unregister: (id: number) => void;
  uniqueScopeId: string;
};

const FootnoteContext = createContext<FootnoteContextType | null>(null);

export function CitationNote({
                           id,
                           children,
                           link,
                         }: {
  id: number;
  children: ReactNode;
  link?: string;
}) {
  const context = useContext(FootnoteContext);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (context?.register && ref.current) {
      context.register(id, { content: children, link, element: ref.current });
    }
    return () => {
      if (context?.unregister) context.unregister(id);
    };
  }, [id, children, link, context]);

  return (
      <sup
          ref={ref}
          data-footnote-id={`${context?.uniqueScopeId}-${id}`}
          className="footnote-ref hidden xl:inline-block cursor-pointer text-muted-foreground hover:text-foreground mx-0.5"
      >
        {id}
      </sup>
  );
}

export function CitationLayout({
                                        children,
                                        offset = 0,
                                      }: {
  children: ReactNode;
  offset?: number;
}) {
  const [footnotes, setFootnotes] = useState<Map<number, FootnoteData>>(new Map());
  const [tipPositions, setTipPositions] = useState<Record<number, number>>({});

  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const uniqueScopeId = useId();

  const register = useCallback((id: number, data: Omit<FootnoteData, "id">) => {
    setFootnotes((prev) => {
      const existing = prev.get(id);
      if (
          existing &&
          existing.element === data.element &&
          existing.link === data.link &&
          existing.content === data.content
      ) {
        return prev;
      }

      const newMap = new Map(prev);
      newMap.set(id, { id, ...data });
      return newMap;
    });
  }, []);

  const unregister = useCallback((id: number) => {
    setFootnotes((prev) => {
      if (!prev.has(id)) return prev;
      const newMap = new Map(prev);
      newMap.delete(id);
      return newMap;
    });
  }, []);

  const contextValue = useMemo(() => ({
    register,
    unregister,
    uniqueScopeId
  }), [register, unregister, uniqueScopeId]);

  const positionFootnotes = useCallback(() => {
    const content = contentRef.current;
    if (!content || footnotes.size === 0) return;

    const newPositions: Record<number, number> = {};
    const occupiedRanges: { top: number; bottom: number }[] = [];
    const minGap = 10;

    const sortedNotes = Array.from(footnotes.values()).sort((a, b) => a.id - b.id);

    sortedNotes.forEach((note) => {
      const marker = note.element;
      const tipElement = document.getElementById(`tip-sidebar-${uniqueScopeId}-${note.id}`);

      if (!marker || !tipElement) return;

      const markerRect = marker.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const tipRect = tipElement.getBoundingClientRect();

      let top = markerRect.top - contentRect.top;

      let adjusted = true;
      while (adjusted) {
        adjusted = false;
        for (const range of occupiedRanges) {
          if (
              top < range.bottom + minGap &&
              top + tipRect.height + minGap > range.top
          ) {
            top = range.bottom + minGap;
            adjusted = true;
            break;
          }
        }
      }

      newPositions[note.id] = top;
      occupiedRanges.push({
        top: top,
        bottom: top + tipRect.height,
      });
    });

    setTipPositions(newPositions);
  }, [footnotes, uniqueScopeId]);

  useEffect(() => {
    const handleUpdate = () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(positionFootnotes, 100);
    };

    handleUpdate();

    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate, true);

    return () => {
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate, true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [footnotes, positionFootnotes]);

  const footnotesList = Array.from(footnotes.values()).sort((a, b) => a.id - b.id);

  return (
      <FootnoteContext.Provider value={contextValue}>
        <div className="w-full px-6 relative">
          <div className="mx-auto w-full max-w-4xl relative lg:pr-2">

            <div ref={contentRef} className="w-full">
              {children}
            </div>

            {footnotesList.length > 0 && (
                <div
                    className="hidden xl:block absolute top-0 w-16 h-full pointer-events-none pl-8"
                    style={{ left: "100%" }}
                >
                  {footnotesList.map((note) => {
                    const top = tipPositions[note.id] ?? 0;
                    const isPositioned = tipPositions[note.id] !== undefined;

                    return (
                        <div
                            key={note.id}
                            id={`tip-sidebar-${uniqueScopeId}-${note.id}`}
                            className="absolute w-full text-xs leading-relaxed transition-all duration-300 ease-out pointer-events-auto"
                            style={{
                              top: `${top}px`,
                              opacity: isPositioned ? 1 : 0,
                            }}
                        >
                          {note.link ? (
                              <Link
                                  className="animated-underline-gray text-wrap text-muted-foreground hover:text-foreground pb-0 block"
                                  href={note.link}
                                  target="_blank"
                              >
                                <sup className="mr-1">{note.id + offset}</sup>
                                <span>{note.content}</span>
                              </Link>
                          ) : (
                              <span className="text-muted-foreground block">
                        <sup className="mr-1">{note.id + offset}</sup>
                        <span>{note.content}</span>
                      </span>
                          )}
                        </div>
                    );
                  })}
                </div>
            )}
          </div>
        </div>
      </FootnoteContext.Provider>
  );
}