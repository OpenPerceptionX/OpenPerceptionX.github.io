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
import { alpasim2026 } from "@/data/alpasim2026"

type LandingItem = Pick<(typeof publications)[number], "title" | "image_sliding" | "description" | "note" | "link" | "icon"> & {
    linkLabel?: string;
    imageFit?: "contain" | "cover";
};

const featuredPublications = publications.filter(publication => publication.keys.includes('home_sliding'))
const landings: LandingItem[] = [
    {
        title: alpasim2026.title,
        image_sliding: alpasim2026.image,
        imageFit: "contain",
        description: alpasim2026.description,
        note: "Event 2026",
        link: alpasim2026.url,
        linkLabel: "Explore the challenge",
        icon: [{ type: "github", link: alpasim2026.repository }],
    },
    ...[0,1,2,3,5,4].flatMap(index => featuredPublications[index] ? [featuredPublications[index]] : []),
]



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
                                <AspectRatio ratio={landing.imageFit === "contain" ? 1058 / 468 : 16 / 9}>
                                    <Image
                                        src={landing.image_sliding ?? ""}
                                        alt={landing.title}
                                        fill
                                        className={`${landing.imageFit === "contain" ? "object-contain" : "object-cover bg-gradient-landing"} object-center rounded-sm hover:scale-103 transition delay-100 duration-200`}
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
                                            landing.title
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
                                        {
                                            landing.link != '' && (
                                                <Link href={landing.link} target={landing.link.startsWith('http') ? '_blank' : '_self'} className="animated-underline-gray mr-3 text-nowrap">
                                                    {
                                                        landing.linkLabel ? landing.linkLabel : landing.link.startsWith('https://mmlab.hk/research/MM-Hand') ? (
                                                            "Checkout at mmlab.hk/MM-Hand"
                                                        ) : (
                                                            false ? (
                                                                "Page"
                                                            ) : (
                                                                "Paper"
                                                            )
                                                        )
                                                    }
                                                </Link>
                                            )
                                        }
                                        {
                                            landing.icon.length != 0 && landing.icon[0].type != 'cite' && landing.link != '' && (
                                                <span className="text-xs mr-3"> | </span>
                                            )
                                        }
                                        {
                                            landing.icon.map((icon, index) => (
                                                icon.type != 'cite' && (
                                                    <div key={index} className="flex items-center">
                                                        <Link href={icon.link} target={icon.link.startsWith('http') ? '_blank' : '_self'} className="animated-underline-gray mr-3 text-nowrap">
                                                            {
                                                                type_mapping[icon.type] ?? "XXX"
                                                            }
                                                        </Link>
                                                        {index < landing.icon.length - 1 && (
                                                            <span className="text-xs mr-3"> | </span>
                                                        )}
                                                    </div>
                                                )
                                            ))
                                        } 
                                        {/* AgiBot World */}
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
                                        {/* Position Paper */}
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
                                aria-label={`Show slide ${index + 1}: ${landings[index].title}`}
                                aria-current={currentIndex === index ? "true" : undefined}
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
