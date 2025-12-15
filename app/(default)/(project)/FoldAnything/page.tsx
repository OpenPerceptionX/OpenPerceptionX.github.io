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
                <div>



                    <div className="w-full max-w-7xl flex flex-col">


                        <div className="flex flex-row w-full">
                            <div className="flex flex-col gap-6">
                                <h1 className="font-bold text-t1">
                                    MMLab at CVPR 2025
                                </h1>
                                <h2 className="font-bold">
                                    June 11 - 15 2025<br></br>Nashville, USA
                                </h2>
                                <p>
                                    The <Link className="text-mred animated-underline" href="https://cvpr.thecvf.com/Conferences/2025" target="_blank">CVPR 2025</Link> is being held Wednesday, June 11th through Sunday, June 15th, 2025 at the Music City Center, Nashville TN, USA. MMLab at HKU will have a presence with active involvement in 9 competitions, workshops, and tutorials, and 24 papers being presented at the main conference.
                                </p>
                            </div>
                            {/* <div className="hidden xl:flex flex-col justify-end ">
                                <Image
                                    src="https://ik.imagekit.io/mmlab/9wWMLO0JqHQ.jpg"
                                    alt="Nashville"
                                    width={352}
                                    height={384}
                                    className="object-cover object-center shadow-sm bg-gradient-loading select-none"
                                />
                            </div> */}
                        </div>



                        <div className="w-full flex flex-col items-center">
                            <Separator className="max-w-7xl mt-20"/>
                        </div>



                        {/* service */}
                        <div className="w-full flex flex-col items-center">
                            <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                                <Link href="#service" className="scroll-mt-32 group flex items-center" id="service">
                                    Service
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </h2>
                        </div>
                        <div className="mt-20">
                            <p>
                                Many team members make their contribution to CVPR 2025, altogether we are building a more professional community to shape the future of AI. We sincerely thank all for their service:
                            </p>
                            <ul className="mt-6 ml-6 space-y-6 list-outside list-disc">
                                <li>
                                    <b>Area Chair</b>: Ping Luo, Xihui Liu, Hongyang Li
                                </li>
                                <li>
                                    <b>Outstanding Reviewer</b>: Yuqing Wang
                                </li>
                                <li>
                                    <b>Reviewer</b>: Chengyue Wu, Chonghao Sima, Fanqing Meng, Haibao Yu, Jiahao Wang, Jin Wang, Jiwen Yu, Li Chen, Lirui Zhao, Mengzhao Chen, Quanfeng Lu, Runjian Chen, Shilong Zhang, Shoufa Chen, Yao Mu, Yi Chen, Yihang Qiu, Yizhuo Li, Yukun Huang, Yunhan Yang, Zhiheng Liu, Zhixuan Liang, Zhiyuan Chen
                                </li>
                            </ul>
                        </div>
                        



                        <div className="w-full flex flex-col items-center">
                            <Separator className="max-w-7xl mt-20"/>
                        </div>



                    </div>


                </div>



        </div>
    );
}
