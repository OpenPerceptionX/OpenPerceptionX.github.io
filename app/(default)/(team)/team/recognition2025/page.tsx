import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Recognition 2025 | OpenDriveLab",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["Recognition", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU" ],
};



import Image from 'next/image'
import Link from "next/link"



import { AspectRatio } from "@/components/ui/aspect-ratio"



export const members: {
    name: string;
    desc: string;
}[] = [
    {
        name: "Tianyu Li",
        desc: "Outstanding Funding Buddy 最佳項目夥計獎",
    },
    {
        name: "Hai Zhang",
        desc: "Outstanding Funding Buddy 最佳項目夥計獎 & Outstanding Teaching Assistant 最佳助教獎",
    },
    {
        name: "Modi Shi",
        desc: "Outstanding Research 最佳研究獎",
    },
    {
        name: "Jiazhi Yang",
        desc: "Outstanding Research 最佳研究獎",
    },
    {
        name: "Hugo Mak",
        desc: "Outstanding Teaching Assistant 最佳助教獎 & Outstanding Service, Knowledge Transfer & Outreach 最佳服務、對外交流獎",
    },
    {
        name: "Zhuoheng Li",
        desc: "Outstanding Service, Knowledge Transfer & Outreach 最佳服務、對外交流獎",
    },
]


export default function Home() {
    return (
        <div className="w-full">


            <div className="flex flex-row gap-6 justify-center mt-36 md:mt-24">
                <div></div>
                <h1 className="w-full max-w-7xl font-bold text-t1 leading-tight">
                    Recognition 2025
                </h1>
                <div></div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl">
                    <div className="w-full max-w-5xl flex flex-col gap-6">
                        {members.map((member) => (
                            <div className="flex gap-6" key={member.name}>
                                <div className="flex-1/3">
                                    <span>
                                        {member.name}
                                    </span>
                                </div>
                                <i className="flex-2/3">
                                    {member.desc}
                                </i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>





        </div>
    )
}
