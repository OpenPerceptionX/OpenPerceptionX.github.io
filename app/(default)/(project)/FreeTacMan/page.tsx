import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "FreeTacMan | OpenDriveLab",
    description: "FreeTacMan",
    keywords: ["FreeTacMan", "OpenDriveLab"],
};

import Image from 'next/image'
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Home() {
    return (
        <div className="w-full overflow-x-hidden">
            <div className="w-full xl:h-screen flex flex-col xl:flex-row gap-10 xl:gap-20 justify-around xl:justify-center items-center p-20">
                <div className="flex-1/2 h-1/3 w-full xl:h-full flex flex-col justify-center select-none">
                    <AspectRatio ratio={16/9}>
                        <Image
                            src="https://ik.imagekit.io/opendrivelab/freetacman.jpg"
                            alt="FreeTacMan"
                            fill
                            className="rounded-sm object-cover bg-gradient-landing"
                        />
                    </AspectRatio>
                </div>
                <div className="flex-1/2 flex flex-col gap-3 xl:justify-around">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-7xl 3xl:text-8xl font-bold w-full fg-gradient-blue">
                                FreeTacMan
                            </h1>
                            <h1 className="text-4xl 3xl:text-5xl font-bold w-full fg-gradient-blue pb-3">
                                Free-View Tactical Manipulator for Embodied AI
                            </h1>
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            {/* 作者信息可以在有实际内容时添加 */}
                        </div>
                        <div className="flex flex-wrap gap-6">
                            {/* 链接按钮可以在有实际链接时添加 */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-4xl font-bold scroll-mt-32" id="overview">
                    项目概述
                </h1>
            </div>
            <div className="flex flex-row justify-center px-6 mt-20">
                <p className="max-w-4xl text-bl text-justify leading-relaxed xl:leading-loose">
                    FreeTacMan (Free-View Tactical Manipulator) 是一个用于具身人工智能的自由视角战术操作器项目，
                    旨在为实体机器人和虚拟代理提供高级操纵能力。该项目结合了计算机视觉、机器人技术和深度学习，
                    使智能体能够从任意视角理解并操作环境中的对象。
                    
                    更多详细内容将在项目正式发布后更新。
                </p>
            </div>
        </div>
    )
} 