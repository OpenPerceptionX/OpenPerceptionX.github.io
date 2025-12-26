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
    { trick: "Task A", single: 60, single_std: [9.4, 9.4], full: 73.3, full_std: [4.7, 4.7], model: 90, model_std: [4.7, 4.7], },
    { trick: "Task B", single: 63.3, single_std: [4.7, 4.7], full: 80, full_std: [4.7, 4.7], model: 86.7, model_std: [9.4, 9.4], },
    { trick: "Task C", single: 16.7, single_std: [4.7, 4.7], full: 26.7, full_std: [9.4, 9.4], model: 53.3, model_std: [14, 14], },
]



const chartConfig = {
    single: {
        label: "best candidate",
        color: "#4286F3",
    },
    full: {
        label: "full data",
        color: "#ebb017",
    },
    model: {
        label: "model arithmetic",
        color: "#55AF7B",
    },
} satisfies ChartConfig



export function SoupingBarChart1() {
    return (
        <Card className="w-full lg:max-w-1/2 bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Success Rate (%) &#8593;</CardDescription>
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
                            tickFormatter={(value) => value}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={6}
                            width={Math.max(...chartData.map((d) => String(d.single).length)) * 8}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-black"/>
                        <Bar dataKey="single" fill="var(--color-single)" yAxisId="left" radius={4}>
                            <ErrorBar stroke="white" 
                                dataKey="single_std" 
                                direction="y" 
                            />
                        </Bar>
                        <Bar dataKey="full" fill="var(--color-full)" yAxisId="left" radius={4}>
                            <ErrorBar stroke="white" 
                                dataKey="full_std" 
                                direction="y" 
                            />
                        </Bar>
                        <Bar dataKey="model" fill="var(--color-model)" yAxisId="left" radius={4}>
                            <ErrorBar stroke="white" 
                                dataKey="model_std" 
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
