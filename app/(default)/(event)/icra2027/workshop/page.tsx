import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Workshop at ICRA 2027 | OpenDriveLab",
    description: "Workshop at ICRA 2027",
    keywords: ["Workshop", "ICRA 2027", "OpenDriveLab", "HKU"],
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
        name: "Javier Alonso-Mora",
        image: "https://ik.imagekit.io/opendrivelab/yuance/people/javier_alonso_mora.jpg",
        position: "Full Professor",
        affiliation: 'TU Delft',
        link: 'https://autonomousrobots.nl/people/'
    },
];



const organizers: {
    name: string;
    affiliation: string;
    link: string;
}[] = [
    {
        name: "Hongyang Li",
        affiliation: 'The University of Hong Kong',
        link: 'https://datascience.hku.hk/people/hongyang-li/'
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
        title: "Towards Robust Execution of Long-Horizon Whole-Body Control Tasks",
        subtitle: "RSS 2026",
        url: "/rss2026/workshop",
        image: "https://ik.imagekit.io/opendrivelab/jamie-davies-Hao52Fu9-F8-unsplash.jpg",
        imageoption: "object-center",
        location: "Sydney",
    },
    {
        title: "From Labs to Life: Embodied Intelligence in the Wild",
        subtitle: "CVPR 2026",
        url: "/cvpr2026/workshop",
        image: "https://ik.imagekit.io/opendrivelab/nils-huenerfuerst-OVE2SA0TVJE-unsplash.jpg?updatedAt=1761792013763",
        imageoption: "object-center",
        location: "Denver",
    },
];



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full h-svh py-16 px-6 3xl:px-16">   
                <div className="w-full h-full relative rounded-sm">
                    <Image
                        src='https://assets.archonrobotics.tech/odl/event/icra2027/terrence-low-EABOE-NK0wU-unsplash.jpg'
                        alt='Sydney'
                        fill
                        className='object-center object-cover rounded-sm select-none'
                    />
                    <div aria-hidden="true" className="absolute inset-0 rounded-sm bg-black/40 pointer-events-none" />
                    <div className="w-full h-full absolute z-10 flex flex-col justify-end items-start p-6 xl:p-10 gap-6">
                        <div className="flex flex-row items-center gap-6">
                            <Image
                                src='https://assets.archonrobotics.tech/odl/logo/icra.png'
                                alt='ICRA'
                                width={128}
                                height={1}
                                className='h-12 w-auto shrink-0 object-contain select-none'
                            />
                            <Image
                                src='https://assets.archonrobotics.tech/odl/logo/IEEE_RAS_logo_4C_stacked-HiRes.fw_.png.png'
                                alt='IEEE RAS'
                                width={128}
                                height={1}
                                className='h-12 w-auto shrink-0 object-contain select-none'
                            />
                        </div>
                        <h1 className="text-white text-t1 font-bold">
                            Whole-Body Intelligence: Towards General-Purpose Humanoid Robots
                        </h1>
                        <h5 className="text-white">
                            ICRA 2027 Workshop
                            <br></br>
                            Seoul, South Korea
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
                        A world simulator is only as good as what can be learned in it.
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
                <div className="w-full max-w-7xl flex">
                    To be announced.
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
                <div className="w-full max-w-7xl flex">
                    To be announced.
                </div>
            </div>


            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#related" className="scroll-mt-32 group flex items-center" id="related">
                            Related Workshops
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
