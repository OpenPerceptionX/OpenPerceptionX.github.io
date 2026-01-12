import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "kai0 | OpenDriveLab",
    description: "kai0: A Live-Stream Robotic Teamwork for Clothing Manipulation from Zero to Hero",
    keywords: ["kai0", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU"],
};



// import './local.css'



// import { ExampleChart } from "./chart/examplechart"
// import { ExampleBarChart } from "./chart/barchart"



import { ConsistencyBarChart1 } from "./chart/consistency/consistency1"
import { ConsistencyBarChart2 } from "./chart/consistency/consistency2"
import { ConsistencyBarChart3 } from "./chart/consistency/consistency3"
import { ConsistencyBarChart4 } from "./chart/consistency/consistency4"
import { ConsistencyBarChart5 } from "./chart/consistency/consistency5"
import { ConsistencyBarChart6 } from "./chart/consistency/consistency6"
import { ConsistencyBarChart7 } from "./chart/consistency/consistency7"
import { ConsistencyBarChart8 } from "./chart/consistency/consistency8"
import { ConsistencyBarChart9 } from "./chart/consistency/consistency9"
import { ConsistencyBarChart10 } from "./chart/consistency/consistency10"
import { ConsistencyBarChart11 } from "./chart/consistency/consistency11"
import { ConsistencyBarChart12 } from "./chart/consistency/consistency12"
import { SoupingBarChart1 } from "./chart/souping/souping1"
import { AdvantageBarChart1 } from "./chart/advantage/advantage1"
import { AdvantageBarChart2 } from "./chart/advantage/advantage2"
import { AdvantageBarChart3 } from "./chart/advantage/advantage3"
import { StageVideo1 } from "./stage/stage1"
import { ProgressBar } from "./progress-bar"
import Citation from "./citation"



import ShareLink from "./share"
import TextTip from "./textTip"
import { VideoCarousel } from "./video-carousel"
import { ChartCarousel } from "./chart-carousel"



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



const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
]



export default function Home() {
    return (
        <main>
            {/* Progress Bar */}
            <ProgressBar />
            
            {/* Spacer for top positioning */}
            <div className="w-full h-24 xl:h-48"></div>


                {/* Main content - centered */}
                <div className="max-w-7xl mx-auto flex flex-col">

                        <div className="w-full flex flex-row justify-center">
                            <div className="flex flex-col w-full gap-6 px-6 max-w-7xl">
                                <h1 className="font-bold text-4xl leading-tight">
                                    &chi;<sub>0</sub>: A Live-Stream Robotic Teamwork for Clothing Manipulation from Zero to Hero
                                </h1>
                                {/* <i>
                                    TL;DR: In this blogpost, we investigate an effective pathway to achieve robost manipulation for live-streaming broadcast without heavy resources (compute, data, infra, etc.), just in one day.
                                </i> */}



                                <div className="max-w-4xl flex flex-row items-start w-full justify-start gap-3 border-l-2 border-black pl-3">
                                    <p className="w-full leading-relaxed">
                                        In case of any inconsistency, please refer to <a className="text-o-blue animated-underline hover:text-o-blue" href="https://mmlab.hk/research/kai0" target="_blank">mmlab.hk/research/kai0</a> as the authoritative source.
                                    </p>
                                </div>



                                <div className="flex flex-col gap-2 font-mono">
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
                                {/* Share */}
                                {/* <div className="flex-row gap-6 md:gap-10 xl:gap-20 2xl:gap-40">
                                    <h2 className="whitespace-nowrap shrink-0 w-[6rem]">
                                    Share
                                                                        </h2>
                                    <h2 className="flex flex-row flex-wrap gap-x-2 flex-1 items-center">
                                    <ShareLink platform="X" url="https://mmlab.hk/research/kai0" />
                                    <span className="text-xs select-none">|</span>
                                    <ShareLink platform="LinkedIn" url="https://mmlab.hk/research/kai0" />
                                    <span className="text-xs select-none">|</span>
                                    <ShareLink platform="Bluesky" url="https://mmlab.hk/research/kai0" />
                                    <span className="text-xs select-none">|</span>
                                    <ShareLink platform="Facebook" url="https://mmlab.hk/research/kai0" />
                                    <span className="text-xs select-none">|</span>
                                    <ShareLink platform="Reddit" url="https://mmlab.hk/research/kai0" />
                                                                        </h2>
                                    </div> */}
                                </div>
                            </div>
                        </div>



                        <div className="mt-20 px-6">
                            <video
                                autoPlay muted loop controls playsInline
                                poster="https://assets.kinetixai.cn/FoldAnything/full.png"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/FoldAnything/opening_Dec23_demo_v7.mp4" type="video/mp4" />
                            </video>
                        </div>
                        {/* <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-7xl">
                                Video Description todo
                            </i>
                            <div></div>
                        </div> */}



                        <div className="w-full flex flex-col items-center my-20 px-6" id="introduction" >
                            <div className="w-full flex flex-col items-center">
                                <div className="w-full max-w-4xl flex flex-col relative p-10 gap-6">
                                    <div className="absolute top-0 left-0 xl:left-64 w-8 h-8 border-t-6 border-l-6 border-black"></div>
                                    <div className="absolute bottom-0 right-0 xl:right-64 w-8 h-8 border-b-6 border-r-6 border-black"></div>
                                    <h2 className="text-4xl font-bold text-center">
                                        Veni, vidi, vici.
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full max-w-4xl flex flex-row justify-end mt-6 xl:pr-64">
                                <i>Julius Caesar</i>
                            </div> 
                        </div>
                    


                        <div>
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    "Veni, Vidi, Vici" - I came, I saw, I conquered. Just as Julius Caesar's swift victory at Zela defined strategic efficiency, we aim to conquer the "Mount Everest" of robotics: 100% reliability in real-world garment manipulation. In this mission, Veni (data collection), Vidi (model training), and Vici (real-robot inference) form a progressive, interlocking chain where every link is critical. While foundational models like Pi0<sup>1</sup> and GO-1<sup>2</sup> rely on "brute-force" scale to reach these heights, we present a resource-aware alternative. We demonstrate how to take a system from 0% to 100% reliability using a fraction of the standard cost—specifically, within 20 hours of human demonstration and 8xA100 GPUs, rather than the tens of thousands of hours and hundreds of GPUs typically required.
                                    <br></br>
                                    We achieve this through a three-stage technical philosophy that optimizes the transition from seeing to conquering:

                                </p>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://www.physicalintelligence.company/blog/pi0',
                                    content: (
                                        <>
                                        π<sub>0</sub> (2024)
                                        </>
                                    ),
                                },
                                2:{
                                    link:'https://opendrivelab.com/OpenGO1/',
                                    content: (
                                        <>
                                        GO-1 (2025)
                                        </>
                                    ),
                                },
                            }}
                            offset={0}
                            />
                        </div>



                        {/* <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                            Our system enables dual-arm robots to master complex, long-horizon folding tasks (up to 6 minutes), maintaining exceptional robustness against compounding errors and "in-the-wild" environmental shifts.
                            </p>
                            <div></div>
                        </div> */}
                        {/* Our system enables collaborative, dual-arm robots to perform complex folding tasks over extended horizons (up to 6 minutes), demonstrating exceptional robustness to the compounding errors that plague collaborative handovers. This reliability extends to "in-the-wild" scenarios, handling interruptions and varied lighting with ease. */}



                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed list-[lower-alpha] px-6">
                                    <li>
                                        <i>
                                            Mode Consistency:&nbsp;
                                        </i>
                                        We argue that not all data is equally valuable. By strictly aligning the human demonstration distribution (<span class="font-math">P<sub>train</sub></span>), the model's knowledge (<span class="font-math">Q<sub>model</sub></span>), and the test-time distribution (<span class="font-math">P<sub>test</sub></span>), we minimize in-distribution shifts that lead to failure.
                                    </li>
                                    <li>
                                        <i>
                                            Model Arithmetic:&nbsp;
                                        </i>
                                        We move beyond the search for a single perfect checkpoint. We introduce a weight-space shortcut to merge models trained on different data manifolds into a single, adaptive policy-capturing diverse knowledge without the architectural complexity of MoE.
                                    </li>
                                    <li>
                                        <i>
                                            Stage Advantage:&nbsp;
                                        </i>
                                        To conquer the "last mile", we decompose tasks into semantic stages. By estimating a stage-aware advantage signal, we provide the model with "long-horizon vision," ensuring every action makes measurable progress toward the goal.
                                    </li>
                                </ol>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    This recipe provides strong evidence that 100% robotic skill mastery is a matter of strategic alignment, not just massive scale. 
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
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



                        <div className="mt-10 w-full px-6">
                            <VideoCarousel />
                            </div>
                        <div className="mt-5 flex justify-center px-6">
                            <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-4xl">
                                Three tasks varying from folding to hanging, each covering a 4-hour duration, presented in 100x time-lapse format with critical segments highlighted at 2-5x speed.
                            </p>
                        </div>



                        <div className="px-6">
                            <video
                                autoPlay muted loop playsInline
                                poster="https://assets.kinetixai.cn/FoldAnything/pipeling.jpg"
                                className="w-full aspect-video rounded-sm"
                            >
                                <source src="https://assets.kinetixai.cn/FoldAnything/full_Dec23_4K_30_v5.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="flex justify-center px-6 z-50">
                            <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-5xl">
                                <span className="font-medium text-black/80">Mode Consistency System Architecture</span>
                                <span className="mx-2 text-black/20">-</span>
                                Left: Human expert demonstration collection. Middle: Mixing models from different data sources via Model Arithmetic. Right: Real-robot inference. Bottom: DAgger Feedback and Stage Advantage from on-policy experience.
                            </p>
                        </div>



                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-20 text-4xl font-bold"> 
                                <Link href="#methodology" className="scroll-mt-32 group flex items-center flex-row" id="methodology">
                                    <h2>
                                        Methodology
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
                                        Mode Consistency: Addressing the Distributional Trilemma
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



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    We define the solution space for a given task as <span class="font-math">P<sub>real</sub></span>, a distribution encompassing all valid actions that successfully accomplish the task. Achieving robust manipulation can be conceptualized as solving a dynamic alignment problem-akin to a game of "Whac-a-Mole" - among three distinct distributions:
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed list-[lower-alpha] px-6">
                                    <li>
                                        <span class="font-math">P<sub>train</sub></span> (Human Demonstrations): The empirical distribution collected from the human expert policy, <span class="font-math">Q<sub>human</sub></span>. This represents a limited subset of the valid solution manifold <span class="font-math">P<sub>real</sub></span>.
                                    </li>
                                    <li>
                                        <span class="font-math">Q<sub>model</sub></span> (Learned Policy): The policy distribution parameterized by the model weights.
                                    </li>
                                    <li>
                                        <span class="font-math">P<sub>test</sub></span> (Real-World Execution): The actual distribution of actions executed during physical deployment, inferred from <span class="font-math">Q<sub>model</sub></span>. Success is defined by the intersection of <span class="font-math">P<sub>test</sub></span> and <span class="font-math">P<sub>real</sub></span>, while the portion of <span class="font-math">P<sub>test</sub></span> falling outside <span class="font-math">P<sub>real</sub></span> constitutes the failure modes.
                                    </li>
                                </ol>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>

                        
                        
                        <div className="mt-6">
                            <TextTip html={`\
                                <p className="w-full leading-relaxed max-w-4xl">
                                    Standard imitation learning paradigms generally aim to minimize the divergence <span class="font-math">KL(Q<sub>model</sub>|Q<sub>human</sub>)</span> over the support of <span class="font-math">P<sub>train</sub><sup>1</sup><sup>,</sup><sup>2</sup></span>. This process yields a finetuned <span class="font-math">Q<sub>model</sub></span>, deploying this model via an inference function (denoted as <span class="font-math">Inference</span>) results in the realized distribution <span class="font-math">P<sub>test</sub></span>. 
                                </p>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://arxiv.org/abs/2510.18874',
                                    content: (
                                        <>
                                        Retaining by Doing (Chen et al., 2025)
                                        </>
                                    ),
                                },
                                2:{
                                    link:'https://arxiv.org/abs/2404.14367',
                                    content: (
                                        <>
                                        Preference Fine-Tuning (Tajwar et al., 2024)
                                        </>
                                    ),
                                }
                            }}
                            offset={2}
                            />
                        </div>



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fpqp_1220_1258.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center px-6">
                            <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-4xl">
                                Distribution dynamics of <span className="font-medium font-math text-black/80">P<sub>train</sub></span>, <span className="font-medium font-math text-black/80">Q<sub>model</sub></span>, and <span className="font-medium font-math text-black/80">P<sub>test</sub></span>.
                            </p>
                        </div>
                        



                        <div className="mt-6">
                            <TextTip html={`\
                            <p className="w-full leading-relaxed max-w-4xl">
                                    However, we identify underlying inconsistencies within this standard process:
                            </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed max-w-4xl list-[lower-alpha] px-6">
                                <li>
                                        Distribution Shift between <span class="font-math">P<sub>train</sub></span> and <span class="font-math">P<sub>test</sub></span>: Interpreted as covariate shift, where the model encounters states during deployment that were absent in the training data.
                                </li>
                                <li>
                                        Deployment Discrepancy between Q<sub>model</sub> and P<sub>test</sub>: Arising from the <i>Inference</i> function, where the model output is distorted during control, leading to unexpected failures.
                                </li>
                            </ol>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    Back to basics, we propose two fundamental strategies-operating on Data Scope and Inference Scope - to stabilize these distributions: 
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed max-w-4xl list-[lower-alpha] px-6">
                                    <li>
                                        <b>
                                            Data Scope:
                                        </b>
                                        <ol class="space-y-3 w-full leading-relaxed max-w-4xl list-disc px-6 mt-3">
                                            <li>
                                                <i>
                                                    DAgger (Iterative Correction):&nbsp;
                                                </b>
                                                Static offline demonstrations often lack exposure to failure modes that inevitably emerge during real-world deployment<sup>1</sup><sup>,</sup><sup>2</sup><sup>,</sup><sup>3</sup>. We inject on-policy recovery trajectories - utilizing both heuristic methods and iterative DAgger - to populate these sparse regions. These "corrected" trajectories expand <span class="font-math">P<sub>train</sub></span> towards underrepresented but critical regions of <span class="font-math">P<sub>real</sub></span>. 
                                            </li>
                                            <li>
                                                <i>
                                                    Spatio-Temporal Augmentation:&nbsp;
                                                </i>
                                                To further bridge the gap between <span class="font-math">P<sub>train</sub></span> and <span class="font-math">P<sub>test</sub></span>, we employ structured augmentations across space and time. Spatially, we utilize mirroring and symmetry to enhance the model's understanding of dual-arm coordination. Temporally, time-scaling introduces variability in trajectory speed, allowing the model to adapt to fluctuating control frequencies.
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://arxiv.org/abs/1011.0686',
                                    content: (
                                        <>
                                        DAgger (Ross et al., 2011)
                                        </>
                                    ),
                                },
                                2:{
                                    link:'https://arxiv.org/abs/1810.02890',
                                    content: (
                                        <>
                                        HG-DAgger (Kelly et al., 2018)
                                        </>
                                    ),
                                },
                                3:{
                                    link:'https://arxiv.org/abs/2509.07953',
                                    content: (
                                        <>
                                        RaC (Hu et al., 2025)
                                        </>
                                    ),
                                },
                            }}
                            offset={4}
                            />
                        </div>


                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed max-w-4xl list-[lower-alpha] px-6"  start="2">
                                    <li>
                                        <b>
                                            Inference Scope:&nbsp;
                                        </b>
                                        To optimize the translation of <span class="font-math">Q<sub>model</sub></span> into <span class="font-math">P<sub>test</sub></span> via the <span class="font-math">Inference</span> function, we utilize Chunk-wise Temporal Smoothing coupled with Real-time Chunking.<sup>1</sup> This effectively minimizes execution jitter and ensures the policy's intended actions are translated flawlessly into smooth, coherent real-robot execution. And we found that such smoothness contributes much to the final performance, i.e., success rate.
                                    </li>
                                </ol>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://arxiv.org/abs/2506.07339',
                                    content: (
                                        <>
                                        Real-Time Action Chunking (Black et al., 2025)
                                        </>
                                    ),
                                },
                            }}
                            offset={7}
                            />
                        </div>

                        {/* Apple-style horizontal card layout */}
                        <div className="flex justify-center px-6 mt-8">
                            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* DAgger Card */}
                                <div className="group flex flex-col">
                                    <div className="overflow-hidden rounded-2xl bg-neutral-900/50 backdrop-blur-sm ring-1 ring-black/5 transition-all duration-500 hover:ring-black/10 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
                                        <Image
                                            src="https://assets.kinetixai.cn/FoldAnything%2Fdagger_1220_1258.gif"
                                            alt="DAgger visualization" 
                                            width={600}
                                            height={340}
                                            className="w-full aspect-video object-cover object-center bg-gradient-loading select-none transition-transform duration-700 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                    <div className="mt-4 px-1">
                                        <p className="text-sm leading-relaxed text-muted-foreground text-center">
                                            <span className="font-semibold text-black/90">DAgger</span>
                                            <span className="mx-2 text-black/30">-</span>
                                            Injecting on-policy recovery trajectories to expand <span className="font-math">P<sub>train</sub></span> towards underrepresented failure modes in <span className="font-math">P<sub>real</sub></span>.
                                        </p>
                                    </div>
                                </div>

                                {/* Inference Optimization Card */}
                                <div className="group flex flex-col">
                                    <div className="overflow-hidden rounded-2xl bg-neutral-900/50 backdrop-blur-sm ring-1 ring-black/5 transition-all duration-500 hover:ring-black/10 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
                                        <Image
                                            src="https://assets.kinetixai.cn/FoldAnything%2Fcontrol_curve_1220_1258.gif"
                                            alt="Inference Optimization visualization" 
                                            width={600}
                                            height={340}
                                            className="w-full aspect-video object-cover object-center bg-gradient-loading select-none transition-transform duration-700 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                    <div className="mt-4 px-1">
                                        <p className="text-sm leading-relaxed text-muted-foreground text-center">
                                            <span className="font-semibold text-black/90">Inference Optimization</span>
                                            <span className="mx-2 text-black/30">-</span>
                                            Minimizing execution jitter to ensure smooth translation from <span className="font-math">Q<sub>model</sub></span> to <span className="font-math">P<sub>test</sub></span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    To visualize how our methods achieve progressive consistency among <span class="font-math">P<sub>train</sub></span>, <span class="font-math">Q<sub>model</sub></span>, and <span class="font-math">P<sub>test</sub></span>, we project their action distributions on TaskA into a 3D t-SNE space.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>

                        <div className="hidden md:flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-4xl w-full flex flex-row gap-10 justify-center ">
                                <iframe
                                    src="https://assets.kinetixai.cn/FoldAnything/combined_tsne_black_bias_5000sample_5000iter.html"
                                    width="800"
                                    height="450"
                                    className="rounded-sm w-[800px]"
                                    scrolling="no"
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center px-6">
                            <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-4xl">
                                Interactive 3D t-SNE visualization of action distributions for <span className="font-math">P<sub>train</sub></span>, <span className="font-math">Q<sub>model</sub></span>, and <span className="font-math">P<sub>test</sub></span>.
                                <span className="block mt-1 text-black/60 font-medium">Click and drag to rotate the plot.</span>
                            </p>
                        </div>

                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    We posit that mode consistency constitutes a fundamental prerequisite for a model's core capabilities. On-policy experience and control optimization emerge as the most critical factors in achieving this alignment at the foundational stage.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>

                        <ChartCarousel />



                        {/* <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                                <ConsistencyBarChart3 />
                                <ConsistencyBarChart4 />
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center px-6">
                            <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-4xl">
                                Time scaling affects success rate to some extent while maintaining throughput without significant degradation, especially for models predicting delta actions.
                            </p>
                        </div> */}





                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-10 text-xl font-bold"> 
                                <Link href="#model_arithmetic" className="scroll-mt-32 group flex items-center flex-row" id="model_arithmetic">
                                    <h2>
                                        Model Arithmetic
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



                        {/* <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <b className="w-full leading-relaxed max-w-4xl">
                                How can we efficiently advance through iterative research cycles in embodied AI? 
                            </b>
                            <div></div>
                        </div> */}
                        {/* How can we efficiently advance through iterative research cycles in embodied AI?   */}



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    <i>How can we efficiently advance through iterative research cycles in embodied AI?</i> Unlike traditional CV or NLP, robotic manipulation tasks-especially complex ones like garment manipulation-demand extensive real-world data collection. This creates a persistent dilemma: as we iteratively gather new data, how do we know it meaningfully improves the model, and when is it enough?  Retraining from scratch with the full dataset after each collection cycle is prohibitively expensive.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p className="w-full leading-relaxed max-w-4xl">
                                    We propose <i>Model Arithmetic (MA)</i>: train only on newly collected data subsets, then merge the resulting model with previous ones through <i>weight interpolation<sup>1</sup> guided by on-policy optimization</i>. Remarkably, this synthesis can even <i>surpass the performance of models trained on the entire dataset at once</i>.
                                </p>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://proceedings.mlr.press/v162/wortsman22a.html',
                                    content: (
                                        <>
                                        Model Soups (Wortsman et al., 2021)
                                        </>
                                    ),
                                }
                            }}
                            offset={8}
                            />
                        </div>



                        <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fsouping1_1220_1254.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center px-6">
                            <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-4xl">
                                We merge models trained on different data subsets into a single entity using weight interpolation, with the mixing weights optimized against on-policy data.
                            </p>
                        </div>



                        {/* <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fsouping_curve.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl text-center">
                                caption
                            </i>
                            <div></div>
                        </div> */}



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    <i>But how does MA work?</i> Our key insight: models trained on different data subsets actually learn distinct manifolds. MA acts as a shortcut to merge modes from these diverse manifolds, ensuring <i>mode consistency</i> in the final model. This approach soaks up capabilities from each iteration without costly full retraining.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        {/* <div className="mt-2">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed text-muted-foreground italic text-xs">
                                    MA differs fundamentally from existing paradigms: unlike Mixture-of-Experts (MoE), it requires no router mechanism; unlike ensembling, it manipulates model weights directly rather than combining outputs at inference time. This makes MA a uniquely powerful strategy for scalable, iterative model development in embodied AI.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div> */}



                        <div className="mt-10 flex flex-row justify-center px-6">
                            <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                                <SoupingBarChart1 />
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center px-6">
                            <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-4xl">
                                The merged model surpasses both the best constituent models and the oracle model trained on the full dataset across multiple tasks, evidencing that Model Arithmetic successfully assimilates the distinct policy manifolds learned from diverse data subsets.
                            </p>
                        </div>


                        
                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-10 text-xl font-bold"> 
                                <Link href="#stage_advantage" className="scroll-mt-32 group flex items-center flex-row" id="stage_advantage">
                                    <h2>
                                        Stage Advantage
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



                        <div className="mt-6">
                            <TextTip html={`\
                                <p className="w-full leading-relaxed max-w-4xl">
                                    Long-horizon manipulation is inherently hindered by a simple question: <i>given multiple plausible actions at the same state, which one actually makes progress?</i> It is illustrated in cases where visual differences are subtle but  result differences are huge given different actions. This is indeed why an advantage signal is needed.<sup>1</sup>
                                </p>
                            `} 
                            tipList={{
                                1:{
                                    link:'https://openreview.net/forum?id=Seb7rprW1Y',
                                    content: (
                                        <>
                                        Self-Directed Learning (Li et al.,2025)
                                        </>
                                    ),
                                }
                            }}
                            offset={9}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    Prior approach<sup>1</sup> obtains advantage implicitly by scoring the current state and the post-action state, then taking their difference. This formulation treats advantage as the subtraction of two independently estimated progress values, although advantage is inherently a relational quantity that depends on how an action transforms one state into another.
                                </p>
                            `} 
                            tipList={{

                                1:{
                                    link:'https://www.pi.website/blog/pistar06',
                                    content: (
                                        <>
                                        π<sub>0.6</sub><sup>*</sup>: a VLA that Learns from Experience (2025)
                                        </>
                                    ),
                                },
                            }}
                            offset={10}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    We take a more straightforward route by treating advantage as a direct modeling target, predicting relative improvement from paired observations rather than deriving it from value predictions. This recasts advantage estimation to a single prediction problem, avoiding error compounding and yielding a smoother, more reliable state-to-state supervision signal.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>


                        {/* <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Ftechblog.gif"
                                    alt="Consistency" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row gap-6 justify-center">
                            <div></div>
                            <i className="w-full leading-relaxed max-w-4xl text-center">
                                caption
                            </i>
                            <div></div>
                        </div> */}


                        {/* <div className="flex flex-row justify-center px-6 mt-6">
                            <div className="max-w-7xl w-full flex flex-row gap-10 justify-center">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fstage_advantage_1220_0116.jpg"
                                    alt="Stage Advantage" 
                                    width={500}
                                    height={200}
                                    className="w-full lg:max-w-1/2 object-cover object-center rounded-sm bg-gradient-loading select-none"
                                />
                            </div>
                        </div> */}
                        <StageVideo1 />



                        <div className="mt-5 flex justify-center px-6">
                            <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-4xl">
                            Comparison of cumulative progress induced by different methods along an inference-time manipulation trajectory. Green and red segments indicate higher- and lower-ranked actions based on predicted advantage, reflecting relative preference for task advancement. <span className="font-medium text-black/80">Direct+Stage (ours)</span> produces smoother and more consistent progress accumulation than Value-diff.
                            </p>
                        </div>
                        


                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    Built on this, the Stage Advantage decomposes long-horizon manipulation into a sequence of semantic stages, each corresponding to a meaningful sub-goal in the task. Instead of evaluating actions against the full task horizon, it estimates whether each action is likely to advance the current stage, providing a stage-aware advantage signal for policy training. 
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>



                        <div className="mt-6">
                            <TextTip html={`\
                                <p class="w-full leading-relaxed">
                                    The impact of these designs is evaluated using a combination of task success rate and the quality of the advantage signal, measured in terms of temporal smoothness and stability, as reported in the following evaluation.
                                </p>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
                        </div>


                        
                        <div className="mt-10 flex flex-row justify-center px-6" id='progressend'>
                            <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 justify-center">
                                <AdvantageBarChart1 />
                                <AdvantageBarChart2 />
                                <AdvantageBarChart3 />
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center px-6">
                            <p className="text-sm leading-relaxed text-muted-foreground/80 text-center max-w-4xl">
                                <span className="font-medium text-black/70">Value-diff</span> computes the advantage by subtracting two independently predicted state values. <span className="font-medium text-black/70">Direct</span> predicts the advantage as the relative improvement from paired observations. <span className="font-medium text-black/80">Direct+Stage (ours)</span> uses stage-conditioned direct advantage prediction for long-horizon training, achieving smoother results (lower MSTD), greater stability (higher SFR), and higher success rates.
                            </p>
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



                        <div className="mt-6">
                            <TextTip html={`\
                                <ol class="space-y-3 w-full leading-relaxed list-[lower-alpha] px-6 text-muted-foreground">
                                    <li>
                                        <span class="text-foreground font-medium">Not all robot data is equally valuable.</span> The quality and characteristics of training data significantly impact policy performance.
                                    </li>
                                    <li>
                                        <span class="text-foreground font-medium">The capability of the base policy is crucial, but knowing how to rapidly evaluate and select a capable base policy is even more important.</span> A fast research iteration cycle is essential for developing intuition and understanding of base policy behavior.
                                    </li>
                                    <li>
                                        <span class="text-foreground font-medium">Model arithmetic can surprisingly turn lead into gold.</span> Simple arithmetic operations on model weights can transform mediocre policies into high-performing ones.
                                    </li>
                                    <li>
                                        <span class="text-foreground font-medium">Stage-conditioned advantage estimation still has room for improvement.</span> Revisiting fundamental concepts from reinforcement learning may unlock further gains.
                                    </li>
                                </ol>
                            `} 
                            tipList={{}}
                            offset={0}
                            />
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

        </main>
    );
}
