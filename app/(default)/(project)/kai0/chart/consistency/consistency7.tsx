"use client"



import { Bar, BarChart, CartesianGrid, XAxis, LabelList, ErrorBar, YAxis, Label  } from "recharts"



import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    type ChartConfig,
} from "@/components/ui/chart"



const chartData = [
    { trick: "baseline", absolute: 13.05, absolute_std: [1.2, 1.2], delta: 6.54, delta_std: [0.9, 0.9], },
    { trick: "w/. space mirroring", absolute: 4.32, absolute_std: [0.8, 0.8], delta: 3.6, delta_std: [0.6, 0.6], },
]



const chartConfig = {
    absolute: {
        label: "absolute",
        color: "#4286F3",
    },
    delta: {
        label: "delta action",
        color: "#ebb017",
    },
} satisfies ChartConfig



export function ConsistencyBarChart7() {
    return (
        <Card className="w-full lg:max-w-1/2 bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Recover Cost (%) &#8595;</CardDescription>
            </CardHeader>



            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="trick"
                            tickLine={false}
                            tickMargin={6}
                            axisLine={false}
                            height={60}
                            angle={0}
                            textAnchor="middle"
                            tick={(props: any) => {
                                const { x, y, payload } = props;
                                return (
                                    <g transform={`translate(${x},${y})`}>
                                        <text
                                            x={0}
                                            y={0}
                                            dy={16}
                                            textAnchor="middle"
                                            fill="#fff"
                                            fontSize={10}
                                        >
                                            {payload.value.split('\n').map((line: string, i: number) => (
                                                <tspan key={i} x={0} dy={i === 0 ? 0 : 14}>
                                                    {line}
                                                </tspan>
                                            ))}
                                        </text>
                                    </g>
                                );
                            }}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={6}
                            width={Math.max(...chartData.map((d) => String(d.absolute).length)) * 8}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-black"/>
                        <Bar dataKey="absolute" fill="var(--color-absolute)" yAxisId="left" radius={4}>
                            <ErrorBar stroke="white" 
                                dataKey="absolute_std" 
                                direction="y" 
                            />
                        </Bar>
                        <Bar dataKey="delta" fill="var(--color-delta)" yAxisId="left" radius={4}>
                            <ErrorBar stroke="white" 
                                dataKey="delta_std" 
                                direction="y" 
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>



            {/* <CardFooter className="px-0 [.border-t]:pt-0">
                <div className="flex w-full justify-center">
                    <i className="leading-relaxed font-normal text-black text-sm">
                       desc
                    </i>
                </div>
            </CardFooter> */}



        </Card>
    )
}
