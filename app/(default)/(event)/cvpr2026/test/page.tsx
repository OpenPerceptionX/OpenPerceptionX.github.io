import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Workshop at CVPR 2025 | OpenDriveLab",
    description: "Workshop at CVPR 2025",
    keywords: ["Workshop", "CVPR 2025", "OpenDriveLab", "HKU"],
};


import Image from 'next/image'
import Link from "next/link"



import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full h-svh p-16">   
                <div className="w-full h-full relative rounded-sm">
                    <Image
                        src='/assets/background/denver.jpg'
                        alt='Denver'
                        fill
                        className='object-center object-cover bg-gradient-landing rounded-sm bg-black bg-opacity-30 bg-blend-overlay select-none'
                    />
                    <div className="w-full h-full absolute flex flex-col justify-end items-start p-12 gap-6">
                        <div className="flex flex-row gap-6 laptop:gap-10">
                            <Image
                                src='/assets/icon/cvpr/cvpr2026_white.svg'
                                alt='cvpr'
                                width={256}
                                height={1}
                                className='select-none'
                            />
                            <Image
                                src='/assets/icon/cvpr/ieee_cs_white.png'
                                alt='cvpr'
                                width={256}
                                height={1}
                                className='select-none'
                            />
                        </div>
                        <h1 className="text-white text-t0 font-bold">
                            From Labs to Life: Embodied Intelligence in the Wild
                        </h1>
                        <h5 className="text-white">
                            CVPR 2026 Workshop
                            <br></br>
                            Denver, USA
                        </h5>
                    </div>
                </div>
            </div>


            


            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <Separator className="max-w-7xl mt-14 md:mt-28" />
            </div>




        </div>
    );
}
