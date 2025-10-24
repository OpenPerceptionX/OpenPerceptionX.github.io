import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "ReSim | OpenDriveLab",
    description: "ReSim",
    keywords: ["ReSim", "OpenDriveLab", "HKU"],
};


import Image from 'next/image'
import Link from "next/link"


import { AspectRatio } from "@/components/ui/aspect-ratio"



export default function Home() {
    return (
        <div className="w-full overflow-x-hidden">



            <div className="w-full xl:h-screen flex flex-col xl:flex-row gap-10 xl:gap-20  justify-around  xl:justify-center items-center p-20    ">
                <div className="flex-1/2 h-1/3 w-full xl:h-full flex flex-col justify-center select-none">
                    <AspectRatio ratio={16/9}>
                        <Image
                            // src="https://ik.imagekit.io/opendrivelab/univla"
                            src="https://ik.imagekit.io/opendrivelab/resim.jpg"
                            alt="ReSim"
                            fill
                            className="rounded-sm object-cover bg-gradient-landing"
                        />
                    </AspectRatio>
                </div>
                <div className="flex-1/2 flex flex-col gap-3 xl:justify-around">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-7xl 3xl:text-8xl font-bold w-full fg-gradient-blue">
                                ReSim
                            </h1>
                            <h1 className="text-4xl 3xl:text-5xl font-bold w-full  fg-gradient-blue pb-3">
                                Reliable World Simulation for Autonomous Driving
                            </h1>
                        </div>
                        <div className="flex flex-col gap-2 pb-3">
                            <h2 className="w-full leading-loose">
                                <a href="https://github.com/YTEP-ZHI" className="text-o-blue hover:underline text-nowrap">Jiazhi Yang</a><sup className="align-super text-sm">1,3</sup>,{' '}
                                <a href="https://kashyap7x.github.io/" className="text-o-blue hover:underline text-nowrap">Kashyap Chitta</a><sup className="align-super text-sm">4,7</sup>,{' '}
                                <a href="https://github.com/Little-Podi" className="text-o-blue hover:underline text-nowrap">Shenyuan Gao</a><sup className="align-super text-sm">8</sup>,{' '}
                                <a href="https://long.ooo/" className="text-o-blue hover:underline text-nowrap">Long Chen</a><sup className="align-super text-sm">5</sup>,{' '}
                                <a href="https://meteorcollector.github.io/" className="text-o-blue hover:underline text-nowrap">Yuqian Shao</a><sup className="align-super text-sm">6</sup>,{' '}
                                <a href="https://jiaxiaosong1002.github.io/" className="text-o-blue hover:underline text-nowrap">Xiaosong Jia</a><sup className="align-super text-sm">6</sup>,{' '}
                                <a href="https://lihongyang.info/" className="text-o-blue hover:underline text-nowrap">Hongyang Li</a><sup className="align-super text-sm">2</sup>,{' '}
                                <a href="https://www.cvlibs.net/" className="text-o-blue hover:underline text-nowrap">Andreas Geiger</a><sup className="align-super text-sm">7</sup>,{' '}
                                <a href="https://xyue.io/" className="text-o-blue hover:underline text-nowrap">Xiangyu Yue</a><sup className="align-super text-sm">1</sup>,{' '}
                                <a href="https://ilnehc.github.io/" className="text-o-blue hover:underline text-nowrap">Li Chen</a><sup className="align-super text-sm">2,3</sup>{' '}
                            </h2>
                            <h2 className="w-full leading-loose flex gap-1 flex-wrap">
                                <span className="text-nowrap"><sup className="align-super text-sm text-nowrap">1</sup>The Chinese University of Hong Kong {'  '}</span>
                                <span className="text-nowrap"><sup className="align-super text-sm text-nowrap">2</sup>The University of Hong Kong {'  '}</span>
                                <span className="text-nowrap"><sup className="align-super text-sm text-nowrap">3</sup>OpenDriveLab at Shanghai AI Lab {'  '}</span>
                                <span className="text-nowrap"><sup className="align-super text-sm text-nowrap">4</sup>NVIDIA Research {'  '}</span>
                                <span className="text-nowrap"><sup className="align-super text-sm text-nowrap">5</sup>Xiaomi EV {'  '}</span>
                                <span className="text-nowrap"><sup className="align-super text-sm text-nowrap">6</sup>Shanghai Jiao Tong University {'  '}</span>
                                <span className="text-nowrap"><sup className="align-super text-sm text-nowrap">7</sup>University of Tübingen, Tübingen AI Center {'  '}</span>
                                <span className="text-nowrap"><sup className="align-super text-sm text-nowrap">8</sup>HKUST {'  '}</span>
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-6">
                            <a
                                href="https://arxiv.org/abs/2506.09981"
                                target="_blank"
                                className="flex items-center gap-2 bg-gray-800 text-white rounded-full px-4 py-2 text-sm hover:bg-gray-700 transition"
                            >
                                <Image
                                src="https://opendrivelab.github.io/ReSim/figs/arxiv2.png"
                                alt=""
                                width={15}
                                height={10}
                                />
                                arXiv
                            </a>
                            <a
                                href="https://github.com/OpenDriveLab/ReSim"
                                target="_blank"
                                className="flex items-center gap-2 bg-gray-800 text-white rounded-full px-4 py-2 text-sm hover:bg-gray-700 transition"
                            >
                                <Image
                                src="https://opendrivelab.github.io/ReSim/figs/github.png"
                                alt=""
                                width={25}
                                height={10}
                                />
                                Code coming soon
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-4xl font-bold scroll-mt-32" id="overview">
                    Overview
                </h1>
            </div>
            <div className="w-full flex flex-row justify-center px-6 ">
                <div className="max-w-4xl rounded-sm bg-gradient-landing">
                        <video
                            preload="none"
                            autoPlay
                            muted
                            playsInline
                            >
                            <source src="https://opendrivelab.github.io/ReSim/mp4/teaser1.mp4"/>
                            {/* <source src="https://opendrivelab.github.io/ReSim/action_control/Waymo1.mp4"/> */}
                        </video>
                    </div>
                </div>
            <div className="flex flex-row justify-center px-6 mt-20">
                <p className="max-w-4xl text-bl text-justify leading-relaxed xl:leading-loose">
                    How can we reliably simulate future driving scenarios under a wide range of
                    ego driving behaviors? Recent driving world models, developed exclusively on
                    real-world driving data composed mainly of safe expert trajectories, struggle to
                    follow hazardous or non-expert behaviors, which are rare in such data. This limitation 
                    restricts their applicability to tasks such as policy evaluation. In this work,
                    we address this challenge by enriching real-world human demonstrations with
                    diverse non-expert data collected from a driving simulator (e.g., CARLA), and
                    building a controllable world model trained on this heterogeneous corpus. Starting
                    with a video generator featuring a diffusion transformer architecture, we devise
                    several strategies to effectively integrate conditioning signals and improve 
                    prediction controllability and fidelity. The resulting model, ReSim, enables Reliable
                    Simulation of diverse open-world driving scenarios under various actions, including
                    hazardous non-expert ones. To close the gap between high-fidelity simulation and
                    applications that require reward signals to judge different actions, we introduce a
                    Video2Reward module that estimates a reward from ReSim's simulated future. Our
                    ReSim paradigm achieves up to 44% higher visual fidelity, improves controllability
                    for both expert and non-expert actions by over 50%, and boosts planning and policy
                    selection performance on NAVSIM by 2% and 25%, respectively.
                </p>
            </div>




            {/* waymo */}
            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-4xl font-bold scroll-mt-32" id="action_control_waymo">
                    Action-Controlled Future Prediction
                </h1>
                <h1 className="text-2xl">
                    Waymo (Zero-shot)
                </h1>
            </div>



            <div className="w-full px-6 flex flex-col justify-center gap-20 items-center">
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-7xl rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/action_control/Waymo1.mp4"/>
                </video>
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-7xl rounded-sm bg-gradient-landing"
                    >
                        <source src="https://opendrivelab.github.io/ReSim/action_control/Waymo2.mp4"/>
                </video>
            </div>

        
            {/* nus */}
            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-4xl font-bold scroll-mt-32" id="action_control_nuscenes">
                    Action-Controlled Future Prediction
                </h1>
                <h1 className="text-2xl">
                    nuScenes (Zero-shot)
                </h1>
            </div>



            <div className="w-full px-6 flex flex-col justify-center gap-20 items-center">
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-7xl rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/action_control/nuScenes1.mp4"/>
                </video>
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-7xl rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/action_control/nuScenes2.mp4"/>
                </video>
            </div>



            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-4xl font-bold scroll-mt-32" id="comparison">
                    Comparison of Action Controllability
                </h1>
            </div>



            <div className="w-full px-6 flex flex-col justify-center gap-20 items-center">
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-7xl rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison1.mp4"/>
                </video>
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-7xl rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison2.mp4"/>
                </video>
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-7xl rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison3.mp4"/>
                </video>
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-7xl rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison4.mp4"/>
                </video>
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-7xl rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison5.mp4"/>
                </video>
            </div>



            {/* <div className="w-full h-32 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold scroll-mt-32" id="comparison">
                    Comparison
                </h1>
            </div>
            <DouDoubleTabSelector/> */}
            
            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-4xl font-bold scroll-mt-32" id="action_free">
                    Action-free Future Prediction
                </h1>
            </div>
            


            <div className="w-full px-6 flex flex-col justify-center gap-20 items-center">
                <div className="w-full max-w-7xl flex flex-col 2xl:flex-row gap-6 2xl:gap-20">
                    <div className="flex flex-col justify-center items-center min-w-[128px]">
                        <h2 className="text-2xl text-center">
                            NAVSIM
                        </h2>
                    </div>
                    <div>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_free/NAVSIM.mp4"/>
                        </video>
                    </div>
                </div>
                <div className="w-full max-w-7xl flex flex-col 2xl:flex-row gap-6 2xl:gap-20">
                    <div className="flex flex-col justify-center items-center min-w-[128px]">
                        <h2 className="text-2xl text-center">
                            nuScenes
                        </h2>
                    </div>
                    <div>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_free/nuScenes.mp4"/>
                        </video>
                    </div>
                </div>
                <div className="w-full max-w-7xl flex flex-col 2xl:flex-row gap-6 2xl:gap-20">
                    <div className="flex flex-col justify-center items-center min-w-[128px]">
                        <h2 className="text-2xl text-center">
                            Waymo
                        </h2>
                    </div>
                    <div>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_free/Waymo.mp4"/>
                        </video>
                    </div>
                </div>
            </div>



        </div>
    );
}
