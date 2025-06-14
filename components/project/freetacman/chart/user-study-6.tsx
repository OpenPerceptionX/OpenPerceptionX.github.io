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
  { browser: "1", visitors: 0.065, fill: "var(--color-1)" },
  { browser: "2", visitors: 0.031, fill: "var(--color-2)" },
  { browser: "3", visitors: 0.175, fill: "var(--color-3)" },
]

const chartConfig = {
  visitors: {
    label: "CPUT Score: ",
  },
  1: {
    label: "ALOHA",
    color: "#f2b3b3",
  },
  2: {
    label: "UMI",
    color: "#e04d4d",
  },
  3: {
    label: "Ours",
    color: "#d20000",
  },
} satisfies ChartConfig

export function UserStudy6() {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle>CPUT Score</CardTitle>
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
              content={<ChartTooltipContent />}
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
    </Card>
  )
}
