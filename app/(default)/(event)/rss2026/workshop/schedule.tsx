"use client"

import Link from "next/link"
import { useState } from "react"

type ScheduleItemType = "talk" | "break" | "challenge" | "panel" | "closing";

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
    nameLink?: string;
    affiliation?: string;
    affiliationLogo?: string;
    title: string;
    recordings?: { youtube?: string; bilibili?: string };
    slides?: string;
    bio?: string;
}[] = [
    {
        type: "talk",
        time: "8:30 AM",
        name: "Chonghao Sima",
        nameLink: "https://scholar.google.com/citations?user=dgYJ6esAAAAJ",
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
        name: "Tianyu Li",
        nameLink: "https://scholar.google.com/citations?user=X6vTmEMAAAAJ",
        affiliation: "Archon Robotics, China",
        affiliationLogo: "https://www.archon.tech/apple-touch-icon.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
    },
    {
        type: "talk",
        time: "09:05 AM",
        name: "Fan Shi",
        nameLink: "https://fanshi14.github.io/me/",
        affiliation: "National University of Singapore, Singapore",
        affiliationLogo: "/assets/brand/nus.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Fan Shi is an Assistant Professor and director of Human-Centered Robotic Lab, Electrical and Computer Engineering, National University of Singapore, awarded by Presidential Young Professorship. He was a Postdoctoral Fellow at ETH AI Center working with Prof. Stelian Coros and Prof. Marco Hutter. He obtained the PhD degree at JSK Lab, the University of Tokyo, supervised by Prof. Masayuki Inaba and Prof. Kei Okada from 2016 to 2021. In 2020, he was visiting RSL Lab, ETH Zurich supervised by Prof. Macro Hutter. He did his Bachelor in Peking University advised by Prof. Huijing Zhao. He was visiting in Microsoft Research Asia (by Prof. Katsushi Ikeuchi) and Takanishi Lab (by Prof. Atsuo Takanishi) during my undergraduate. His lifelong target is to build the good stuff, and help the good happen.",
    },
    {
        type: "talk",
        time: "09:35 AM",
        name: "Selected Presenters",
        title: "Spotlight Presentations",
        recordings: {
            youtube: "",
            bilibili: "",
        },
    },
    {
        type: "talk",
        time: "09:50 AM",
        name: "All Participants",
        title: "Breakout Discussion",
        recordings: {
            youtube: "",
            bilibili: "",
        },
    },
    {
        type: "break",
        time: "10:00 AM",
        title: "Coffee Break",
    },
    {
        type: "talk",
        time: "10:30 AM",
        name: "Shan Luo",
        nameLink: "https://shanluo.github.io/",
        affiliation: "King's College London, UK",
        affiliationLogo: "/assets/brand/kcl.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Shan Luo is currently a Reader in Robotics and AI at the Department of Engineering, King's College London, where he leads the Robot Perception Lab (RPL). He is an enthusiastic and dedicated researcher doing research on robot perception with vision and tactile sensing, leveraging machine learning and computer vision algorithms with applications in robotics, e.g., robot perception, object recognition & localisation, and multimodal sensing fusion. He was a Lecturer (Assistant Professor) at the Department of Computer Science, the University of Liverpool, from 2018 to 2021, and was Director for the smARTLab at the Department. Prior to that, he was a Postdoctoral Research Fellow at Harvard University from 2017 to 2018, and at the University of Leeds from 2016 to 2017. He received the PhD degree in Robotics from King's College London, in 2016. He was a Visiting Scientist at the Computer Science and Artificial Intelligence Laboratory (CSAIL), MIT, in 2016. He is a Fellow of the Higher Education Academy (FHEA).",
    },
    {
        type: "talk",
        time: "11:00 AM",
        name: "Hamidreza Kasaei",
        nameLink: "https://hkasaei.github.io/",
        affiliation: "University of Groningen, Netherlands",
        affiliationLogo: "/assets/brand/ug.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Hamidreza Kasaei is an Associate Professor in the Department of Artificial Intelligence at the University of Groningen, the Netherlands. He has an extensive background in computer vision, machine learning, and robotics. His main research interests lie in the area of 3D Object Perception and Object Manipulation. These days, he is particularly interested in enabling robots to incrementally learn from past experiences and intelligently and safely interact with non-expert human users using data-efficient open-ended machine-learning techniques. Therefore, his research group focuses on Lifelong Interactive Robot Learning (IRL-Lab), which we work at the cutting edge of robotics research.",
    },
    {
        type: "talk",
        time: "11:30 AM",
        name: "Leslie Pack Kaelbling",
        nameLink: "https://people.csail.mit.edu/lpk/",
        affiliation: "MIT, USA",
        affiliationLogo: "/assets/brand/mit.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
    },
    {
        type: "talk",
        time: "12:00 AM",
        name: "Speakers and Organizers",
        title: "Debate",
        recordings: {
            youtube: "",
            bilibili: "",
        },
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
                                    <div className="flex flex-col w-full min-w-0 overflow-hidden gap-3">
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
                                                ) : item.name ? (
                                                    <>
                                                        <Link
                                                            href={item.nameLink ?? "#"}
                                                            target="_blank"
                                                            className="font-bold hover:underline"
                                                        >
                                                            {item.name}
                                                        </Link>
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
                                            <span className={`text-sm tabular-nums shrink-0 ml-4${isBreakType(item.type) ? " text-o-gray" : ""}`}>
                                                {/* {formatTime(item.time, tz.offset)} */}
                                                {item.time}
                                            </span>
                                        </div>

                                        {item.type !== "break" && item.type !== "closing" && (
                                            <span>{item.title}</span>
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
