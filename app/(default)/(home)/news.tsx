'use client'



import * as React from "react"



import Link from "next/link"



import { Badge } from "@/components/ui/badge"



export function News() {
    return (
        <div className="w-full px-6 flex justify-center mt-12">
            <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                <ul className="space-y-6">
                    <li className="flex items-center gap-1 flex-wrap">
                        {/* <Badge variant="outline"> */}
                        <Badge variant="default">
                            2025.09.19
                        </Badge>
                        GO-1 is now open source on
                        <Link className="text-o-blue animated-underline" href="https://github.com/OpenDriveLab/AgiBot-World" target="_blank">[GitHub]</Link>
                        with our technical blog available at 
                        <Link className="text-o-blue animated-underline" href="https://opendrivelab.com/OpenGO1" target="_blank">OpenGO1</Link>
                        .
                    </li>
                    <li className="flex items-center gap-1 flex-wrap">
                        {/* <Badge variant="outline"> */}
                        <Badge variant="default">
                            2025.07.01
                        </Badge>
                        DetAny3D is now open source. Check it out on: 
                        <Link className="text-o-blue animated-underline" href="https://github.com/OpenDriveLab/DetAny3D" target="_blank">github.com/OpenDriveLab/DetAny3D</Link>
                        .
                    </li>
                    <li className="flex items-center gap-1 flex-wrap">
                        <Badge variant="default">
                            2025.07.01
                        </Badge>
                        <Link className="text-o-blue animated-underline" href="/challenge2025">[AGC 2025]</Link>
                        The ICCV phase is ON! Explore the
                        <Link className="text-o-blue animated-underline" href="/challenge2025//#navsim-e2e-driving">NAVSIM v2 End-to-End Driving Challenge</Link>
                        and the
                        <Link className="text-o-blue animated-underline" href="/challenge2025//#1x-wm">World Model Challenge by 1X</Link>
                        .
                    </li>
                    <li className="flex items-center gap-1 flex-wrap">
                        <Badge variant="default">
                            2025.07.01
                        </Badge>
                        <Link className="text-o-blue animated-underline" href="/challenge2025">[AGC 2025]</Link>
                        The IROS phase is ON! Explore the
                        <Link className="text-o-blue animated-underline" href="/challenge2025//#agibot-world">AgiBot World Challenge</Link>
                        .
                    </li>
                </ul>
            </div>
        </div>
    )
}
