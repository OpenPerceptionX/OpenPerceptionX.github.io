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
        time: "2026-06-03T23:00:00",
        name: "Hongyang Li",
        nameLink: "https://lihongyang.info/",
        affiliation: "HKU, China",
        title: "Opening Remarks",
        recordings: {
            youtube: "",
            bilibili: "",
        },
    },
    {
        type: "talk",
        time: "2026-06-03T23:10:00",
        name: "Hao Su",
        nameLink: "https://cseweb.ucsd.edu/~haosu/",
        affiliation: "UC San Diego, USA",
        affiliationLogo: "/assets/brand/ucsd.svg",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Hao Su is an Associate Professor of Computer Science at the University of California, San Diego (UCSD), and also serves as the Founder and Chief Technology Officer of Hillbot, an intelligent robotics startup. At UCSD, he is the Director of the Embodied Intelligence Laboratory, a founding member of the Halıcıoğlu Data Science Institute, and a member of the Center for Visual Computing and the Contextual Robotics Institute. His research focuses on developing algorithms to simulate, understand, and interact with the physical world. His interests span computer vision, machine learning, computer graphics, and robotics, with extensive publications and teaching experience in these fields. Su obtained his Ph.D. in Computer Science from Stanford University. Prior to that, he received his Ph.D. in Mathematics from Beihang University. At Stanford and UCSD, he developed widely-used datasets and software, such as ImageNet, ShapeNet, PointNet, PartNet, SAPIEN, and the recent ManiSkill. These works have greatly advanced research progress in areas such as 3D vision and robot manipulation. He also developed new courses to promote the application of machine learning methods in 3D vision and embodied intelligence. Su serves as the Program Chair of CVPR 2025. He has also served as an Area Chair or Associate Editor for top conferences and journals in computer vision (ICCV/ECCV/CVPR), computer graphics (SIGGRAPH/ToG), robotics (IROS/ICRA), and machine learning (NeurIPS/ICLR). He has been awarded the SIGGRAPH Best Doctoral Dissertation Honorable Mention and the NSF CAREER Award.",
    },
    {
        type: "talk",
        time: "2026-06-04T00:00:00",
        name: "Spotlights Presentaion",
        title: "Accepted Paper Authors",
        recordings: {
            youtube: "",
            bilibili: "",
        },
    },
    {
        type: "break",
        time: "2026-06-04T00:20:00",
        title: "Coffee Break",
    },
    {
        type: "talk",
        time: "2026-06-04T00:30:00",
        name: "Zhiyu Huang",
        nameLink: "https://mczhi.github.io/",
        affiliation: "UCLA, USA",
        affiliationLogo: "/assets/brand/ucla.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Zhiyu Huang is currently a postdoctoral scholar at the UCLA Mobility Lab, working under the guidance of Prof. Jiaqi Ma. Previously, he was a research intern at the NVIDIA Research Autonomous Vehicle Group and a visiting student researcher at UC Berkeley in the Mechanical Systems Control (MSC) Lab. He earned his Ph.D. from Nanyang Technological University (NTU), where he conducted research in the Automated Driving and Human-Machine System (AutoMan) Lab under the supervision of Prof. Chen Lyu. His research lies at the intersection of robotics, mobility, and artificial intelligence. He focus on developing algorithms and techniques that enable physical AI agents to perceive their environment, interact with humans, and make intelligent decisions. His research interests include deep learning, reinforcement learning, and generative AI, with applications in perception, prediction, decision-making, and simulation for embodied AI, autonomous driving, and human-machine interaction. To date, he has authored over 30 papers published in leading journals and conferences in AI, ITS, and robotics.",
    },
    {
        type: "talk",
        time: "2026-06-04T01:20:00",
        name: "Angjoo Kanazawa",
        nameLink: "https://people.eecs.berkeley.edu/~kanazawa/",
        affiliation: "UC Berkeley, USA",
        affiliationLogo: "/assets/brand/ucberkeley.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Angjoo Kanazawa is an Assistant Professor in the Department of Electrical Engineering and Computer Sciences at the University of California, Berkeley. She leads the Kanazawa AI Research (KAIR) lab under BAIR. Alongside her academic work, she has served as Chief Technical Advisor for Luma AI and on the advisory board of Wonder Dynamics. She is also an Amazon Scholar in the Frontier AI & Robotics team. Previously, she was a Research Scientist at Google Research, and BAIR postdoc at UC Berkeley advised by Jitendra Malik, Alexei A. Efros and Trevor Darrell. She completed her PhD in Computer Science at the University of Maryland, College Park with my advisor David Jacobs. During her PhD, she had the pleasure to visit the Max Planck Institute in Tübingen, Germany under the guidance of Michael Black.",
    },
    {
        type: "break",
        time: "2026-06-04T02:10:00",
        title: "Lunch Break",
    },
    {
        type: "talk",
        time: "2026-06-04T03:00:00",
        name: "Edward Johns",
        nameLink: "https://www.robot-learning.uk/",
        affiliation: "Imperial College London, UK",
        affiliationLogo: "/assets/brand/icl.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Edward Johns is Director of the Robot Learning Lab at Imperial College London, where he is also an Associate Professor. He received his undergraduate and master's degrees in engineering from Cambridge University, and his PhD in computer vision from Imperial College. Following a post-doc at UCL, he returned to Imperial as a founding member of the Dyson Robotics Lab, after which he was awarded an RAEng Research Fellowship. In 2018, he joined the faculty at Imperial and founded the Robot Learning Lab in the Department of Computing, where he also teaches a graduate-level course on Robot Learning.",
    },
    {
        type: "talk",
        time: "2026-06-04T03:50:00",
        name: "Jiatao Gu",
        nameLink: "https://jiataogu.me/",
        affiliation: "UPenn, USA",
        affiliationLogo: "/assets/brand/UPenn.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Jiatao Gu is an Assistant Professor in the Department of CIS at the University of Pennsylvania. He also works part-time as a Staff Research Scientist at Apple (MLR) and has been a full-time researcher since 2022. Prior to joining Apple, he was a Research Scientist at Meta AI (FAIR Labs). He obtained his Ph.D. degree at the department of Electrical and Electronic Engineering, University of Hong Kong in 2018 and he was supervised by Prof. Victor O.K. Li. His doctoral work explored efficient neural machine translation systems. He also spent a wonderful time visiting the CILVR Lab, New York University working with Prof. Kyunghyun Cho. Before that, he obtained his Bachelor’s degree at the Electronic Engineering Department, Tsinghua University in 2014.",
    },
    {
        type: "break",
        time: "2026-06-04T04:40:00",
        title: "Coffee Break",
    },

    {
        type: "talk",
        time: "2026-06-04T04:50:00",
        name: "Rika Antonova",
        nameLink: "https://contactrika.github.io/",
        affiliation: "Cambridge, UK",
        affiliationLogo: "/assets/brand/cambridge.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Rika Antonova is an Associate Professor at the University of Cambridge, leading the Cambridge Resilient Autonomous Learning (CamRAL) Lab. She is currently looking for talented mechanical engineers / postdocs for a project on novel robot hardware design. While her recent work focused on robotics, she is also returning to her long-term interest in reinforcement learning algorithms, so she is enthusiastic about collaborations in data-efficient RL, active learning & exploratio, and decision-making for scientific & environmental domains as well. She is also teaching an RL course at Cambridge. Previously, she was at Stanford University upon receiving the NSF/CRA Computing Innovation Fellowship, and worked with the Interactive Perception and Robot Learning Lab at Stanford led by Jeannette Bohg. She completed her PhD work on data-efficient simulation-to-reality transfer at KTH (Sweden) in the group led by Danica Kragic. She also had the opportunity to intern at NVIDIA Robotics (Seattle, USA) and Microsoft Research (Cambridge, UK)."
    },
    {
        type: "talk",
        time: "2026-06-04T05:40:00",
        name: "Yilun Du",
        nameLink: "https://yilundu.github.io/",
        affiliation: "Harvard, USA",
        affiliationLogo: "/assets/brand/Harvard.png",
        title: "TBD",
        recordings: {
            youtube: "",
            bilibili: "",
        },
        slides: "",
        bio: "Yilun Du is an Assistant Professor at Harvard in the Kempner Institute and CS. He received his PhD at MIT EECS, advised by Prof. Leslie Kaelbling, Prof. Tomas Lozano-Perez and Prof. Joshua B. Tenenbaum. Previously, he also obtained his bachelor's degree from MIT, was a research fellow at OpenAI, a senior research scientist at Google Deepmind, and got a gold medal at the International Biology Olympiad. His research focuses on generative models, decision making, robot learning, embodied agents, and the applications of such tools to scientific domains. His research is driven by the goal of developing AI agents that interact in the physical world, focusing on generative AI as a toolbox for solving such problems. A unique challenge in applying generative AI in this setting is the lack of available decision-making data and the necessity to generalize well to previously unseen situations. His work addresses this by proposing compositional generative modeling, where simple generative models are learned and composed together to construct complex generative models that generalize beyond the narrow amount of available data. His work has illustrated how such compositionality solves various problems in constructing AI agents ranging from complex scene understanding, trajectory planning, multimodal perception, and hierarchical planning. His work has further shown how such developed techniques can be broadly applied to settings in sciences and engineering.",
    },
    {
        type: "panel",
        time: "2026-06-04T06:30:00",
        title: "Debate",
    },
    {
        type: "closing",
        time: "2026-06-04T07:30:00",
        title: "Closing Remarks",
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
    const [tzIndex, setTzIndex] = useState(6);
    const tz = timezones[tzIndex];
    const isBreakType = (type: ScheduleItemType) => type === "break";

    return (
        <div className="max-w-wider">

            {/* ── Timezone selector ── */}
            <div className="flex items-center gap-4 mb-8 text-sm">
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
            </div>

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
                                                {formatTime(item.time, tz.offset)}
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
