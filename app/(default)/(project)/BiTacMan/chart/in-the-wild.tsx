"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "../ui/chart";

const chartData = [
  { task: "Herbal Transfer", lab: 75, wild: 70 },
  { task: "Cable Mounting", lab: 40, wild: 30 },
  { task: "Binder Clip Removal", lab: 80, wild: 80 },
  { task: "Dish Washing", lab: 65, wild: 60 },
  { task: "Avg.", lab: 61, wild: 51 },
];

const chartConfig = {
  lab: { label: "Lab.", color: "#B8C9F0" },
  wild: { label: "Wild", color: "#3D56C8" },
};

const NARROW_CHART_PX = 560;

function useChartNarrow(ref: React.RefObject<HTMLDivElement | null>) {
  const [narrow, setNarrow] = React.useState(false);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      setNarrow(el.getBoundingClientRect().width < NARROW_CHART_PX);
    });
    ro.observe(el);
    setNarrow(el.getBoundingClientRect().width < NARROW_CHART_PX);
    return () => ro.disconnect();
  }, []);

  return narrow;
}

export function InTheWildChart() {
  const chartRef = React.useRef<HTMLDivElement>(null);
  const narrow = useChartNarrow(chartRef);
  const tickPx = narrow ? 8 : 10;

  return (
    <Card className="border border-white/20 bg-black/60 text-white">
      <CardHeader className="pb-2 md:pb-3">
        <CardTitle className="text-sm md:text-base">
          In-the-wild system evaluation
        </CardTitle>
        <p className="text-[11px] md:text-xs text-white/70">
          Policy success rates (%) across contact-rich tasks in laboratory and
          real-world environments.
        </p>
      </CardHeader>
      <CardContent className="p-2 md:p-3">
        <ChartContainer
          ref={chartRef}
          config={chartConfig}
          className="!aspect-auto h-[268px] md:h-[255px]"
        >
          <BarChart
            data={chartData}
            margin={{
              top: 14,
              bottom: narrow ? 52 : 8,
              left: narrow ? 2 : 4,
              right: narrow ? 2 : 4,
            }}
            barCategoryGap="14%"
            barGap={2}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="task"
              tickLine={false}
              axisLine={false}
              tickMargin={narrow ? 2 : 8}
              angle={narrow ? -32 : 0}
              textAnchor={narrow ? "end" : "middle"}
              interval={0}
              height={narrow ? 58 : 28}
              tick={{
                fontSize: tickPx,
                fill: "rgba(255,255,255,0.65)",
              }}
              dy={narrow ? 4 : 0}
            />
            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              width={narrow ? 26 : 36}
              tick={{
                fontSize: tickPx,
                fill: "rgba(255,255,255,0.65)",
              }}
            />
            <ChartTooltip
              cursor={false}
              shared={false}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                const entry = payload[payload.length - 1];
                const key = String(entry.dataKey) as keyof typeof chartConfig;
                const note =
                  label === "Avg."
                    ? key === "lab"
                      ? " (61 ± 18)"
                      : " (51 ± 27)"
                    : "";
                return (
                  <div className="rounded-md border border-white/20 bg-black/95 px-3 py-2 text-xs text-white shadow-md">
                    <div className="mb-1 font-semibold">{label}</div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white/80">
                        {chartConfig[key]?.label || key}
                      </span>
                      <span className="font-semibold">
                        {entry.value}%{note}
                      </span>
                    </div>
                  </div>
                );
              }}
            />
            <Bar dataKey="lab" fill="#B8C9F0" radius={6} maxBarSize={34}>
              <LabelList
                dataKey="lab"
                position="top"
                className="fill-foreground"
                fontSize={9}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
            <Bar dataKey="wild" fill="#3D56C8" radius={6} maxBarSize={34}>
              <LabelList
                dataKey="wild"
                position="top"
                className="fill-foreground"
                fontSize={9}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex gap-4 pt-0 pb-3 text-[11px] text-white/70 md:pb-4 md:text-xs">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#B8C9F0]" />
          Lab.
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#3D56C8]" />
          Wild
        </span>
      </CardFooter>
    </Card>
  );
}
