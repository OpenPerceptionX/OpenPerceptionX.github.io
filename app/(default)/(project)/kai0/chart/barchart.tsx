"use client"



import { TrendingUp } from "lucide-react"
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
    { month: "January", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "February", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "March", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "April", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "May", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "June", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
]



const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#4286F3",
    },
    mobile: {
        label: "Mobile",
        color: "#ebb017",
    },
} satisfies ChartConfig



export function ExampleBarChart() {
    return (
        <Card className="bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>January - June 2024 &#8593; &#8595;</CardDescription>
            </CardHeader>



            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            width={Math.max(...chartData.map((d) => String(d.desktop).length)) * 11}
                        >
                            {/* <Label
                                value="Visitors"
                                angle={-90}
                                position="insideLeft"
                                style={{ textAnchor: "middle" }}
                            /> */}
                        </YAxis>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-white"/>
                        <Bar dataKey="desktop" fill="var(--color-desktop)" yAxisId="left" radius={4}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                        <Bar dataKey="mobile" fill="var(--color-mobile)" yAxisId="left" radius={4}>
                            <ErrorBar stroke="white" 
                                dataKey="desktopStd" 
                                direction="y" 
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>



            <CardFooter className="px-0 [.border-t]:pt-0">
                <div className="flex w-full items-start">
                    <i className="leading-relaxed font-normal text-sm">
                        Example Bar Chart
                    </i>
                </div>
            </CardFooter>



        </Card>
    )
}
