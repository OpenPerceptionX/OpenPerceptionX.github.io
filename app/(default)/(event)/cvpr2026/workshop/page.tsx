import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Workshop at CVPR 2026 | OpenDriveLab",
    description: "Workshop at CVPR 2026",
    keywords: ["Workshop", "CVPR 2026", "OpenDriveLab", "HKU"],
};


import Image from 'next/image'
import Link from "next/link"



import { AspectRatio } from "@/components/ui/aspect-ratio"



const speakers: {
    name: string;
    image: string;
    position: string;
    affiliation: string;
    link: string;
}[] = [
    {
        name: "Hao Su",
        image: "/assets/person/hao_su.jpg",
        position: "Associate Professor",
        affiliation: 'UC San Diego',
        link: 'https://cseweb.ucsd.edu/~haosu/'
    },
    {
        name: "Rika Antonova",
        image: "/assets/person/rika_antonova.jpg",
        position: "Associate Professor",
        affiliation: 'Cambridge',
        link: 'https://contactrika.github.io/'
    },
    {
        name: "Edward Johns",
        image: "/assets/person/edward_johns.jpg",
        position: "Associate Professor",
        affiliation: 'Imperial College London',
        link: 'https://www.robot-learning.uk/'
    },
    // {
    //     name: "Harold Soh",
    //     image: "/assets/person/harold_soh.jpg",
    //     position: "Associate Professor",
    //     affiliation: 'National University of Singapore',
    //     link: 'https://haroldsoh.com/'
    // },
    {
        name: "Shuran Song",
        image: "/assets/person/shuran_song.jpg",
        position: "Assistant Professor",
        affiliation: 'Stanford',
        link: 'https://shurans.github.io/'
    },
    {
        name: "Yilun Du",
        image: "/assets/person/yilun_du.jpg",
        position: "Assistant Professor",
        affiliation: 'Harvard',
        link: 'https://yilundu.github.io/'
    },
    {
        name: "Angjoo Kanazawa",
        image: "/assets/person/angjoo_kanazawa.jpg",
        position: "Assistant Professor",
        affiliation: 'UC Berkeley',
        link: 'https://people.eecs.berkeley.edu/~kanazawa/'
    },
    {
        name: "Jiatao Gu",
        image: "/assets/person/jiatao_gu.jpg",
        position: "Assistant Professor",
        affiliation: 'University of Pennsylvania',
        link: 'https://jiataogu.me/'
    },
];



const organizers: {
    name: string;
    affiliation: string;
    link: string;
}[] = [
    {
        name: "Ping Luo",
        affiliation: 'University of Hong Kong',
        link: 'http://luoping.me/'
    },
    {
        name: "Hongyang Li",
        affiliation: 'University of Hong Kong',
        link: 'https://datascience.hku.hk/people/hongyang-li/'
    },
    {
        name: "Andrei Bursuc",
        affiliation: 'Valeo',
        link: 'https://abursuc.github.io/'
    },
    {
        name: "Animesh Garg",
        affiliation: 'Georgia Tech',
        link: 'https://animesh.garg.tech/'
    },
    {
        name: "Lingjie Liu",
        affiliation: 'University of Pennsylvania',
        link: 'https://lingjie0206.github.io/'
    },
    {
        name: "Amy Zhang",
        affiliation: 'UT Austin',
        link: 'https://amyzhang.github.io/'
    },
    {
        name: "Huijie Wang",
        affiliation: 'OpenDriveLab',
        link: 'https://faikit.github.io/'
    },
];



const events: {
    title: string;
    subtitle: string;
    url: string,
    image: string;
    imageoption: string;
    location: string;
}[] = [
    {
        title: "Foundation Models for Autonomous Systems",
        subtitle: "CVPR 2025",
        url: "/cvpr2025/workshop",
        image: "/assets/background/nashville_night.jpg",
        imageoption: "object-center",
        location: "Nashville",
    },
    {
        title: "Embodied Intelligence for Autonomous Systems on the Horizon",
        subtitle: "CVPR 2024",
        url: "/cvpr2024/workshop",
        image: "/assets/background/seattle.jpg",
        imageoption: "object-center",
        location: "Seattle",
    },
    {
        title: "End-to-End Autonomous Driving: Emerging Tasks and Challenges",
        subtitle: "CVPR 2023",
        url: "/cvpr2023/workshop",
        image: "/ui2023/cvpr2023/img/workshop/banner.jpg",
        imageoption: "object-center",
        location: "Vancouver",
    },
];



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full h-svh py-16 px-6 3xl:px-16">   
                <div className="w-full h-full relative rounded-sm">
                    <Image
                        src='/assets/background/denver.jpg'
                        alt='Denver'
                        fill
                        className='object-center object-cover bg-gradient-landing rounded-sm bg-black bg-opacity-30 bg-blend-overlay select-none'
                    />
                    <div className="w-full h-full absolute flex flex-col justify-end items-start p-6 xl:p-10 gap-6">
                        <div className="flex flex-row gap-6">
                            <Image
                                src='/assets/icon/cvpr/cvpr2026_white.svg'
                                alt='cvpr'
                                width={128}
                                height={1}
                                className='select-none'
                            />
                            <Image
                                src='/assets/icon/cvpr/ieee_cs_white.png'
                                alt='cvpr'
                                width={128}
                                height={1}
                                className='select-none'
                            />
                        </div>
                        <h1 className="text-white text-t1 font-bold">
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



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#introduction" className="scroll-mt-32 group flex items-center" id="introduction">
                            Introduction
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
                <div className="w-full max-w-7xl flex flex-col gap-3">
                    <p className="leading-relaxed">
                        Embodied intelligence brings us closer to creating robots that can truly see, think, and act in the real world. Yet, today’s systems remain fragile, struggling to handle the complexity of the real world. This workshop looks ahead - toward generalizable embodied intelligence that thrives beyond the lab. By gathering pioneers from vision and robotics, the workshop seeks to identify key challenges, discuss interdisciplinary solutions, and chart promising directions for advancing embodied systems to everyday life.
                    </p>
                    <p className="leading-relaxed">
                        If you are interested in our workshop, please <b>mark the workshop in your CVPR registration</b>, to have enough space for the workshop room.
                    </p>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#schedule" className="scroll-mt-32 group flex items-center" id="schedule">
                            Schedule
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
                <div className="w-full max-w-7xl flex">
                    To be announced.
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#speaker" className="scroll-mt-32 group flex items-center" id="speaker">
                            Speakers
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
                <div className="w-full max-w-7xl grid gap-12 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
                    {[...speakers.values()].map((speaker) => (
                        <div className="flex flex-col gap-3 group/image" key={speaker.name}>
                            <Link href={speaker.link} target="_blank">
                                <AspectRatio ratio={1/1}>
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="h-full w-full rounded-sm object-cover bg-gradient-landing group-hover/image:scale-101 transition delay-100 duration-200"
                                    />
                                </AspectRatio>
                            </Link>
                            <span className="text-xl">
                                {speaker.name}
                            </span>
                            <div className="flex flex-col">
                                <i className="text-xs text-o-gray">
                                    {speaker.position}
                                </i>
                                <span className="">
                                    {speaker.affiliation}
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#organizer" className="scroll-mt-32 group flex items-center" id="organizer">
                            Organizers
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
                <div className="w-full max-w-7xl">
                    <div className="w-full max-w-5xl flex flex-col gap-6">
                        {[...organizers.values()].map((organizer) => (
                            <div className="flex gap-6" key={organizer.name}>
                                {
                                    organizer.link == "" && (
                                        <div className="flex-1/2">
                                            <span>
                                                {organizer.name}
                                            </span>
                                        </div>
                                    )
                                }
                                {
                                    organizer.link != "" && (
                                        <div className="flex-1/2">
                                            <Link href={organizer.link} target={organizer.link.startsWith('http') ? '_blank' : '_self'} className="hover:text-o-blue">
                                                {organizer.name}
                                            </Link>
                                        </div>
                                    )
                                }
                                <i className="flex-1/2">
                                    {organizer.affiliation}
                                </i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#edition" className="scroll-mt-32 group flex items-center" id="edition">
                            Past Editions
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
                    {[...events.values()].map((event) => (
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

                        </div>
                    ))}   
                </div>
            </div>



        </div>
    );
}
