"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, YAxis } from "recharts"

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

export function PolicyRolloutsAverage() {
  return (
    <Card className="border border-white/20 bg-black text-white">
      <CardHeader>
        <CardTitle className="text-sm md:text-base">Policy Success Rate (%)</CardTitle>
      </CardHeader>
      <CardContent className="p-2 md:p-4">
        <ChartContainer config={chartConfig} className="!aspect-auto h-[240px] md:h-[260px]">  
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
                if (!active || !payload?.length) return null

                const methodLabels = [
                  "ACT(Vision-only)",
                  "Ours-a (+Tactile +Pretrained)",
                  "Ours-B (+Tactile +Pretrained +DAgger)",
                ]

                return (
                  <div className="rounded-lg border border-white/20 bg-black/95 p-3 shadow-sm">
                    <div className="mb-2 text-sm font-semibold text-white">
                      {chartConfig[label as keyof typeof chartConfig]?.label || label}
                    </div>
                    <div className="grid gap-1.5">
                      {payload.map((entry, index) => (
                        <div key={`${entry.dataKey}-${index}`} className="flex items-center justify-between gap-3">
                          <span className="text-xs text-gray-300">
                            {methodLabels[index] || String(entry.dataKey)}
                          </span>
                          <span className="text-sm font-semibold text-white">
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
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground select-none flex flex-row gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#B8C9F0" }}></div>
            <span>ACT(Vision-only)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#7C9AE8" }}></div>
            <span>Ours-a (+Tactile +Pretrained)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#3D56C8" }}></div>
            <span>Ours-B (+Tactile +Pretrained +DAgger)</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
} 