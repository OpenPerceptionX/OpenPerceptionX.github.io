"use client"



import * as React from "react"



import Image from 'next/image'
import Link from "next/link"



import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Autoplay from "embla-carousel-autoplay"



const landings: { 
    title: string;
    description: string;
    proccedings: string;
    links: { link: string; url: string; }[];
    image: string;
}[] = [
    {
        title: "Learning to Act Anywhere with Task-centric Latent Actions",
        description: "UniVLA: A unified vision-language-action framework that enables policy learning across different environments.",
        proccedings: "RSS 2025",
        links: [
            {
                link: "GitHub",
                url: "https://github.com/OpenDriveLab/UniVLA",
            },
            {
                link: "Paper",
                url: "https://arxiv.org/abs/2505.06111",
            },
        ],
        image: "https://ik.imagekit.io/opendrivelab/univla",
    },
    {
        title: "AgiBot World",
        description: "World's First Large-scale High-quality Robotic Manipulation Benchmark.",
        proccedings: "",
        links: [
            {
                link: "Challenge",
                url: "/challenge2025/#agibot-world",
            },
            {
                link: "Blog",
                url: "/blog/agibot-world/",
            },
            {
                link: "Paper",
                url: "https://arxiv.org/abs/2503.06669",
            },
            {
                link: "GitHub",
                url: "https://github.com/OpenDriveLab/AgiBot-World",
            },
            {
                link: "Hugging Face",
                url: "https://huggingface.co/agibot-world",
            },
        ],
        image: "/assets/background/agibot_world.jpg",
    },
    {
        title: "DriveLM: Driving with Graph Visual Question Answering",
        description: "Unlocking the future where autonomous driving meets the unlimited potential of language.",
        proccedings: "ECCV 2024 Oral ",
        links: [
            {
                link: "Page",
                url: "/DriveLM/",
            },
            {
                link: "Dataset",
                url: "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                link: "GitHub",
                url: "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                link: "Hugging Face",
                url: "https://huggingface.co/datasets/OpenDriveLab/DriveLM",
            },
            {
                link: "Paper",
                url: "https://arxiv.org/abs/2312.14150",
            },
        ],
        image: "/assets/background/cd0d184b033748b5b5cc8a43c3b9ddc8.jpeg",
    },
    {
        title: "Planning-oriented Autonomous Driving",
        description: "UniAD: The first comprehensive framework that incorporates full-stack driving tasks.",
        proccedings: "CVPR 2023 Best Paper Award ",
        links: [
            {
                link: "GitHub",
                url: "https://github.com/OpenDriveLab/UniAD",
            },
            {
                link: "Paper",
                url: "https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html",
            },
            {
                link: "Video",
                url: "https://www.youtube.com/watch?v=cyrxJJ_nnaQ",
            },
            {
                link: "Slides",
                url: "https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf",
            },
        ],
        image: "/assets/background/890e373a8bca0b4f0df9701fa09cf131.png",
    },
]



export function Landing() {

    const plugin = React.useRef(
        Autoplay({ delay: 1000 })
    )

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

                        <CarouselItem key={index} className="w-full h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center p-20">
                            
                            <div className="flex-1/2  h-full flex flex-col justify-center select-none">
                                <AspectRatio ratio={16/9}>
                                    <Image
                                        src={landing.image}
                                        alt={landing.title}
                                        fill
                                        className="rounded-sm object-cover bg-gradient-landing"
                                    />
                                </AspectRatio>
                            </div>


                            <div className="flex-1/2 flex flex-col gap-10 justify-around select-none">
                                <div className="flex flex-row font-bold">
                                    {index + 1} / {landings.length}
                                </div>
                                <div className="flex flex-col gap-10 w-full">
                                    <h1 className="text-t1 font-bold w-full">
                                        {landing.title}
                                    </h1>
                                    <h2 className="w-full">
                                        {landing.description}
                                    </h2>
                                    <div >
                                        <div className="flex flex-row items-center">
                                            {landing.links.map((link, index) => (
                                                <div key={index} className="flex items-center">
                                                    <Link href={link.url} target="_self" className="animated-underline mr-3">
                                                        {link.link}
                                                    </Link>
                                                    {index < landing.links.length - 1 && (
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
