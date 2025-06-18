import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Event | OpenDriveLab",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["Event", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};



import Image from 'next/image'
import Link from "next/link"



import { AspectRatio } from "@/components/ui/aspect-ratio"



import { years, events } from "@/data/events"



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full px-6 flex justify-center mt-36 md:mt-24">
                <div className="w-full max-w-7xl flex flex-col gap-6 fg-gradient-blue">
                    <h1 className="text-t0 font-bold">
                        Event
                    </h1>
                </div>
            </div>



            {years.map((year) => (
                <div key={year}>



                    <div className="w-full px-6 flex justify-center mt-24">
                        <div className="w-full max-w-7xl flex">
                            <h2 className="text-t1"> 
                                <Link href={'#' + year} className="scroll-mt-32 group flex items-center" id={year}>
                                    {year}
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
                            {[...events.values()].filter(event => event.keys.includes(year)).map((event) => (
                                <div className="flex flex-col gap-6" key={event.title}>
                                    <Link className="w-full h-64 relative rounded-sm shadow-sm overflow-hidden group" href={event.url} target={event.url.startsWith('http') ? '_blank' : '_self'}>
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
            ))}



        </div>
    )
}
