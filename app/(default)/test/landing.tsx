"use client"



import * as React from "react"



import Image from 'next/image'
import Link from "next/link"



import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/homecarousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"



import { publications } from "@/data/publications"
const landings = [5,4,0,2,3,1].map(index => [...publications.values()].filter(publication => publication.keys.includes('home_sliding'))[index])

console.log(landings)

export function Landing() {
    return (
        <div className="w-full h-svh flex justify-center items-center">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full px-6"
            >
                <CarouselContent  className="w-full">
                    {landings.map((landing, index) => (
                        <CarouselItem key={index} className="w-full h-full flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-center lg:p-12">
                            

                            <div className="flex-1/2 w-full lg:h-full flex flex-col justify-center select-none">
                                <AspectRatio ratio={16/9}>
                                    <Image
                                        src={landing.image}
                                        alt={landing.title}
                                        fill
                                        className="object-cover object-center rounded-sm bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                                    />
                                </AspectRatio>
                            </div>



                            <div className="flex-1/2 w-full flex flex-col gap-12 select-none">
                                <div className="flex flex-row text-o-gray">
                                    {index + 1} / {landings.length}
                                </div>
                                <div className="w-full flex flex-col gap-6">
                                    <div>
                                        {
                                            !landing.note.startsWith('arXiv') && (
                                                <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                                    {landing.note}
                                                </span>
                                            )
                                        }
                                    </div>
                                    <h1 className="text-t1 font-bold fg-gradient-blue pb-6 -mb-6"> 
                                        {landing.title}
                                    </h1>
                                    <h2>
                                        {landing.description}
                                    </h2>
                                    <div>
                                        <div className="flex flex-row items-center flex-wrap">
                                            {landing.icon.map((icon, index) => (
                                                <div key={index} className="flex items-center">
                                                    <Link href={icon.link} target="_self" className="animated-underline-gray mr-3 text-nowrap">
                                                        {icon.type}
                                                    </Link>
                                                    {index < landing.icon.length - 1 && (
                                                        <span className="text-xs mr-3"> | </span>
                                                    )}
                                                </div>
                                            ))} 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
