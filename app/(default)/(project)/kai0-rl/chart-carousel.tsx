"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ConsistencyBarChart1 } from "./chart/consistency/consistency1"
import { ConsistencyBarChart2 } from "./chart/consistency/consistency2"
import { ConsistencyBarChart11 } from "./chart/consistency/consistency11"
import { ConsistencyBarChart12 } from "./chart/consistency/consistency12"
import { ConsistencyBarChart8 } from "./chart/consistency/consistency8"
import { ConsistencyBarChart9 } from "./chart/consistency/consistency9"

const chartSections = [
  {
    title: "DAgger",
    charts: [<ConsistencyBarChart1 key="1" />, <ConsistencyBarChart2 key="2" />],
    caption: "Improved data collection methods and on-policy recovery trajectories effectively enhance the model's error recovery capability, significantly increasing success rate and reducing recover cost (fewer retry attempts per failure). X-axis: baseline, improved baseline, + heuristic DAgger, + DAgger.",
  },
  {
    title: "Spatio-temporal Augmentation",
    charts: [<ConsistencyBarChart11 key="11" />, <ConsistencyBarChart12 key="12" />],
    caption: "Spatio-temporal augmentation substantially enhances model performance, increasing success rate and throughput (more task completions per unit time). X-axis: baseline, +spatio-temp. augment.",
  },
  {
    title: "Inference Optimization",
    charts: [<ConsistencyBarChart8 key="8" />, <ConsistencyBarChart9 key="9" />],
    caption: "Inference optimization through chunk-wise temporal smoothing and real-time chunking ensures the policy's intended actions are translated flawlessly into smooth, coherent real-robot execution, improving throughput (more task completions per unit time). X-axis: sync, + inchunk smooth, + temp smooth, + RTC.",
  },
]

export function ChartCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(true)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())
    // In loop mode, buttons are always enabled
    setCanScrollPrev(true)
    setCanScrollNext(true)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
      // In loop mode, buttons are always enabled
      setCanScrollPrev(true)
      setCanScrollNext(true)
    })
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div className="w-full relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-0">
          {chartSections.map((section, index) => (
            <CarouselItem key={index} className="pl-0 basis-full">
              <div className="w-full">
                {/* Charts */}
                <div className="mt-10 flex flex-row justify-center px-6">
                  <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                    {section.charts}
                  </div>
                </div>
                {/* Caption */}
                <div className="mt-5 flex justify-center px-6">
                  <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-3xl">
                    {section.caption}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Apple-style Navigation Buttons */}
        <div className="absolute left-2 sm:left-4 lg:left-0 top-1/2 -translate-y-1/2 lg:-translate-x-12 z-20">
          <button
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            className={`
              group relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full
              backdrop-blur-xl bg-black/10 border border-black/20
              flex items-center justify-center
              transition-all duration-300 ease-out
              ${canScrollPrev 
                ? "hover:bg-black/20 hover:border-black/30 hover:scale-110 active:scale-95 cursor-pointer" 
                : "opacity-30 cursor-not-allowed"
              }
              shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            `}
            aria-label="Previous chart"
          >
            <ChevronLeft 
              className={`
                w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black
                transition-transform duration-300
                ${canScrollPrev ? "group-hover:-translate-x-0.5" : ""}
              `} 
            />
            {/* Subtle glow effect */}
            {canScrollPrev && (
              <div className="absolute inset-0 rounded-full bg-black/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </button>
        </div>

        <div className="absolute right-2 sm:right-4 lg:right-0 top-1/2 -translate-y-1/2 lg:translate-x-12 z-20">
          <button
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            className={`
              group relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full
              backdrop-blur-xl bg-black/10 border border-black/20
              flex items-center justify-center
              transition-all duration-300 ease-out
              ${canScrollNext 
                ? "hover:bg-black/20 hover:border-black/30 hover:scale-110 active:scale-95 cursor-pointer" 
                : "opacity-30 cursor-not-allowed"
              }
              shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            `}
            aria-label="Next chart"
          >
            <ChevronRight 
              className={`
                w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black
                transition-transform duration-300
                ${canScrollNext ? "group-hover:translate-x-0.5" : ""}
              `} 
            />
            {/* Subtle glow effect */}
            {canScrollNext && (
              <div className="absolute inset-0 rounded-full bg-black/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </button>
        </div>
      </Carousel>

      {/* Apple-style Page Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {chartSections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`
              transition-all duration-500 ease-out
              rounded-full
              ${index === current 
                ? "w-8 h-2 bg-black shadow-[0_2px_8px_rgba(255,255,255,0.3)]" 
                : "w-2 h-2 bg-black/30 hover:bg-black/50 hover:w-3"
              }
            `}
            aria-label={`Go to ${chartSections[index].title}`}
            aria-current={index === current ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}

