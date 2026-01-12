import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Team | OpenDriveLab",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["Team", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU" ],
};



import Image from 'next/image'
import Link from "next/link"



import { AspectRatio } from "@/components/ui/aspect-ratio"



import { members } from "@/data/team"



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full px-6 flex justify-center mt-36 md:mt-24">
                <div className="w-full max-w-7xl flex flex-col gap-6 fg-gradient-blue">
                    <h1 className="text-t0 font-bold">
                        Team
                    </h1>
                    <span className="text-xl">
                        Introducing (some) talents at OpenDriveLab.
                    </span>
                </div>
            </div>


            {/* <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl h-48 xl:h-72 relative">
                    <div>
                        <Image
                            src="/assets/background/v2025.jpg"
                            alt="team"
                            fill
                            className="object-cover object-center rounded-sm bg-gradient-landing"
                        />
                    </div>
                </div>
            </div> */}



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#staff" className="scroll-mt-32 group flex items-center" id="staff">
                            Academic Staff
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
                    {[...members.values()].filter(member => member.keys.includes("staff")).map((member) => (
                        <div className="flex flex-col gap-3 group/image" key={member.name}>
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="h-full w-full rounded-sm object-cover bg-gradient-landing group-hover/image:hidden"
                                />
                                <Image
                                    src={member.image_s}
                                    alt={member.name}
                                    fill
                                    className="h-full w-full rounded-sm object-cover bg-gradient-landing hidden group-hover/image:block"
                                />
                            </AspectRatio>
                            <span className="text-xl">
                                {member.name}
                            </span>
                            <span className="text-xs">
                                {member.desc}
                            </span>
                            <div className="flex gap-3 flex-wrap">
                                {member.links.map((link) => (
                                    <Link href={link.url} target={link.url.startsWith('http') ? '_blank' : '_self'} key={link.icon} className="size-4 md:size-5 group/icon">
                                        <AspectRatio ratio={1/1}>
                                            <Image
                                                src={"/resources/icon/" + link.icon + ".svg"}
                                                alt={link.icon}
                                                fill
                                                className="group-hover/icon:scale-125 transition delay-100 duration-200"
                                            />
                                        </AspectRatio>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#hku" className="scroll-mt-32 group flex items-center" id="hku">
                            HKU Ph.D.
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
                    {[...members.values()].filter(member => member.keys.includes("hku")).map((member) => (
                        <div className="flex flex-col gap-3 group/image" key={member.name}>
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="h-full w-full rounded-sm object-cover bg-gradient-landing group-hover/image:hidden"
                                />
                                <Image
                                    src={member.image_s}
                                    alt={member.name}
                                    fill
                                    className="h-full w-full rounded-sm object-cover bg-gradient-landing hidden group-hover/image:block"
                                />
                            </AspectRatio>
                            <span className="text-xl">
                                {member.name}
                            </span>
                            {/* <span className="text-xs">
                                {member.desc}
                            </span> */}
                            <div className="flex gap-3 flex-wrap">
                                {member.links.map((link) => (
                                    <Link href={link.url} target={link.url.startsWith('http') ? '_blank' : '_self'} key={link.icon} className="size-4 md:size-5 group/icon">
                                        <AspectRatio ratio={1/1}>
                                            <Image
                                                src={"/resources/icon/" + link.icon + ".svg"}
                                                alt={link.icon}
                                                fill
                                                className="group-hover/icon:scale-125 transition delay-100 duration-200"
                                            />
                                        </AspectRatio>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#joint" className="scroll-mt-32 group flex items-center" id="joint">
                            Joint Ph.D.
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
                    {[...members.values()].filter(member => member.keys.includes("joint")).map((member) => (
                        <div className="flex flex-col gap-3 group/image" key={member.name}>
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="h-full w-full rounded-sm object-cover bg-gradient-landing group-hover/image:hidden"
                                />
                                <Image
                                    src={member.image_s}
                                    alt={member.name}
                                    fill
                                    className="h-full w-full rounded-sm object-cover bg-gradient-landing hidden group-hover/image:block"
                                />
                            </AspectRatio>
                            <span className="text-xl">
                                {member.name}
                            </span>
                            <span className="text-xs">
                                {member.desc}
                            </span>
                            <div className="flex gap-3 flex-wrap">
                                {member.links.map((link) => (
                                    <Link href={link.url} target={link.url.startsWith('http') ? '_blank' : '_self'} key={link.icon} className="size-4 md:size-5 group/icon">
                                        <AspectRatio ratio={1/1}>
                                            <Image
                                                src={"/resources/icon/" + link.icon + ".svg"}
                                                alt={link.icon}
                                                fill
                                                className="group-hover/icon:scale-125 transition delay-100 duration-200"
                                            />
                                        </AspectRatio>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#student" className="scroll-mt-32 group flex items-center" id="student">
                            Visiting Students / Intern / RA
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
                    {[...members.values()].filter(member => member.keys.includes("student")).map((member) => (
                        <div className="flex flex-col gap-3 group/image" key={member.name}>
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="h-full w-full rounded-sm object-cover bg-gradient-landing group-hover/image:hidden"
                                />
                                <Image
                                    src={member.image_s}
                                    alt={member.name}
                                    fill
                                    className="h-full w-full rounded-sm object-cover bg-gradient-landing hidden group-hover/image:block"
                                />
                            </AspectRatio>
                            <span className="text-xl">
                                {member.name}
                            </span>
                            <span className="text-xs">
                                {member.desc}
                            </span>
                            <div className="flex gap-3 flex-wrap">
                                {member.links.map((link) => (
                                    <Link href={link.url} target={link.url.startsWith('http') ? '_blank' : '_self'} key={link.icon} className="size-4 md:size-5 group/icon">
                                        <AspectRatio ratio={1/1}>
                                            <Image
                                                src={"/resources/icon/" + link.icon + ".svg"}
                                                alt={link.icon}
                                                fill
                                                className="group-hover/icon:scale-125 transition delay-100 duration-200"
                                            />
                                        </AspectRatio>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#alumni" className="scroll-mt-32 group flex items-center" id="alumni">
                            Alumni
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
                        {[...members.values()].filter(member => member.keys.includes("alumni")).map((member) => (
                            <div className="flex gap-6" key={member.name}>
                                {
                                    member.links[0].url == "" && (
                                        <div className="flex-1/2">
                                            <span>
                                                {member.name}
                                            </span>
                                        </div>
                                    )
                                }
                                {
                                    member.links[0].url != "" && (
                                        <div className="flex-1/2">
                                            <Link href={member.links[0].url} target={member.links[0].url.startsWith('http') ? '_blank' : '_self'} className="hover:text-o-blue">
                                                {member.name}
                                            </Link>
                                        </div>
                                    )
                                }
                                <i className="flex-1/2">
                                    {member.desc}
                                </i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div>
    )
}
