import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Recruit | OpenDriveLab",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["Recruit", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};



import Link from "next/link"



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full px-6 flex justify-center mt-36 md:mt-24">
                <div className="w-full max-w-7xl flex flex-col gap-6 fg-gradient-blue">
                    <h1 className="text-t0 font-bold">
                        團隊招聘需求
                    </h1>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                    <p>
                        OpenDriveLab 長期深耕具身智能與自動駕駛領域。團隊端到端自動駕駛項目 UniAD，獲得 <Link className="text-o-blue animated-underline" href="https://cvpr2023.thecvf.com/Conferences/2023/Awards" target="_blank">IEEE CVPR 2023 最佳論文獎</Link> 。團隊俯視圖感知工作 BEVFormer，獲得 <Link className="text-o-blue animated-underline" href="https://www.zeta-alpha.com/post/must-read-the-100-most-cited-ai-papers-in-2022" target="_blank">2022 年百強影響力人工智能論文榮譽</Link> 。團隊積極參與社區建設，舉辦國際挑戰賽，並推進 IEEE 國際標準建設。
                    </p>
                    <p>
                        合作團隊包括香港大學（馬毅老師、羅平老師）、上海交通大學（嚴駿馳老師）等等。
                    </p>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href='#embodied' className="scroll-mt-32 group flex items-center" id='embodied'>
                            具身智能
                            <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                    <h3 className="text-xl">
                        具身智能研究員
                    </h3>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            崗位性質：Ph.D. / Master / Postdoc / Research Assistant / 校招 / 社招 / 實習
                        </li>
                        <li>
                            工作地點：香港 / 上海 / 深圳
                        </li>
                    </ul>
                    <h4>
                        崗位要求
                    </h4>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            探索機器學習在具身智能領域運用，產出有影響力的工作
                        </li>
                        <li>
                            計算機科學、人工智能、機器人、電子工程、自動化、應用數學等相關專業優先，有相關研究或工作經驗者優先
                        </li>
                        <li>
                            紮實的編程實現能力，熟練使用 Python 等編程語言
                        </li>
                        <li>
                            擁有強大的動手能力與豐富的工程落地經驗，瞭解並熱愛具身智能領域
                        </li>
                        <li>
                            具有飽滿的科研熱情，熱衷探索前沿技術，想要做有影響力的工作
                        </li>
                        <li>
                            熟悉最新具身智能相關工作（如 HumanPlus、RDT、UMI 等）
                        </li>
                        <li>
                            具備有機器人等平台硬件開發能力者優先
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                    <h3 className="text-xl">
                        機器人硬件工程師
                    </h3>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            崗位性質：Ph.D. / Master / Postdoc / Research Assistant / 校招 / 社招 / 實習
                        </li>
                        <li>
                            工作地點：香港 / 上海 / 深圳
                        </li>
                    </ul>
                    <h4>
                        崗位要求
                    </h4>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            負責具身智能領域相關開發，包括但不限於 Humanoid、DexHand、Manipulation 等
                        </li>
                        <li>
                            計算機科學、人工智能、機器人、電子工程、自動化、應用數學等相關專業優先，有相關研究或工作經驗者優先
                        </li>
                        <li>
                            紮實的編程實現能力，熟練使用C++，Python等編程語言
                        </li>
                        <li>
                            擁有強大的動手能力與豐富的工程落地經驗，瞭解並熱愛具身智能領域
                        </li>
                        <li>
                            熟練使用機器人操作系統及仿真平台，有機器人相關領域的算法研發以及項目落地經驗
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href='#driving' className="scroll-mt-32 group flex items-center" id='driving'>
                            自動駕駛
                            <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                    <h3 className="text-xl">
                        自動駕駛研究員
                    </h3>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            崗位性質：Ph.D. / Master / Postdoc / Research Assistant / 校招 / 社招 / 實習
                        </li>
                        <li>
                            工作地點：香港 / 上海 / 深圳
                        </li>
                    </ul>
                    <h4>
                        崗位要求
                    </h4>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            探索機器學習在自動駕駛領域運用，產出有影響力的工作
                        </li>
                        <li>
                            計算機科學、人工智能、機器人、電子工程、自動化、應用數學等相關專業優先，有相關研究或工作經驗者優先
                        </li>
                        <li>
                            紮實的編程實現能力，熟練使用 Python 等編程語言
                        </li>
                        <li>
                            擁有強大的動手能力與豐富的工程落地經驗，瞭解並熱愛自動駕駛領域
                        </li>
                        <li>
                            具有飽滿的科研熱情，熱衷探索前沿技術，想要做有影響力的工作
                        </li>
                        <li>
                            熟悉最新自動駕駛相關工作
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href='#ecosystem' className="scroll-mt-32 group flex items-center" id='ecosystem'>
                            生態合作
                            <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                    <h3 className="text-xl">
                        科研助理 / 生態合作助理
                    </h3>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            崗位性質：校招 / 社招 / 實習
                        </li>
                        <li>
                            工作地點：香港 / 上海
                        </li>
                    </ul>
                    <h4>
                        崗位要求
                    </h4>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            有相關研究或工作經驗者優先
                        </li>
                        <li>
                            瞭解並熱愛深度學習領域，瞭解最新深度學習相關工作
                        </li>
                        <li>
                            具有飽滿的熱情，熱衷探索前沿技術，想要做有影響力的工作
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href='#introduction' className="scroll-mt-32 group flex items-center" id='introduction'>
                            團隊介紹
                            <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                    <h3 className="text-xl">
                        往期工作
                    </h3>
                    <div>
                        <span>團隊最新工作詳見：<Link href="/publications" className="text-o-blue animated-underline">opendrivelab.com/publications</Link> </span>
                    </div>
                    <h4>
                        端到端自動駕駛
                    </h4>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            UniAD (Planning-Oriented Autonomous Driving)，CVPR 2023 Best Paper Award，近十年中國學術機構作為第一單位首次獲CVPR最佳論文獎。<Link href="https://arxiv.org/abs/2212.10156" target="_blank" className="text-o-blue animated-underline">arXiv:2212.10156</Link> 
                        </li>
                    </ul>
                    <h4>
                        自動駕駛世界模型等原創技術
                    </h4>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability，NeurIPS 2024，高質量、可泛化的駕駛視頻生成模型。<Link href="https://arxiv.org/abs/2405.17398" target="_blank" className="text-o-blue animated-underline">arXiv:2405.17398</Link> 
                        </li>
                        <li>
                            BEVFormer: Learning Bird's-Eye-View Representation from Multi-Camera Images via Spatiotemporal Transformers，ECCV 2022，2022年百強影響力人工智能論文。<Link href="https://arxiv.org/abs/2203.17270" target="_blank" className="text-o-blue animated-underline">arXiv:2203.17270</Link> 
                        </li>
                    </ul>
                    <h4>
                        具身智能 - Manipulation、Humanoid、靈巧手
                    </h4>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            UniVLA: Learning to Act Anywhere with Task-centric Latent Actions，RSS 2025，機器人領域國際頂級會議。<Link href="https://arxiv.org/abs/2505.06111" target="_blank" className="text-o-blue animated-underline">arXiv:2406.00439</Link> 
                        </li>
                        <li>
                            CLOVER (Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation)，NeurIPS 2024。<Link href="https://arxiv.org/abs/2409.09016" target="_blank" className="text-o-blue animated-underline">arXiv:2409.09016</Link> 
                        </li>
                        <li>
                            RoboDual (Towards Synergistic, Generalized, and Efficient Dual-System for Robotic Manipulation)，團隊最新工作。<Link href="https://arxiv.org/abs/2410.08001" target="_blank" className="text-o-blue animated-underline">arXiv:2410.08001</Link> 
                        </li>
                        <li>
                            硬件條件包括最新移動式雙臂機器人、通用人形機器人等。與眾多知名機器人公司（如智元機器人等）均有長期、穩定合作。
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                    <h3 className="text-xl">
                        團隊資源
                    </h3>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            豐富的頂級計算資源，先進的機器人硬件設備
                        </li>
                        <li>
                            與世界頂級研究人員合作機會
                        </li>
                        <li>
                            優秀的團隊工作氛圍
                        </li>
                        <li>
                            學習能力強，能夠快速根據項目需要掌握其他技能
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href='#apply' className="scroll-mt-32 group flex items-center" id='apply'>
                            申請方式
                            <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                    <p>
                        簡歷投遞請發送至 <Link className="text-o-blue animated-underline" href="mailto:recruit@opendrivelab.com">recruit@opendrivelab.com</Link>  
                    </p>
                </div>
            </div>



        </div>
    )
}
