import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Workshop at RSS 2026 | OpenDriveLab",
    description: "Workshop at RSS 2026",
    keywords: ["Workshop", "RSS 2026", "OpenDriveLab", "HKU"],
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
    {
        name: "Leslie Pack Kaelbling",
        image: "https://ik.imagekit.io/opendrivelab/yuance/people/leslie_kaelbling.jpg",
        position: "Professor",
        affiliation: 'MIT',
        link: 'https://people.csail.mit.edu/lpk/'
    },
    {
        name: "Shan Luo",
        image: "https://ik.imagekit.io/opendrivelab/yuance/people/shan_luo.jpg",
        position: "Reader",
        affiliation: "King's College London",
        link: 'https://shanluo.github.io/'
    },
    {
        name: "Hamidreza Kasaei",
        image: "https://ik.imagekit.io/opendrivelab/yuance/people/hamidreza_kasaei.jpg",
        position: "Associate Professor",
        affiliation: 'University of Groningen',
        link: 'https://hkasaei.github.io/'
    },
    {
        name: "Roberto Martín-Martín",
        image: "https://ik.imagekit.io/opendrivelab/yuance/people/roberto_marti%CC%81n_marti%CC%81n.jpg",
        position: "Assistant Professor",
        affiliation: 'UT Austin',
        link: 'https://robertomartinmartin.com/'
    },
    {
        name: "Fan Shi",
        image: "https://ik.imagekit.io/opendrivelab/yuance/people/fan_shi.jpg",
        position: "Assistant Professor",
        affiliation: 'NUS',
        link: 'https://fanshi14.github.io/me/'
    },
    {
        name: "Tianyu Li",
        image: "/assets/person/tianyu_li.jpg",
        position: "CEO",
        affiliation: 'Archon',
        link: 'https://scholar.google.com/citations?user=X6vTmEMAAAAJ'
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
    // {
    //     name: "Ping Luo",
    //     affiliation: 'The University of Hong Kong',
    //     link: 'http://luoping.me/'
    // },
    {
        name: "Yasemin Bekiroğlu",
        affiliation: 'University College London',
        link: 'https://www.dryaseminbekiroglu.com/'
    },
    {
        name: "Lucy Xiaoyang Shi",
        affiliation: 'Stanford & Physical Intelligence',
        link: 'https://lucys0.github.io/'
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
        title: "From Labs to Life: Embodied Intelligence in the Wild",
        subtitle: "CVPR 2026",
        url: "/cvpr2026/workshop",
        image: "https://ik.imagekit.io/opendrivelab/nils-huenerfuerst-OVE2SA0TVJE-unsplash.jpg?updatedAt=1761792013763",
        imageoption: "object-center",
        location: "Denver",
    },
    {
        title: "Learning to See: Advancing Spatial Understanding for Embodied Intelligence",
        subtitle: "ICCV 2025",
        url: "/iccv2025/workshop",
        image: "/assets/background/honolulu.jpg",
        imageoption: "object-center",
        location: "Honolulu",
    },
];



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full h-svh py-16 px-6 3xl:px-16">   
                <div className="w-full h-full relative rounded-sm">
                    <Image
                        src='https://ik.imagekit.io/opendrivelab/jamie-davies-Hao52Fu9-F8-unsplash.jpg'
                        alt='Sydney'
                        fill
                        className='object-center object-cover bg-gradient-landing rounded-sm bg-black bg-opacity-30 bg-blend-overlay select-none'
                    />
                    <div className="w-full h-full absolute flex flex-col justify-end items-start p-6 xl:p-10 gap-6">
                        <div className="flex flex-row gap-6">
                            {/* <Image
                                src='https://ik.imagekit.io/opendrivelab/rss2026.png'
                                alt='cvpr'
                                width={192}
                                height={1}
                                className='select-none'
                            /> */}
                        </div>
                        <h1 className="text-white text-t1 font-bold">
                            Building and Learning in Interactive World Simulators
                        </h1>
                        <h5 className="text-white">
                            NeurIPS 2026 Workshop
                            <br></br>
                            Sydney, Australia
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



        </div>
    );
}
