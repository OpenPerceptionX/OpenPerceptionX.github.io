import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "OpenDriveLab | Robotics and Autonomous Driving at HKU and Beyond",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU" ],
};



import Image from 'next/image'
import Link from "next/link"
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
// import { News } from "./news"
// import { Embodied, E2EAD } from "@/components/app-drawer"
import { Chen2025_value_learning } from "@/components/citation-drawer"



import { publications } from "@/data/publications"
import { events } from "@/data/events"



export default function Home() {

    return (
        <div className="w-full">



            <Landing />



            {/* <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#news" className="scroll-mt-32 group flex items-center" id="news">
                            News
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



            <News /> */}




            <div className="w-full px-6 flex justify-center mt-36">
                <div className="w-full max-w-7xl flex">
                    <div className="w-full flex justify-between items-center">
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
                        <Link href='/recruit' className="w-16 xl:w-24 group flex ">
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="Recruit"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="Recruit"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="Recruit"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                        </Link>
                    </div>
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



            <div className="w-full px-6 flex justify-center mt-36">
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

                    <Link href='/EmbodiedAI' className="w-full h-64 md:h-80 relative rounded-sm shadow-sm overflow-hidden group hover:cursor-pointer">
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
                    </Link>

                    <Link href='/AutonomousDriving' className="w-full h-64 md:h-80 relative rounded-sm shadow-sm overflow-hidden group hover:cursor-pointer">
                        <Image
                            src="/assets/background/34dafb77s3a94a108af741cd955ac9ba2.jpg"
                            alt="Autonomous Driving"
                            fill
                            className="object-center object-cover bg-gradient-landing group-hover:scale-103 transition delay-100 duration-200"
                        />
                        <div className="w-full h-full absolute flex flex-col justify-end items-end p-6">
                            <h3 className="text-white font-bold text-t1 select-none text-end">
                                Autonomous Driving
                            </h3>
                        </div>
                    </Link>
                    
                    {/* <Drawer direction="top">
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
                    </Drawer> */}

                    {/* <Drawer direction="top">
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
                    </Drawer> */}

                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-36">
                <div className="w-full max-w-7xl flex flex-col gap-3">
                    <div className="w-full flex justify-between items-center">
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
                        <Link href='/publications' className="w-16 xl:w-24 group flex ">
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="Publications"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="Publications"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="Publications"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                        </Link>
                    </div>
                    <span>
                        Representative work published at top-tiered venues.
                    </span>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-12">
                    {[...publications.values()].filter(publication => publication.keys.includes('editor_pick')).map((publication) => (
                        <div className="flex flex-col gap-3" key={publication.title}>

                            <div>
                                <Link href={publication.link} target={publication.link.startsWith('http') ? '_blank' : '_self'} className="text-xl hover:text-o-blue">
                                    {publication.title}
                                </Link>
                            </div>

                            {
                                publication.description && (
                                    <i className="text-sm text-o-gray whitespace-pre-line">
                                        {publication.description}
                                    </i>
                                )
                            }

                            <div className="flex gap-3 flex-wrap items-center">
                                {
                                    publication.noteoption ?
                                        <Link href={publication.noteoption} target={publication.noteoption.startsWith('http') ? '_blank' : '_self'} className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5 hover:scale-105 transition delay-100 duration-200">
                                            {publication.note}
                                        </Link>
                                    :
                                        <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                            {publication.note}
                                        </span>
                                }
                                {
                                    publication.keys.includes('survey') && (
                                        <span className="text-xs text-white bg-black rounded-sm px-2 py-1.5">
                                            Survey
                                        </span>
                                    )
                                }
                                {
                                    publication.keys.includes('position') && (
                                        <span className="text-xs text-white bg-black rounded-sm px-2 py-1.5">
                                            Position Paper
                                        </span>
                                    )
                                }
                                {
                                    publication.star && (
                                        <Link href={publication.starlink} target={publication.starlink.startsWith('http') ? '_blank' : '_self'}>
                                            <img loading="lazy" src={publication.star} className="h-6 hover:scale-105 transition delay-100 duration-200"/>
                                        </Link>
                                    )
                                }
                                {
                                    publication.icon.map((link) => (
                                        link.type != 'github' && (
                                            link.type != 'cite' ?
                                            <Link href={link.link} target={link.link.startsWith('http') ? '_blank' : '_self'} key={link.type} className="size-4 md:size-5 group/icon">
                                                <AspectRatio ratio={1/1}>
                                                    <Image
                                                        src={"/resources/icon/" + link.type + ".svg"}
                                                        alt={link.type}
                                                        fill
                                                        className="group-hover/icon:scale-125 transition delay-100 duration-200"
                                                    />
                                                </AspectRatio>
                                            </Link>
                                            :                                
                                            <Drawer direction="top" key={link.type}>
                                                <DrawerTrigger asChild>
                                                    <div className="size-4 md:size-5 group/icon hover:cursor-pointer">
                                                        <AspectRatio ratio={1/1}>
                                                            <Image
                                                                src={"/resources/icon/" + link.type + ".svg"}
                                                                alt={link.type}
                                                                fill
                                                                className="group-hover/icon:scale-125 transition delay-100 duration-200"
                                                            />
                                                        </AspectRatio>
                                                    </div>
                                                </DrawerTrigger>
                                                <Chen2025_value_learning />
                                            </Drawer>
                                        )
                                    ))
                                }
                            </div>

                        </div>
                    ))}
                </div>
            </div>





            {/* <div className="w-full px-6 flex justify-center mt-36">
                <div className="w-full max-w-7xl flex">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-t1"> 
                            <Link href="#dataset" className="scroll-mt-32 group flex items-center" id="dataset">
                                Dataset
                                <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                        <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                    </svg>
                                </span>
                            </Link>
                        </h2>
                        <Link href='/datasets' className="w-16 xl:w-24 group flex ">
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="datasets"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="datasets"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="datasets"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                        </Link>
                    </div>
                </div>
            </div> */}



            {/* <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-12">

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-between">

                        <Link className="lg:flex-1/2 w-full lg:max-w-128 h-64 relative rounded-sm overflow-hidden group" href="https://github.com/OpenDriveLab/AgiBot-World" target="_blank">
                            <Image
                                src="/assets/dataset/agibotworld.jpg"
                                alt="AgiBot World"
                                fill
                                className="object-cover object-center bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                            />
                        </Link>

                        <div className="flex-1/2 flex flex-col gap-6">

                            <Link className="text-xl font-bold hover:text-o-blue" href="https://github.com/OpenDriveLab/AgiBot-World" target="_blank">
                                AgiBot World
                            </Link>

                            <div className="flex gap-3 flex-wrap items-center">
                                <Link href="https://github.com/OpenDriveLab/AgiBot-World" target="_blank">
                                    <img loading="lazy" src="https://img.shields.io/github/stars/OpenDriveLab/AgiBot-World?style=social" className="h-6 hover:scale-105 transition delay-100 duration-200"/>
                                </Link>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    Manipulation
                                </span>
                            </div>

                            <div className="flex flex-col gap-6 leading-relaxed">
                                <ul className="ml-6 space-y-3 list-outside list-disc">
                                    <li>
                                        Cutting-edge Sensor and Hardware Design.
                                    </li>
                                    <li>
                                        Wide-spectrum of Scenario Coverage.
                                    </li>
                                    <li>
                                        Quality Assurance with Human-in-the-loop.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 justify-between">

                        <Link className="lg:flex-1/2 w-full lg:max-w-128 h-64 relative rounded-sm overflow-hidden group" href="https://github.com/OpenDriveLab/DriveAGI/tree/main/opendv" target="_blank">
                            <Image
                                src="/assets/dataset/opendv.jpg"
                                alt="OpenDV"
                                fill
                                className="object-cover object-center bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                            />
                        </Link>

                        <div className="flex-1/2 flex flex-col gap-6">

                            <Link className="text-xl font-bold hover:text-o-blue" href="https://github.com/OpenDriveLab/DriveAGI/tree/main/opendv" target="_blank">
                                OpenDV
                            </Link>

                            <div className="flex gap-3 flex-wrap items-center">
                                <Link href="https://github.com/OpenDriveLab/DriveAGI/tree/main/opendv" target="_blank">
                                    <img loading="lazy" src="https://img.shields.io/github/stars/OpenDriveLab/DriveAGI?style=social" className="h-6 hover:scale-105 transition delay-100 duration-200"/>
                                </Link>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    Generation
                                </span>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    World Model
                                </span>
                            </div>

                            <div className="flex flex-col gap-6 leading-relaxed">
                                <ul className="ml-6 space-y-3 list-outside list-disc">
                                    <li>
                                        The largest driving video dataset to date, containing more than <b>1700 hours</b> of real-world driving videos.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div> */}



            <div className="w-full px-6 flex justify-center mt-36">
                <div className="w-full max-w-7xl flex">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-t1"> 
                            <Link href="#event" className="scroll-mt-32 group flex items-center" id="event">
                                Event
                                <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                        <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                    </svg>
                                </span>
                            </Link>
                        </h2>
                        <Link href='/events' className="w-16 xl:w-24 group flex ">
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="Events"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="Events"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={3/1}>
                                <Image
                                    src="/assets/icon/arrow.png"
                                    alt="Events"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                        </Link>
                    </div>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12 mb-12">
                <div className="w-full max-w-7xl grid gap-12 grid-cols-1 xl:grid-cols-2">
                    {[...events.values()].filter(event => event.keys.includes('editor_pick')).map((event) => (
                        <div className="flex flex-col gap-6" key={event.title}>
                            <Link className="w-full h-64 md:h-80 relative rounded-sm shadow-sm overflow-hidden group" href={event.url} target={event.url.startsWith('http') ? '_blank' : '_self'}>
                                <Image
                                    src={event.image}
                                    alt={event.location}
                                    fill
                                    className={event.imageoption + " object-cover bg-gradient-landing group-hover:scale-103 transition delay-100 duration-200"}
                                />
                                <div className="w-full h-full absolute flex flex-col justify-end items-end p-6">
                                    <h3 className="text-white font-bold text-t0 select-none">
                                        {event.location}
                                    </h3>
                                </div>
                            </Link>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-bold">
                                    {event.title}
                                </h2>
                                <h3>
                                    {event.subtitle}
                                </h3>
                            </div>
                            <span className="text-o-gray">
                                {event.date}
                            </span>
                        </div>
                    ))}   
                </div>
            </div>

        </div>
    )
}
