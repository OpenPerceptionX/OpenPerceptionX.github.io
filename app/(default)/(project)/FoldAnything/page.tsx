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



                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <Link href="#service" className="scroll-mt-32 group flex items-center flex-row" id="service">
                                <h2>
                                    Veni: Mining Failure Modes from On-Policy Experience
                                </h2>
                                <div className="min-w-10">
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </div>
                            </Link>
                        </h2>
                    </div>
                    <div className="mt-20">

                    </div>

                    

                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                </div>



        </div>
    );
}
