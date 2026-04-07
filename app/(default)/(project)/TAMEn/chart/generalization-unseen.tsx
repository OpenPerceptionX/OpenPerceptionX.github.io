"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "../ui/chart";

const chartData = [
  { phase: "Herbal Transfer", vision: 0, ours: 60 },
  { phase: "Cable Mounting", vision: 0, ours: 30 },
  { phase: "Binder Clip Removal", vision: 30, ours: 60 },
];

const chartConfig = {
  vision: { label: "Ours (Vision-Only)", color: "#B8C9F0" },
  ours: { label: "Ours (+ Pretrain + DAgger)", color: "#3D56C8" },
};

const robustnessWholeTaskData = [
  {
    task: "Herbal Transfer",
    visionFull: 0,
    visionPost: 10,
    oursFull: 0,
    oursPost: 70,
  },
  {
    task: "Cable Mounting",
    visionFull: 0,
    visionPost: 0,
    oursFull: 30,
    oursPost: 40,
  },
];

const robustnessConfig = {
  visionFull: { label: "Vision-Only (Full Dist.)", color: "#DDE8FF" },
  visionPost: { label: "Vision-Only (Post-Grasp Dist.)", color: "#8FB2FF" },
  oursFull: { label: "Ours (+ Pretrain + DAgger) Full Dist.", color: "#4F7BFF" },
  oursPost: { label: "Ours (+ Pretrain + DAgger) Post-Grasp Dist.", color: "#1E3FAF" },
};

export function GeneralizationUnseenChart() {
  return (
    <Card className="border border-white/20 bg-black/60 text-white">
      <CardHeader className="pb-2 md:pb-3">
        <CardTitle className="text-sm md:text-base">
          Generalization to unseen objects
        </CardTitle>
        <p className="text-[11px] md:text-xs text-white/70">
          Visuo-tactile learning with tactile pretraining and DAgger significantly
          improves performance on unseen objects.
        </p>
      </CardHeader>
      <CardContent className="p-2 md:p-3">
        <ChartContainer config={chartConfig} className="!aspect-auto h-[210px] md:h-[235px]">
          <BarChart
            data={chartData}
            margin={{ top: 12, bottom: 6, left: 4, right: 4 }}
            barCategoryGap="18%"
            barGap={2}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="phase"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              angle={0}
              textAnchor="middle"
              interval={0}
              height={28}
            />
            <YAxis domain={[0, 100]} tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              shared={false}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                const entry = payload[payload.length - 1];
                const key = String(entry.dataKey) as keyof typeof chartConfig;
                const fullLabel = chartConfig[key]?.label || key;
                return (
                  <div className="rounded-md border border-white/20 bg-black/95 px-3 py-2 text-xs text-white shadow-md">
                    <div className="font-semibold mb-1">{label}</div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white/80">{fullLabel}</span>
                      <span className="font-semibold">{entry.value}%</span>
                    </div>
                  </div>
                );
              }}
            />
            <Bar dataKey="vision" fill="#B8C9F0" radius={6} minPointSize={4} maxBarSize={34}>
              <LabelList
                dataKey="vision"
                position="top"
                className="fill-foreground"
                fontSize={9}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
            <Bar dataKey="ours" fill="#3D56C8" radius={6} minPointSize={4} maxBarSize={34}>
              <LabelList
                dataKey="ours"
                position="top"
                className="fill-foreground"
                fontSize={9}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="pt-0 pb-3 md:pb-4 text-[11px] md:text-xs text-white/70 flex gap-4">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#B8C9F0]" />
          Ours (Vision-Only)
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#3D56C8]" />
          Ours (+ Pretrain + DAgger)
        </span>
      </CardFooter>
    </Card>
  );
}

export function RobustnessDisturbanceChart() {
  return (
    <Card className="border border-white/20 bg-black/60 text-white">
      <CardHeader className="pb-2 md:pb-3">
        <CardTitle className="text-sm md:text-base">
          Robustness in disturbed conditions
        </CardTitle>
        <p className="text-[11px] md:text-xs text-white/70">
          Tactile pretrain and DAgger improve robustness in contact-rich stages.
        </p>
      </CardHeader>
      <CardContent className="p-2 md:p-3">
        <ChartContainer config={robustnessConfig} className="!aspect-auto h-[220px] md:h-[245px]">
          <BarChart
            data={robustnessWholeTaskData}
            margin={{ top: 12, bottom: 6, left: 4, right: 4 }}
            barCategoryGap="10%"
            barGap={1}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="task" tickLine={false} axisLine={false} tickMargin={8} height={28} />
            <YAxis domain={[0, 100]} tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              shared={false}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                const entry = payload[payload.length - 1];
                const key = String(entry.dataKey) as keyof typeof robustnessConfig;
                const fullLabel = robustnessConfig[key]?.label || key;
                return (
                  <div className="rounded-md border border-white/20 bg-black/95 px-3 py-2 text-xs text-white shadow-md">
                    <div className="font-semibold mb-1">{label}</div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white/80">{fullLabel}</span>
                      <span className="font-semibold">{entry.value}%</span>
                    </div>
                  </div>
                );
              }}
            />
            <Bar dataKey="visionFull" fill="#DDE8FF" radius={5} minPointSize={4} maxBarSize={32}>
              <LabelList dataKey="visionFull" position="top" className="fill-foreground" fontSize={9} formatter={(value: number) => `${value}%`} />
            </Bar>
            <Bar dataKey="visionPost" fill="#8FB2FF" radius={5} minPointSize={4} maxBarSize={32}>
              <LabelList dataKey="visionPost" position="top" className="fill-foreground" fontSize={9} formatter={(value: number) => `${value}%`} />
            </Bar>
            <Bar dataKey="oursFull" fill="#4F7BFF" radius={5} minPointSize={4} maxBarSize={32}>
              <LabelList dataKey="oursFull" position="top" className="fill-foreground" fontSize={9} formatter={(value: number) => `${value}%`} />
            </Bar>
            <Bar dataKey="oursPost" fill="#1E3FAF" radius={5} minPointSize={4} maxBarSize={32}>
              <LabelList dataKey="oursPost" position="top" className="fill-foreground" fontSize={9} formatter={(value: number) => `${value}%`} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="pt-0 pb-3 md:pb-4 text-[11px] md:text-xs text-white/70 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#DDE8FF]" />
          Vision-Only (Full Dist.)
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#8FB2FF]" />
          Vision-Only (Post-Grasp Dist.)
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#4F7BFF]" />
          Ours (+ Pretrain + DAgger) Full Dist.
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#1E3FAF]" />
          Ours (+ Pretrain + DAgger) Post-Grasp Dist.
        </span>
      </CardFooter>
    </Card>
  );
}

