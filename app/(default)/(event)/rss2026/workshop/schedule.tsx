"use client"

import Link from "next/link"
import { useState } from "react"

type ScheduleItemType = "talk" | "poster" | "break" | "demo" | "challenge" | "panel" | "closing";

const timezones: { label: string; offset: number }[] = [
    { label: "UTC-12", offset: -12 },
    { label: "UTC-11", offset: -11 },
    { label: "UTC-10", offset: -10 },
    { label: "UTC-9",  offset: -9  },
    { label: "UTC-8",  offset: -8  },
    { label: "UTC-7",  offset: -7  },
    { label: "UTC-6 / Denver",  offset: -6  },
    { label: "UTC-5", offset: -5 },
    { label: "UTC-4",  offset: -4  },
    { label: "UTC-3",  offset: -3  },
    { label: "UTC-2",  offset: -2  },
    { label: "UTC-1",  offset: -1  },
    { label: "UTC+0",  offset:  0  },
    { label: "UTC+1",  offset:  1  },
    { label: "UTC+2",  offset:  2  },
    { label: "UTC+3",  offset:  3  },
    { label: "UTC+4",  offset:  4  },
    { label: "UTC+5",  offset:  5  },
    { label: "UTC+6",  offset:  6  },
    { label: "UTC+7",  offset:  7  },
    { label: "UTC+8", offset:  8  },
    { label: "UTC+9",   offset:  9  },
    { label: "UTC+10", offset: 10  },
    { label: "UTC+11", offset: 11  },
    { label: "UTC+12", offset: 12  },
];

function formatTime(isoTime: string, offsetHours: number): string {
    const date = new Date(isoTime);
    const utcMs = date.getTime() + date.getTimezoneOffset() * 60000;
    const local = new Date(utcMs + offsetHours * 3600000);
    const h = local.getHours();
    const m = local.getMinutes().toString().padStart(2, "0");
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return `${h12}:${m} ${ampm}`;
}

const scheduleItems: {
    type: ScheduleItemType;
    time: string;
    name?: string;
    nameNote?: string;
    nameLink?: string;
    affiliation?: string;
    affiliationLogo?: string;
    title: string;
    recordings?: { youtube?: string; bilibili?: string };
    slides?: string;
    bio?: string;
    presentations?: string[];
}[] = [
    {
        type: "talk",
        time: "08:30 AM",
        name: "Hongyang Li",
        nameLink: "https://www.hongyang.li/",
        affiliation: "The University of Hong Kong, China",
        title: "Opening Remarks",
        recordings: {
            youtube: "",
            bilibili: "",
        },
    },
    {
        type: "talk",
        time: "08:35 AM",
        name: "Tapomayukh Bhattacharjee",
        nameLink: "https://scholar.google.com/citations?user=X1zsXTgAAAAJ&hl=en",
        affiliation: "Cornell University, USA",
        affiliationLogo: "/assets/brand/cornell.png",
        title: "Learning Personalized Whole-arm Manipulation Around Humans",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Tapomayukh \"Tapo\" Bhattacharjee is an Assistant Professor in the Department of Computer Science at Cornell University, where he directs the EmPRISE Lab. His research aims to enable robots to assist people with mobility limitations with activities of daily living, spanning human-robot interaction, haptic perception, and robot manipulation. He received his PhD in Robotics from Georgia Institute of Technology and was an NIH Ruth L. Kirschstein NRSA postdoctoral research associate at the University of Washington.",
    },
    {
        type: "talk",
        time: "09:05 AM",
        name: "Li Yi",
        nameLink: "https://scholar.google.com/citations?user=UyZL660AAAAJ&hl=en",
        affiliation: "Tsinghua University, China",
        affiliationLogo: "/assets/brand/tsinghua_square.png",
        title: "Beyond Imitation: Executable, Correctable, and Adaptable Skills for Humanoid Robots",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Li Yi is a tenure-track assistant professor at the Institute for Interdisciplinary Information Sciences (IIIS), Tsinghua University, and Chief Scientist at Beijing Galbot Co., Ltd. He received his Ph.D. from Stanford University, advised by Professor Leonidas J. Guibas. And he was previously a Research Scientist at Google. Before joining Stanford, he got his B.E. in Electronic Engineering from Tsinghua University. His recent research focuses on 3D computer vision, humanoid robot learning, and dexterous manipulation, and his mission is to equip robotic agents with the ability of understanding and interacting with the 3D world. He has published papers at top-tier computer vision, computer graphics, and machine learning conferences with more than 35000 citations. And he has served as an Area Chair for CVPR, IJCAI, and NeurIPS. His representative work includes ShapeNet, PointNet++, and HOI4D.",
    },
    {
        type: "talk",
        time: "09:35 AM",
        name: "Oral Presentations",
        title: "Oral Presentations",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        presentations: [
            "HEX: Humanoid-Aligned Experts for Cross-Embodiment Whole-Body Manipulation",
            "Sparse Video Generation Propels Real-World Beyond-the-View Vision-Language Navigation",
            "Human2Any: Human-to-Robot Transfer via Constraint-Aware Compositional Planning",
            "Can We Tune Humanoid Behavior Foundation Models for Dynamic and Contact-Rich Tasks?",
            "Native Memory Compression for Long-Horizon Robotic Manipulation",
            "Visibility-Aware Mobile Grasping in Dynamic Environments",
        ],
    },
    // {
    //     type: "talk",
    //     time: "09:50 AM",
    //     name: "All Participants",
    //     title: "Breakout Discussion",
    //     recordings: {
    //         youtube: "",
    //         bilibili: "",
    //     },
    // },
    {
        type: "poster",
        time: "10:15 AM",
        title: "Poster Session",
    },
    {
        type: "break",
        time: "10:40 AM",
        title: "Coffee Break",
    },
    {
        type: "demo",
        time: "10:45 AM-10:55 AM",
        name: "RoboNaldo",
        nameLink: "https://opendrivelab.com/RoboNaldo/",
        title: "Live Demo Demonstration",
    },
    {
        type: "talk",
        time: "11:00 AM",
        name: "Fan Shi",
        nameLink: "https://fanshi14.github.io/me/",
        affiliation: "National University of Singapore, Singapore",
        affiliationLogo: "/assets/brand/nus.png",
        title: "Simulation Is Back: Scaling Contact-Rich, Long-Horizon Manipulation",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Fan Shi is an Assistant Professor at the National University of Singapore, where he holds the prestigious NUS Presidential Young Professorship. His research lies at the intersection of artificial intelligence and robotics, with a focus on physical simulation, robot learning, and the development of scalable methods for embodied intelligence. His work has been recognized through awards and support from leading organizations, including the NVIDIA Academic Grant Program, Google Research, and the Swiss AI Initiative.",
    },
    {
        type: "talk",
        time: "11:30 AM",
        name: "Marcel Torne",
        nameNote: "remote",
        nameLink: "https://marceltorne.github.io/",
        affiliation: "Stanford University, USA",
        affiliationLogo: "/assets/brand/stanford.png",
        title: "Long and Short-Term Memory for Long-Horizon Manipulation",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Marcel Torne is a researcher at Stanford University. His research focuses on learning-based assistive robots and methods for in-context adaptation of policies to unseen scenarios with an emphasis on human-centric approaches.",
    },
    {
        type: "talk",
        time: "12:00 PM",
        name: "Tianyu Li",
        nameLink: "https://scholar.google.com/citations?user=X6vTmEMAAAAJ",
        affiliation: "Archon Robotics, China",
        affiliationLogo: "https://www.archon.tech/apple-touch-icon.png",
        title: "Scaling Whole-Body Humanoid Skills with Human Demonstration",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Tianyu Li is the Co-Founder of Archon Robotics, where he is building Large Humanoid Models toward general-purpose whole-body intelligence. He is also a PhD researcher at Fudan University and the Shanghai Innovation Institute, conducting research at OpenDriveLab under the supervision of Prof. Hongyang Li. His work centers on humanoid robot learning, autonomos driving, and 3D computer vision.",
    },
];

function ScheduleAvatar({ item }: { item: typeof scheduleItems[0] }) {
    if (item.type === "break") {
        return (
            <div className="relative px-1">
                <div className="flex size-8 items-center justify-center rounded-full bg-white">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        );
    }
    if (item.type === "closing") {
        return (
            <div className="relative px-1">
                <div className="flex size-8 items-center justify-center rounded-full bg-white">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                </div>
            </div>
        );
    }
    if (item.type === "poster") {
        return (
            <div className="relative px-1">
                <div className="flex size-8 items-center justify-center rounded-full bg-white">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5h16.5M3.75 9h16.5M9 13.5h11.25M9 18h11.25M3.75 13.5h1.5M3.75 18h1.5" />
                    </svg>
                </div>
            </div>
        );
    }
    if (item.type === "demo") {
        return (
            <div className="relative px-1">
                <div className="flex size-8 items-center justify-center rounded-full border border-o-blue/40 bg-o-blue/10 text-o-blue">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
            </div>
        );
    }
    if (item.type === "challenge") {
        return (
            <div className="relative shrink-0">
                {/* FIX 1: use w-10 h-10 object-contain instead of flex size-10 ... */}
                <img className="w-10 h-10 object-contain" src="/assets/icon/D.svg" alt="" />
            </div>
        );
    }
    if (item.type === "panel") {
        return (
            <div className="relative px-1">
                <div className="flex size-8 items-center justify-center rounded-full bg-white">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                </div>
            </div>
        );
    }
    if (item.affiliationLogo) {
        return (
            // FIX 1: use w-10 h-10 object-contain + shrink-0 to preserve aspect ratio
            <div className="relative shrink-0">
                <img className="w-10 h-10 object-contain" src={item.affiliationLogo} alt="" />
            </div>
        );
    }
    // Default: chat bubble icon (opening remarks / no logo)
    return (
        <div className="relative px-1">
            <div className="flex size-8 items-center justify-center rounded-full bg-white">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
            </div>
        </div>
    );
}

export function ScheduleList() {
    // Default to UTC-5 / Nashville (index 7)
    // const [tzIndex, setTzIndex] = useState(6);
    const tzIndex = 6;
    const tz = timezones[tzIndex];
    const isBreakType = (type: ScheduleItemType) => type === "break";
    const isDemoType = (type: ScheduleItemType) => type === "demo";

    return (
        <div className="max-w-wider">

            {/* ── Timezone selector ── */}
            {/* <div className="flex items-center gap-4 mb-8 text-sm">
                <span className="text-o-gray">Time zone:</span>
                <select
                    value={tzIndex}
                    onChange={(e) => setTzIndex(Number(e.target.value))}
                    className="border border-current rounded-full px-4 py-1.5 bg-transparent text-sm cursor-pointer hover:bg-black/5 transition-colors appearance-none"
                >
                    {timezones.map((tz, i) => (
                        <option key={i} value={i}>
                            {tz.label}
                        </option>
                    ))}
                </select>
            </div> */}

            <ul>
                {scheduleItems.map((item, index) => {
                    const isLast = index === scheduleItems.length - 1;
                    return (
                        <li key={index}>
                            <div className="relative pb-8">

                                {/* ── Vertical connector line ── */}
                                {!isLast && (
                                    <span
                                        className="absolute left-5 top-5 -ml-px h-full w-0.5"
                                        style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
                                        aria-hidden="true"
                                    />
                                )}

                                <div className="relative flex items-start space-x-3">
                                    <ScheduleAvatar item={item} />
                                    {/* FIX 2: min-w-0 + overflow-hidden clamps the column to its flex-allocated width */}
                                    <div className={`flex flex-col w-full min-w-0 overflow-hidden gap-3${isDemoType(item.type) ? " rounded-sm border border-o-blue/30 bg-o-blue/5 px-4 py-3 shadow-sm" : ""}`}>
                                        <div className={`flex justify-between${isBreakType(item.type) ? " pt-1" : ""}`}>
                                            <div>
                                                {item.type === "challenge" ? (
                                                    <span className="font-bold">Track Organizer and Winners</span>
                                                ) : item.type === "panel" ? (
                                                    <span className="font-bold">Speakers and Organizers</span>
                                                ) : item.type === "closing" ? (
                                                    <span>Closing Remarks</span>
                                                ) : item.type === "break" ? (
                                                    <span className="text-o-gray">{item.title}</span>
                                                ) : item.type === "poster" ? (
                                                    <span className="font-bold">{item.title}</span>
                                                ) : item.type === "demo" ? (
                                                    <>
                                                        <span className="mb-1 inline-flex rounded-sm bg-o-blue px-2 py-0.5 text-xs font-bold text-white">
                                                            Parallel Live Demo
                                                        </span>
                                                        <br />
                                                        {item.nameLink ? (
                                                            <Link
                                                                href={item.nameLink}
                                                                target="_blank"
                                                                className="font-bold text-o-blue hover:underline"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ) : (
                                                            <span className="font-bold text-o-blue">{item.name}</span>
                                                        )}
                                                    </>
                                                ) : item.name ? (
                                                    <>
                                                        {item.nameLink ? (
                                                            <Link
                                                                href={item.nameLink}
                                                                target="_blank"
                                                                className="font-bold hover:underline"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ) : (
                                                            <span className="font-bold">{item.name}</span>
                                                        )}
                                                        {item.nameNote && (
                                                            <span className="ml-1 text-xs text-o-gray">
                                                                ({item.nameNote})
                                                            </span>
                                                        )}
                                                        {item.affiliation && (
                                                            <>
                                                                <br className="laptop:hidden" />
                                                                <i className="laptop:ml-6 text-o-gray">
                                                                    {item.affiliation}
                                                                </i>
                                                            </>
                                                        )}
                                                    </>
                                                ) : null}
                                            </div>

                                            {/* ── Time display ── */}
                                            <span className={`text-sm tabular-nums shrink-0 ml-4${isBreakType(item.type) ? " text-o-gray" : ""}${isDemoType(item.type) ? " text-o-blue font-bold" : ""}`}>
                                                {/* {formatTime(item.time, tz.offset)} */}
                                                {item.time}
                                            </span>
                                        </div>

                                        {item.type !== "break" && item.type !== "closing" && item.type !== "demo" && item.type !== "poster" && !item.presentations && (
                                            <span>{item.title}</span>
                                        )}

                                        {item.presentations && (
                                            <details className="text-xs">
                                                <summary className="content-none">{item.title}</summary>
                                                <ol className="mt-3 list-decimal space-y-2 pl-5">
                                                    {item.presentations.map((presentation) => (
                                                        <li key={presentation} className="break-words">
                                                            {presentation}
                                                        </li>
                                                    ))}
                                                </ol>
                                            </details>
                                        )}

                                        {/* {item.recordings && (
                                            <span>
                                                Recordings ({item.recordings.youtube && (
                                                    <Link href={item.recordings.youtube} target="_blank" className="text-o-blue hover:underline">
                                                        YouTube
                                                    </Link>
                                                )}{item.recordings.youtube && item.recordings.bilibili && ", "}{item.recordings.bilibili && (
                                                    <Link href={item.recordings.bilibili} target="_blank" className="text-o-blue hover:underline">
                                                        bilibili
                                                    </Link>
                                                )}){item.slides && (
                                                    <>{" | "}<Link href={item.slides} target="_blank" className="text-o-blue hover:underline">Slides</Link></>
                                                )}
                                            </span>
                                        )} */}

                                        {item.bio && (
                                            <details className="text-xs">
                                                <summary className="content-none">Biography</summary>
                                                {/* FIX 2: break-words prevents long strings from expanding the container */}
                                                <p className="mt-3 w-full break-words">{item.bio}</p>
                                            </details>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
