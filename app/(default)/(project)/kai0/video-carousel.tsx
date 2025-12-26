"use client";

import { useState, useRef, useEffect } from "react";

interface VideoData {
    src: string;
    poster: string;
}

const videos: VideoData[] = [
    {
        src: "https://assets.kinetixai.cn/FoldAnything/step_1.mp4",
        poster: "https://assets.kinetixai.cn/FoldAnything/step_1.png",
    },
    {
        src: "https://assets.kinetixai.cn/FoldAnything/step_2.mp4",
        poster: "https://assets.kinetixai.cn/FoldAnything/step_2.png",
    },
    {
        src: "https://assets.kinetixai.cn/FoldAnything/step_3.mp4",
        poster: "https://assets.kinetixai.cn/FoldAnything/step_3.png",
    },
];

export function VideoCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Calculate positions based on active index
    const getPosition = (index: number) => {
        const diff = index - activeIndex;
        if (diff === 0) return "center";
        if (diff === 1 || diff === -2) return "right";
        return "left";
    };

    // Handle video playback when active changes
    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === activeIndex) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }, [activeIndex]);

    const handleVideoClick = (index: number) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    return (
        <div className="w-full">
            {/* Main carousel container */}
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] flex items-center justify-center perspective-[1200px]">
                {videos.map((video, index) => {
                    const position = getPosition(index);
                    const isActive = position === "center";

                    return (
                        <div
                            key={index}
                            onClick={() => handleVideoClick(index)}
                            className={`
                                absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                                ${isActive ? "cursor-default z-30" : "cursor-pointer z-10 hover:z-20"}
                            `}
                            style={{
                                transform: isActive
                                    ? "translateX(0) translateZ(0) rotateY(0deg) scale(1)"
                                    : position === "left"
                                    ? "translateX(-75%) translateZ(-200px) rotateY(35deg) scale(0.7)"
                                    : "translateX(75%) translateZ(-200px) rotateY(-35deg) scale(0.7)",
                                opacity: isActive ? 1 : 0.6,
                                filter: isActive ? "none" : "brightness(0.7)",
                                width: isActive ? "65%" : "45%",
                            }}
                        >
                            {/* Video wrapper with Apple-style shadow */}
                            <div
                                className={`
                                    relative rounded-xl overflow-hidden
                                    transition-shadow duration-700
                                    ${isActive 
                                        ? "shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5),0_10px_40px_-10px_rgba(0,0,0,0.3)]" 
                                        : "shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)]"
                                    }
                                `}
                            >
                                {/* Subtle border glow for active */}
                                {isActive && (
                                    <div className="absolute inset-0 rounded-xl ring-1 ring-black/10 pointer-events-none z-10" />
                                )}
                                
                                <video
                                    ref={(el) => { videoRefs.current[index] = el; }}
                                    autoPlay={isActive}
                                    muted
                                    loop
                                    playsInline
                                    poster={video.poster}
                                    className="w-full aspect-video object-cover rounded-xl"
                                >
                                    <source src={video.src} type="video/mp4" />
                                </video>

                                {/* Overlay for inactive videos */}
                                {!isActive && (
                                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 hover:bg-black/10 rounded-xl" />
                                )}
                            </div>

                            {/* Play icon for inactive videos */}
                            {!isActive && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                        <svg
                                            className="w-5 h-5 sm:w-6 sm:h-6 text-black ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Navigation dots - Apple style */}
            <div className="flex justify-center gap-2 mt-6">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
                            transition-all duration-500 rounded-full
                            ${index === activeIndex 
                                ? "w-6 h-2 bg-black" 
                                : "w-2 h-2 bg-black/30 hover:bg-black/50"
                            }
                        `}
                        aria-label={`Go to video ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

