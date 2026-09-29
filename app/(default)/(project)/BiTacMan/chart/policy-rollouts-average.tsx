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
  { category: "1", value1: 40, value2: 75, value3: 80, value4: 90 },
  { category: "2", value1: 10, value2: 40, value3: 50, value4: 70 },
  { category: "3", value1: 50, value2: 80, value3: 90, value4: 90 },
  { category: "4", value1: 35, value2: 65, value3: 80, value4: 90 },
  { category: "5", value1: 34, value2: 65, value3: 75, value4: 85 },
]

const methodLabels = [
  "ACT(Vision-only)",
  "Ours-a (+Tactile +Pretrained)",
  "Ours-B (+Tactile +Pretrained +10% DAgger)",
  "Ours-C (+Tactile +Pretrained +20% DAgger)",
] as const

const methodColors = ["#B8C9F0", "#7C9AE8", "#3D56C8", "#1E3FAF"] as const

const chartConfig = {
  value1: {
    label: methodLabels[0],
  },
  value2: {
    label: methodLabels[1],
  },
  value3: {
    label: methodLabels[2],
  },
  value4: {
    label: methodLabels[3],
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

/** Chart area narrower than this → tilt X labels & tighten margins (full names, no abbreviations). */
const NARROW_CHART_PX = 640

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

  const tickPx = narrowChart ? 8 : 11

  return (
    <Card className="border border-white/20 bg-black text-white">
      <CardHeader>
        <CardTitle className="text-sm md:text-base">Policy Success Rate (%)</CardTitle>
      </CardHeader>
      <CardContent className="p-2 md:p-4">
        <ChartContainer
          ref={chartRef}
          config={chartConfig}
          className="!aspect-auto h-[300px] md:h-[280px]"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            barCategoryGap="22%"
            barGap={3}
            margin={{
              top: 12,
              bottom: narrowChart ? 52 : 28,
              left: narrowChart ? 6 : 20,
              right: narrowChart ? 4 : 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              className="select-none"
              dataKey="category"
              tickLine={false}
              tickMargin={narrowChart ? 2 : 10}
              axisLine={false}
              interval={0}
              height={narrowChart ? 58 : 36}
              tick={{
                fontSize: tickPx,
                fill: "rgba(255,255,255,0.65)",
              }}
              angle={narrowChart ? -38 : 0}
              textAnchor={narrowChart ? "end" : "middle"}
              dy={narrowChart ? 4 : 0}
              tickFormatter={(value) => {
                const v = String(value)
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

                return (
                  <div className="max-w-[min(100vw-2rem,320px)] rounded-lg border border-white/20 bg-black/95 p-2 shadow-sm sm:max-w-none sm:p-3">
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
                            {label === "5" && index === 3 ? " ± 10" : ""}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }}
            />
            {(["value1", "value2", "value3", "value4"] as const).map(
              (dataKey, index) => (
                <Bar
                  key={dataKey}
                  className="select-none"
                  dataKey={dataKey}
                  strokeWidth={2}
                  radius={8}
                  fill={methodColors[index]}
                  maxBarSize={36}
                  activeIndex={1}
                  activeBar={({ ...props }) => {
                    return <Rectangle {...props} />
                  }}
                />
              ),
            )}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-2 px-2 pb-4 pt-0 sm:px-4">
        <div className="text-muted-foreground select-none flex flex-nowrap items-center justify-start gap-x-3 overflow-x-auto whitespace-nowrap text-[9px] leading-none sm:gap-x-4 sm:text-[11px] md:justify-center md:gap-x-5 md:text-xs">
          {methodLabels.map((label, index) => (
            <div
              key={label}
              className="inline-flex shrink-0 items-center gap-1.5"
            >
              <div
                className="h-2.5 w-2.5 shrink-0 rounded-sm sm:h-3 sm:w-3"
                style={{ backgroundColor: methodColors[index] }}
              />
              <span className="text-white/80" title={label}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
