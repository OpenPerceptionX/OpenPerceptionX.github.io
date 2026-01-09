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
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {[...publications.values()].filter(publication => publication.keys.includes("embodied_ai")).map((publication, index) => (
                            <li key={publication.title}>
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
                                        1984
                                    </time>
                                    <Link href={publication.link} target={publication.link.startsWith('http') ? '_blank' : '_self'} className="text-xl hover:text-o-blue mt-1">
                                        {publication.title}
                                    </Link>
                                    <i className="text-sm text-o-gray whitespace-pre-line">
                                        {publication.description}
                                    </i>
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
                                </div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle mx-3">
                                <svg
                                viewBox="0 0 20 20"
                                className="h-5 w-5 text-o-gray"
                                fill="currentColor"
                                >
                                    <circle cx="10" cy="10" r="8" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-6 md:text-end grid gap-1">
                                <time>
                                    1984
                                </time>
                                <div>
                                    First Macintosh computer
                                </div>
                                <p>
                                    The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                                    personal computer. It played a pivotal role in establishing desktop publishing as a general
                                    office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                                    in a beige case with integrated carrying handle; it came with a keyboard and single-button
                                    mouse.
                                </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <div className="timeline-middle mx-3">
                                <svg
                                viewBox="0 0 20 20"
                                className="h-5 w-5 text-o-gray"
                                fill="currentColor"
                                >
                                    <circle cx="10" cy="10" r="8" />
                                </svg>
                            </div>
                            <div className="timeline-end mb-6 grid gap-1">
                                <time>
                                    1984
                                </time>
                                <div>
                                    First Macintosh computer
                                </div>
                                <p>
                                    The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                                    personal computer. It played a pivotal role in establishing desktop publishing as a general
                                    office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                                    in a beige case with integrated carrying handle; it came with a keyboard and single-button
                                    mouse.
                                </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2015</time>
                            <div className="text-lg font-black">Apple Watch</div>
                            The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                            tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                            iOS and other Apple products and services
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
           


        </div>
    )
}
