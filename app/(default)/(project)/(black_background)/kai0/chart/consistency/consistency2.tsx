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
    { trick: "baseline", pi05: 1.8, pi05_std: [0.3, 0.3], pi0: 0, pi0_std: [0, 0.001], },
    // { trick: "improved\nbaseline", pi05: 9.6, pi05_std: [1.2, 1.2], pi0: 5.33, pi0_std: [1, 1], },
    { trick: "+ heuristic DAgger", pi05: 7.7, pi05_std: [0.8, 0.8], pi0: 9.25, pi0_std: [1.1, 1.1], },
    { trick: "+ DAgger", pi05: 3.9, pi05_std: [0.5, 0.5], pi0: 8.25, pi0_std: [0.9, 0.9], },
]



const chartConfig = {
    pi05: {
        label: "pi05",
        color: "#4286F3",
    },
    pi0: {
        label: "pi0",
        color: "#ebb017",
    },
} satisfies ChartConfig



export function ConsistencyBarChart2() {
    return (
        <Card className="w-full lg:max-w-1/2 bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Recover Cost &#8595;</CardDescription>
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
                            width={Math.max(...chartData.map((d) => String(d.pi05).length)) * 8}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-black"/>
                        <Bar dataKey="pi05" fill="var(--color-pi05)" yAxisId="left" radius={4}>
                            <ErrorBar stroke="white" 
                                dataKey="pi05_std" 
                                direction="y" 
                            />
                        </Bar>
                        <Bar dataKey="pi0" fill="var(--color-pi0)" yAxisId="left" radius={4}>
                            <ErrorBar stroke="white" 
                                dataKey="pi0_std" 
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
