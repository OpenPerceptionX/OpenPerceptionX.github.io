"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "../ui/chart"

const chartData = [
  { category: "1", value1: 40, value2: 75, value3: 80, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "2", value1: 10, value2: 40, value3: 50, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "3", value1: 50, value2: 80, value3: 90, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "4", value1: 35, value2: 65, value3: 80, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "5", value1: 34, value2: 65, value3: 75, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
]

const chartConfig = {
  value1: {
    label: "ACT(Vision-only)",
  },
  value2: {
    label: "Ours-a (+Tactile +Pretrained)",
  },
  value3: {
    label: "Ours-B (+Tactile +Pretrained +DAgger)",
  },
  1: {
    label: "Herbal Transfer",
    color: "#5B6EE1",
  },
  2: {
    label: "Cable Mounting",
    color: "#5B6EE1",
  },
  3: {
    label: "Binder Clip Removal",
    color: "#5B6EE1",
  },
  4: {
    label: "Dish Washing",
    color: "#5B6EE1",
  },
  5: {
    label: "Avg.",
    color: "#5B6EE1",
  },
} satisfies ChartConfig

const X_AXIS_SHORT: Record<string, string> = {
  "1": "Herbal",
  "2": "Cable",
  "3": "Binder",
  "4": "Dish",
  "5": "Avg.",
}

/** Chart area narrower than this → shorten X labels & shrink ticks (avoids overlap in padded layouts). */
const NARROW_CHART_PX = 560

export function PolicyRolloutsAverage() {
  const chartRef = React.useRef<HTMLDivElement>(null)
  const [narrowChart, setNarrowChart] = React.useState(false)

  React.useLayoutEffect(() => {
    const el = chartRef.current
    if (!el || typeof ResizeObserver === "undefined") return
    const ro = new ResizeObserver(() => {
      setNarrowChart(el.getBoundingClientRect().width < NARROW_CHART_PX)
    })
    ro.observe(el)
    setNarrowChart(el.getBoundingClientRect().width < NARROW_CHART_PX)
    return () => ro.disconnect()
  }, [])

  const tickPx = narrowChart ? 7 : 11

  return (
    <Card className="border border-white/20 bg-black text-white">
      <CardHeader>
        <CardTitle className="text-sm md:text-base">Policy Success Rate (%)</CardTitle>
      </CardHeader>
      <CardContent className="p-2 md:p-4">
        <ChartContainer
          ref={chartRef}
          config={chartConfig}
          className="!aspect-auto h-[278px] md:h-[260px]"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 12,
              bottom: narrowChart ? 44 : 24,
              left: narrowChart ? 6 : 16,
              right: narrowChart ? 4 : 16,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              className="select-none"
              dataKey="category"
              tickLine={false}
              tickMargin={narrowChart ? 2 : 8}
              axisLine={false}
              interval={0}
              height={narrowChart ? 52 : 32}
              tick={{
                fontSize: tickPx,
                fill: "rgba(255,255,255,0.65)",
              }}
              angle={narrowChart ? -35 : 0}
              textAnchor={narrowChart ? "end" : "middle"}
              dy={narrowChart ? 4 : 0}
              tickFormatter={(value) => {
                const v = String(value)
                if (narrowChart && X_AXIS_SHORT[v]) return X_AXIS_SHORT[v]
                const full =
                  chartConfig[v as keyof typeof chartConfig]?.label
                return typeof full === "string" ? full : v
              }}
            />
            <YAxis
              domain={[0, 100]}
              tickFormatter={(value) => `${value.toFixed(0)}`}
              tickLine={false}
              axisLine={false}
              width={narrowChart ? 26 : 36}
              tick={{
                fontSize: tickPx,
                fill: "rgba(255,255,255,0.65)",
              }}
            />
            <ChartTooltip
              cursor={false}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null

                const methodLabels = [
                  "ACT(Vision-only)",
                  "Ours-a (+Tactile +Pretrained)",
                  "Ours-B (+Tactile +Pretrained +DAgger)",
                ]

                return (
                  <div className="max-w-[min(100vw-2rem,280px)] rounded-lg border border-white/20 bg-black/95 p-2 shadow-sm sm:max-w-none sm:p-3">
                    <div className="mb-1.5 text-xs font-semibold leading-snug text-white sm:mb-2 sm:text-sm">
                      {chartConfig[label as keyof typeof chartConfig]?.label || label}
                    </div>
                    <div className="grid gap-1 sm:gap-1.5">
                      {payload.map((entry, index) => (
                        <div
                          key={`${entry.dataKey}-${index}`}
                          className="flex items-start justify-between gap-2 sm:items-center sm:gap-3"
                        >
                          <span className="min-w-0 flex-1 text-[10px] leading-tight text-gray-300 sm:text-xs">
                            {methodLabels[index] || String(entry.dataKey)}
                          </span>
                          <span className="shrink-0 text-xs font-semibold text-white sm:text-sm">
                            {Number(entry.value).toFixed(0)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }}
            />
            <Bar className="select-none"
              dataKey="value1"
              strokeWidth={2}
              radius={8}
              fill="#B8C9F0"
              activeIndex={1}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                  />
                )
              }}
            >
            </Bar>
            <Bar className="select-none"
              dataKey="value2"
              strokeWidth={2}
              radius={8}
              fill="#7C9AE8"
              activeIndex={1}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                  />
                )
              }}
            >
            </Bar>
            <Bar className="select-none"
              dataKey="value3"
              strokeWidth={2}
              radius={8}
              fill="#3D56C8"
              activeIndex={1}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                  />
                )
              }}
            >
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-2 px-2 pb-4 pt-0 sm:px-6">
        <div className="text-muted-foreground select-none flex flex-col gap-2 text-[10px] leading-snug sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:text-xs md:text-sm">
          <div className="flex min-w-0 items-start gap-2 sm:items-center">
            <div
              className="mt-0.5 h-3 w-3 shrink-0 rounded-sm sm:mt-0 sm:h-4 sm:w-4"
              style={{ backgroundColor: "#B8C9F0" }}
            />
            <span className="break-words text-white/80" title="ACT(Vision-only)">
              ACT(Vision-only)
            </span>
          </div>
          <div className="flex min-w-0 items-start gap-2 sm:items-center">
            <div
              className="mt-0.5 h-3 w-3 shrink-0 rounded-sm sm:mt-0 sm:h-4 sm:w-4"
              style={{ backgroundColor: "#7C9AE8" }}
            />
            <span
              className="break-words text-white/80"
              title="Ours-a (+Tactile +Pretrained)"
            >
              Ours-a (+Tactile +Pretrained)
            </span>
          </div>
          <div className="flex min-w-0 items-start gap-2 sm:items-center">
            <div
              className="mt-0.5 h-3 w-3 shrink-0 rounded-sm sm:mt-0 sm:h-4 sm:w-4"
              style={{ backgroundColor: "#3D56C8" }}
            />
            <span
              className="break-words text-white/80"
              title="Ours-B (+Tactile +Pretrained +DAgger)"
            >
              Ours-B (+Tactile +Pretrained +DAgger)
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
} 