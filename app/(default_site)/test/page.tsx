import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "OpenDriveLab | Robotics and Autonomous Driving at HKU, SII, and beyond",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};

import * as React from "react"

import Image from 'next/image'
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Landing } from "./landing"


export default function Home() {

    return (
        <div className="w-full">



            {/* landing */}
            <Landing />



        </div>
    )
}
