"use client";

import { useState, useEffect, useRef } from "react";

interface StageInfo {
  id: string;
  name: string;
  number: number;
}

const stages: StageInfo[] = [
  { id: "mode_consistency", name: "Mode Consistency", number: 1 },
  { id: "model_arithmetic", name: "Model Arithmetic", number: 2 },
  { id: "stage_advantage", name: "Stage Advantage", number: 3 },
];

export function ProgressBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStage, setCurrentStage] = useState<StageInfo>(stages[0]);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastProgressRef = useRef(0);
  const lastDisplayedProgress = useRef(0);

  useEffect(() => {
    const updateProgress = () => {
      const methodologyEl = document.getElementById("methodology");
      const citationEl = document.getElementById("citation");

      if (methodologyEl && citationEl) {
        const methodologyRect = methodologyEl.getBoundingClientRect();
        const citationRect = citationEl.getBoundingClientRect();

        const shouldShow = methodologyRect.top < 150 && citationRect.top > 200;
        setIsVisible(shouldShow);

        if (shouldShow) {
          const startY = methodologyEl.offsetTop;
          const endY = citationEl.offsetTop;
          const currentScroll = window.scrollY + 150;

          const totalDistance = endY - startY;
          const scrolledDistance = currentScroll - startY;
          const rawProgress = Math.max(0, Math.min(100, (scrolledDistance / totalDistance) * 100));

          const smoothingFactor = 0.12;
          const smoothedProgress = lastProgressRef.current + (rawProgress - lastProgressRef.current) * smoothingFactor;
          lastProgressRef.current = smoothedProgress;

          if (progressRef.current) {
            progressRef.current.style.width = `${smoothedProgress}%`;
          }

          const displayProgress = Math.round(smoothedProgress);
          if (percentRef.current && displayProgress !== lastDisplayedProgress.current) {
            percentRef.current.textContent = `${displayProgress}%`;
            lastDisplayedProgress.current = displayProgress;
          }

          const viewportMiddle = window.scrollY + window.innerHeight * 0.3;

          for (let i = stages.length - 1; i >= 0; i--) {
            const stageEl = document.getElementById(stages[i].id);
            if (stageEl && stageEl.offsetTop <= viewportMiddle) {
              if (currentStage.number !== stages[i].number) {
                setCurrentStage(stages[i]);
              }
              break;
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(updateProgress);
    };

    const timeoutId = setTimeout(() => {
      rafRef.current = requestAnimationFrame(updateProgress);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [currentStage.number]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{ willChange: "opacity, transform" }}
    >
      {/* Liquid Glass Container */}
      <div 
        className="w-full max-w-xl mx-4 mt-3 rounded-[24px] relative"
        style={{
          // Outer glow - soft ambient light
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.1),
            0 0 40px rgba(120,120,140,0.15),
            0 8px 32px rgba(0,0,0,0.4),
            0 2px 8px rgba(0,0,0,0.3)
          `
        }}
      >
        {/* Glass refraction layer - top highlight */}
        <div 
          className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(255,255,255,0.25) 0%,
                rgba(255,255,255,0.08) 8%,
                rgba(255,255,255,0.02) 20%,
                transparent 50%
              )
            `,
            zIndex: 2
          }}
        />

        {/* Inner edge highlight - liquid curve effect */}
        <div 
          className="absolute inset-[1px] rounded-[23px] overflow-hidden pointer-events-none"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(255,255,255,0.15) 0%,
                transparent 30%
              )
            `,
            boxShadow: `
              inset 0 1px 1px rgba(255,255,255,0.2),
              inset 0 -1px 1px rgba(0,0,0,0.1)
            `,
            zIndex: 1
          }}
        />

        {/* Main glass body */}
        <div 
          className="relative rounded-[24px] px-5 py-4 overflow-hidden"
          style={{
            background: `
              linear-gradient(
                165deg,
                rgba(60,60,68,0.85) 0%,
                rgba(45,45,52,0.9) 30%,
                rgba(35,35,42,0.92) 70%,
                rgba(28,28,35,0.95) 100%
              )
            `,
            backdropFilter: "blur(50px) saturate(200%) brightness(1.05)",
            WebkitBackdropFilter: "blur(50px) saturate(200%) brightness(1.05)"
          }}
        >
          {/* Subtle color tint overlay - liquid glass refraction */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: `
                radial-gradient(
                  ellipse 80% 50% at 20% 0%,
                  rgba(100,140,255,0.15) 0%,
                  transparent 50%
                ),
                radial-gradient(
                  ellipse 60% 40% at 80% 100%,
                  rgba(255,100,120,0.1) 0%,
                  transparent 50%
                )
              `,
              zIndex: 0
            }}
          />

          {/* Content layer */}
          <div className="relative z-10">
            {/* Top row: Mastery indicator */}
            <div className="flex justify-between items-center mb-3">
              {/* Left: Mastery unlocked */}
              <div className="flex items-center gap-1.5">
                <span 
                  ref={percentRef}
                  className="text-[14px] font-bold tabular-nums"
                  style={{ 
                    background: "linear-gradient(135deg, #FF5E7D 0%, #FF8A6B 50%, #FFB347 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    minWidth: "38px",
                    textShadow: "0 0 30px rgba(255,100,100,0.3)"
                  }}
                >
                  0%
                </span>
                <span 
                  className="text-[12px] font-medium"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  mastery unlocked by
                </span>
              </div>

              {/* Right: Current stage */}
              <span 
                className="text-[11px] font-semibold tracking-wide transition-opacity duration-200"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {currentStage.name}
              </span>
            </div>

            {/* Progress track - Liquid Glass style */}
            <div 
              className="relative h-[6px] rounded-full overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.08)",
                boxShadow: `
                  inset 0 1px 3px rgba(0,0,0,0.4),
                  inset 0 0 1px rgba(255,255,255,0.1),
                  0 1px 0 rgba(255,255,255,0.05)
                `
              }}
            >
              {/* Track inner highlight */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.03) 100%)"
                }}
              />

              {/* Progress fill with liquid glow */}
              <div
                ref={progressRef}
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ 
                  width: "0%",
                  background: `
                    linear-gradient(
                      180deg,
                      rgba(255,150,160,1) 0%,
                      rgba(255,90,120,1) 50%,
                      rgba(255,120,100,1) 100%
                    )
                  `,
                  boxShadow: `
                    0 0 20px rgba(255,90,120,0.6),
                    0 0 8px rgba(255,90,120,0.8),
                    inset 0 1px 1px rgba(255,255,255,0.4)
                  `,
                  willChange: "width",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden"
                }}
              >
                {/* Liquid shine on progress */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 60%)"
                  }}
                />
              </div>

              {/* Stage markers */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center pointer-events-none">
                {stages.map((stage, index) => {
                  const markerPosition = ((index + 1) / stages.length) * 100;

                  return (
                    <div
                      key={stage.id}
                      className="absolute w-[3px] h-[3px] rounded-full transform -translate-x-1/2"
                      style={{ 
                        left: `${markerPosition}%`,
                        background: "rgba(255,255,255,0.35)",
                        boxShadow: "0 0 3px rgba(255,255,255,0.2)"
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
