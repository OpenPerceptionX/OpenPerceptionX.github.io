import type { Metadata } from "next";

import Link from "next/link";
import { Exo_2 } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { PolicyRollouts1 } from "./chart/policy-rollouts-1";
import { PolicyRollouts2 } from "./chart/policy-rollouts-2";
import { PolicyRollouts3 } from "./chart/policy-rollouts-3";
import { PolicyRollouts4 } from "./chart/policy-rollouts-4";
import { PolicyRolloutsAverage } from "./chart/policy-rollouts-average";
import {
  GeneralizationUnseenChart,
  RobustnessDisturbanceChart,
} from "./chart/generalization-unseen";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
});

const policyRolloutActiveBlue = "data-[state=active]:bg-[#5B6EE1]";

const policy_rollouts: { id: string; title: string; color: string }[] = [
  {
    id: "01",
    title: "Herbal Transfer",
    color: policyRolloutActiveBlue,
  },
  {
    id: "02",
    title: "Cable Mounting",
    color: policyRolloutActiveBlue,
  },
  {
    id: "03",
    title: "Binder Clip Removal",
    color: policyRolloutActiveBlue,
  },
  {
    id: "04",
    title: "Dish Washing",
    color: policyRolloutActiveBlue,
  },
];

const pageNavItems: { text: string; id: string }[] = [
  { text: "Highlights", id: "highlights" },
  { text: "Data Collection Modes", id: "data-collection-modes" },
  { text: "3D Model", id: "model" },
  { text: "Policy Rollouts", id: "policy-rollouts" },
  { text: "Generalization and Robustness", id: "generalization-and-robustness" },
  { text: "Methodology", id: "methodology" },
];

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-black text-white">
      <nav
        className="fixed left-5 top-1/2 -translate-y-1/2 z-30 hidden md:block"
        aria-label="TAMEn section navigation"
      >
        <div className="pointer-events-none absolute -left-3 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        <ul className="relative flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          {pageNavItems.map((item) => (
            <li key={item.id} className="group">
              <Link
                href={`#${item.id}`}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] tracking-wide text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/45 group-hover:bg-[#ff7b00] group-hover:shadow-[0_0_12px_#ff7b00]" />
                {item.text}
              </Link>
            </li>
          ))}
          <li className="mt-1 pt-2 border-t border-white/10">
            <Link
              href="#"
              aria-label="Back to top"
              className="mx-auto flex size-8 items-center justify-center rounded-full border border-white/25 bg-gradient-to-br from-white/10 via-white/5 to-transparent text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_6px_18px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff7b00]/70 hover:text-[#ffb366] hover:shadow-[0_0_20px_rgba(255,123,0,0.35),0_8px_22px_rgba(0,0,0,0.45)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="size-4 drop-shadow-[0_0_8px_rgba(255,123,0,0.35)]"
              >
                <path
                  d="M12 19V5M12 5L6 11M12 5L18 11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Landing Section with Gray Background */}
      <div className="w-full min-h-[100dvh] flex flex-col items-center px-2 md:px-4 bg-black">
        <div className="flex flex-col w-full h-[100dvh] py-2 md:py-4">
          <div className="w-full h-full rounded-2xl border border-white/20 p-3 md:p-5 flex flex-col">
            <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-xl">
              <video
                preload="none"
                autoPlay
                loop
                muted
                playsInline
                poster="https://ik.imagekit.io/uqvsd50nv/teaser.jpg"
                className="absolute inset-0 h-full w-full object-contain bg-black"
              >
                <source src="https://ik.imagekit.io/7rgtwup0y/teaser.mp4" />
              </video>
              <div className="absolute inset-0 z-10 flex items-center justify-center px-4 md:px-8 bg-black/25">
                <div className="max-w-5xl text-center">
                  <h1 className="color-text-1 text-lg sm:text-2xl md:text-4xl font-bold leading-tight">
                    <span className="block text-3xl sm:text-5xl md:text-7xl leading-none mb-2 md:mb-3">
                      TAMEn:
                    </span>
                    <span>
                      Tactile-Aware Manipulation Engine for Closed-Loop Data
                      Collection in Contact-Rich Tasks
                    </span>
                  </h1>
                  <p className="mt-3 md:mt-5 text-[10px] sm:text-xs md:text-sm italic text-gray-300">
                    TAMEn builds upon the UMI paradigm with key enhancements in
                    multimodality, precision-portability synergy, replayability,
                    and data flywheel.
                  </p>
                  <div className="mt-4 md:mt-6 flex flex-row justify-center gap-2 md:gap-4">
                    <a
                      href="https://arxiv.org/abs/2604.07335"
                      className="px-3 py-1 md:px-4 md:py-2 bg-black/30 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-white/10 transition-all duration-200 border border-white/40 text-[10px] sm:text-xs md:text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Paper
                    </a>
                    <a
                      href="https://github.com/OpenDriveLab/TAMEn"
                      className="px-3 py-1 md:px-4 md:py-2 bg-black/30 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-white/10 transition-all duration-200 border border-white/40 text-[10px] sm:text-xs md:text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Author / affiliation block is temporarily hidden. */}
        </div>
      </div>

      {/* Main Content Section with App Sidebar */}
      <div className="flex w-full">
        <div className="bg-black text-white w-full">
          {/* Main Content */}
          <div className="flex-1 w-full flex flex-col md:pl-16 lg:pl-20">
          {/* Highlights */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="highlights"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-16">
              <div className="w-full max-w-6xl flex flex-row justify-between">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link
                    href="#highlights"
                    className="scroll-mt-32 group flex items-center"
                  >
                    Highlights
                    <span className="ml-2 md:ml-6 hidden group-hover:inline-block size-6 md:size-10 text-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </h2>
              </div>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <div className="w-full flex flex-col items-center mt-10 md:mt-20">
                <div className="w-full max-w-5xl flex flex-row justify-between">
                  <div className="flex flex-col gap-3 md:gap-6">
                    <p className="text-[11px] sm:text-xs md:text-sm text-left w-full">
                    Handheld paradigms offer an efficient and intuitive way for collecting large-scale 
                    demonstrations of robot manipulation. However, achieving contact-rich bimanual manipulation 
                    through these methods remains a pivotal challenge, which is substantially hindered 
                    by hardware <b className={`${exo2.className} color-text-1 inline-block`}>adaptability</b> and <b className={`${exo2.className} color-text-1 inline-block`}>data efficacy</b>. 
                    </p>
                    <p className="text-[11px] sm:text-xs md:text-sm text-left w-full">
                    To bridge these gaps, we introduce{" "}
                      <b className={`${exo2.className} color-text-1 inline-block`}>TAMEn</b>, a <b className={`${exo2.className} color-text-1 inline-block`}>visuo-tactile data engine</b> for bimanual contact-rich manipulation, which integrates hardware, acquisition strategy, and policy learning into a closed-loop framework.
                    </p>
                    <ol className="w-full space-y-2 md:space-y-3">
                      <li className="flex items-start gap-2 md:gap-3 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 md:px-4 md:py-3">
                        <span className="mt-0.5 inline-flex size-5 md:size-6 shrink-0 items-center justify-center rounded-full border border-white/30 text-[10px] md:text-xs font-semibold text-white/90">
                          1
                        </span>
                        <p className="text-[11px] sm:text-xs md:text-sm text-left w-full leading-relaxed">
                          A{" "}
                          <b className={`${exo2.className} color-text-1 inline-block`}>
                            human-machine interface
                          </b>{" "}
                          that supports a dual-mode pipeline with sub-millimeter
                          MoCap and VR-based in-the-wild acquisition, and can
                          rapidly adapt to heterogeneous grippers.
                        </p>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 md:px-4 md:py-3">
                        <span className="mt-0.5 inline-flex size-5 md:size-6 shrink-0 items-center justify-center rounded-full border border-white/30 text-[10px] md:text-xs font-semibold text-white/90">
                          2
                        </span>
                        <p className="text-[11px] sm:text-xs md:text-sm text-left w-full leading-relaxed">
                          A{" "}
                          <b className={`${exo2.className} color-text-1 inline-block`}>
                            data collection recipe
                          </b>{" "}
                          that incorporates real-time validation during collection
                          and organizes heterogeneous multimodal data into a
                          pyramid-structured regime for staged learning.
                        </p>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 md:px-4 md:py-3">
                        <span className="mt-0.5 inline-flex size-5 md:size-6 shrink-0 items-center justify-center rounded-full border border-white/30 text-[10px] md:text-xs font-semibold text-white/90">
                          3
                        </span>
                        <p className="text-[11px] sm:text-xs md:text-sm text-left w-full leading-relaxed">
                          A{" "}
                          <b className={`${exo2.className} color-text-1 inline-block`}>
                            closed-loop data flywheel
                          </b>{" "}
                          that leverages AR-based teleoperation with tactile
                          feedback (tAmeR) to refine policies using corrective
                          data from realistic failures.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center mt-6 md:mt-10">
              <div className="w-full max-w-6xl">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-auto rounded-lg border border-white/20 bg-black"
                >
                  <source src="https://ik.imagekit.io/dpjxm6pdu/suppvideo.mp4" />
                </video>
              </div>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <Separator className="max-w-6xl mt-14 md:mt-28" />
            </div>
          </div>

          {/* Data Collection Modes  */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="data-collection-modes"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-10">
              <div className="w-full max-w-6xl flex flex-row justify-between">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link
                    href="#data-collection-modes"
                    className="scroll-mt-32 group flex items-center "
                  >
                    Data Collection Modes
                    <span className="ml-2 md:ml-6 hidden group-hover:inline-block size-6 md:size-10 text-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </h2>
              </div>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <div className="w-full flex flex-col items-center mt-6 md:mt-10">
                <div className="w-full max-w-5xl flex flex-row justify-between">
                  <p className="text-[11px] sm:text-xs md:text-sm text-left w-full">
                    To balance data quality and environmental diversity, we
                    implement a{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      dual-mode acquisition pipeline
                    </b>
                    :
                    <br />
                    <span className="mr-1 text-white/80">•</span>A{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      precision mode
                    </b>{" "}
                    leveraging{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      motion capture
                    </b>{" "}
                    for high-fidelity demonstrations (
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      sub-millimeter accuracy
                    </b>
                    ).
                    <br />
                    <span className="mr-1 text-white/80">•</span>A{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      portable mode
                    </b>{" "}
                    utilizing{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      VR-based
                    </b>{" "}
                    tracking for{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      in-the-wild
                    </b>{" "}
                    acquisition and{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      AR-based
                    </b>{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      tactile-visualized
                    </b>{" "}
                    recovery teleoperation (
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      tAmeR
                    </b>
                    ).
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <div className="w-full max-w-6xl mt-6 md:mt-12">
                <Tabs
                  defaultValue="01"
                  className="flex flex-col md:flex-row w-full gap-3 md:gap-3 h-auto md:h-[576px]"
                >
                  <TabsList className="flex flex-row md:flex-col justify-between gap-2 md:gap-4 h-auto md:h-full w-full md:w-[24%]">
                    <TabsTrigger
                      value="01"
                      key="modes-01"
                      className="group disabled:pointer-events-none w-full md:h-[164px] p-0 bg-transparent"
                    >
                      <div className="w-fit h-full flex items-center rounded-xl border border-white/25 bg-black/40 overflow-hidden group-data-[state=active]:border-[#60a5fa] group-data-[state=active]:shadow-[0_0_0_1px_rgba(96,165,250,0.35)]">
                        <h2 className="w-14 md:w-16 h-full flex items-center justify-center border-r border-white/15 text-3xl md:text-4xl font-bold tabular-nums text-white/90 group-data-[state=active]:text-[#60a5fa]">
                          01
                        </h2>
                        <img
                          src="https://ik.imagekit.io/uqvsd50nv/01.jpg"
                          alt="Highlight 01"
                          className="h-full w-[170px] md:w-[210px] object-contain object-center bg-black"
                        />
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="02"
                      key="modes-02"
                      className="group disabled:pointer-events-none w-full md:h-[164px] p-0 bg-transparent"
                    >
                      <div className="w-fit h-full flex items-center rounded-xl border border-white/25 bg-black/40 overflow-hidden group-data-[state=active]:border-[#60a5fa] group-data-[state=active]:shadow-[0_0_0_1px_rgba(96,165,250,0.35)]">
                        <h2 className="w-14 md:w-16 h-full flex items-center justify-center border-r border-white/15 text-3xl md:text-4xl font-bold tabular-nums text-white/90 group-data-[state=active]:text-[#60a5fa]">
                          02
                        </h2>
                        <img
                          src="https://ik.imagekit.io/uqvsd50nv/02.jpg"
                          alt="Highlight 02"
                          className="h-full w-[170px] md:w-[210px] object-contain object-center bg-black"
                        />
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="03"
                      key="modes-03"
                      className="group disabled:pointer-events-none w-full md:h-[164px] p-0 bg-transparent"
                    >
                      <div className="w-fit h-full flex items-center rounded-xl border border-white/25 bg-black/40 overflow-hidden group-data-[state=active]:border-[#60a5fa] group-data-[state=active]:shadow-[0_0_0_1px_rgba(96,165,250,0.35)]">
                        <h2 className="w-14 md:w-16 h-full flex items-center justify-center border-r border-white/15 text-3xl md:text-4xl font-bold tabular-nums text-white/90 group-data-[state=active]:text-[#60a5fa]">
                          03
                        </h2>
                        <img
                          src="https://ik.imagekit.io/uqvsd50nv/03.jpg"
                          alt="Highlight 03"
                          className="h-full w-[170px] md:w-[210px] object-contain object-center bg-black"
                        />
                      </div>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="01" key="mode-content-01" className="w-full h-full">
                    <Card className="border-4 md:border-8 border-[#98AEF3] bg-black h-full overflow-hidden">
                      <CardContent className="h-full flex justify-center items-center p-0">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://ik.imagekit.io/uqvsd50nv/highlight01.jpg"
                          className="w-full h-full object-contain bg-black"
                        >
                          <source src="https://ik.imagekit.io/uqvsd50nv/highlight01.mp4" />
                        </video>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="02" key="mode-content-02" className="w-full">
                    <Card className="border-4 md:border-8 border-[#98AEF3] bg-black h-full overflow-hidden">
                      <CardContent className="h-full flex justify-center items-center p-0">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://ik.imagekit.io/uqvsd50nv/highlight02.jpg"
                          className="w-full h-full object-contain bg-black"
                        >
                          <source src="https://ik.imagekit.io/uqvsd50nv/highlight02.mp4" />
                        </video>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="03" key="mode-content-03" className="w-full">
                    <Card className="border-4 md:border-8 border-[#98AEF3] bg-black h-full overflow-hidden">
                      <CardContent className="h-full flex justify-center items-center p-0">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://ik.imagekit.io/uqvsd50nv/highlight03.jpg"
                          className="w-full h-full object-contain bg-black"
                        >
                          <source src="https://ik.imagekit.io/uqvsd50nv/highlight03.mp4" />
                        </video>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:px-6 flex flex-col items-center">
            <Separator className="max-w-6xl mt-14 md:mt-28" />
          </div>

          {/* TAMEn 3D Model  */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="model"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-16">
              <div className="w-full max-w-6xl flex flex-row justify-between">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link
                    href="#model"
                    className="scroll-mt-32 group flex items-center"
                  >
                    3D Model
                    <span className="ml-2 md:ml-6 hidden group-hover:inline-block size-6 md:size-10 text-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </h2>
              </div>
            </div>
            <div className="my-5 flex flex-col items-center px-2 md:px-6 inset-0 w-full">
              <div className="w-full max-w-6xl my-3 md:my-5">
                <div className="flex flex-col gap-3 md:gap-5 h-full">
                  <div className="flex flex-col justify-center gap-3 md:gap-5">
                    <span className="font-bold text-xl md:text-2xl text-center">
                      Interactive Model Viewer
                    </span>
                    <p className="text-xs sm:text-sm md:text-base text-center max-w-6xl">
                      Dive into our 💡
                      <b className={`${exo2.className} color-text-1 inline-block`}>
                        interactive
                      </b>{" "}
                      3D model
                      viewer and explore the most popular native 3D formats with
                      ease.
                      <br />
                      Try out the 🖱️
                      <b className={`${exo2.className} color-text-1 inline-block`}>
                        move
                      </b>{" "}
                      command to inspect internal structures.
                      <br />
                      It's more than just viewing — it's a hands-on exploration.
                      Start 💫
                      <b className={`${exo2.className} color-text-1 inline-block`}>
                        discovering
                      </b>{" "}
                      now!
                    </p>
                    <iframe
                      src="https://opendrivelab.github.io/TAMEn/3d_model/tamen_model.html"
                      className="w-[320px] md:w-[480px] lg:w-[640px] h-[240px] md:h-[360px] lg:h-[480px] border-2 md:border-4 border-white hover:border-[#174BE5] transition-colors duration-300 rounded-lg mx-auto"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:px-6 flex flex-col items-center">
            <Separator className="max-w-6xl mt-10 md:mt-24" />
          </div>

          {/* Policy Rollouts */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="policy-rollouts"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-16">
              <div className="w-full max-w-6xl flex flex-row justify-between gap-10 md:gap-20 items-center">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link
                    href="#policy-rollouts"
                    className="scroll-mt-32 group flex items-center"
                  >
                    Policy Rollouts
                    <span className="ml-2 md:ml-6 hidden group-hover:inline-block size-6 md:size-10 text-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </h2>
              </div>
            </div>

            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <div className="w-full flex flex-col items-center mt-10 md:mt-20">
                <div className="w-full max-w-5xl flex flex-row justify-between">
                  <p className="text-[11px] sm:text-xs md:text-sm text-left w-full">
                    We evaluate the{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      effectiveness of TAMEn system
                    </b>{" "}
                    through a diverse set of contact-rich manipulation tasks.
                    Experiments show that{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      the proposed closed-loop visuo-tactile learning framework
                    </b>{" "}
                    increases the average task success rate{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      from 34% to 75%
                    </b>{" "}
                    across diverse{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      bimanual manipulation tasks
                    </b>
                    .
                  </p>
                </div>
                <div className="w-full flex justify-center mt-5 md:mt-10">
                  <div className="w-full max-w-4xl">
                    <PolicyRolloutsAverage />
                  </div>
                </div>
                {/* <div className="w-full flex justify-center mt-5 md:mt-10">
                  <img
                    src="https://opendrivelab.github.io/FreeTacMan/policy_rollouts/policy rollouts_results.png"
                    alt="Policy Rollouts Results"
                    className="max-w-5xl w-full"
                  />
                </div> */}
              </div>
            </div>
            <div className="w-full max-w-6xl mt-10 md:mt-20">
              <Tabs
                defaultValue={policy_rollouts[0].id}
                className="flex flex-col w-full"
              >
                <TabsList className="flex flex-wrap md:flex-row justify-center gap-2 md:gap-6 mb-5 md:mb-10">
                  {policy_rollouts.map((policy_rollout) => (
                    <TabsTrigger
                      value={policy_rollout.id}
                      key={policy_rollout.id}
                      className={
                        "shadow-sm rounded-xl w-full md:w-auto px-1 lg:px-10 py-2 md:py-3 font-bold text-xs sm:text-sm md:text-base " +
                        "border border-white/25 bg-white/10 text-white/90 " +
                        "hover:bg-white/[0.16] hover:border-white/35 transition-colors duration-200 " +
                        "data-[state=active]:text-white data-[state=active]:border-white/50 data-[state=active]:shadow-md " +
                        policy_rollout.color
                      }
                    >
                      {policy_rollout.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* 1 */}
                <TabsContent value="01" key="01" className="w-full">
                  <Card className="h-auto border-[#5B6EE1]/50 bg-black/40 border-4 md:border-6 flex flex-col gap-3 md:gap-4 justify-start py-4 md:py-6">
                    <p className="text-xs sm:text-sm md:text-base text-[#5B6EE1] text-center mt-1 md:mt-2 px-4 md:px-10">
                      The robot cooperatively manipulates a flexible sheet to
                      lift the herbs and pour them into a target container.
                      Successful execution requires stable bimanual
                      coordination, careful handling of the deformable support,
                      and precise control of tilting and release.
                    </p>
                    <CardContent className="flex flex-col xl:flex-row gap-3 md:gap-6 justify-between items-center p-2 md:p-4">
                      <div className="flex flex-col flex-3/5 gap-2 md:gap-3 w-full xl:w-[560px]">
                        <div className="flex flex-col gap-2 md:gap-3">
                          <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="https://ik.imagekit.io/3ic6kgidz/Herbal%20Transfer.jpg"
                            className="rounded-xl object-fit"
                          >
                            <source src="https://ik.imagekit.io/3ic6kgidz/Herbal%20Transfer.mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="flex-2/5 w-full xl:w-[330px]">
                        <PolicyRollouts1 />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 2 */}
                <TabsContent value="02" key="02" className="w-full">
                  <Card className="h-auto border-[#5B6EE1]/50 bg-black/40 border-4 md:border-6 flex flex-col gap-3 md:gap-4 justify-start py-4 md:py-6">
                    <p className="text-xs sm:text-sm md:text-base text-[#5B6EE1] text-center mt-1 md:mt-2 px-4 md:px-10">
                      The robot lifts a flexible cable, aligning it with a
                      target clip, and pressing it into place. Successful
                      execution requires adaptive grasping to prevent failure
                      caused by cable motion during gripper closure, and
                      contact-aware insertion to confirm successful seating when
                      visual cues are unreliable.
                    </p>
                    <CardContent className="flex flex-col xl:flex-row gap-3 md:gap-6 justify-between items-center p-2 md:p-4">
                      <div className="flex flex-col flex-3/5 gap-2 md:gap-3 w-full xl:w-[560px]">
                        <div className="flex flex-col gap-2 md:gap-3">
                          <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="https://ik.imagekit.io/3ic6kgidz/Cable%20Mounting.jpg"
                            className="rounded-xl object-fit"
                          >
                            <source src="https://ik.imagekit.io/3ic6kgidz/Cable%20Mounting.mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="flex-2/5 w-full xl:w-[330px]">
                        <PolicyRollouts2 />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 3 */}
                <TabsContent value="03" key="03" className="w-full">
                  <Card className="h-auto border-[#5B6EE1]/50 bg-black/40 border-4 md:border-6 flex flex-col gap-3 md:gap-4 justify-start py-4 md:py-6">
                    <p className="text-xs sm:text-sm md:text-base text-[#5B6EE1] text-center mt-1 md:mt-2 px-4 md:px-10">
                      The left arm grasps a binder clip attached to a folder,
                      detaches it, and moves it toward the drawer, while the
                      right arm opens the drawer and closes it after the clip is
                      placed inside. Successful execution requires firm yet
                      controlled interaction with the spring-loaded clip, as
                      tactile feedback helps stabilize the grasp and judge
                      detachment, followed by coordinated sequential
                      manipulation for drawer opening, placement, and closing.
                    </p>
                    <CardContent className="flex flex-col xl:flex-row gap-3 md:gap-6 justify-between items-center p-2 md:p-4">
                      <div className="flex flex-col flex-3/5 gap-2 md:gap-3 w-full xl:w-[560px]">
                        <div className="flex flex-col gap-2 md:gap-3">
                          <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="https://ik.imagekit.io/3ic6kgidz/Binder%20Clip%20Removal.jpg"
                            className="rounded-xl object-fit"
                          >
                            <source src="https://ik.imagekit.io/3ic6kgidz/Binder%20Clip%20Removal.mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="flex-2/5 w-full xl:w-[330px]">
                        <PolicyRollouts3 />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 4 */}
                <TabsContent value="04" key="04" className="w-full">
                  <Card className="h-auto border-[#5B6EE1]/50 bg-black/40 border-4 md:border-6 flex flex-col gap-3 md:gap-4 justify-start py-4 md:py-6">
                    <p className="text-xs sm:text-sm md:text-base text-[#5B6EE1] text-center mt-1 md:mt-2 px-4 md:px-10">
                      The robot grasps a dish and a sponge, positions the
                      sponge onto the stained area, and wipes the surface until
                      the stain is removed. Successful execution requires
                      coordinated dual-object manipulation, stable contact
                      between the sponge and the dish surface, and controlled
                      wiping under sustained contact.
                    </p>
                    <CardContent className="flex flex-col xl:flex-row gap-3 md:gap-6 justify-between items-center p-2 md:p-4">
                      <div className="flex flex-col flex-3/5 gap-2 md:gap-3 w-full xl:w-[560px]">
                        <div className="flex flex-col gap-2 md:gap-3">
                          <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="https://ik.imagekit.io/3ic6kgidz/Dish%20Washing.jpg"
                            className="rounded-xl object-fit"
                          >
                            <source src="https://ik.imagekit.io/3ic6kgidz/Dish%20Washing.mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="flex-2/5 w-full xl:w-[330px]">
                        <PolicyRollouts4 />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

              </Tabs>
            </div>
          </div>

          <div className="w-full px-4 md:px-6 flex flex-col items-center">
            <Separator className="max-w-6xl mt-14 md:mt-28" />
          </div>

          {/* Generalization and Robustness */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="generalization-and-robustness"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-16">
              <div className="w-full max-w-6xl flex flex-row justify-between items-center gap-10 md:gap-20">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link
                    href="#generalization-and-robustness"
                    className="scroll-mt-32 group flex items-center"
                  >
                    Generalization and Robustness
                    <span className="ml-2 md:ml-6 hidden group-hover:inline-block size-6 md:size-10 text-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </h2>
              </div>
            </div>

            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <div className="w-full flex flex-col items-center mt-10 md:mt-20">
                <div className="w-full max-w-5xl flex flex-row justify-between">
                  <p className="text-[11px] sm:text-xs md:text-sm text-left w-full">
                    Tactile pretraining and recovery data improve{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      policy transfer across object variations
                    </b>{" "}
                    and substantially improve{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      robustness
                    </b>{" "}
                    when visual
                    perception is degraded, especially during{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      contact-rich execution
                    </b>
                    .
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-full flex justify-center mt-5 md:mt-10">
              <img
                src="https://opendrivelab.github.io/FreeTacMan/user_study/userstudy_results.png"
                alt="User Study Results"
                className="max-w-7xl w-full rounded-xl"
              />
            </div> */}
            <div className="w-full max-w-full md:max-w-[1400px] px-6 md:px-20 3xl:px-64 mt-5 md:mt-10 p-2 md:p-6 overflow-hidden">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  containScroll: "trimSnaps",
                  dragFree: false,
                  breakpoints: {
                    "(max-width: 640px)": { slidesToScroll: 1 },
                    "(min-width: 641px) and (max-width: 768px)": {
                      slidesToScroll: 1,
                    },
                    "(min-width: 769px)": { slidesToScroll: 1 },
                  },
                }}
                className="w-full user-study-carousel"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="border-[#174BE5]/50 bg-black/40 border-0 card">
                      <CardContent className="cardContent flex flex-col items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://ik.imagekit.io/3ic6kgidz/cable_robust_full.jpg"
                          className="border-2 md:border-6 border-[#174BE5]/50 rounded-xl object-fit"
                        >
                          <source src="https://ik.imagekit.io/3ic6kgidz/cable_robust_full.mp4" />
                        </video>
                        <div className="w-full text-center bg-black/70 p-1 rounded-lg shadow-md border border-white/20">
                          <p className="user-study-label text-[#174BE5]">
                            <span className="label-type">Robustness</span>
                            <span className="label-task">Cable Mounting</span>
                            <span className="label-phase">(Full-Disturbance)</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#174BE5]/50 bg-black/40 border-0">
                      <CardContent className="cardContent flex flex-col items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://ik.imagekit.io/3ic6kgidz/cable_robust_post.jpg"
                          className="border-2 md:border-6 border-[#174BE5]/50 rounded-xl object-fit"
                        >
                          <source src="https://ik.imagekit.io/3ic6kgidz/cable_robust_post.mp4" />
                        </video>
                        <div className="w-full text-center bg-black/70 p-1 rounded-lg shadow-md border border-white/20">
                          <p className="user-study-label text-[#174BE5]">
                            <span className="label-type">Robustness</span>
                            <span className="label-task">Cable Mounting</span>
                            <span className="label-phase">
                              (Post-Grasp Disturbance)
                            </span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#174BE5]/50 bg-black/40 border-0">
                      <CardContent className="cardContent flex flex-col items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://ik.imagekit.io/3ic6kgidz/gen_cable.jpg"
                          className="border-2 md:border-6 border-[#174BE5]/50 rounded-xl object-fit"
                        >
                          <source src="https://ik.imagekit.io/3ic6kgidz/gen_cable.mp4" />
                        </video>
                        <div className="w-full text-center bg-black/70 p-1 rounded-lg shadow-md border border-white/20">
                          <p className="user-study-label text-[#174BE5]">
                            <span className="label-type">Generalization</span>
                            <span className="label-task">Cable Mounting</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#174BE5]/50 bg-black/40 border-0">
                      <CardContent className="cardContent flex flex-col items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://ik.imagekit.io/3ic6kgidz/gen_clip.jpg"
                          className="border-2 md:border-6 border-[#174BE5]/50 rounded-xl object-fit"
                        >
                          <source src="https://ik.imagekit.io/3ic6kgidz/gen_clip.mp4" />
                        </video>
                        <div className="w-full text-center bg-black/70 p-1 rounded-lg shadow-md border border-white/20">
                          <p className="user-study-label text-[#174BE5]">
                            <span className="label-type">Generalization</span>
                            <span className="label-task">Binder Clip Removal</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#174BE5]/50 bg-black/40 border-0">
                      <CardContent className="cardContent flex flex-col items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://ik.imagekit.io/3ic6kgidz/gen_herbal.jpg"
                          className="border-2 md:border-6 border-[#174BE5]/50 rounded-xl object-fit"
                        >
                          <source src="https://ik.imagekit.io/3ic6kgidz/gen_herbal.mp4" />
                        </video>
                        <div className="w-full text-center bg-black/70 p-1 rounded-lg shadow-md border border-white/20">
                          <p className="user-study-label text-[#174BE5]">
                            <span className="label-type">Generalization</span>
                            <span className="label-task">Herbal Transfer</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#174BE5]/50 bg-black/40 border-0">
                      <CardContent className="cardContent flex flex-col items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="https://ik.imagekit.io/3ic6kgidz/herbal_robust_post.jpg"
                          className="border-2 md:border-6 border-[#174BE5]/50 rounded-xl object-fit"
                        >
                          <source src="https://ik.imagekit.io/3ic6kgidz/herbal_robust_post.mp4" />
                        </video>
                        <div className="w-full text-center bg-black/70 p-1 rounded-lg shadow-md border border-white/20">
                          <p className="user-study-label text-[#174BE5]">
                            <span className="label-type">Robustness</span>
                            <span className="label-task">Herbal Transfer</span>
                            <span className="label-phase">
                              (Post-Grasp Disturbance)
                            </span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  {/* Optional hidden items retained for future use */}
                </CarouselContent>
                <CarouselPrevious className="left-1 md:left-4 size-9 md:size-11 !opacity-100 border border-[#174BE5]/60 bg-white/95 text-[#174BE5] shadow-[0_0_14px_rgba(23,75,229,0.45)] hover:bg-white" />
                <CarouselNext className="right-1 md:right-4 size-9 md:size-11 !opacity-100 border border-[#174BE5]/60 bg-white/95 text-[#174BE5] shadow-[0_0_14px_rgba(23,75,229,0.45)] hover:bg-white" />
              </Carousel>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center mt-5 md:mt-10">
              <div className="w-full max-w-4xl">
                <GeneralizationUnseenChart />
              </div>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center mt-5 md:mt-8">
              <div className="w-full max-w-4xl">
                <RobustnessDisturbanceChart />
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="methodology"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-16">
              <div className="w-full max-w-6xl flex flex-row justify-between items-center gap-10 md:gap-20">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link
                    href="#methodology"
                    className="scroll-mt-32 group flex items-center"
                  >
                    Methodology
                    <span className="ml-2 md:ml-6 hidden group-hover:inline-block size-6 md:size-10 text-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </h2>
              </div>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <div className="w-full flex flex-col items-center mt-8 md:mt-12">
                <div className="w-full max-w-5xl mb-3 md:mb-5">
                  <p className="text-[11px] sm:text-xs md:text-sm text-left w-full">
                    Introducing{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      TAMEn
                    </b>
                    , a{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      T
                    </b>
                    actile-
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      A
                    </b>
                    ware{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      M
                    </b>
                    anipulation{" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      En
                    </b>
                    gine for closed-loop data collection in contact-rich bimanual tasks,
                    which builds upon the UMI paradigm with key enhancements in
                    multimodality, precision-portability synergy, replayability,
                    and data flywheel.
                    <br />
                    (a) Wearable visuo-tactile interface
                    captures rich multimodal data while breaking the
                    precision-portability trade-off through a dual-mode pipeline
                    that fast switches between MoCap and VR-based tracking.
                    <br />
                    (b)
                    Online feasibility checking ensures demonstrations are
                    reliably replayable on robot. All data are unified into a
                    pyramid for efficient staged learning across generalization,
                    coordination, and failure recovery.
                    <br />
                    (c){" "}
                    <b className={`${exo2.className} color-text-1 inline-block`}>
                      tAmeR
                    </b>
                    , our AR-based
                    teleoperation system, helps collect recovery data with
                    tactile feedback during policy execution and feeds them back
                    into the pyramid for continuous policy refinement.
                  </p>
                </div>
                <div className="w-full max-w-6xl">
                  <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://ik.imagekit.io/3ic6kgidz/method.jpg"
                    className="w-full h-auto rounded-lg border border-white/20 bg-black"
                  >
                    <source src="https://ik.imagekit.io/3ic6kgidz/method.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:px-6 flex flex-col items-center">
            <Separator className="max-w-6xl mt-24 md:mt-48" />
          </div>
            </div>
          </div>
        </div>

      <footer className="w-full mb-16 md:mb-32 flex flex-col gab-5 md:gap-10">
        <div className="w-full px-4 md:px-6 flex flex-row justify-center mt-16 md:mt-32">
          <div className="max-w-6xl w-full flex flex-row justify-between">
            <div className="flex-1 flex flex-col justify-start">
              <span className="text-xs sm:text-sm md:text-base select-none text-center">
                TAMEn@2026
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}



