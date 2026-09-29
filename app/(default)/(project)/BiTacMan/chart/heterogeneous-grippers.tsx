"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "../ui/chart";

const chartData = [
  { task: "Bimanual Handover", success: 60 },
  { task: "Delicate Grasping", success: 70 },
];

const chartConfig = {
  success: { label: "Success Rate (%)", color: "#3D56C8" },
};

export function HeterogeneousGrippersChart() {
  return (
    <Card className="h-full border border-white/20 bg-black/60 text-white">
      <CardHeader className="pb-2 md:pb-3">
        <CardTitle className="text-center text-sm md:text-base">
          Policy performance with heterogeneous grippers
        </CardTitle>
        <p className="text-center text-[11px] text-white/70 md:text-xs">
          Success rate (%) on target grippers after interface adaptation.
        </p>
      </CardHeader>
      <CardContent className="p-3 md:p-4">
        <ChartContainer
          config={chartConfig}
          className="!aspect-auto mx-auto h-[220px] w-full max-w-xl md:h-[240px]"
        >
          <BarChart
            data={chartData}
            margin={{ top: 18, bottom: 12, left: 8, right: 8 }}
            barCategoryGap="34%"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="task"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              interval={0}
              height={32}
              tick={{
                fontSize: 11,
                fill: "rgba(255,255,255,0.75)",
              }}
            />
            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              width={36}
              tick={{
                fontSize: 11,
                fill: "rgba(255,255,255,0.65)",
              }}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                const entry = payload[0];
                return (
                  <div className="rounded-md border border-white/20 bg-black/95 px-3 py-2 text-xs text-white shadow-md">
                    <div className="mb-1 font-semibold">{label}</div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white/80">Success Rate</span>
                      <span className="font-semibold">{entry.value}%</span>
                    </div>
                  </div>
                );
              }}
            />
            <Bar dataKey="success" fill="#3D56C8" radius={8} maxBarSize={88}>
              <LabelList
                dataKey="success"
                position="top"
                className="fill-foreground"
                fontSize={11}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
