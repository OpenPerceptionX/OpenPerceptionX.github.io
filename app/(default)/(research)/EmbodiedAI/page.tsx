import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Embodied AI | OpenDriveLab",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["Embodied AI", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};



import Image from 'next/image'
import Link from "next/link"



import { categories, publications, scholar } from "@/data/publications"



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full px-6 flex justify-center mt-36 md:mt-24">
                <div className="w-full max-w-7xl flex flex-col gap-6 fg-gradient-blue">
                    <h1 className="text-t0 font-bold">
                        Embodied AI
                    </h1>
                    <span className="text-xl">
                        is the integration of artificial intelligence with the physical world, enabling robots to interact with and learn from the real world. We focus on the most critical areas of embodied AI, including humanoid, robot manipulation, and dexterous hand. Our goal is to explore the scaling law for robots, develop general world models, and unveil the power of reinforcement learning to achieve general-purpose embodied agents. For a complete list of publications, please see <Link href="/publications" className="underline text-o-blue hover:text-o-light-blue">here</Link>.
                    </span>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {[...publications.values()].filter(publication => publication.timeline.includes("tembodied")).map((publication, index) => (
                            <li key={publication.title}>
                                {
                                    index != 0 && (
                                        <hr />
                                    )
                                }



                                <div className="timeline-middle mx-3">
                                    <svg
                                    viewBox="0 0 20 20"
                                    className="h-5 w-5 text-o-gray"
                                    fill="currentColor"
                                    >
                                        <circle cx="10" cy="10" r="8" />
                                    </svg>
                                </div>



                                <div
                                className={`mb-6 grid gap-1 ${
                                    index % 2 === 1 ? "timeline-end md:text-start" : "timeline-start md:text-end"
                                }`}
                                >



                                    <time className="text-o-gray">
                                        {publication.time}
                                    </time>



                                    <Link href={publication.link} target={publication.link.startsWith('http') ? '_blank' : '_self'} className="text-xl hover:text-o-blue mt-1">
                                        {publication.title}
                                    </Link>



                                    <i className="text-sm text-o-gray whitespace-pre-line">
                                        {publication.description}
                                    </i>



                                    {
                                        publication.timeline.includes("highlight") && (
                                            <div className="px-20 w-full flex justify-center items-center relative mt-3">
                                                <Link href={publication.link} target={publication.link.startsWith('http') ? '_blank' : '_self'}>
                                                    <Image
                                                        src={publication.image}
                                                        alt={publication.title}
                                                        width={1024}
                                                        height={1024}
                                                        className="rounded-sm bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                                                    />
                                                </Link>
                                            </div>
                                        )
                                    }



                                </div>



                                {
                                    index != [...publications.values()].filter(publication => publication.timeline.includes("tembodied")).length - 1 && (
                                        <hr />
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



        </div>
    )
}
