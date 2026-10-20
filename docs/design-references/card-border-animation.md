# Border morph animation for future cards

Preserved at the user's request after removing the homepage trial. This is a
reference, not an active site component or a requirement for all cards.

The transparent outline starts with a full-height diagonal right edge before
the arrow, then expands to a rectangle over 300ms on hover or keyboard focus.
The arrow nudges 6px right and returns over 400ms. Text stays still, with space
reserved for the diagonal beside wrapped titles. Keep the outline outside
`FadeIn`. Touch devices and browsers without CSS path morphing use a rectangle;
reduced motion also disables the arrow animation.

The original implementation is in commit
`43d5cc62b2c528fc7e2ff37a408bfb8b68152f7f`, in
`app/[locale]/(default)/home-hero.tsx` and `featured-research.module.css`.
The complete relevant markup and CSS are retained below. For a future card,
copy the CSS into a scoped module and import it as `researchStyles`; adapt the
content, link, sizing, and diagonal clearance to that card. The markup uses
existing `Link`, `FadeIn`, `ArrowRight`, and `hero` data imports.

Browser acceptance was not completed for the trial. Before reuse, check
long titles, outline joins, hover/focus, Enter navigation, touch, and reduced
motion at desktop, tablet, and mobile widths.

## Markup

```tsx
            {/* Featured research */}
            <div className="px-6 py-12 md:py-24 select-none">
                <div className={`${researchStyles.frame} mx-auto w-full max-w-6xl text-t1`}>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 100 100" preserveAspectRatio="none" className={researchStyles.edge}>
                    <path className={researchStyles.edgePath} d="M0 0 L100 0 L100 100 L0 100" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                </svg>
                <FadeIn>
                <Link
                    href={hero.articleHref}
                    target="_self"
                    className={`${researchStyles.card} group flex w-full items-end justify-between gap-6 p-6 text-o-blue no-underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-o-blue`}
                >
                    <span className={`${researchStyles.copy} flex min-w-0 flex-1 flex-col gap-6`}>
                        <span className="text-sm leading-relaxed text-muted-foreground">{hero.articleEyebrow}</span>
                        <span className="text-t1 font-normal"><span className="link-underline text-[0.8em]">{hero.articleLabel}</span></span>
                    </span>
                    <span aria-hidden="true" className="block shrink-0 text-t1">
                        <ArrowRight className={`${researchStyles.arrow} block size-[1lh] select-none`} />
                    </span>
                </Link>
                </FadeIn>
                </div>
            </div>
```

## CSS module

```css
.frame {
    --slant-size: calc(1lh + 3rem);
    position: relative;
    padding: 1px;
}

/* The fixed outline ends where the full-height, unfilled right edge begins. */
.frame::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid color-mix(in srgb, var(--o-gray) 30%, transparent);
    clip-path: inset(0 var(--slant-size) 0 0);
    pointer-events: none;
}

.edge {
    position: absolute;
    right: 0.5px;
    top: 0.5px;
    width: calc(var(--slant-size) - 0.5px);
    height: calc(100% - 1px);
    overflow: visible;
    fill: none;
    stroke: color-mix(in srgb, var(--o-gray) 30%, transparent);
    pointer-events: none;
}

.edgePath {
    transition: d 300ms ease-in-out;
}

/* Reserve space for the diagonal even when the title wraps. */
.copy {
    max-width: calc(100% - var(--slant-size));
}

@media (min-width: 768px) {
    .frame {
        --slant-size: calc(1lh + 6rem);
    }
}

.card:focus-visible .arrow {
    animation: arrowNudge 400ms ease-in-out;
}

/* Unsupported path morphing and touch devices retain the rectangular outline. */
@supports (d: path("M0 0 L1 1")) {
    @media (hover: hover) and (prefers-reduced-motion: no-preference) {
        .edgePath {
            d: path("M0 0 L50 0 L0 100 L0 100");
        }

        .frame:hover .edgePath,
        .frame:has(.card:focus-visible) .edgePath {
            d: path("M0 0 L100 0 L100 100 L0 100");
        }
    }
}

@media (hover: hover) {
    .card:hover .arrow {
        animation: arrowNudge 400ms ease-in-out;
    }
}

@keyframes arrowNudge {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(6px); }
}

@media (prefers-reduced-motion: reduce) {
    .edgePath {
        transition: none;
    }

    .card:is(:hover, :focus-visible) .arrow {
        animation: none;
    }
}
```
