import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Challenge 2026 | OpenDriveLab",
    description: "Challenge 2026",
    keywords: ["Challenge 2026", "OpenDriveLab", "HKU", "Robotics", "Embodied AI", "Autonomous Driving"],
};


import Image from 'next/image'
import Link from "next/link"



import { AspectRatio } from "@/components/ui/aspect-ratio"



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
        name: "Ping Luo",
        affiliation: 'The University of Hong Kong',
        link: 'http://luoping.me/'
    },
    {
        name: "Andrei Bursuc",
        affiliation: 'Valeo',
        link: 'https://abursuc.github.io/'
    },
    {
        name: "Animesh Garg",
        affiliation: 'Georgia Tech',
        link: 'https://animesh.garg.tech/'
    },
    {
        name: "Lingjie Liu",
        affiliation: 'University of Pennsylvania',
        link: 'https://lingjie0206.github.io/'
    },
    {
        name: "Amy Zhang",
        affiliation: 'UT Austin',
        link: 'https://amyzhang.github.io/'
    },
    {
        name: "Huijie Wang",
        affiliation: 'OpenDriveLab',
        link: 'https://faikit.github.io/'
    },
];



const events: {
    url: string,
    image: string;
    imageoption: string;
    location: string;
}[] = [
    {
        url: "/challenge2025",
        image: "/challenge2025/lHlT9joqwXjGv4c4pIGgK1qlJOvwEEtD.jpg",
        imageoption: "object-center",
        location: "Edition 2025",
    },
    {
        url: "/challenge2024",
        image: "/assets/background/seattle_space_needle.jpg",
        imageoption: "object-center",
        location: "Edition 2024",
    },
    {
        url: "/challenge2023",
        image: "/ui2023/cvpr2023/img/index_banner_s.jpg",
        imageoption: "object-right",
        location: "Edition 2023",
    },
];



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full h-svh py-16 px-6 3xl:px-16">   
                <div className="w-full h-full relative rounded-sm">
                    <Image
                        src='https://ik.imagekit.io/opendrivelab/Modify_the_left_human_hand_to_become_an_abstract_e-1770009757382.jpg?updatedAt=1770010027998'
                        alt='cover'
                        fill
                        className='object-center object-cover bg-gradient-landing rounded-sm bg-black bg-opacity-30 bg-blend-overlay select-none'
                    />
                    <div className="w-full h-full absolute flex flex-col justify-end items-start p-6 xl:p-10 gap-6">
                        <div className="flex flex-row gap-6">
                            <Image
                                src='/assets/icon/cvpr/cvpr2026_white.svg'
                                alt='cvpr'
                                width={128}
                                height={1}
                                className='select-none'
                            />
                        </div>
                        <h1 className="text-white text-t1 font-bold">
                            Autonomous Grand Challenge 2026
                        </h1>
                        <h5 className="text-white">
                            In conjunction with
                            <ul className="ml-6 space-y-3 list-outside list-disc mt-2">
                                <li>
                                    <Link href="/cvpr2026/workshop/" className="underline hover:text-o-blue hover:cursor-pointer">
                                        CVPR 2026 Workshop
                                    </Link>
                                </li>
                            </ul>
                        </h5>
                    </div>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#track" className="scroll-mt-32 group flex items-center" id="track">
                            Tentative Tracks
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
                <div className="w-full max-w-7xl flex flex-col">
                    <h3 className="text-xl font-bold">
                        Humanoid Ping-Pong
                    </h3>
                </div>
            </div>
            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-7xl flex flex-col gap-3">
                    <p className="leading-relaxed">
                    High-dynamic ball sports such as table tennis pose extreme challenges for humanoid robots, requiring tight integration of high-speed perception, real-time decision-making, and agile whole-body control. This challenge uses table tennis as a representative task to systematically evaluate whether humanoid robots can achieve <span className="underline">human-like performance</span> in fast-paced, adversarial sports scenarios. The competition is designed in strict accordance with official table tennis rules, balancing fairness, realism, and technical difficulty. Participants are expected to develop complete perception-planning-control systems capable of handling rapid ball motion, precise contact timing, and dynamic opponent behaviors.
                    </p>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col">
                    <h3 className="text-xl font-bold">
                        Deformable Object Manipulation
                    </h3>
                </div>
            </div>
            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-7xl flex flex-col gap-3">
                    <p className="leading-relaxed">
                        Deformable Object Manipulation, particularly the <span className="underline">handling of textiles</span> such as clothing, remains one of the most fundamental and unsolved challenges in robotics. Unlike rigid objects, deformable materials exhibit effectively infinite degrees of freedom and highly non-linear dynamics, making perception, modeling, and control intrinsically difficult. Despite recent progress, many existing approaches rely heavily on simplified simulation environments or reduce manipulation to isolated pick-and-place primitives, which fall far short of capturing the complex, continuous, and history-dependent dynamics of real-world. The challenge is designed as a scientific instrument to assess a system's full-stack capability. Participants are tasked with developing end-to-end solutions for flat folding garments. This task requires the coordinated integration of computer vision, control theory, and learning-based methods such as deep reinforcement learning, under realistic physical constraints.
                    </p>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col">
                    <h3 className="text-xl font-bold">
                        General-Purpose Dexterous Manipulation with High-DoF Hands
                    </h3>
                </div>
            </div>
            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-7xl flex flex-col gap-3">
                    <p className="leading-relaxed">
                        Dexterous manipulation in unstructured environments demands both high-dimensional control and rich sensory feedback. This challenge advances research on <span className="underline">High-DoF anthropomorphic hands with multimodal sensing</span> - proprioception, tactile, and binocular vision, to enable robust, contact-rich manipulation. Participants will be evaluated on a suite of standardized manipulation tasks that test precision, robustness, and generalization.
                    </p>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col">
                    <h3 className="text-xl font-bold">
                        Visuo-Tactile Learning for Contact-Rich Manipulation
                    </h3>
                </div>
            </div>
            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-7xl flex flex-col gap-3">
                    <p className="leading-relaxed">
                        Contact-rich manipulation, such as peg-in-hole, tool use, and mechanical assembly, involves fine-grained physical interactions where vision alone is insufficient to capture critical local contact states, real-time forces, and subtle deformations. The challenge aims to systematically advance <span className="underline">visuo-tactile learning</span> methods for real-world high-precision manipulation and to clarify the role of touch in practical assembly and tool-based operations. Submitted approaches will be evaluated on their performance across multiple manipulation tasks, with a particular emphasis on effectiveness, efficiency, and generalization. This challenge aims to systematically assess the role of tactile perception in robotic manipulation and to advance the development of robust, generalizable visuo-tactile learning methods for real-world physical interaction.
                    </p>
                </div>
            </div>



            {/* <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col">
                    <h3 className="text-xl font-bold">
                        Track X
                    </h3>
                </div>
            </div>
            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-7xl flex flex-col gap-3">
                    <p className="leading-relaxed">
                        To be released.
                    </p>
                </div>
            </div> */}



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col">
                    <h3 className="text-xl font-bold">
                        Feedback
                    </h3>
                </div>
            </div>
            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-7xl flex flex-col">
                    <div className="flex-1 flex gap-6 items-center">
                        <Link href="https://forms.gle/C1gu8z9zgENUSJn88" target="_blank" className="size-6 md:size-8 group">
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src="/assets/icon/google_form.png"
                                    alt="icon"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                        </Link>
                        <span className="flex-1">
                        We welcome your feedback on the proposed challenge topics. Please share your thoughts on the topics you find most compelling by completing this <Link className="text-o-blue animated-underline" href="https://forms.gle/fyi4EEEWKscekU5o7" target="_blank">Google Form</Link>.
                        </span>
                    </div>
                </div>
            </div>



            {/* <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col">
                    <h3 className="text-xl font-bold">
                        Participate
                    </h3>
                </div>
            </div>
            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-7xl flex flex-col">
                    <div className="flex-1 flex gap-6 items-center">
                        <Link href="https://forms.gle/C1gu8z9zgENUSJn88" target="_blank" className="size-6 md:size-8 group">
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src="/assets/icon/google_form.png"
                                    alt="icon"
                                    fill
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </AspectRatio>
                        </Link>
                        <span className="flex-1">
                            For participation in the challenge, registering for your team is a <span className="underline">strict requirement</span> by filling out this <Link className="text-o-blue animated-underline" href="https://forms.gle/C1gu8z9zgENUSJn88" target="_blank">Google Form</Link>.
                            <br></br>
                            The registration information can be modified until <code>[ICCV 2025] September 20</code>.
                        </span>
                    </div>
                </div>
            </div> */}



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



            {/* <div className="w-full px-6 flex justify-center mt-24">
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
                <div className="w-full max-w-7xl">
                    <div className="w-full max-w-5xl flex flex-col gap-6">
                        {[...organizers.values()].map((organizer) => (
                            <div className="flex gap-6" key={organizer.name}>
                                {
                                    organizer.link == "" && (
                                        <div className="flex-1/2">
                                            <span>
                                                {organizer.name}
                                            </span>
                                        </div>
                                    )
                                }
                                {
                                    organizer.link != "" && (
                                        <div className="flex-1/2">
                                            <Link href={organizer.link} target={organizer.link.startsWith('http') ? '_blank' : '_self'} className="hover:text-o-blue">
                                                {organizer.name}
                                            </Link>
                                        </div>
                                    )
                                }
                                <i className="flex-1/2">
                                    {organizer.affiliation}
                                </i>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#edition" className="scroll-mt-32 group flex items-center" id="edition">
                            Past Editions
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
                        <div className="flex flex-col gap-6" key={event.location}>
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
                        </div>
                    ))}   
                </div>
            </div>



        </div>
    );
}
