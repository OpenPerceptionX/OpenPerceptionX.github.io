import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "OpenDriveLab | Robotics and Autonomous Driving at HKU, SII, and beyond",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};


import Image from 'next/image'
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"



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



export default function Home() {

    return (
        <div className="w-full">



            {/* landing */}
            <div className="w-full h-svh flex flex-row justify-center items-center">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full h-full px-6 max-w-3/4"
                >
                    <CarouselContent  className="w-full h-svh">
                        {landings.map((landing, index) => (

                            <CarouselItem key={index} className="w-full h-full flex flex-col  gap-10  justify-center items-center px-20 bg-amber-400 ">
                                
                                <div className="flex-1/3 max-w-1/3 h-full flex flex-col justify-center select-none">
                                    <AspectRatio ratio={16/9}>
                                        <Image
                                            src={landing.image}
                                            alt={landing.title}
                                            fill
                                            className="rounded-sm object-cover bg-gradient-landing"
                                        />
                                    </AspectRatio>
                                </div>


                                <div className="flex-1/2 max-w-1/2 flex flex-col gap-10 justify-around select-none overflow-hidden">
                                    <div className="flex flex-row justify-end font-bold overflow-hidden">
                                        {index + 1} / {landings.length}
                                    </div>
                                    <div className="flex flex-col gap-10 w-full overflow-hidden">
                                        <h1 className="text-t1 font-bold w-full">
                                            {landing.title}
                                        </h1>
                                        <h2 className="w-full overflow-hidden">
                                            {landing.description}
                                        </h2>
                                        {/* <div className="max-w-2/3 overflow-hidden">
                                            <div className="max-w-2/3 flex flex-row gap-3 overflow-hidden">
                                                {landing.links.map((link, index) => (
                                                    <Link key={index} href={link.url} target="_self" className="animated-underline">
                                                        {link.link}
                                                    </Link>
                                            ))} 
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                

                            </CarouselItem>

                        ))}
                    </CarouselContent>
                </Carousel>
            </div>



        </div>
    )
}
