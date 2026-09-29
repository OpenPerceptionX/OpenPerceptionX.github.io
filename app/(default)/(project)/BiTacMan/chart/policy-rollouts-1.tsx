"use client"

import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, LabelList } from "recharts"

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
  ChartTooltipContent,
} from "../ui/chart"

const chartData = [
  { browser: "1", visitors: 40, fill: "var(--color-1)" },
  { browser: "2", visitors: 75, fill: "var(--color-2)" },
  { browser: "3", visitors: 80, fill: "var(--color-3)" },
  { browser: "4", visitors: 90, fill: "var(--color-4)" },
]

const chartConfig = {
  visitors: {
    label: "Success Rate (%):",
  },
  1: {
    label: "ACT",
    color: "#9BB4F0",
  },
  2: {
    label: "Ours-a",
    color: "#6B8CE8",
  },
  3: {
    label: "Ours-B",
    color: "#4169D9",
  },
  4: {
    label: "Ours-C",
    color: "#1E3FAF",
  },
} satisfies ChartConfig

export function PolicyRollouts1() {
  return (
    <Card className="border border-white/20 bg-black text-white w-[300px] md:w-[340px] mx-auto overflow-hidden">
      <CardHeader className="pb-1 md:pb-2">
        <CardTitle className="text-sm md:text-base">Policy Success Rate (%)</CardTitle>
      </CardHeader>
      <CardContent className="px-2 md:px-3 pt-0 pb-1">
        <ChartContainer config={chartConfig} className="!aspect-auto h-[185px] md:h-[210px] w-[275px] md:w-[310px] mx-auto">
          <BarChart accessibilityLayer data={chartData} barCategoryGap="8%" margin={{
              top: 10,
              left: 0,
              right: 0,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis className="select-none"
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar  className="select-none"
              dataKey="visitors"
              barSize={28}
              strokeWidth={1.5}
              radius={6}
              activeIndex={3}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                  />
                )
              }}
            >
              <LabelList
                              position="top"
                              offset={8}
                              className="fill-foreground"
                              fontSize={10}
                            />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 pt-1 text-[10px] md:text-xs">
        <div className="text-muted-foreground/90 select-none flex flex-col gap-1 leading-snug">
          <span>ACT(Vision-only)</span>
          <span>Ours-a (+Tactile +Pretrained)</span>
          <span>Ours-B (+Tactile +Pretrained +10% DAgger)</span>
          <span>Ours-C (+Tactile +Pretrained +20% DAgger)</span>
        </div>
      </CardFooter>
    </Card>
  )
}
