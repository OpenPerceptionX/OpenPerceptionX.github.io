"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, LabelList } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
  { browser: "1", visitors: 0, fill: "var(--color-1)" },
  { browser: "2", visitors: 10, fill: "var(--color-2)" },
  { browser: "3", visitors: 20, fill: "var(--color-3)" },
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
    label: "Ours-α",
    color: "#6B8CE8",
  },
  3: {
    label: "Ours-β",
    color: "#4169D9",
  },
} satisfies ChartConfig

export function PolicyRollouts5() {
  return (
    <Card className="border border-white/20 bg-black text-white w-[275px] md:w-[300px] mx-auto">
      <CardHeader className="pb-1 md:pb-2">
        <CardTitle className="text-sm md:text-base">Policy Success Rate (%)</CardTitle>
      </CardHeader>
      <CardContent className="px-2 md:px-3 pt-0 pb-1">
        <ChartContainer config={chartConfig} className="!aspect-auto h-[185px] md:h-[210px] w-[245px] md:w-[270px] mx-auto">
          <BarChart accessibilityLayer data={chartData} barCategoryGap="0%" margin={{
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
              content={<ChartTooltipContent  />}
            />
            <Bar  className="select-none"
              dataKey="visitors"
              barSize={34}
              strokeWidth={1.5}
              radius={6}
              activeIndex={2}
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
      <CardFooter className="flex-col items-start gap-1.5 text-xs pt-1">
        <div className="text-muted-foreground/90 leading-relaxed select-none">
        ACT(Vision-only)
        <br />
        Ours-a (+Tactile +Pretrained)
        <br />
        Ours-B (+Tactile +Pretrained +DAgger)
        </div>
      </CardFooter>
    </Card>
  )
}
