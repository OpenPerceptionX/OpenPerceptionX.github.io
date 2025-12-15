import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "FoldAnything | OpenDriveLab",
    description: "FoldAnything",
    keywords: ["FoldAnything", "OpenDriveLab", "HKU"],
};


import Image from 'next/image'
import Link from "next/link"



import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"



export default function Home() {
    return (
        <div className="w-full overflow-x-hidden px-6 pt-36 flex flex-row justify-center">


                {/* transferable */}
                <div className="w-full max-w-7xl flex flex-col">


                    <div className="flex flex-col w-full gap-6">
                        <h1 className="font-bold text-t1 leading-tight">
                            Mastering Garment Manipulation from 0 to 100% in 500,000 rmb/20 Hours
                        </h1>
                        <div className="flex flex-row gap-20">
                            <div className="flex flex-col">
                                <h2>
                                    Published
                                </h2>
                                <h2>
                                    By
                                </h2>
                            </div>
                            <div className="flex flex-col">
                                <h2>
                                    Christmas Eve, 2025
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



                    <div className="w-full pl-6 pr-6 flex flex-col items-center">
                        <div className="w-full flex flex-col items-center mt-20">
                            <div className="w-full max-w-4xl flex flex-col relative p-10 gap-6">
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-6 border-l-6 border-black"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-6 border-r-6 border-black"></div>
                                <h2 className="text-3xl font-bold">
                                    Veni, vidi, vici.
                                </h2>
                                <h2 className="text-3xl font-bold">
                                    Eng. Ver: I came, I saw, I conquered.
                                </h2>
                            </div>
                        </div>
                        <div className="w-full max-w-4xl flex flex-row justify-end mt-6">
                            <i>Julius Caesar</i>
                        </div> 
                    </div>



                    <div className="w-full flex flex-col items-center">
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
                        <p className="leading-relaxed max-w-4xl">
                            文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)文字部分：Turning Stumbles into Strides: Mode Consistency between Data and model. (P_train (human action), Q_model (action projection, weights), P_test (policy action) 三者).  ( 0 - 20%, 基建)
                        </p>
                        <div></div>
                    </div>




                    <div className="w-full flex flex-col items-center">
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
                    <div className="mt-6 leading-relaxed">
                    文字部分：Model Arithmetic （20% 到80%, 性能）文字部分：Model Arithmetic （20% 到80%, 性能）文字部分：Model Arithmetic （20% 到80%, 性能）文字部分：Model Arithmetic （20% 到80%, 性能）文字部分：Model Arithmetic （20% 到80%, 性能）文字部分：Model Arithmetic （20% 到80%, 性能）文字部分：Model Arithmetic （20% 到80%, 性能）文字部分：Model Arithmetic （20% 到80%, 性能）
                    </div>



                    <div className="w-full flex flex-col items-center">
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
                    <div className="mt-6 leading-relaxed">
                        文字部分：Stage Orchestrator (80%-100%, 拔尖)文字部分：Stage Orchestrator (80%-100%, 拔尖)文字部分：Stage Orchestrator (80%-100%, 拔尖)文字部分：Stage Orchestrator (80%-100%, 拔尖)文字部分：Stage Orchestrator (80%-100%, 拔尖)文字部分：Stage Orchestrator (80%-100%, 拔尖)文字部分：Stage Orchestrator (80%-100%, 拔尖)
                    </div>



                </div>



        </div>
    );
}
