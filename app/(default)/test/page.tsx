import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "OpenDriveLab | Robotics and Autonomous Driving at HKU, SII, and beyond",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};



import Image from 'next/image'
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


import { Landing } from "./landing"
import { Embodied, E2EAD } from "@/components/app-drawer"



export default function Home() {

    return (
        <div className="w-full">



            {/* landing */}
            <Landing />



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#research" className="scroll-mt-32 group flex items-center" id="research">
                            Research
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
                <div className="w-full max-w-7xl grid gap-12 grid-cols-1 xl:grid-cols-2">

                    <Drawer direction="top">
                        <DrawerTrigger asChild>
                            <div className="w-full h-64 md:h-80 relative rounded-sm shadow-sm overflow-hidden group hover:cursor-pointer">
                                <Image
                                    src="/assets/background/50b9a68a4c9773f405f914c9b1d857398.jpg"
                                    alt="Embodied AI"
                                    fill
                                    className="object-center object-cover bg-gradient-landing group-hover:scale-103 transition delay-100 duration-200"
                                />
                                <div className="w-full h-full absolute flex flex-col justify-end items-end p-6">
                                    <h3 className="text-white font-bold text-t1 select-none text-end">
                                        Embodied AI
                                    </h3>
                                </div>
                            </div>
                        </DrawerTrigger>
                        <Embodied/>
                    </Drawer>

                    <Drawer direction="top">
                        <DrawerTrigger asChild>
                            <div className="w-full h-64 md:h-80 relative rounded-sm shadow-sm overflow-hidden group hover:cursor-pointer">
                                <Image
                                    src="/assets/background/34dafb77s3a94a108af741cd955ac9ba2.jpg"
                                    alt="End-to-End Autonomous Driving"
                                    fill
                                    className="object-center object-cover bg-gradient-landing group-hover:scale-103 transition delay-100 duration-200"
                                />
                                <div className="w-full h-full absolute flex flex-col justify-end items-end p-6">
                                    <h3 className="text-white font-bold text-t1 select-none text-end">
                                        End-to-End<br></br>Autonomous Driving
                                    </h3>
                                </div>
                            </div>
                        </DrawerTrigger>
                        <E2EAD/>
                    </Drawer>

                </div>
             </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#recruit" className="scroll-mt-32 group flex items-center" id="recruit">
                            Recruit
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
                        We are searching for talents from all over the world. Are you looking for opportunities? Don't hesitate to contact us via <Link className="text-o-blue animated-underline" href="mailto:contact@opendrivelab.com">contact@opendrivelab.com</Link> or <Link className="text-o-blue animated-underline" href="https://lihongyang.info" target="_blank">Dr. Hongyang Li</Link>.
                    </p>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            具身智能研究員 / 自動駕駛研究員 / 機器人硬件工程師 / 科研助理 / 生態合作助理 <Link className="text-o-blue animated-underline" href="/recruit">【更多詳情】</Link>
                        </li>
                        <li>
                            Ph.D. student / Research Assistant / Postdoc / <i>etc.</i> in Hong Kong and Shanghai
                        </li>
                        <li>
                            Full-time employee and Intern (international are welcome)
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex flex-col gap-3">
                    <h2 className="text-t1"> 
                        <Link href="#publication" className="scroll-mt-32 group flex items-center" id="publication">
                            Publication
                            <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                    <span>
                        Representative work published at top-tiered venues.
                    </span>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">

                </div>
            </div>


        </div>
    )
}
