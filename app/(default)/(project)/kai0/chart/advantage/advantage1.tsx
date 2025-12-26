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
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    type ChartConfig,
} from "@/components/ui/chart"



const chartData = [
    { trick: "chrome", MSTD: 0.0160, MSTDLabel: "0.0160", fill: "var(--color-chrome)" },
    { trick: "safari", MSTD: 0.0151, MSTDLabel: "0.0151", fill: "var(--color-safari)" },
    { trick: "firefox", MSTD: 0.0115, MSTDLabel: "0.0115", fill: "var(--color-firefox)" },
]



const chartConfig = {
    chrome: {
        label: "Value-diff",
        color: "#4286F3",
    },
    safari: {
        label: "Direct",
        color: "#ebb017",
    },
    firefox: {
        label: "Direct+Stage",
        color: "#55AF7B",
    },
} satisfies ChartConfig



export function AdvantageBarChart1() {
    return (
        <Card className="w-full lg:max-w-1/2 bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Mean Squared Temporal Difference (MSTD) &#8595;</CardDescription>
            </CardHeader>



            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData} margin={{ top: 16, right: 0, left: 0, bottom: 0 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="trick"
                            tickLine={false}
                            tickMargin={6}
                            axisLine={false}
                            tickFormatter={(value) =>
                                chartConfig[value as keyof typeof chartConfig]?.label
                        }
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={6}
                            width={48}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-black"/>
                        <Bar
                            yAxisId="left"
                            dataKey="MSTD"
                            strokeWidth={2}
                            radius={4}
                            activeIndex={2}
                            activeBar={({ ...props }) => <Rectangle {...props} fillOpacity={0.8} />}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>



            {/* <CardFooter className="px-0 -mt-6">
                <div className="flex w-full justify-center">
                    <i className="leading-relaxed font-normal text-black text-sm">
                       desc
                    </i>
                </div>
            </CardFooter> */}



        </Card>
    )
}
