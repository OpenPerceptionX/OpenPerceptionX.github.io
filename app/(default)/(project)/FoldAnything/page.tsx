import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "FoldAnything | OpenDriveLab",
    description: "FoldAnything",
    keywords: ["FoldAnything", "OpenDriveLab", "HKU"],
};


import Image from 'next/image'
import Link from "next/link"



import { ExampleChart } from "./chart/examplechart"



import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"



export default function Home() {
    return (
        <div className="w-full overflow-x-hidden pt-36 flex flex-row justify-center">



                    {/* transferable */}
                    <div className="w-full max-w-7xl flex flex-col">


                        <div className="flex flex-col w-full gap-6 px-6">
                            <h1 className="font-bold text-t1 leading-tight">
                                Mastering Garment Manipulation from 0 to 100% in 500,000 rmb/20 Hours
                            </h1>
                            <i>
                                TL;DR: In this blogpost, we investigate an effective pathway to achieve robost manipulation for live-streaming broadcast without heavy resources (compute, data, infra, etc.), just in one day.
                            </i>
                            <div className="flex flex-row gap-20">
                                <div className="flex flex-col">
                                    <h2>
                                        Published
                                    </h2>
                                    <h2>
                                        Paper
                                    </h2>
                                    <h2>
                                        Email
                                    </h2>
                                    <h2>
                                        By
                                    </h2>
                                </div>
                                <div className="flex flex-col">
                                    <h2>
                                        December 24, 2025
                                    </h2>
                                    <h2>
                                        Available in Late January 2026
                                    </h2>
                                    <h2>
                                        <b className="text-red-500">TODO research@mmlab.hk</b>
                                    </h2>
                                    <h2>
                                        HKU Manipulation Team
                                    </h2>
                                </div>
                            </div>
                        </div>



                        <Image
                            src="https://ik.imagekit.io/mmlab/mmlab@hku.jpg"
                            alt="Nashville" 
                            width={352}
                            height={384}
                            className="w-full h-6/12 object-cover object-center rounded-sm bg-gradient-loading select-none mt-20"
                        />



                        <div className="w-full flex flex-col items-center my-20 px-6">
                            <div className="w-full flex flex-col items-center">
                                <div className="w-full max-w-4xl flex flex-col relative p-10 gap-6">
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-6 border-l-6 border-black"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-6 border-r-6 border-black"></div>
                                    <h2 className="text-3xl font-bold text-center">
                                        Veni, vidi, vici.
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full max-w-4xl flex flex-row justify-end mt-6">
                                <i>Julius Caesar</i>
                            </div> 
                        </div>



                        <div className="flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Is massive scale the only path to robotic dexterity? While foundational models like Pi05 and GO-1 leverage massive compute and data to achieve task-generalization, we explore a "resource-aware" alternative for state-generalization. We present a comprehensive guideline for mastering long-horizon garment manipulation, taking a system from 0% to 100% reliability with a fraction of the standard cost—specifically, within 20 hours of human demonstration, 8*A100 gpus, rather than tens of thousands of hrs data and hundreds of GPUs which are typically required.
                            </p>
                            <div></div>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                Our system enables collaborative, dual-arm robots to perform complex folding tasks over extended horizons (up to 6 minutes), demonstrating exceptional robustness to the compounding errors that plague collaborative handovers. This reliability extends to "in-the-wild" scenarios, handling interruptions and varied lighting with ease.
                            </p>
                            <div></div>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                The core of our efficiency lies in a new philosophical approach to Imitation Learning:
                            </p>
                            <div></div>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center px-6">
                            <ol className="space-y-3 w-full leading-relaxed max-w-4xl list-decimal px-4 md:px-6">
                                <li>
                                    <b>
                                        Mode Consistency:&nbsp;
                                    </b>
                                    We argue that not all data is created equal. By strictly aligning the human demonstration distribution ($P_train$), the model's knowledge ($Q_model$), and the test-time distribution ($P_test$), we minimize in-distribution shifts that lead to failure.
                                </li>
                                <li>
                                    <b>
                                        Model Arithmetic:&nbsp;
                                    </b>
                                    Rather than relying on a single checkpoint, we identify that models trained on different data subsets learn distinct manifolds. We introduce a "shortcut" to merge these manifolds—condensing several diverse models into a single, adaptive policy without the complexity of MoE architectures.
                                </li>
                                <li>
                                    <b>
                                        Distribution-Aware Orchestration:&nbsp;
                                    </b>
                                    A specialized mechanism to handle the "last mile" of precision (the final 80-100% performance gain).
                                </li>
                            </ol>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                This recipe is universally applicable, functioning across different embodiments (AgileX Piper, ARX X5) and model architectures (pi series, x-vla, go-1), proving that efficient, high-performance manipulation is accessible without industrial-scale resources.
                            </p>
                            <div></div>
                        </div>



                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                We will release data, checkpoints and host Challenge in 2026.
                            </p>
                            <div></div>
                        </div>




                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
                                <Link href="#abstract" className="scroll-mt-32 group flex items-center flex-row" id="abstract">
                                    <h2>
                                        Abstact
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
                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="leading-relaxed max-w-4xl">
                                <Link className="text-foreground animated-underline hover:text-mred" href="/" >this is a link</Link><br></br>文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Stridesand model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)
                            </p>
                            <div></div>
                        </div>
                        <div className="mt-6 flex flex-col gap-3">
                            <div className="grid grid-cols-3 gap-6">
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
                                <video
                                    autoPlay muted loop controls playsInline
                                    poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                    className="w-full aspect-video rounded-sm"
                                >
                                    <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <i>
                                explain the image
                            </i>
                        </div>
                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="leading-relaxed max-w-4xl">
                                文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Stridesand model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)
                            </p>
                            <div></div>
                        </div>
                        <div className="mt-6 flex flex-row justify-center">
                            <div className="max-w-7xl">
                                <ExampleChart />
                            </div>
                        </div>






                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
                                <Link href="#veni" className="scroll-mt-32 group flex items-center flex-row" id="veni">
                                    <h2>
                                        Veni: Mining Failure Modes from On-Policy Experience
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
                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)
                            </p>
                            <div></div>
                        </div>




                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
                                <Link href="#vidi" className="scroll-mt-32 group flex items-center flex-row" id="vidi">
                                    <h2>
                                        Vidi: Model Algebra as a Shortcut for Mode Extrapolation
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
                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projecrides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)
                            </p>
                            <div></div>
                        </div>



                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
                                <Link href="#vici" className="scroll-mt-32 group flex items-center flex-row" id="vici">
                                    <h2>
                                        Vici: Distribution-aware Advantage as Mode-Orchestrator
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
                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (hutween Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)
                            </p>
                            <div></div>
                        </div>



                        <div className="w-full flex flex-col items-center px-6">
                            <h2 className="w-full max-w-4xl mt-20 text-3xl font-bold"> 
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
                        <div className="mt-6 flex flex-row gap-6 justify-center">
                            <div></div>
                            <p className="w-full leading-relaxed max-w-4xl">
                                TODO
                            </p>
                            <div></div>
                        </div>



                    </div>




        </div>
    );
}
