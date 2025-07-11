"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, LabelList, YAxis } from "recharts"

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
  { category: "1", value1: 35, value2: 75, value3: 80, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "2", value1: 20, value2: 70, value3: 90, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "3", value1: 20, value2: 55, value3: 85, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "4", value1: 30, value2: 65, value3: 80, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "5", value1: 0, value2: 10, value3: 20, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "6", value1: 21, value2: 55, value3: 71, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
]

const chartConfig = {
  value1: {
    label: "Success Rate (%):",
  },
  value2: {
    label: "Success Rate (%):",
  },
  value3: {
    label: "Success Rate (%):",
  },
  1: {
    label: "Fragile Cup",
    color: "#98AEF3",
  },
  2: {
    label: "Texture Cls.",
    color: "#174BE5",
  },
  3: {
    label: "Stamp Press",
    color: "#4CAF50",
  },
  4: {
    label: "Calligraphy",
    color: "#FFC107",
  },
  5: {
    label: "USB Plug",
    color: "#FF5722",
  },
  6: {
    label: "Avg.",
    color: "#9C27B0",
  },
} satisfies ChartConfig

export function PolicyRolloutsAverage() {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle>Policy Success Rate (%)</CardTitle>
      </CardHeader>
      <CardContent className="p-2 md:p-4">
        <ChartContainer config={chartConfig} className="!aspect-auto h-[300px]">  
          <BarChart accessibilityLayer data={chartData} margin={{
              top: 20,
              bottom: 20,
              left: 20,
              right: 20
            }}>
            <CartesianGrid vertical={false} />
            <XAxis className="select-none"
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <YAxis 
              domain={[0, 100]}
              tickFormatter={(value) => `${(value).toFixed(0)}`}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-3 shadow-sm">
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: payload[0].color }} />
                            <span className="text-sm font-medium">
                              {chartConfig[label as keyof typeof chartConfig]?.label || label}
                            </span>
                          </div>
                        </div>
                        {payload.map((entry, index) => (
                          <div key={entry.name} className="flex items-center justify-between gap-2">
                            <span className="text-sm text-muted-foreground">
                              {index === 0 ? "ACT (Vision-only)" : index === 1 ? "Ours-α (Tactile)" : "Ours-β (Tactile Pretrained)"}
                            </span>
                            <span className="text-sm font-medium">
                              {entry.value}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar className="select-none"
              dataKey="value1"
              strokeWidth={2}
              radius={8}
              fill="#bfbfbf"
              activeIndex={1}
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
            <Bar className="select-none"
              dataKey="value2"
              strokeWidth={2}
              radius={8}
              fill="#5bd0c7"
              activeIndex={1}
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
            <Bar className="select-none"
              dataKey="value3"
              strokeWidth={2}
              radius={8}
              fill="#174be5"
              activeIndex={1}
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
        <div className="text-muted-foreground select-none flex flex-row gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#bfbfbf" }}></div>
            <span>ACT (Vision-only)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#5bd0c7" }}></div>
            <span>Ours-α (Tactile)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#174be5" }}></div>
            <span>Ours-β (Tactile Pretrained)</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
} 