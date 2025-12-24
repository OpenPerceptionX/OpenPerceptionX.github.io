"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, type ChartConfig } from "@/components/ui/chart";

import { stageData } from "./stage-data";

const chartConfig = {
  cumulative_value: {
    label: "Cumulative Value",
    color: "#4286F3",
  },
} satisfies ChartConfig;

// 进度条颜色配置 - 可自定义
const progressBarFilledColor = "#ffffff"; // 进度条左边（已填充部分）的颜色

export function StageVideo1() {
  const [activeTab, setActiveTab] = useState(stageData[0]?.title || "");
  // 自定义首尾帧数配置 - 可以在这里修改或通过 props 传入
  const defaultFrameRange = stageData[0]?.frameRange ?? null;
  const [frameRange, setFrameRange] = useState<{ start: number; end: number } | null>(defaultFrameRange);
  const [subTab, setSubTab] = useState<"Value-diff" | "Direct+Stage">("Value-diff");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full flex flex-col items-center"
    >
      {/* 隐藏顶部TabList */}
      <TabsList className="w-full max-w-4xl justify-center flex-wrap gap-2 mt-6 bg-zinc-900/50 border border-zinc-800 hidden">
        {stageData.map((stage) => (
          <TabsTrigger 
            key={stage.title} 
            value={stage.title} 
            className="text-zinc-400 data-[state=active]:text-white data-[state=active]:bg-zinc-800"
          >
            {stage.title}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="relative w-full">
        {(() => {
          const stage = stageData.find((s) => s.title === activeTab) ?? stageData[0];
          const sourceData = subTab === "Value-diff" ? stage.valueDiff : stage.directStage;
          const stageFrameRange = stage.frameRange ?? frameRange;
          const chartKey = `${stage.title}-${subTab}`;
          let filteredData = sourceData;
          if (stageFrameRange) {
            filteredData = sourceData.filter(
              item => item.frame_idx >= stageFrameRange.start && item.frame_idx <= stageFrameRange.end
            );
          }

          const chartData = filteredData
            .filter(item => item.cumulative_value !== null)
            .map((item) => ({
              frame_idx: item.frame_idx,
              cumulative_value: item.cumulative_value as number,
              advantage: item.advantage as "Positive" | "Negative",
            }));

          return (
            <VideoWithChart 
              key={stage.title} 
              stage={stage} 
              chartData={chartData}
              isActive={true}
              frameRange={stageFrameRange}
              subTab={subTab}
              onSubTabChange={setSubTab}
              originalLength={sourceData.length}
              chartKey={chartKey}
            />
          );
        })()}
      </div>
    </Tabs>
  );
}

function VideoWithChart({ 
  stage, 
  chartData, 
  isActive,
  frameRange,
  subTab,
  onSubTabChange,
  originalLength,
  chartKey
}: { 
  stage: typeof stageData[0]; 
  chartData: Array<{ frame_idx: number; cumulative_value: number; advantage: "Positive" | "Negative" }>; 
  isActive: boolean;
  frameRange: { start: number; end: number } | null;
  subTab: "Value-diff" | "Direct+Stage";
  onSubTabChange: (value: "Value-diff" | "Direct+Stage") => void;
  originalLength: number;
  chartKey: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const hoverIndexRef = useRef<number | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const prevDisplayAdvantageRef = useRef<"Positive" | "Negative" | undefined>(chartData[0]?.advantage);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // 防抖后的显示用 advantage 状态
  const [displayAdvantage, setDisplayAdvantage] = useState<"Positive" | "Negative" | undefined>(
    chartData[0]?.advantage
  );
  // 非对称过渡时间：红→绿快(150ms)，绿→红慢(600ms)
  const [transitionDuration, setTransitionDuration] = useState("300ms");

  // 防抖逻辑：只有状态稳定 150ms 后才切换显示颜色
  const currentAdvantageRaw = chartData[activeIndex]?.advantage;
  useEffect(() => {
    // 如果当前值和显示值相同，不需要处理
    if (currentAdvantageRaw === displayAdvantage) {
      return;
    }

    // 清除之前的定时器
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // 设置新的定时器，150ms 后更新显示颜色
    debounceTimerRef.current = setTimeout(() => {
      // 根据变化方向设置非对称过渡时间
      const prevAdv = prevDisplayAdvantageRef.current;
      if (prevAdv !== currentAdvantageRaw) {
        if (currentAdvantageRaw === "Positive") {
          // 红 → 绿：快速切换
          setTransitionDuration("50ms");
        } else {
          // 绿 → 红：慢速切换
          setTransitionDuration("1000ms");
        }
        // 等待 transitionDuration 渲染到 DOM 后再变颜色
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            prevDisplayAdvantageRef.current = currentAdvantageRaw;
            setDisplayAdvantage(currentAdvantageRaw);
          });
        });
      } else {
        prevDisplayAdvantageRef.current = currentAdvantageRaw;
        setDisplayAdvantage(currentAdvantageRaw);
      }
    }, 50);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [currentAdvantageRaw, displayAdvantage]);

  // 数据源切换时重置索引和显示状态
  useEffect(() => {
    setActiveIndex(0);
    hoverIndexRef.current = null;
    setDisplayAdvantage(chartData[0]?.advantage);
    prevDisplayAdvantageRef.current = chartData[0]?.advantage;
  }, [subTab, chartData.length]);

  // 处理鼠标悬停时的视频暂停/恢复（统一处理所有播放判断逻辑）
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // 判断逻辑：
    // 1. 是否悬停（isHovered）
    // 2. 滑块是否滑动（isDragging）

    if (isHovered) {
        console.log('记录鼠标悬停时的视频时间位置:', currentTime,video.currentTime)
        if (!video.paused) {
            video.pause()
        }
    } else {
          // 鼠标移开div且不在拖动时，如果之前正在播放，则从记录的位置恢复播放
          // 当鼠标移开div时，如果之前拖动过滑块，触发优先预加载滑块后的帧数部分
          video.play().catch(err => {
                console.warn('恢复播放失败:', err)
          })
        }
    }, [isHovered])
  
  // 使用 ref 来避免闭包问题（同步当前状态）
  const isActiveRef = useRef(isActive);
  const isDraggingRef = useRef(isDragging);
  isActiveRef.current = isActive;
  isDraggingRef.current = isDragging;
  
  // 获取原始数据的总帧数（用于视频时间到帧的映射）
  const totalFramesInOriginalData = originalLength;
  
  const getActualDuration = () => {
    const video = videoRef.current;
    if (video && !Number.isNaN(video.duration) && video.duration > 0) {
      return video.duration;
    }
    return duration;
  };
  
  // 当 tab 激活/停用时，控制视频播放和同步状态
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isActive) {
      // Tab 变为不活动时，暂停视频（如果正在播放）
      if (!video.paused) {
        video.pause();
      }
      return;
    }

    let cancelled = false;
    let intervalId: number | undefined;

    const syncVideoState = () => {
      const v = videoRef.current;
      if (!v || cancelled) return false;

      const videoDuration = getActualDuration();
      const videoCurrentTime = v.currentTime || 0;
      const videoIsPlaying = !v.paused;
      
      if (videoDuration > 0) {
        setDuration(videoDuration);
        setCurrentTime(videoCurrentTime);
        setIsPlaying(videoIsPlaying);
        
        if (chartData.length > 0) {
          if (frameRange) {
            // 将视频时间映射到原始数据中的帧索引
            const videoProgress = videoCurrentTime / videoDuration;
            const targetFrameInOriginal = Math.floor(videoProgress * (totalFramesInOriginalData - 1));
            
            // 检查目标帧是否在 frameRange 内
            if (targetFrameInOriginal < frameRange.start) {
              setActiveIndex(0);
            } else if (targetFrameInOriginal > frameRange.end) {
              setActiveIndex(chartData.length - 1);
            } else {
              let targetIndex = 0;
              let minDiff = Infinity;
              chartData.forEach((item, index) => {
                const diff = Math.abs(item.frame_idx - targetFrameInOriginal);
                if (diff < minDiff) {
                  minDiff = diff;
                  targetIndex = index;
                }
              });
              setActiveIndex(targetIndex);
            }
          } else {
            const progress = videoCurrentTime / videoDuration;
            const targetIndex = Math.floor(progress * (chartData.length - 1));
            setActiveIndex(targetIndex);
          }
        }
        return true;
      }
      return false;
    };

    const stopPolling = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    // 如果视频已经加载，立即同步；否则定时尝试直到拿到 duration
    if (!syncVideoState()) {
      const handleLoadedMetadata = () => {
        if (syncVideoState()) {
          stopPolling();
          // Task 切换后，如果视频已加载且组件激活，自动播放
          if (isActive && video.paused) {
            video.play().catch(err => {
              console.warn('自动播放失败:', err);
            });
          }
        }
      };
      video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });
      video.load();
      intervalId = window.setInterval(() => {
        if (syncVideoState()) {
          stopPolling();
          // Task 切换后，如果视频已加载且组件激活，自动播放
          if (isActive && video.paused) {
            video.play().catch(err => {
              console.warn('自动播放失败:', err);
            });
          }
        }
      }, 200);

      return () => {
        cancelled = true;
        stopPolling();
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    } else {
      // 如果视频已经加载，且组件激活，确保视频继续播放
      if (isActive && video.paused && duration > 0) {
        video.play().catch(err => {
          console.warn('恢复播放失败:', err);
        });
      }
    }

    return () => {
      cancelled = true;
      stopPolling();
    };
  }, [isActive, chartData, frameRange, duration]);

  // 监听视频播放状态 - 不负责初始化
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // 使用 ref 来检查，避免闭包问题
      if (!isDraggingRef.current && isActiveRef.current) {
        setCurrentTime(video.currentTime);
        const actualDuration = getActualDuration();
        if (actualDuration > 0 && duration === 0) {
          setDuration(actualDuration);
        }
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
    };

    // 添加事件监听器
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [duration]);


  // 高频刷新 activeIndex - 每秒15次（每 66.67ms 一次）
  // 只在视频播放时运行，使 index 移动更流畅
  useEffect(() => {
    if (!isPlaying || !isActiveRef.current || isDraggingRef.current || chartData.length === 0) {
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const updateIndex = () => {
      if (!isActiveRef.current || isDraggingRef.current) return;
      
      const actualDuration = getActualDuration();
      if (actualDuration <= 0) return;

      const videoCurrentTime = video.currentTime;
      
      if (frameRange) {
        // 将视频时间映射到原始数据中的帧索引
        const videoProgress = videoCurrentTime / actualDuration;
        const targetFrameInOriginal = Math.floor(videoProgress * (totalFramesInOriginalData - 1));
        
        // 检查目标帧是否在 frameRange 内
        if (targetFrameInOriginal < frameRange.start) {
          setActiveIndex(0);
        } else if (targetFrameInOriginal > frameRange.end) {
          setActiveIndex(chartData.length - 1);
        } else {
          // 视频在 frameRange 内，找到对应的 chartData 索引
          let targetIndex = 0;
          let minDiff = Infinity;
          chartData.forEach((item, index) => {
            const diff = Math.abs(item.frame_idx - targetFrameInOriginal);
            if (diff < minDiff) {
              minDiff = diff;
              targetIndex = index;
            }
          });
          setActiveIndex(targetIndex);
        }
      } else {
        // 没有 frameRange 时，直接映射到 chartData
        const progress = videoCurrentTime / actualDuration;
        const targetIndex = Math.floor(progress * (chartData.length - 1));
        setActiveIndex(targetIndex);
      }
    };

    // 使用 requestAnimationFrame 实现每帧更新（约60fps）
    let animationId: number;
    const animate = () => {
      updateIndex();
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying, chartData, frameRange, totalFramesInOriginalData]);

  // 计算tooltip X位置（只计算X，Y固定在底部）
  const getTooltipX = useCallback(() => {
    if (chartData.length === 0) return 0;
    const xPercent = chartData.length > 1 ? activeIndex / (chartData.length - 1) : 0.5;
    return xPercent * 100; // 返回百分比
  }, [activeIndex, chartData.length]);

  // 计算虚线Y位置
  const getLineY = useCallback(() => {
    if (!chartData[activeIndex]) return 0;
    const minValue = Math.min(...chartData.map(d => d.cumulative_value));
    const maxValue = Math.max(...chartData.map(d => d.cumulative_value));
    const currentValue = chartData[activeIndex].cumulative_value;
    const yPercent = maxValue > minValue ? (maxValue - currentValue) / (maxValue - minValue) : 0.5;
    return (yPercent + 0.01) * 100; // 返回百分比
  }, [activeIndex, chartData]);

  const updateProgressPosition = useCallback((clientX: number) => {
    if (!progressBarRef.current || chartData.length === 0) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const actualDuration = getActualDuration();
    
    if (frameRange) {
      // 进度条绑定到 index：根据进度条位置计算 targetIndex
      const targetIndex = Math.floor(percentage * (chartData.length - 1));
      setActiveIndex(targetIndex);
      
      // 将 targetIndex 对应的帧映射到视频时间
      if (videoRef.current && actualDuration > 0 && chartData.length > 0) {
        const targetFrame = chartData[targetIndex]?.frame_idx;
        if (targetFrame !== undefined) {
          // 将帧索引映射到视频时间：targetFrame / totalFramesInOriginalData * actualDuration
          const frameProgress = targetFrame / (totalFramesInOriginalData - 1);
          const newTime = frameProgress * actualDuration;
          videoRef.current.currentTime = newTime;
          setCurrentTime(newTime);
        }
      }
    } else {
      // 没有 frameRange 时，使用原来的逻辑
      const targetIndex = Math.floor(percentage * (chartData.length - 1));
      setActiveIndex(targetIndex);
      
      if (videoRef.current && actualDuration > 0) {
        const newTime = percentage * actualDuration;
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  }, [chartData, frameRange, duration, totalFramesInOriginalData]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    updateProgressPosition(e.clientX);
    
    const handleMouseMove = (e: MouseEvent) => {
      updateProgressPosition(e.clientX);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleChartClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;
    
    const actualDuration = getActualDuration();
    if (actualDuration > 0 && duration === 0) {
      setDuration(actualDuration);
      setCurrentTime(video.currentTime || 0);
      setIsPlaying(!video.paused);
    }
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    
    if (frameRange) {
      // 进度条绑定到 index：根据点击位置计算 targetIndex
      const targetIndex = Math.floor(percentage * (chartData.length - 1));
      setActiveIndex(targetIndex);
      
      // 将 targetIndex 对应的帧映射到视频时间
      if (actualDuration > 0 && chartData.length > 0) {
        const targetFrame = chartData[targetIndex]?.frame_idx;
        if (targetFrame !== undefined) {
          const frameProgress = targetFrame / (totalFramesInOriginalData - 1);
          const newTime = frameProgress * actualDuration;
          video.currentTime = newTime;
          setCurrentTime(newTime);
        }
      }
    } else {
      const targetIndex = Math.floor(percentage * (chartData.length - 1));
      setActiveIndex(targetIndex);
      
      if (actualDuration > 0) {
        const newTime = percentage * actualDuration;
        video.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    
    const actualDuration = getActualDuration();
    if (actualDuration > 0 && duration === 0) {
      setDuration(actualDuration);
      setCurrentTime(video.currentTime || 0);
      setIsPlaying(!video.paused);
      
      if (chartData.length > 0) {
        if (frameRange) {
          const videoProgress = video.currentTime / actualDuration;
          const targetFrameInOriginal = Math.floor(videoProgress * (totalFramesInOriginalData - 1));
          
          if (targetFrameInOriginal < frameRange.start) {
            setActiveIndex(0);
          } else if (targetFrameInOriginal > frameRange.end) {
            setActiveIndex(chartData.length - 1);
          } else {
            let targetIndex = 0;
            let minDiff = Infinity;
            chartData.forEach((item, index) => {
              const diff = Math.abs(item.frame_idx - targetFrameInOriginal);
              if (diff < minDiff) {
                minDiff = diff;
                targetIndex = index;
              }
            });
            setActiveIndex(targetIndex);
          }
        } else {
          const progress = video.currentTime / actualDuration;
          const targetIndex = Math.floor(progress * (chartData.length - 1));
          setActiveIndex(targetIndex);
        }
      }
    }
    
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const actualDuration = getActualDuration();
  
  // 计算基于 index 的进度条进度
  // 进度条绑定到 activeIndex，而不是视频时间
  // 如果设置了 frameRange，进度条 = activeIndex / (frameRange 内的总帧数) * 100%
  // 如果没有设置 frameRange，进度条 = activeIndex / (chartData 总长度) * 100%
  const getProgress = useCallback(() => {
    if (frameRange && chartData.length > 0) {
      // 基于 frameRange 内的帧数计算进度
      const totalFramesInRange = frameRange.end - frameRange.start + 1;
      // 进度条 = 当前 index 在 frameRange 内的位置 / frameRange 总帧数
      return (activeIndex / (chartData.length - 1)) * 100;
    } else {
      // 没有 frameRange 时，基于 chartData 长度计算
      return chartData.length > 1 ? (activeIndex / (chartData.length - 1)) * 100 : 0;
    }
  }, [frameRange, chartData.length, activeIndex]);
  
  const progress = getProgress();
  const currentAdvantage = chartData[activeIndex]?.advantage;
  // 悬停时用精确值，播放时用防抖值
  const effectiveAdvantage = isHovered ? currentAdvantage : displayAdvantage;
  // 使用更柔和的颜色：浅绿色和浅红色
  const borderColor = effectiveAdvantage === "Positive" ? "rgba(74, 222, 128, 0.7)" : "rgba(248, 113, 113, 0.7)";
  const labelBg = effectiveAdvantage === "Positive" ? "rgba(74, 222, 128, 0.85)" : "rgba(248, 113, 113, 0.85)";
  const tooltipBg = effectiveAdvantage === "Positive" ? "rgba(74, 222, 128, 0.85)" : "rgba(248, 113, 113, 0.85)";
  const progressBarDotColor = effectiveAdvantage === "Positive" ? "#86efac" : "#fca5a5"; // 圆点颜色跟随红绿色（浅色版）
  const lineColor = subTab === "Direct+Stage" ? "#22c55e" : "#4286F3";
  
  // 计算完整数据的 Y 轴范围，固定不变
  const yMin = Math.min(...chartData.map(d => d.cumulative_value));
  const yMax = Math.max(...chartData.map(d => d.cumulative_value));
  
  const tooltipX = getTooltipX();
  const lineY = getLineY();

  return (
    <div
      aria-hidden={!isActive}
      className={`w-full flex justify-center ${isActive ? "relative z-10" : "absolute inset-0 opacity-0 pointer-events-none z-0"}`}
    >
      {/* 如果task不隐藏则不需要 mt-6 */}
      <div className="relative flex flex-col items-center px-6 w-full mt-6">
        <div
          ref={videoContainerRef}
          className="relative w-full max-w-4xl border-[6px] border-solid rounded-sm position-relative"
          style={{ borderColor, transition: `border-color ${transitionDuration} ease` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`absolute top-[-6px] left-[-6px] z-10 px-2 py-1 text-xs font-semibold text-white text-center w-[72px] rounded-tl-sm rounded-br-[6px] transition-opacity duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              backgroundColor: labelBg,
              transition: `background-color ${transitionDuration} ease, opacity 200ms ease`
            }}
          >
            {currentAdvantage || ""}
          </div>
          <video
            ref={videoRef}
            autoPlay={false}
            muted
            loop
            controls={false}
            playsInline
            preload="metadata"
            className="w-full h-auto object-cover object-center bg-gradient-loading select-none block"
          >
            <source src={stage.video} type="video/mp4" />
          </video>
          
          {/* 视频上的半透明蒙版，让线条更清晰 */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          />
          
          {/* 播放/暂停按钮 */}
          {/* <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button> */}

          {/* 图表覆盖层 - 使用绝对定位自动匹配视频尺寸 */}
          {/* SVG 画布位置：在 LineChart 组件内部，由 ResponsiveContainer 渲染为 <svg className="recharts-surface"> */}
          <div 
            className="absolute inset-0 m-8.5 pointer-events-auto rounded-sm overflow-visible cursor-pointer"
            onClick={handleChartClick}
          >
            <ChartContainer 
              key={`${chartKey}-container`}
              config={chartConfig} 
              className="h-full w-full [&_.recharts-surface]:outline-none [&_.recharts-cartesian-axis]:opacity-0"
            >
              {/* SVG 画布渲染位置：ResponsiveContainer 会创建一个包含 SVG 的容器 */}
              <ResponsiveContainer key={`${chartKey}-responsive`} width="100%" height="100%">
                {/* SVG 画布实际位置：LineChart 内部会渲染 <svg className="recharts-surface"> 元素 */}
                {/* 只显示到当前进度位置的线 */}
                <LineChart
                  key={`${chartKey}-linechart`}
                  data={chartData.map((item, idx) => ({
                    ...item,
                    cumulative_value: idx <= activeIndex ? item.cumulative_value : null
                  }))}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="frame_idx"
                    tickLine={false}
                    axisLine={false}
                    tick={false}
                    // 自定义首尾帧数的 domain 设置
                    domain={frameRange ? [frameRange.start, frameRange.end] : ['dataMin', 'dataMax']}
                    width={0}
                    height={0}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={false}
                    domain={[yMin, yMax]}
                    width={0}
                    height={0}
                  />
                  <ChartTooltip
                    cursor={{ stroke: borderColor, strokeDasharray: '5 5', strokeWidth: 1 }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const value = payload[0].value;
                        const displayValue = typeof value === 'number' ? value.toFixed(2) : String(value);
                        const hoveredAdvantage = payload[0]?.payload?.advantage;
                        const hoveredBg = hoveredAdvantage === "Positive" ? "rgba(74, 222, 128, 0.8)" : "rgba(248, 113, 113, 0.8)";
                        return (
                          <div
                            className="text-white px-2 py-1 rounded text-xs"
                            style={{ backgroundColor: hoveredBg }}
                          >
                            {displayValue}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="cumulative_value"
                    stroke={lineColor}
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5, fill: lineColor, stroke: '#fff', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            {/* 自定义白色虚线 - 从数据点到底部 */}
            {chartData[activeIndex] && (
              <>
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: `${tooltipX}%`,
                    top: `${lineY}%`,
                    bottom: 0,
                    width: '2px',
                    background: 'repeating-linear-gradient(to top, white 0, white 5px, transparent 5px, transparent 10px)'
                  }}
                />
                
                {/* Tooltip - 固定在底部 */}
                {chartData[activeIndex]?.cumulative_value !== undefined && chartData[activeIndex]?.cumulative_value !== null && (
                  <div
                    className="absolute pointer-events-none z-20"
                    style={{
                      left: `${tooltipX}%`,
                      bottom: '4px',
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div
                      className="text-white px-2 py-1 rounded text-xs whitespace-nowrap"
                      style={{ 
                        backgroundColor: tooltipBg,
                        transition: `background-color ${transitionDuration} ease`
                      }}
                    >
                      {chartData[activeIndex].cumulative_value.toFixed(2)}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* 进度条：悬停视频时显示，贴合底部边界 */}
          <div
            className={`absolute left-0 right-0 flex justify-center items-center px-8.5 py-3 transition-all duration-200 ${
              isHovered ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
            } backdrop-blur-sm rounded-b-sm`}
            style={{ bottom: "0px", "background": "inherits" }}
          >
            <div
              ref={progressBarRef}
              className="relative h-2 bg-muted rounded-full cursor-pointer group w-full max-w-4xl"
              onMouseDown={handleMouseDown}
            >
              <div
                className="absolute h-full rounded-full transition-all"
                style={{ width: `${progress}%`, backgroundColor: progressBarFilledColor }}
              />
              <div
                className="absolute h-4 w-4 rounded-full -top-1 transition-all group-hover:scale-125"
                style={{ left: `calc(${progress}% - 6px)`, backgroundColor: progressBarDotColor }}
              />
            </div>
          </div>
        </div>
        
        {/* 下方子 Tab：Value-diff / Direct+Stage，与顶部宽度保持一致 */}
        <div className="w-full max-w-4xl mt-1">
          <Tabs value={subTab} onValueChange={(v) => onSubTabChange(v as typeof subTab)} className="w-full">
            <TabsList className="w-full max-w-4xl justify-center flex-wrap gap-2 bg-zinc-900/50 border border-zinc-800">
              <TabsTrigger
                value="Value-diff"
                className="data-[state=active]:text-blue-400 data-[state=active]:bg-zinc-800"
              >
                Value-diff
              </TabsTrigger>
              <TabsTrigger
                value="Direct+Stage"
                className="data-[state=active]:text-green-400 data-[state=active]:bg-zinc-800"
              >
                Direct+Stage (ours)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
