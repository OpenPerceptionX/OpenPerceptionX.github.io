import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Autonomous Driving | OpenDriveLab",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["Autonomous Driving", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU" ],
};



import Image from 'next/image'
import Link from "next/link"



import { categories, publications, scholar } from "@/data/publications"



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
import { Chen2025_value_learning } from "@/components/citation-drawer"
import { type_mapping } from "@/data/mapping"



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full px-6 flex justify-center mt-36 md:mt-24">
                <div className="w-full max-w-7xl flex flex-col gap-6 fg-gradient-blue">
                    <h1 className="text-t0 font-bold">
                        Autonomous Driving
                    </h1>
                    <span className="text-xl">
                        enables vehicles to perceive, reason, and act safely in complex environments. We focus on whole-scene perception, critical data generation, and end-to-end decision-making. Our goal is to build a unified and scalable autonomy pipeline grounded in large-scale real-world driving data and efficient world representations.
                    </span>
                    <span className="text-xl">
                        For a complete list of publications, please see <Link href="/publications" className="underline text-o-blue hover:text-o-light-blue">here</Link>.
                    </span>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {[...publications.values()].filter(publication => publication.timeline.includes("te2e"))
                        .sort((a, b) => {
                            const timeA = new Date(a.time.replace(/\./g, "-")).getTime();
                            const timeB = new Date(b.time.replace(/\./g, "-")).getTime();
                            return timeB - timeA;
                        })
                        .map((publication, index) => (
                            <li key={publication.title}>
                                {
                                    index != 0 && (
                                        <hr />
                                    )
                                }



                                <div className="timeline-middle mx-3">
                                    <svg
                                    viewBox="0 0 20 20"
                                    className="h-5 w-5 text-o-gray"
                                    fill="currentColor"
                                    >
                                        <circle cx="10" cy="10" r="8" />
                                    </svg>
                                </div>



                                <div
                                className={`mb-6 grid gap-1 ${
                                    index % 2 === 1 ? "timeline-end md:text-start" : "timeline-start md:text-end"
                                }`}
                                >



                                    <time className="text-o-gray">
                                        {publication.time}
                                    </time>



                                    <Link href={publication.link} target={publication.link.startsWith('http') ? '_blank' : '_self'} className="text-xl hover:text-o-blue mt-1">
                                        {publication.title}
                                    </Link>



                                    <i className="text-sm text-o-gray whitespace-pre-line">
                                        {publication.description}
                                    </i>



                                    <div>
                                        <div className={`text-sm text-o-gray w-full flex flex-row items-center flex-wrap justify-start ${
                                            index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                                        }`}
                                        >
                                            <Link href={publication.link} target={publication.link.startsWith('http') ? '_blank' : '_self'} className="animated-underline-gray mr-3 text-nowrap">
                                                {
                                                    publication.link.startsWith('http') ? (
                                                        "Paper"
                                                    ) : (
                                                        "Blog"
                                                    )
                                                }
                                            </Link>
                                            {
                                                publication.icon.length != 0 && publication.icon[0].type != 'cite' && (
                                                    <span className="text-xs mr-3"> | </span>
                                                )
                                            }
                                            {
                                                publication.icon.map((icon, index) => (
                                                    icon.type != 'cite' && (
                                                        <div key={index} className="flex items-center">
                                                            <Link href={icon.link} target={icon.link.startsWith('http') ? '_blank' : '_self'} className="animated-underline-gray mr-3 text-nowrap">
                                                                {
                                                                    publication.title.startsWith('FreeTacMan') && icon.type =='blog' ? (
                                                                        'Hardware Guide'
                                                                    ) : (
                                                                        type_mapping[icon.type] ?? "XXX"
                                                                    )
                                                                }
                                                            </Link>
                                                            {index < publication.icon.length - 1 && (
                                                                <span className="text-xs mr-3"> | </span>
                                                            )}
                                                        </div>
                                                    )
                                                ))
                                            } 
                                            {
                                                publication.title.startsWith('AgiBot') && (
                                                    <span className="text-xs mr-3"> | </span>
                                                )
                                            } {
                                                publication.title.startsWith('AgiBot') && (
                                                    <Link href='/challenge2025//#agibot-world' className="animated-underline-gray mr-3 text-nowrap">
                                                        Challenge
                                                    </Link>
                                                )
                                            }
                                            {
                                                publication.title.startsWith('Intelligent Robot') && (
                                                    <span className="text-xs mr-3"> | </span>
                                                )
                                            } {
                                                publication.title.startsWith('Intelligent Robot') && (
                                                    <Drawer direction="top">
                                                        <DrawerTrigger asChild>
                                                            <span className="animated-underline-gray mr-3 text-nowrap">
                                                                Cite
                                                            </span>
                                                        </DrawerTrigger>
                                                        <Chen2025_value_learning />
                                                    </Drawer>
                                                )
                                            }
                                        </div>
                                    </div>



                                    {
                                        publication.timeline.includes("highlight") && (
                                            <div className="px-10 md:px-0 xl:px-20 w-full flex justify-center items-center relative mt-3">
                                                <Link href={publication.link} target={publication.link.startsWith('http') ? '_blank' : '_self'}>
                                                    <Image
                                                        src={publication.image}
                                                        alt={publication.title}
                                                        width={1024}
                                                        height={1024}
                                                        className="rounded-sm bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                                                    />
                                                </Link>
                                            </div>
                                        )
                                    }



                                </div>



                                {
                                    index != [...publications.values()].filter(publication => publication.timeline.includes("te2e")).length - 1 && (
                                        <hr />
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



            {/* <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href='#dataset' className="scroll-mt-32 group flex items-center" id='dataset'>
                            Dataset
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
                <div className="w-full max-w-7xl flex flex-col gap-12">



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



                    <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 justify-between">

                        <Link className="lg:flex-1/2 w-full lg:max-w-128 h-64 relative rounded-sm overflow-hidden group" href="https://github.com/OpenDriveLab/DriveLM" target="_blank">
                            <Image
                                src="/assets/dataset/drivelm.jpg"
                                alt="DriveLM"
                                fill
                                className="object-cover object-center bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                            />
                        </Link>

                        <div className="flex-1/2 flex flex-col gap-6">

                            <Link className="text-xl font-bold hover:text-o-blue" href="https://github.com/OpenDriveLab/DriveLM" target="_blank">
                                DriveLM
                            </Link>

                            <div className="flex gap-3 flex-wrap items-center">
                                <Link href="https://github.com/OpenDriveLab/DriveLM" target="_blank">
                                    <img loading="lazy" src="https://img.shields.io/github/stars/OpenDriveLab/DriveLM?style=social" className="h-6 hover:scale-105 transition delay-100 duration-200"/>
                                </Link>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    Language
                                </span>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    Planning
                                </span>
                            </div>

                            <div className="flex flex-col gap-6 leading-relaxed">
                                <ul className="ml-6 space-y-3 list-outside list-disc">
                                    <li>
                                        Driving with Graph Visual Question Answering.
                                    </li>
                                    <li>
                                        Facilitating the <b>Perception, Prediction, Planning, Behavior, Motion</b> tasks with human-written reasoning logic as a connection in between.
                                    </li>
                                    <li>
                                        <a className="text-o-blue animated-underline" href="/challenge2024/#driving_with_language">
                                            Autonomous Grand Challenge @ CVPR 2024
                                        </a> with 152 teams from 14 countries and regions participating.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>



                    <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 justify-between">

                        <Link className="lg:flex-1/2 w-full lg:max-w-128 h-64 relative rounded-sm overflow-hidden group" href="https://github.com/OpenDriveLab/OpenScene" target="_blank">
                            <Image
                                src="/assets/dataset/openscene.jpg"
                                alt="OpenScene"
                                fill
                                className="object-cover object-center bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                            />
                        </Link>

                        <div className="flex-1/2 flex flex-col gap-6">

                            <Link className="text-xl font-bold hover:text-o-blue" href="https://github.com/OpenDriveLab/OpenScene" target="_blank">
                                OpenScene
                            </Link>

                            <div className="flex gap-3 flex-wrap items-center">
                                <Link href="https://github.com/OpenDriveLab/OpenScene" target="_blank">
                                    <img loading="lazy" src="https://img.shields.io/github/stars/OpenDriveLab/OpenScene?style=social" className="h-6 hover:scale-105 transition delay-100 duration-200"/>
                                </Link>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    Occupancy
                                </span>
                            </div>

                            <div className="flex flex-col gap-6 leading-relaxed">
                                <ul className="ml-6 space-y-3 list-outside list-disc">
                                    <li>
                                        Covering a wide span of over <b>120 hours</b> and providing occupancy labels collected in various cities.
                                    </li>
                                    <li>
                                        <a className="text-o-blue animated-underline" href="/challenge2024/">
                                            Autonomous Grand Challenge @ CVPR 2024
                                        </a> with 212 teams from 13 countries and regions participating.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>



                    <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 justify-between">

                        <Link className="lg:flex-1/2 w-full lg:max-w-128 h-64 relative rounded-sm overflow-hidden group" href="https://github.com/OpenDriveLab/OpenLane-V2" target="_blank">
                            <Image
                                src="/assets/dataset/openlanev2.jpg"
                                alt="OpenLane-V2"
                                fill
                                className="object-cover object-center bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                            />
                        </Link>

                        <div className="flex-1/2 flex flex-col gap-6">

                            <Link className="text-xl font-bold hover:text-o-blue" href="https://github.com/OpenDriveLab/OpenLane-V2" target="_blank">
                                OpenLane-V2
                            </Link>

                            <div className="flex gap-3 flex-wrap items-center">
                                <Link href="https://github.com/OpenDriveLab/OpenLane-V2" target="_blank">
                                    <img loading="lazy" src="https://img.shields.io/github/stars/OpenDriveLab/OpenLane-V2?style=social" className="h-6 hover:scale-105 transition delay-100 duration-200"/>
                                </Link>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    Topology Recognition
                                </span>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    3D Lane Detection
                                </span>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    Traffic Element Recognition
                                </span>
                            </div>

                            <div className="flex flex-col gap-6 leading-relaxed">
                                <ul className="ml-6 space-y-3 list-outside list-disc">
                                    <li>
                                        The world's first perception and reasoning benchmark for scene structure in autonomous driving.
                                    </li>
                                    <li>
                                        <a className="text-o-blue animated-underline" href="/challenge2024/#mapless_driving">
                                            Autonomous Grand Challenge @ CVPR 2024
                                        </a> with 120 teams from 10 countries and regions participating.
                                    </li>
                                    <li>
                                        <a className="text-o-blue animated-underline" href="/challenge2023/#openlane_topology">
                                            Autonomous Driving Challenge @ CVPR 2023
                                        </a> with 34 teams from 4 countries and regions participating.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>



                    <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 justify-between">

                        <Link className="lg:flex-1/2 w-full lg:max-w-128 h-64 relative rounded-sm overflow-hidden group" href="https://github.com/OpenDriveLab/OpenLane" target="_blank">
                            <Image
                                src="/assets/dataset/openlane.jpg"
                                alt="OpenLane"
                                fill
                                className="object-cover object-center bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                            />
                        </Link>

                        <div className="flex-1/2 flex flex-col gap-6">

                            <Link className="text-xl font-bold hover:text-o-blue" href="https://github.com/OpenDriveLab/OpenLane" target="_blank">
                                OpenLane
                            </Link>

                            <div className="flex gap-3 flex-wrap items-center">
                                <Link href="https://github.com/OpenDriveLab/OpenLane" target="_blank">
                                    <img loading="lazy" src="https://img.shields.io/github/stars/OpenDriveLab/OpenLane?style=social" className="h-6 hover:scale-105 transition delay-100 duration-200"/>
                                </Link>
                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                    3D Lane Detection
                                </span>
                            </div>

                            <div className="flex flex-col gap-6 leading-relaxed">
                                <ul className="ml-6 space-y-3 list-outside list-disc">
                                    <li>
                                        The first real-world and the largest scaled 3D lane dataset to date.
                                    </li>
                                    <li>
                                        Owning <b>200K frames</b> and over <b>880K lanes</b>.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>



                </div>
            </div> */}



        </div>
    )
}
