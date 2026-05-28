import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "xxx | OpenDriveLab",
    description: "xxx",
    keywords: ["xxx", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU"],
};



import { ExampleBarChart } from "./chart/barchart"




import Citation from "./citation"



import Image from 'next/image'
import Link from "next/link"
import { Slash } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CitationLayout, CitationNote } from "@/components/citation"



export default function Home() {
    return (
        <div className="w-full overflow-x-hidden pt-36 md:pt-24 flex flex-row justify-center">
            {/* transferable */}
            <div className="w-full flex flex-col justify-center">



                <div className="flex flex-row gap-6 justify-center mt-6">
                    <div></div>
                    <h1 className="w-full max-w-7xl font-bold text-t1 leading-tight">
                        &chi;<sub>0</sub>RL: xxx
                    </h1>
                    <div></div>
                </div>



                <div className="flex flex-row gap-6 justify-center mt-6">
                    <div></div>
                    <div className="w-full max-w-7xl flex flex-row items-start justify-start gap-3 border-l-2 border-black pl-3">
                        <p className="w-full leading-relaxed">
                            NOTE
                        </p>
                    </div>
                    <div></div>
                </div>



                <div className="flex flex-row gap-6 justify-center mt-6">
                    <div></div>
                    <div className="w-full max-w-7xl flex flex-col gap-2 font-mono">
                        {/* Published */}
                        <div className="flex flex-row gap-6 md:gap-10 xl:gap-20 2xl:gap-40">
                            <h2 className="whitespace-nowrap shrink-0 w-[6rem]">
                                Published
                            </h2>
                            <h2 className="flex-1 break-words">
                                December 24, 2025
                            </h2>
                        </div>
                        {/* Report */}
                        <div className="flex flex-row gap-6 md:gap-10 xl:gap-20 2xl:gap-40">
                            <h2 className="whitespace-nowrap shrink-0 w-[6rem]">
                                Report
                            </h2>
                            <h2 className="flex-1 break-words">
                                Available in Late January 2026
                            </h2>
                        </div>

                        {/* Email */}
                        <div className="flex flex-row gap-6 md:gap-10 xl:gap-20 2xl:gap-40">
                            <h2 className="whitespace-nowrap shrink-0 w-[6rem]">
                                Email
                            </h2>
                            <h2 className="flex-1 break-all">
                                <Link
                                    className="text-o-blue animated-underline hover:text-o-blue"
                                    href="mailto:research@mmlab.hk"
                                >
                                    research@mmlab.hk
                                </Link>
                            </h2>
                        </div>
                        {/* By */}
                        <div className="flex flex-row gap-6 md:gap-10 xl:gap-20 2xl:gap-40">
                            <h2 className="whitespace-nowrap shrink-0 w-[6rem]">
                                By
                            </h2>
                            <h2 className="flex-1">
                                HKU MMLab
                            </h2>
                        </div>
                        {/* Post */}
                        <div className="flex flex-row gap-6 md:gap-10 xl:gap-20 2xl:gap-40">
                            <h2 className="whitespace-nowrap shrink-0 w-[6rem]">
                                Share
                            </h2>
                            <h2 className="flex flex-row flex-wrap gap-x-2 flex-1 items-center">
                                <Link className="text-o-blue animated-underline hover:text-o-blue" href="https://x.com/OpenDriveLab/status/2003745616955142150?s=20" target="_blank">
                                    X
                                </Link>
                                <span className="text-xs select-none">|</span>
                                <Link className="text-o-blue animated-underline hover:text-o-blue" href="https://www.linkedin.com/feed/update/urn:li:activity:7409531902761795584/" target="_blank">
                                    LinkedIn
                                </Link>
                                <span className="text-xs select-none">|</span>
                                <Link className="text-o-blue animated-underline hover:text-o-blue" href="https://bsky.app/profile/opendrivelab.bsky.social/post/3mapyr5u4nc24" target="_blank">
                                    Bluesky
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div></div>
                </div>



                <div className="flex flex-row gap-6 justify-center mt-6">
                    <div></div>
                    <Image
                        src="https://ik.imagekit.io/mmlab/mmlab@hku.jpg"
                        alt="Nashville" 
                        width={352}
                        height={384}
                        className="w-full max-w-7xl object-cover object-center rounded-sm bg-gradient-loading select-none"
                    />
                    <div></div>
                </div>



                <div className="flex flex-row gap-6 justify-center mt-6">
                    <div></div>
                    <video
                            autoPlay muted loop controls playsInline
                            poster="https://assets.kinetixai.cn/FoldAnything/full.png"
                            className="w-full max-w-7xl object-cover object-center rounded-sm bg-gradient-loading select-none aspect-video"
                        >
                            <source src="https://assets.kinetixai.cn/FoldAnything/opening_Dec23_demo_v7.mp4" type="video/mp4" />
                    </video>
                    <div></div>
                </div>


                <div className="w-full flex flex-col items-center my-20 px-6" id="introduction" >
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full max-w-4xl flex flex-col relative p-10 gap-6">
                            <div className="absolute top-0 left-0 xl:left-64 w-8 h-8 border-t-6 border-l-6 border-black"></div>
                            <div className="absolute bottom-0 right-0 xl:right-64 w-8 h-8 border-b-6 border-r-6 border-black"></div>
                            <h2 className="text-4xl font-bold text-center">
                                quotation
                            </h2>
                        </div>
                    </div>
                    <div className="w-full max-w-4xl flex flex-row justify-end mt-6 xl:pr-64">
                        <i>author</i>
                    </div> 
                </div>



                <div className="mt-6 flex flex-row gap-6 justify-center">
                    <div></div>
                    <div className="max-w-4xl flex flex-row items-start w-full justify-start gap-3 border-l-2 border-black pl-3">
                        <div className="flex items-start pt-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 text-black"
                            >
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                                <path d="M19 5a9 9 0 0 1 0 14" />
                            </svg>
                        </div>
                        <p className="w-full leading-relaxed">
                            We will release data, checkpoints, and host <a className="text-o-blue animated-underline hover:text-o-blue" href="/">Challenge</a> in 2026.
                        </p>
                    </div>
                    <div></div>
                </div>



                <div className="w-full flex flex-col items-center px-6">
                    <h2 className="w-full max-w-4xl mt-20 text-4xl font-bold"> 
                        <Link href="#methodology" className="scroll-mt-32 group flex items-center flex-row" id="methodology">
                            <h2>
                                Heading 1
                            </h2>
                            <div className="min-w-12 select-none">
                                <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                        <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                    </svg>
                                </span> 
                            </div>
                        </Link>
                    </h2>
                </div>

                
                
                <div className="w-full flex flex-col items-center px-6">
                    <h2 className="w-full max-w-4xl mt-10 text-xl font-bold"> 
                        <Link href="#mode_consistency" className="scroll-mt-32 group flex items-center flex-row" id="mode_consistency">
                            <h2>
                                Heading 2
                            </h2>
                            <div className="min-w-12 select-none">
                                <span className="ml-6 hidden group-hover:inline-block size-4 text-foreground">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                        <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                    </svg>
                                </span> 
                            </div>
                        </Link>
                    </h2>
                </div>



                <div className="flex flex-row gap-6 justify-center mt-6">
                    <div></div>
                    <p className="w-full leading-relaxed max-w-4xl">
                        text
                    </p>
                    <div></div>
                </div>



                <CitationLayout offset={1}>
                    <p className="w-full leading-relaxed mt-6">
                        "Veni, Vidi, Vici" - I came, I saw, I conquered. Just as Julius Caesar's swift victory at Zela defined strategic efficiency, we aim to conquer the "Mount Everest" of robotics: 100% reliability in real-world garment manipulation. In this mission, Veni (data collection), Vidi (model training), and Vici (real-robot inference) form a progressive, interlocking chain where every link is critical. While foundational models like{" "}
                        Pi0
                        <CitationNote id={1} link="https://www.physicalintelligence.company/blog/pi0">
                            &pi;<sub>0</sub> (2024)
                        </CitationNote>{" "}
                        and{" "}
                        GO-1
                        <CitationNote id={2} link="https://opendrivelab.com/OpenGO1/">
                            GO-1 (2025)
                        </CitationNote>{" "}
                        rely on "brute-force" scale to reach these heights, we present a resource-aware alternative. We demonstrate how to take a system from 0% to 100% reliability using a fraction of the standard cost—specifically, within 20 hours of human demonstration and 8xA100 GPUs, rather than the tens of thousands of hours and hundreds of GPUs typically required.
                        <br /><br />
                        We achieve this through a three-stage technical philosophy that optimizes the transition from seeing to conquering:
                    </p>
                </CitationLayout>



                <div className="mt-6 flex flex-row gap-6 justify-center px-6">
                    <ol className="space-y-3 w-full leading-relaxed max-w-4xl list-decimal px-4 md:px-6">
                        <li>
                            <b>
                                Mode Consistency:&nbsp;
                            </b>
                            We argue that not all data is created equal. By strictly aligning the human demonstration distribution ($P_train$), the model's knowledge ($Q_model$), and the test-time distribution ($P_test$), we minimize in-distribution shifts that lead to failure.
                        </li>
                    </ol>
                </div>
                


                <div className="flex flex-row gap-6 justify-center mt-6">
                    <div></div>
                    <div className="w-full max-w-7xl grid grid-cols-3 gap-6">
                        <video
                            autoPlay muted loop controls playsInline
                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                            className="w-full aspect-video rounded-sm"
                        >
                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                        </video>
                        <video
                            autoPlay muted loop controls playsInline
                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                            className="w-full aspect-video rounded-sm"
                        >
                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                        </video>
                        <ExampleBarChart />
                    </div>
                    <div></div>
                </div>
                <div className="flex flex-row gap-6 justify-center mt-3">
                    <div></div>
                    <p className="text-sm leading-relaxed text-muted-foreground/80 max-w-4xl">
                        CAPTION
                    </p>
                    <div></div>
                </div>



                <div className="w-full flex flex-col items-center px-6">
                    <h2 className="w-full max-w-4xl mt-20 text-4xl font-bold"> 
                        <Link href="#bottom_line" className="scroll-mt-32 group flex items-center flex-row" id="bottom_line">
                            <h2>
                                Bottom Line
                            </h2>
                            <div className="min-w-12 select-none">
                                <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                        <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                    </svg>
                                </span> 
                            </div>
                        </Link>
                    </h2>
                </div>



                <div className="w-full flex flex-col items-center px-6">
                    <h2 className="w-full max-w-4xl mt-20 text-4xl font-bold"> 
                        <Link href="#citation" className="scroll-mt-32 group flex items-center flex-row" id="citation">
                            <h2>
                                Citation
                            </h2>
                            <div className="min-w-12 select-none">
                                <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                        <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                    </svg>
                                </span> 
                    </div>
                        </Link>
                    </h2>
                </div>
                <Citation/>



            </div>
        </div>
    );
}
