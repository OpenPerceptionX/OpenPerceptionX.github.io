"use client"



import * as React from "react"



import Image from 'next/image'
import Link from "next/link"



import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots,
} from "@/components/ui/homecarousel"
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
import { Chen2025_value_learning } from "@/components/citation-drawer"



import { publications } from "@/data/publications"
import { Button } from "@/components/ui/button"
import { type_mapping } from "@/data/mapping"
const landings = [0,1,2,3,5,4].map(index => [...publications.values()].filter(publication => publication.keys.includes('home_sliding'))[index])
const image_mapping: Record<string, string> = {
    "Intelligent Robot Manipulation Requires Self-Directed Learning": "https://ik.imagekit.io/opendrivelab/position.jpg?updatedAt=1765023911765",
    "GO-1-Pro: Is Diversity All You Need for Scalable Robotic Manipulation?": "/assets/publication/GO-1-Pro.jpg",
    "UniVLA: Learning to Act Anywhere with Task-centric Latent Actions": "https://ik.imagekit.io/opendrivelab/univla",
    "Planning-oriented Autonomous Driving": "/assets/background/890e373a8bca0b4f0df9701fa09cf131.png",
    "AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems": "https://ik.imagekit.io/opendrivelab/agibotworld.jpg",
    "DriveLM: Driving with Graph Visual Question Answering": "/assets/background/cd0d184b033748b5b5cc8a43c3b9ddc8.jpeg",
    "FreeTacMan: Robot-free Visuo-Tactile Data Collection System for Contact-rich Manipulation": "https://ik.imagekit.io/opendrivelab/freetacman.png",
    "ReSim: Reliable World Simulation for Autonomous Driving": "https://ik.imagekit.io/opendrivelab/resim.jpg",
    "Agility Meets Stability: Versatile Humanoid Control with Heterogeneous Data": "https://ik.imagekit.io/opendrivelab/ams.gif",
    "WholeBodyVLA: Towards Unified Latent VLA for Whole-body Loco-manipulation Control": "https://opendrivelab.github.io/WholeBodyVLA/wholebodyvla_landing.gif",
    "χ0: A Live-Stream Robotic Teamwork for Clothing Manipulation from Zero to Hero": "https://ik.imagekit.io/opendrivelab/kai0.png",
}



export function Landing() {
    // 获取当前轮播图的API引用
    const [api, setApi] = React.useState<any>(null)
    const [currentIndex, setCurrentIndex] = React.useState(0)
    
    // 当API更新或轮播图切换时更新当前索引
    React.useEffect(() => {
        if (!api) return
        
        const onSelect = () => {
            try {
                const index = api.selectedScrollSnap()
                setCurrentIndex(index)
            } catch (error) {
                console.error("Error updating carousel index:", error)
            }
        }
        
        api.on("select", onSelect)
        // 初始化
        onSelect()
        
        return () => {
            api.off("select", onSelect)
        }
    }, [api])

    // 手动切换轮播图
    const scrollTo = React.useCallback((index: number) => {
        if (!api) return
        api.scrollTo(index)
    }, [api])

    return (
        <div className="w-full h-svh flex justify-center items-center">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full pl-6 pr-2 md:pr-0" /* some magic padding */
                setApi={setApi}
            >
                <CarouselContent className="w-full">
                    {landings.map((landing, index) => (
                        <CarouselItem key={index} className="w-full h-full flex flex-col lg:flex-row gap-6 lg:gap-24 justify-center items-center lg:p-12">
                            

                            <div className="flex-1/2 w-full lg:h-full flex flex-col justify-center select-none">
                                <AspectRatio ratio={16/9}>
                                    <Image
                                        src={image_mapping[landing.title] ?? ""}
                                        alt={landing.title}
                                        fill
                                        className="object-cover object-center rounded-sm bg-gradient-landing hover:scale-103 transition delay-100 duration-200"
                                    />
                                </AspectRatio>
                            </div>



                            <div className="flex-1/2 w-full flex flex-col gap-3 lg:gap-6 select-none">


                            
                                <div className="hidden md:flex flex-row text-o-gray text-sm lg:text-base">
                                    {index + 1} / {landings.length}
                                </div>



                                
                                {
                                    !landing.note.startsWith('arXiv') && (
                                        <div>
                                            <span className="text-xs text-white bg-gradient-to-br from-o-light-blue via-o-blue to-o-light-blue rounded-sm px-2 py-1.5">
                                                {landing.note}
                                            </span>
                                        </div>
                                    )
                                }



                                <h1 className="text-t1 font-bold fg-gradient-blue pb-6 -mb-6"> 
                                    {
                                        landing.title.startsWith('AgiBot') ? (
                                            "AgiBot World"
                                        ) : (
                                            landing.title.startsWith('FreeTacMan') ? (
                                                "FreeTacMan: Robot-free Visuo-Tactile Data Collection System"
                                            ) : (
                                                landing.title
                                            )
                                        )
                                    }
                                </h1>



                                <h2 className="text-sm lg:text-base">
                                    {
                                        landing.title.startsWith('AgiBot') ? (
                                            "World's First Large-scale High-quality Robotic Manipulation Benchmark."
                                        ) : (
                                            landing.description
                                        )
                                    }
                                </h2>


                                <div>
                                    <div className="flex flex-row items-center flex-wrap text-sm lg:text-base">
                                        <Link href={landing.link} target={landing.link.startsWith('http') ? '_blank' : '_self'} className="animated-underline-gray mr-3 text-nowrap">
                                            {
                                                landing.link.startsWith('http') ? (
                                                    "Paper"
                                                ) : (
                                                    "Blog"
                                                )
                                            }
                                        </Link>
                                        {
                                            landing.icon.length != 0 && landing.icon[0].type != 'cite' && (
                                                <span className="text-xs mr-3"> | </span>
                                            )
                                        }
                                        {
                                            landing.icon.map((icon, index) => (
                                                icon.type != 'cite' && (
                                                    <div key={index} className="flex items-center">
                                                        <Link href={icon.link} target={icon.link.startsWith('http') ? '_blank' : '_self'} className="animated-underline-gray mr-3 text-nowrap">
                                                            {
                                                                landing.title.startsWith('FreeTacMan') && icon.type =='blog' ? (
                                                                    'Hardware Guide'
                                                                ) : (
                                                                    type_mapping[icon.type] ?? "XXX"
                                                                )
                                                            }
                                                        </Link>
                                                        {index < landing.icon.length - 1 && (
                                                            <span className="text-xs mr-3"> | </span>
                                                        )}
                                                    </div>
                                                )
                                            ))
                                        } 
                                        {
                                            landing.title.startsWith('AgiBot') && (
                                                <span className="text-xs mr-3"> | </span>
                                            )
                                        } {
                                            landing.title.startsWith('AgiBot') && (
                                                <Link href='/challenge2025//#agibot-world' className="animated-underline-gray mr-3 text-nowrap">
                                                    Challenge
                                                </Link>
                                            )
                                        }
                                        {
                                            landing.title.startsWith('Intelligent Robot') && (
                                                <span className="text-xs mr-3"> | </span>
                                            )
                                        } {
                                            landing.title.startsWith('Intelligent Robot') && (
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



                            </div>

 

                        </CarouselItem>
                    ))}
                </CarouselContent>


                
                {landings.length > 1 && (
                    <div className="z-10 flex md:justify-center gap-3 mt-6 md:-ml-6">
                        {landings.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`
                                    w-1.5 h-1.5 rounded-full transition-all duration-300
                                    ${currentIndex === index 
                                        ? "bg-o-blue scale-110" 
                                        : "bg-gray-300/70 hover:bg-gray-300"}
                                `}
                                onClick={() => scrollTo(index)}
                            />
                        ))}
                    </div>
                )}


                
            </Carousel>
        </div>
    )
}
