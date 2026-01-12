import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Publication | OpenDriveLab",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["Publication", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU" ],
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



import { categories, publications, scholar } from "@/data/publications"



import { Chen2025_value_learning } from "@/components/citation-drawer"



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full px-6 flex justify-center mt-36 md:mt-24">
                <div className="w-full max-w-7xl flex flex-col gap-6 fg-gradient-blue">
                    <h1 className="text-t0 font-bold">
                        Publication
                    </h1>
                    <span className="text-xl">
                        We position OpenDriveLab as one of the most top research teams around globe, since we've got talented people and published work at top venues.
                    </span>
                </div>
            </div>



            {categories.map((category) => (
                <div key={category.text}>



                    <div className="w-full px-6 flex justify-center mt-24">
                        <div className="w-full max-w-7xl flex">
                            <h2 className="text-t1"> 
                                <Link href={'#' + category.id} className="scroll-mt-32 group flex items-center" id={category.id}>
                                    {category.text}
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



                    <div className="w-full px-6 flex justify-center mt-24 lg:mt-12">
                        <div className="w-full max-w-7xl flex flex-col gap-24 lg:gap-12">
                            {[...publications.values()].filter(publication => publication.keys.includes(category.id)).map((publication) => (
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12" key={publication.title}>



                                    <div className="flex-1/3 w-full flex justify-center items-center relative">
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



                                    <div className="flex-2/3 flex flex-col gap-6 justify-center">

                                        <div className="flex flex-col gap-3">
                                            <div>
                                                <Link href={publication.link} target={publication.link.startsWith('http') ? '_blank' : '_self'} className="text-xl hover:text-o-blue">
                                                    {publication.title}
                                                </Link>
                                            </div>
                                            <span className="text-sm flex flex-wrap">
                                                {
                                                    publication.author.split(', ').map((author, index) => {
                                                        const trimmedAuthor = author.trim();
                                                        return (
                                                            <div key={author}>
                                                                {
                                                                    trimmedAuthor in scholar ? (
                                                                        <Link className="text-o-dark-blue animated-underline-gray" href={scholar[trimmedAuthor]} target={scholar[trimmedAuthor].startsWith('http') ? '_blank' : '_self'}>
                                                                            {trimmedAuthor}
                                                                        </Link>
                                                                    ) : (
                                                                        <span>
                                                                            {trimmedAuthor}
                                                                        </span>
                                                                    )
                                                                }
                                                                {
                                                                    index < publication.author.split(', ').length - 1 && (
                                                                        <span>,&nbsp;</span>
                                                                    )
                                                                }
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </span>
                                        </div>

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

                                        {
                                            publication.description && (
                                                <i className="text-sm text-o-gray whitespace-pre-line">
                                                    {publication.description}
                                                </i>
                                            )
                                        }

                                    </div>



                                </div>
                            ))}
                        </div>
                    </div>



                </div>
            ))}



        </div>
    )
}
