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
} from "@/components/project/freetacman/ui/chart"
const chartData = [
  { browser: "1", visitors: 20, fill: "var(--color-1)" },
  { browser: "2", visitors: 70, fill: "var(--color-2)" },
  { browser: "3", visitors: 90, fill: "var(--color-3)" },
]

const chartConfig = {
  visitors: {
    label: "Success Rate (%):",
  },
  1: {
    label: "ACT",
    color: "#9DE2DE",
  },
  2: {
    label: "Ours-α",
    color: "#62D3CB",
  },
  3: {
    label: "Ours-β",
    color: "#43C9C1",
  },
} satisfies ChartConfig

export function PolicyRollouts2() {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle>Policy Success Rate (%)</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} margin={{
              top: 30,
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
              strokeWidth={2}
              radius={8}
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
                              offset={12}
                              className="fill-foreground"
                              fontSize={12}
                            />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground select-none">
        ACT: Vision-only
        <br></br>
        Ours-α: + Tactile
        <br></br>
        Ours-β: + Tactile Pretrained
        </div>
      </CardFooter>
    </Card>
  )
}
