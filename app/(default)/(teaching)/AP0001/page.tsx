import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "SLAI AP0001 | OpenDriveLab",
    description: "Embodied AI - Fundamentals and Applications",
    keywords: ["SLAI", "AP0001", "OpenDriveLab", "HKU"],
};



import Image from 'next/image'
import Link from "next/link"



import { AspectRatio } from "@/components/ui/aspect-ratio"



const instructors: {
    name: string;
    image: string;
    link: string;
}[] = [
    {
        name: "Hongyang Li",
        image: "/assets/person/hongyang_li.jpg",
        link: 'https://lihongyang.info/'
    },
];

const tas: string[] = [
    "Zihao Zhang",
    "Haitao Jiang",
    "Tianyu Zhang",
];

const descriptionFirstBlock = {
    intro: "This course aims at introducing the fundamentals in algorithms, data and systems of the autonomous intelligent systems, which often refers to the embodied and robotics applications. As the fast advances in the field of AI, how to utilize the learning-based, data-driven approaches to improve the applications for the better human life, becomes very pivotal. We will address the key challenges in this domain, such as:",
    points: [
        "(i) How to formulate a system that is equipped with generalization, intelligence and reliability merits?",
        "(ii) How to balance the data distribution between simulation and real-world data?",
        "(iii) Is scaling law the only pathway towards high-level AGI?",
    ],
} as const;

const descriptionParagraphs: string[] = [
    "We will introduce the concepts, principles and knowhow to build the embodied intelligent systems. The basic fundamentals would be detailed in the lectures, with tutorials and hands-on training sessions. All the important topics will be covered, such as imitation learning, reinforcement learning, and so on. The highlights in this course would consist of several guest lectures from outside renowned speakers from both industry and academia to address the latest advances in this field. The hands-on session is akin to tutorials or hackathons where students learn the recipe of technologies from scratch quickly. These features would be complementary to the main lecture and facilitate the final group presentation.",
    "The course includes 13 lectures (by instructor or guest lecture) and 4 tutorial/hands-on session (by TA). Homework includes both written exercises and programming.",
];

const prerequisiteParagraphs: string[] = [
    "The basic programming skill is needed, e.g. python and C++. We require students to have prior knowledge in undergraduate linear algebra, statistics, and probability. Background in machine learning, and computer vision may allow you to better appreciate certain aspects of the course material, but not necessarily all at once.",
    "The course is open to research postgraduates (Rpg, MPhil, PhD). If you're curious about whether you would benefit from this course, contact the instructor for details.",
];

const textbookAndReferences = {
    intro: "We do not have a fixed textbook. The following resources are for references.",
    textbook: [
        {
            title: "Foundations of Computer Vision",
            titleHref: "https://www.amazon.sg/Foundations-Computer-Vision-Antonio-Torralba/dp/0262048973/ref%3Dasc_df_0262048973?mcid=5c2614852a7f3ec2b446421be5d67bba&tag=googleshoppin-22&linkCode=df0&hvadid=693063144232&hvpos&hvnetw=g&hvrand=4116574608945168881&hvpone&hvptwo&hvqmt&hvdev=c&hvdvcmdl&hvlocint&hvlocphy=9062542&hvtargid=pla-2200437822218&psc=1&gad_source=1",
            author: "Antonio Torralba",
            authorHref: "https://scholar.google.com/citations?user=8cxDHS4AAAAJ&hl=en",
            authorSuffix: " et al.",
        },
        {
            title: "Understanding Deep Learning",
            titleHref: "https://udlbook.github.io/udlbook/",
            author: "Simon Prince",
            authorHref: "https://scholar.google.com/citations?user=fjm67xYAAAAJ&hl=en",
        },
    ],
    onlineCourses: [
        { title: "Introduction to Robot Learning", href: "https://16-831-s24.github.io/", by: "Guanya Shi" },
        { title: "Deep Learning for Robotics", href: "https://16-884.github.io/", by: "Deepak Pathak" },
    ],
    conferences: [
        "Robotics: Science and Systems (RSS)",
        "Conference on Robot Learning (CoRL)",
        "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
        "Annual Conference on Neural Information Processing Systems (NeurIPS)",
    ],
} as const;

const websiteAndComputingTools = {
    items: [
        {
            titleLabel: "Course website:",
            titleLink: "https://opendrivelab.com/AP0001",
            titleLinkText: "https://opendrivelab.com/AP0001",
            sub: "We in general will use the ",
            subLink: "https://piazza.com/class/mkxyas2e8j84bj#",
            subLinkText: "Piazza",
            subAfter: " as well to post lecture materials, homework, data, code examples, etc.",
        },
        {
            title: "Computing tools: We will use the python and (a little bit) C++, and Google Colab environments for many of the in-lecture demos, examples and homework. Hugging Face for hosting the dataset would be recommended. Cloud services would be introduced to run some GPU experiments.",
        },
    ],
} as const;

const scheduleItems: {
    date: string;
    lecture: string;
    topics: string[];
    note?: string;
}[] = [
    {
        date: "2026/3/5",
        lecture: "Course Introduction [BASIC]",
        topics: [
            "Introduction to Embodied AI",
            "DL and ML Basics",
        ],
    },
    {
        date: "2026/3/12",
        lecture: "CV, Robotics and Coding Mixer [BASIC]",
        topics: [
            "Computer Vision Fundamentals for Embodied AI",
            "Core robotics basics",
            "Integration practice of CV and robotics",
        ],
    },
    {
        date: "2026/3/19",
        lecture: "Reinforcement Learning [BASIC]",
        topics: [
            "Fundamentals of Reinforcement Learning",
            "Key challenges of RL in Embodied AI",
            "Imitation learning combined with RL",
        ],
        note: "HW1",
    },
    {
        date: "2026/3/26",
        lecture: "World Models and Foundation Models in Embodied AI [BASIC]",
        topics: [
            "Core concepts and construction of world models",
            "Foundation models adaptation for embodied AI",
        ],
    },
    {
        date: "2026/4/2",
        lecture: "Manipulation and VLAs [ALGORITHM]",
        topics: [
            "Core problems of robotic manipulation in embodied AI",
            "Design and training of VLA models",
            "VLA model deployment for typical robotic manipulation tasks",
        ],
        note: "Attendance required",
    },
    {
        date: "2026/4/9",
        lecture: "Navigation and VLNs [ALGORITHM]",
        topics: [
            "Core challenges of embodied navigation tasks",
            "Fundamentals and key technologies of VLN models",
            "VLN model optimization for unknown navigation scenarios",
        ],
    },
    {
        date: "2026/4/16",
        lecture: "Simulation [DATA]",
        topics: [
            "High-fidelity simulation engines",
            "Sim-to-real gap mitigation",
            "Scenario and task design",
        ],
        note: "HW1 due; RSS AC Meeting Trip",
    },
    {
        date: "2026/4/23",
        lecture: "Data Collection System / MoCap / Data Pyramid [DATA]",
        topics: [
            "Motion capture fundamentals",
            "End-to-end data collection pipeline",
            "The data pyramid for embodied AI",
        ],
        note: "ICLR Day 1",
    },
    {
        date: "2026/4/30",
        lecture: "Ego-centric Data Learning [DATA]",
        topics: [
            "Egocentric perception",
            "Representation learning from ego-centric data",
        ],
    },
    {
        date: "2026/5/7",
        lecture: "Locomotion on Humanoids [ALGORITHM]",
        topics: [
            "Humanoid locomotion fundamentals",
            "Learning-based locomotion",
            "Adaptive and robust locomotion",
        ],
        note: "HW2",
    },
    {
        date: "2026/5/14",
        lecture: "Whole-body Control on Humanoids [ALGORITHM]",
        topics: [
            "Whole-body control theory",
            "Integration of locomotion and manipulation",
        ],
    },
    {
        date: "2026/5/21",
        lecture: "DexHand: A Hardware Perspective [HARDWARE]",
        topics: [
            "DexHand architecture deep dive",
            "Hardware-software co-design",
            "Calibration and maintenance",
        ],
    },
    {
        date: "2026/5/28",
        lecture: "Hands-on Experiments: LeRobot / TodderBot / MMHand [HARDWARE]",
        topics: [
            "Platform familiarization",
            "Low-level control interface",
            "Algorithm deployment",
        ],
        note: "CoRL submission",
    },
    {
        date: "2026/6/4",
        lecture: "Building Humanoids from Scratch or World Models [HARDWARE]",
        topics: [
            "Full humanoid system integration",
            "\"From scratch\" vs. \"model-centric\" design",
            "World models as a virtual hardware",
        ],
        note: "HW2 due; CVPR week",
    },
    {
        date: "2026/6/11",
        lecture: "How to Make Research Impact: Writing, Rebuttal and Presentation in Embodied AI [BASIC]",
        topics: [
            "Impactful paper writing",
            "Response to reviews (rebuttal)",
            "High-impact presentation",
            "Ethics and open science",
        ],
        note: "Quiz in class",
    },
    {
        date: "2026/6/18",
        lecture: "Final Project Symposium I [PRESENTATION]",
        topics: [
            "Oral presentation sessions",
            "Peer review and moderation",
        ],
    },
    {
        date: "2026/6/25",
        lecture: "Final Project Symposium II [PRESENTATION]",
        topics: [
            "Oral presentation sessions",
            "Peer review and moderation",
        ],
    },
];



export default function Home() {
    return (
        <div className="w-full text-lg">


            <div className="w-full h-96 py-16 px-6 3xl:px-16">   
                <div className="w-full h-full relative rounded-sm">
                    <Image
                        src='https://ik.imagekit.io/opendrivelab/Professional_course_background_image_for_Embodied_-1770180409851.jpg'
                        alt='cover'
                        fill
                        className='object-center object-cover bg-gradient-landing rounded-sm bg-black bg-opacity-30 bg-blend-overlay select-none'
                    />
                    <div className="w-full h-full absolute bg-black/20"></div>
                    <div className="w-full h-full absolute flex flex-col justify-end items-start p-6 xl:p-10 gap-6">
                        <h1 className="text-white text-t1 font-bold">
                            Embodied AI - Fundamentals and Applications
                        </h1>
                        <h5 className="text-white">
                            SLAI AP0001
                        </h5>
                    </div>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1 font-bold"> 
                        <Link href="#description" className="scroll-mt-32 group flex items-center" id="description">
                            Description
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
                    <p className="leading-relaxed text-justify">
                        {descriptionFirstBlock.intro}
                    </p>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed ml-4 text-justify font-semibold">
                        {descriptionFirstBlock.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                    {descriptionParagraphs.map((paragraph, index) => (
                        <p key={index} className="leading-relaxed text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1 font-bold"> 
                        <Link href="#prerequisite" className="scroll-mt-32 group flex items-center" id="prerequisite">
                            Prerequisite
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
                    {prerequisiteParagraphs.map((paragraph, index) => (
                        <p key={index} className="leading-relaxed text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1 font-bold"> 
                        <Link href="#textbook-and-references" className="scroll-mt-32 group flex items-center" id="textbook-and-references">
                            Textbook and References
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
                    <p className="leading-relaxed text-justify">
                        {textbookAndReferences.intro}
                    </p>
                    <p className="font-semibold mt-2">Textbook:</p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed ml-4 text-justify">
                        {textbookAndReferences.textbook.map((item, index) => (
                            <li key={index}>
                                <a href={item.titleHref} target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">
                                    {item.title}
                                </a>
                                , by{" "}
                                <a href={item.authorHref} target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">
                                    {item.author}
                                </a>
                                {"authorSuffix" in item && item.authorSuffix}
                            </li>
                        ))}
                    </ul>
                    <p className="font-semibold mt-2">Online courses (some contents in our course are by courtesy of them):</p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed ml-4 text-justify">
                        {textbookAndReferences.onlineCourses.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">
                                    {item.title}
                                </a>
                                , by {item.by}
                            </li>
                        ))}
                    </ul>
                    <p className="font-semibold mt-2">Conferences (where you get the latest advances in this field):</p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed ml-4 text-justify">
                        {textbookAndReferences.conferences.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1 font-bold"> 
                        <Link href="#website-and-computing-tools" className="scroll-mt-32 group flex items-center" id="website-and-computing-tools">
                            Website and Computing Tools
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
                    <ul className="list-disc list-inside space-y-2 leading-relaxed ml-4 text-justify">
                        {websiteAndComputingTools.items.map((item, index) => (
                            <li key={index}>
                                {"titleLabel" in item ? (
                                    <>
                                        {item.titleLabel}{" "}
                                        <a href={item.titleLink} target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">
                                            {item.titleLinkText}
                                        </a>
                                        {"sub" in item && item.sub != null && (
                                            <ul className="list-[circle] list-inside ml-4 mt-1 space-y-0.5 text-foreground/90">
                                                <li>
                                                    {item.sub}
                                                    <a href={item.subLink} target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">
                                                        {item.subLinkText}
                                                    </a>
                                                    {item.subAfter}
                                                </li>
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    item.title
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1 font-bold"> 
                        <Link href="#grading-policy" className="scroll-mt-32 group flex items-center" id="grading-policy">
                            Grading Policy
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
                    <div className="rounded-lg border border-sky-200/60 bg-sky-50/80 dark:bg-sky-950/30 dark:border-sky-800/60 px-5 py-5 text-foreground">
                        <p className="leading-relaxed text-justify mb-4">
                            The grading policy of this course is as follows:
                        </p>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed text-justify">
                            <li><strong>Participation (10%)</strong></li>
                            <li><strong>Quiz (10%)</strong></li>
                            <li>
                                <strong>Assignment (20%)</strong>: There will be about 2 homework assignments for the first 14 weeks. Each homework contains both a written part and a programming part.
                            </li>
                            <li>
                                <strong>Group Project (60%)</strong>: You can work on a topic of your choice. Open-source data will be provided for your reference. Each team needs to submit a midterm project proposal and give a 10-min presentation. The proposal and presentation should show adequate literature surveys on related topics, and provide good motivations to support the ideas. Each team will deliver a short (15 min) talk in the last week together with a project report and code.
                                <ul className="list-[circle] list-inside ml-4 mt-2 space-y-1 text-foreground/90">
                                    <li>The final presentation might be in the form of a symposium or mini-conference style, presenting Posters and panels, depending on the future arrangement.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1 font-bold"> 
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
                <div className="w-full max-w-7xl flex flex-col gap-3">
                    <div className="w-full overflow-x-auto rounded-sm border border-border/60 bg-background/60">
                        <table className="min-w-full text-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="px-4 py-2 text-left font-semibold">Date</th>
                                    <th className="px-4 py-2 text-left font-semibold">Lecture</th>
                                    <th className="px-4 py-2 text-left font-semibold">Topic</th>
                                    <th className="px-4 py-2 text-left font-semibold">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduleItems.map((item, index) => (
                                    <tr
                                        key={`${item.date}-${item.lecture}`}
                                        className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                                    >
                                        <td className="px-4 py-2 align-top whitespace-nowrap">
                                            {item.date}
                                        </td>
                                        <td className="px-4 py-2 align-top font-semibold">
                                            {item.lecture}
                                        </td>
                                        <td className="px-4 py-2 align-top">
                                            <ul className="list-disc list-inside space-y-1">
                                                {item.topics.map((topic) => (
                                                    <li key={topic}>{topic}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className="px-4 py-2 align-top whitespace-pre-line">
                                            {item.note ? (
                                                <span className="font-bold text-[#e91e8c]">
                                                    {item.note}
                                                </span>
                                            ) : (
                                                ""
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1 font-bold"> 
                        <Link href="#instructor" className="scroll-mt-32 group flex items-center" id="instructor">
                            Instructors
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
                <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 md:gap-6">
                    <div className="w-full md:w-[50%] flex flex-col gap-6">
                        <h3 className="text-lg font-semibold">INSTRUCTOR</h3>
                        <div className="grid gap-12 grid-cols-1 w-24 sm:w-28">
                            {instructors.map((instructor) => (
                                <div className="flex flex-col gap-3 group/image" key={instructor.name}>
                                    <Link href={instructor.link} target="_blank">
                                        <AspectRatio ratio={1/1}>
                                            <Image
                                                src={instructor.image}
                                                alt={instructor.name}
                                                fill
                                                className="h-full w-full rounded-sm object-cover bg-gradient-landing group-hover/image:scale-101 transition delay-100 duration-200"
                                            />
                                        </AspectRatio>
                                    </Link>
                                    <a
                                        href="https://scholar.google.com/citations?hl=en&user=Hfrih1EAAAAJ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl text-o-blue hover:underline w-fit whitespace-nowrap"
                                    >
                                        {instructor.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] flex flex-col gap-6">
                        <h3 className="text-lg font-semibold">TAs</h3>
                        <ul className="flex flex-col gap-3">
                            {tas.map((name) => (
                                <li key={name} className="text-lg leading-relaxed">
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    );
}
