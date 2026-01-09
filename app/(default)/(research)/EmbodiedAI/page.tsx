import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Embodied AI | OpenDriveLab",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["Embodied AI", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};



import Image from 'next/image'
import Link from "next/link"



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
                        <li>
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
                            <time className="font-mono italic">1984</time>
                            <div className="text-lg font-black">First Macintosh computer</div>
                            The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                            personal computer. It played a pivotal role in establishing desktop publishing as a general
                            office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                            in a beige case with integrated carrying handle; it came with a keyboard and single-button
                            mouse.
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
                            <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">1998</time>
                            <div className="text-lg font-black">iMac</div>
                            iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                            been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                            and has evolved through seven distinct forms
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
