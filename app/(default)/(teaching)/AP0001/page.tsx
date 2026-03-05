import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "SLAI AP0001 | OpenDriveLab",
    description: "Embodied AI - Fundamentals and Applications",
    keywords: ["SLAI", "AP0001", "OpenDriveLab", "HKU"],
};



import Image from 'next/image'
import Link from "next/link"



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
    {
        name: "Hai Zhang",
        image: "/assets/person/hai_zhang.jpg",
        link: "https://betray12138.github.io/resume/"
    },
    {
        name: "Chonghao Sima",
        image: "/assets/person/chonghao_sima.jpg",
        link: "https://chonghaosima.github.io/"
    },
    {
        name: "Li Chen",
        image: "/assets/person/li_chen.jpg",
        link: "https://ilnehc.github.io/"
    }
];

const tas: {
    name: string;
    image: string;
    link: string;
    subtitle?: string;
}[] = [
    {
        name: "Zihao Zhang",
        image: "https://ik.imagekit.io/opendrivelab/people/20260305-163446.jpeg",
        link: "https://zizizi-hao.github.io/"
    },
    {
        name: "Haitao Jiang",
        image: "https://ik.imagekit.io/opendrivelab/people/20260305-163442.jpeg",
        link: "https://www.researchgate.net/profile/Jiang-Haitao-3?ev=prf_overview"
    },
    {
        name: "Tianyu Zhang",
        image: "https://ik.imagekit.io/opendrivelab/people/20260305-163436.jpeg ",
        link: "https://github.com/TianyuZhang503"
    },
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
        { title: "Introduction to Robot Learning", href: "https://16-831-s24.github.io/", by: "Guanya Shi", byHref: "https://www.gshi.me/" },
        { title: "Deep Learning for Robotics", href: "https://16-884.github.io/", by: "Deepak Pathak", byHref: "https://scholar.google.com/citations?user=AEsPCAUAAAAJ&hl=en" },
    ],
    conferences: [
        { title: "Robotics: Science and Systems (RSS)", href: "https://roboticsconference.org/" },
        { title: "Conference on Robot Learning (CoRL)", href: "https://www.corl.org/" },
        { title: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)", href: "https://ieeexplore.ieee.org/document/517044" },
        { title: "Annual Conference on Neural Information Processing Systems (NeurIPS)", href: "https://en.wikipedia.org/wiki/Conference_on_Neural_Information_Processing_Systems" },
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
    lectureSlideUrl?: string;
    topics: string[];
    note?: string;
}[] = [
    {
        date: "2026/3/5",
        lecture: "Course Introduction",
        lectureSlideUrl: "https://drive.google.com/file/d/1lekXtxFOVTSRCHwKYhiZwoAmSUVlMDtg/view?usp=sharing",
        topics: [
            "Introduction to Embodied AI",
            "DL and ML Basics",
        ],
    },
    {
        date: "2026/3/12",
        lecture: "CV, Robotics and Coding Mixer",
        topics: [
            "Computer Vision Fundamentals for Embodied AI",
            "Core robotics basics",
            "Integration practice of CV and robotics",
        ],
    },
    {
        date: "2026/3/19",
        lecture: "Reinforcement Learning",
        topics: [
            "Fundamentals of Reinforcement Learning",
            "Key challenges of RL in Embodied AI",
            "Imitation learning combined with RL",
        ],
        note: "HW1",
    },
    {
        date: "2026/3/26",
        lecture: "World Models and Foundation Models in Embodied AI",
        topics: [
            "Core concepts and construction of world models",
            "Foundation models adaptation for embodied AI",
        ],
    },
    {
        date: "2026/4/2",
        lecture: "Manipulation and VLAs",
        topics: [
            "Core problems of robotic manipulation in embodied AI",
            "Design and training of VLA models",
            "VLA model deployment for typical robotic manipulation tasks",
        ],
        note: "Quiz",
    },
    {
        date: "2026/4/9",
        lecture: "Navigation and VLNs",
        topics: [
            "Core challenges of embodied navigation tasks",
            "Fundamentals and key technologies of VLN models",
            "VLN model optimization for unknown navigation scenarios",
        ],
    },
    {
        date: "2026/4/16",
        lecture: "Simulation",
        topics: [
            "High-fidelity simulation engines",
            "Sim-to-real gap mitigation",
            "Scenario and task design",
        ],
        note: "HW1 due",
    },
    {
        date: "2026/4/23",
        lecture: "Data Collection System / MoCap / Data Pyramid",
        topics: [
            "Motion capture fundamentals",
            "End-to-end data collection pipeline",
            "The data pyramid for embodied AI",
        ],
    },
    {
        date: "2026/4/30",
        lecture: "Ego-centric Data Learning",
        topics: [
            "Egocentric perception",
            "Representation learning from ego-centric data",
        ],
    },
    {
        date: "2026/5/7",
        lecture: "Locomotion on Humanoids",
        topics: [
            "Humanoid locomotion fundamentals",
            "Learning-based locomotion",
            "Adaptive and robust locomotion",
        ],
        note: "HW2",
    },
    {
        date: "2026/5/14",
        lecture: "Whole-body Control on Humanoids",
        topics: [
            "Whole-body control theory",
            "Integration of locomotion and manipulation",
        ],
    },
    {
        date: "2026/5/21",
        lecture: "DexHand: A Hardware Perspective",
        topics: [
            "DexHand architecture deep dive",
            "Hardware-software co-design",
            "Calibration and maintenance",
        ],
    },
    {
        date: "2026/5/28",
        lecture: "Hands-on Experiments: LeRobot / TodderBot / MMHand",
        topics: [
            "Platform familiarization",
            "Low-level control interface",
            "Algorithm deployment",
        ]
    },
    {
        date: "2026/6/4",
        lecture: "Building Humanoids from Scratch or World Models",
        topics: [
            "Full humanoid system integration",
            "\"From scratch\" vs. \"model-centric\" design",
            "World models as a virtual hardware",
        ],
        note: "HW2 due",
    },
    {
        date: "2026/6/11",
        lecture: "How to Make Research Impact: Writing, Rebuttal and Presentation in Embodied AI",
        topics: [
            "Impactful paper writing",
            "Response to reviews (rebuttal)",
            "High-impact presentation",
            "Ethics and open science",
        ],
    },
    {
        date: "2026/6/18",
        lecture: "Final Project Symposium I",
        topics: [
            "Oral presentation sessions",
            "Peer review and moderation",
        ],
    },
    {
        date: "2026/6/25",
        lecture: "Final Project Symposium II",
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
                    <div className="rounded-lg border border-slate-200/60 bg-slate-100/60 dark:bg-slate-800/30 dark:border-slate-700/60 px-5 py-5 text-foreground">
                        <p className="leading-relaxed text-justify">
                            {descriptionFirstBlock.intro}
                        </p>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed ml-4 text-justify font-semibold mt-4">
                            {descriptionFirstBlock.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-col gap-3">
                            {descriptionParagraphs.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed text-justify">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1 font-bold"> 
                        <Link href="#course-logistics" className="scroll-mt-32 group flex items-center" id="course-logistics">
                            Course Logistics
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
                    <div className="rounded-lg border border-slate-200/60 bg-slate-100/60 dark:bg-slate-800/30 dark:border-slate-700/60 px-5 py-5 text-foreground">
                        
                        <ul className="list-disc list-inside space-y-4 leading-relaxed text-justify ml-4 mt-6">
                            <li>
                                <strong>Lecture Venue and Time</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90"> Thurseday 9:30-12:15 am in B420 at <a href="https://www.slai.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">SLAI</a>. </span>
                            </li>
                            <li>
                                <strong>Lecture Slides and Recordings</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90">Lecture slides and recordings will be uploaded to the <a href="https://piazza.com/class/mkxyas2e8j84bj#" target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">Piazza</a> after each lecture.</span>
                            </li>
                            <li>
                                <strong>Contact</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90">You can contact the instructors via <a href="https://piazza.com/class/mkxyas2e8j84bj#" target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">Piazza</a> or email (<a href="mailto:slai_ap0001@googlegroups.com" className="text-o-blue hover:underline">slai_ap0001@googlegroups.com</a>).</span>
                            </li>
                            <li>
                                <strong>Computing resource</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90"><a href="https://www.slai.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">SLAI</a> computing resource, Google Colab, other online computing resources also can be used. Hugging Face for hosting the dataset would be recommended.</span>
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
                                            {item.lectureSlideUrl ? (
                                                <span>
                                                    {item.lecture}{" "}
                                                    <Link
                                                        href={item.lectureSlideUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-o-blue hover:underline text-sm"
                                                    >
                                                        [slide]
                                                    </Link>
                                                </span>
                                            ) : (
                                                item.lecture
                                            )}
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
                            Staff
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
                <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 md:gap-10">
                    {/* Instructors: 40% 宽度，两行两列：Hongyang Li & Hai Zhang 一行，Chonghao Sima & Li Chen 一行 */}
                    <div className="w-full md:w-[45%] flex flex-col gap-6">
                        <h3 className="text-lg font-semibold pb-2 border-b border-foreground/30">Instructors</h3>
                        <div className="grid grid-cols-2 gap-6 sm:gap-8 justify-items-center">
                            {instructors.map((instructor) => (
                                <div className="flex flex-col items-center gap-2 group/image" key={instructor.name}>
                                    <Link href={instructor.link} target="_blank" rel="noopener noreferrer" className="block w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-border/50">
                                        <Image
                                            src={instructor.image}
                                            alt={instructor.name}
                                            width={96}
                                            height={96}
                                            className="h-full w-full object-cover group-hover/image:scale-105 transition duration-200"
                                        />
                                    </Link>
                                    <Link
                                        href={instructor.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm sm:text-base text-o-blue hover:underline text-center"
                                    >
                                        {instructor.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Teaching Assistants: 60% 宽度 */}
                    <div className="w-full md:w-[55%] flex flex-col gap-6">
                        <h3 className="text-lg font-semibold pb-2 border-b border-foreground/30">Teaching Assistants</h3>
                        <div className="flex flex-wrap gap-1 sm:gap-20">
                            {tas.map((ta) => (
                                <div className="flex flex-col items-center gap-2 group/image" key={ta.name}>
                                    <Link href={ta.link} target="_blank" rel="noopener noreferrer" className="block w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-border/50">
                                        <Image
                                            src={ta.image}
                                            alt={ta.name}
                                            width={96}
                                            height={96}
                                            className="h-full w-full object-cover group-hover/image:scale-105 transition duration-200"
                                        />
                                    </Link>
                                    <Link
                                        href={ta.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm sm:text-base text-o-blue hover:underline text-center"
                                    >
                                        {ta.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1 font-bold"> 
                        <Link href="#grading-policy" className="scroll-mt-32 group flex items-center" id="grading-policy">
                            CourseWork
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
                    <div className="rounded-lg border border-sky-200/60 bg-sky-50/50 dark:bg-sky-950/30 dark:border-sky-800/60 px-5 py-5 text-foreground">
                        <ul className="list-disc list-inside space-y-4 leading-relaxed text-justify">
                            <li>
                                <strong>Participation (10%)</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90">Students are encouraged to actively participate in the course activities, such as quizzes and discussions.</span>
                            </li>
                            <li>
                                <strong>Quiz (10%)</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90"> Students are encouraged to actively participate in the course quizzes to familiarize themselves with the knowledge and engage in active discussions.</span>
                            </li>
                            <li>
                                <strong>Assignment (20%)</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90">Students are encouraged to complete them independently and communicate with instructors in a timely manner.</span>
                            </li>
                            <li>
                                <strong>Individual Final Project (60%)</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90">
                                    <ul className="list-[circle] list-inside ml-4 mt-1 space-y-0.5">
                                        <li><strong>Content: </strong>Technical - non-robotics / Demo - robotics [Our tutorial] / Survey on Data Collection [reading week] / Business Plan</li>
                                        <li><strong>Formation: </strong>Report (peer-reviewed), Presentation and Q&A</li>
                                    </ul>
                                </span>
                            </li>
                            <li>
                                <strong>Regrade Request</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90">If you believe that the course staff made an objective error in grading, you may submit a regrade request and email us within 3 days of the grade release. Your request should briefly summarize why the original grading was incorrect. Note that staff may regrade the entire submission, so it is possible for you to lose more points than you gain if a mistake was overlooked in the first time.</span>
                            </li>
                            <li>
                                <strong>LLM Policy</strong>
                                <br />
                                <span className="block mt-1 pl-4 text-foreground/90">We encourage students to use LLM tools to improve the quality of their assignments and projects and enhance their writing skills; however, if you use an LLM, you must disclose its use at the end of your document, and you are fully responsible for the work produced with LLM assistance.</span>
                            </li>
                        </ul>
                    </div>
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
                            Course Materials
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
                    <p className="font-semibold mt-2">Online courses:</p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed ml-4 text-justify">
                        {textbookAndReferences.onlineCourses.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">
                                    {item.title}
                                </a>
                                , by{" "}
                                <a href={item.byHref} target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">
                                    {item.by}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="font-semibold mt-2">Conferences:</p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed ml-4 text-justify">
                        {textbookAndReferences.conferences.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-o-blue hover:underline">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



        </div>
    );
}
