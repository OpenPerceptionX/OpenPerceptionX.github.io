"use client"

import Autoplay from "embla-carousel-autoplay"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const autoplay = React.useRef(
    Autoplay({ delay: 6666 })
  )
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    [...(plugins ?? []), autoplay.current]
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  React.useEffect(() => {
  if (!api) return

  let resumeTimeout: ReturnType<typeof setTimeout>

  const resetAutoplay = () => {
    autoplay.current.stop()
    clearTimeout(resumeTimeout)
    resumeTimeout = setTimeout(() => {
      autoplay.current.play()
    }, 111)
  }

  api.on("pointerDown", resetAutoplay)
  api.on("pointerUp", resetAutoplay)
  api.on("select", resetAutoplay)

  return () => {
    api.off("pointerDown", resetAutoplay)
    api.off("pointerUp", resetAutoplay)
    api.off("select", resetAutoplay)
    clearTimeout(resumeTimeout)
  }
}, [api])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

// 新增：小圆点指示器组件
function CarouselDots({
  className,
  count,
  ...props
}: React.ComponentProps<"div"> & { count: number }) {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  // 使用 useCallback 优化事件处理函数
  const onSelect = React.useCallback(() => {
    try {
      if (api && typeof api.selectedScrollSnap === 'function') {
        const currentIndex = api.selectedScrollSnap()
        if (typeof currentIndex === 'number' && !isNaN(currentIndex)) {
          setSelectedIndex(currentIndex)
        }
      }
    } catch (err) {
      console.error('Error getting carousel selected index:', err)
    }
  }, [api]);

  // 监听轮播图的选择事件来更新当前选中的索引
  React.useEffect(() => {
    if (!api || typeof api.on !== 'function' || typeof api.off !== 'function') return
    
    // 初始化时设置当前索引
    try {
      onSelect()
    } catch (err) {
      console.error('Error initializing carousel dots:', err)
    }
    
    // 添加事件监听器
    try {
      api.on("select", onSelect)
    } catch (err) {
      console.error('Error adding carousel event listener:', err)
    }

    return () => {
      try {
        api.off("select", onSelect)
      } catch (err) {
        console.error('Error removing carousel event listener:', err)
      }
    }
  }, [api, onSelect]) // 将优化后的 onSelect 添加到依赖项

  // 点击圆点时切换到对应的轮播图
  const scrollTo = React.useCallback((index: number) => {
    if (!api || typeof api.scrollTo !== 'function') return
    
    try {
      api.scrollTo(index)
    } catch (err) {
      console.error('Error scrolling carousel:', err)
    }
  }, [api])

  // 防止不必要的渲染
  if (count <= 1) return null

  // 使用 memo 优化按钮数组渲染
  const dots = React.useMemo(() => {
    return Array.from({ length: count }).map((_, index) => (
      <button
        key={index}
        type="button"
        className={cn(
          "w-3 h-3 rounded-full transition-all duration-300 border border-white/30",
          selectedIndex === index 
            ? "bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue scale-110" 
            : "bg-gray-200/70 hover:bg-gray-300"
        )}
        onClick={() => scrollTo(index)}
        aria-label={`转到第 ${index + 1} 个轮播图项目`}
      />
    ))
  }, [count, selectedIndex, scrollTo])

  return (
    <div 
      className={cn("flex justify-center items-center gap-3", className)} 
      {...props}
    >
      {dots}
    </div>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
}
