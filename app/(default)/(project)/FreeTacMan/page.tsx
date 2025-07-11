import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "FreeTacMan | OpenDriveLab",
  description: "FreeTacMan",
  keywords: ["FreeTacMan", "OpenDriveLab", "HKU", "SII"],
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes",
};

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/project/freetacman/ui/card";
import { Separator } from "@/components/project/freetacman/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/project/freetacman/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/project/freetacman/ui/carousel";

import { PolicyRollouts1 } from "@/components/project/freetacman/chart/policy-rollouts-1";
import { PolicyRollouts2 } from "@/components/project/freetacman/chart/policy-rollouts-2";
import { PolicyRollouts3 } from "@/components/project/freetacman/chart/policy-rollouts-3";
import { PolicyRollouts4 } from "@/components/project/freetacman/chart/policy-rollouts-4";
import { PolicyRollouts5 } from "@/components/project/freetacman/chart/policy-rollouts-5";
import { PolicyRolloutsAverage } from "@/components/project/freetacman/chart/policy-rollouts-average";
import { UserStudy1 } from "@/components/project/freetacman/chart/user-study-1";
import { UserStudy2 } from "@/components/project/freetacman/chart/user-study-2";
import { UserStudy3 } from "@/components/project/freetacman/chart/user-study-3";
import { UserStudy4 } from "@/components/project/freetacman/chart/user-study-4";
import { UserStudy5 } from "@/components/project/freetacman/chart/user-study-5";
import { UserStudy6 } from "@/components/project/freetacman/chart/user-study-6";
import { UserStudy7 } from "@/components/project/freetacman/chart/user-study-7";
import { UserStudy8 } from "@/components/project/freetacman/chart/user-study-8";
import { UserStudyAverage } from "@/components/project/freetacman/chart/user-study-average";

const policy_rollouts: { id: string; title: string; color: string }[] = [
  {
    id: "01",
    title: "Fragile Cup",
    color: "data-[state=active]:bg-[#174BE5]",
  },
  {
    id: "02",
    title: "Texture  Classification",
    color: "data-[state=active]:bg-[#43C9C1]",
  },
  {
    id: "03",
    title: "Stamp Pressing",
    color: "data-[state=active]:bg-[#FFC53D]",
  },
  {
    id: "04",
    title: "Calligraphy",
    color: "data-[state=active]:bg-[#FF668C]",
  },
  {
    id: "05",
    title: "USB Plugging",
    color: "data-[state=active]:bg-[#8E73E6]",
  },
];

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* Landing Section with Gray Background */}
      <div className="w-full min-h-screen flex flex-col items-center px-4 md:px-6 bg-[#eaeaea]">
        <div className="flex flex-col py-10 md:py-20 gap-4 md:gap-6 w-full h-full max-w-[1792px] justify-around items-center">
          <div className="color-text-1">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center">
              FreeTacMan
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              Robot-free Visuo-Tactile Data Collection System<br></br>for
              Contact-rich Manipulation
            </h1>
          </div>
          <div className="flex flex-col justify-center gap-4 md:gap-6">
            <div className="text-xs sm:text-sm md:text-base text-center">
              <div className="mb-2">
                <span>Longyan Wu</span>
                <sup>1,4*</sup> &nbsp;
                <span>Checheng Yu</span>
                <sup>1,5*</sup> &nbsp;
                <span>Jieji Ren</span>
                <sup>3*</sup> &nbsp;
                <span>Li Chen</span>
                <sup>2</sup>
              </div>
              <div className="mb-2">
                <span>Ran Huang</span>
                <sup>4</sup> &nbsp;
                <span>Guoying Gu</span>
                <sup>3</sup> &nbsp;
                <span>Hongyang Li</span>
                <sup>2,1</sup>
              </div>
              <div className="mb-2 flex justify-around items-center gap-1 px-24 md:px-18 lg:px-40">
                <div className="flex items-center">
                  <sup className="mr-1">1</sup>
                  <img src="https://opendrivelab.github.io/FreeTacMan/logo/SII.png" alt="SII" className="h-8 md:h-12 object-contain" />
                </div>
                <div className="flex items-center">
                  <sup className="mr-1">2</sup>
                  <img src="https://opendrivelab.github.io/FreeTacMan/logo/HKU.png" alt="HKU" className="h-8 md:h-12 object-contain" />
                </div>
                <div className="flex items-center">
                  <sup className="mr-1">3</sup>
                  <img src="https://opendrivelab.github.io/FreeTacMan/logo/SJTU.png" alt="SJTU" className="h-8 md:h-12 object-contain" />
                </div>
                <div className="flex items-center">
                  <sup className="mr-1">4</sup>
                  <img src="https://opendrivelab.github.io/FreeTacMan/logo/FDU.png" alt="Fudan" className="h-8 md:h-12 object-contain" />
                </div>
                <div className="flex items-center">
                  <sup className="mr-1">5</sup>
                  <img src="https://opendrivelab.github.io/FreeTacMan/logo/NJU.png" alt="NJU" className="h-8 md:h-12 object-contain" />
                </div>
              </div>
              <div className="mb-2">
                <span className="text-red-600 font-semibold">arXiv 2025</span>
              </div>
              <div className="mt-4 flex flex-row justify-center gap-2 md:gap-4">
                <a
                  href="http://arxiv.org/abs/2506.01941"
                  className="px-3 py-1 md:px-4 md:py-2 bg-white text-[#174BE5] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 text-xs sm:text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paper
                </a>
                <a
                  href="https://github.com/OpenDriveLab/FreeTacMan"
                  className="px-3 py-1 md:px-4 md:py-2 bg-white text-[#174BE5] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 text-xs sm:text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
                <a
                  href="https://docs.google.com/document/d/1Hhi2stn_goXUHdYi7461w10AJbzQDC0fdYaSxMdMVXM/edit?tab=t.0#heading=h.86eh2dqlip77"
                  className="px-3 py-1 md:px-4 md:py-2 bg-white text-[#174BE5] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 text-xs sm:text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hardware Guide
                </a>
                <a
                  href="https://opendrivelab.github.io/FreeTacMan/landing/FreeTacMan_demo_video.mp4"
                  className="px-3 py-1 md:px-4 md:py-2 bg-white text-[#174BE5] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 text-xs sm:text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
                <a
                  href="https://x.com/OpenDriveLab/status/1930234855729836112"
                  className="px-3 py-1 md:px-4 md:py-2 bg-white text-[#174BE5] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 text-xs sm:text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </div>
            </div>
            <span className="text-xs sm:text-sm md:text-base text-center italic text-gray-400">
              Temporary page. Permanent address:{" "}
              <Link
                href="http://opendrivelab.com/blog/freetacman"
                className="text-blue-500 hover:text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://opendrivelab.com/blog/freetacman
              </Link>
              <br />
              <br />
              Good things take time... and so does loading this page! Thanks for
              your patience! Best viewed in Chrome on a desktop.
            </span>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 md:gap-6 max-w-full md:max-w-[1024px]">
            <video
              preload="none"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-fit max-w-full md:max-w-[1024px]"
            >
              <source src="https://opendrivelab.github.io/FreeTacMan/landing/FreeTacMan_teaser_gray.mp4" />
            </video>
            <span className="text-xs sm:text-sm md:text-base italic text-gray-400 text-left w-full">
              FreeTacMan is a robot-free, human-centric visuo-tactile data
              collection system, featuring low-cost, high-resolution tactile
              sensors and a portable, cross-embodiment modular design.
              FreeTacMan transfers human visual perception, tactile sensing, and
              motion control skills to robots efficiently by integrating visual
              and tactile data.
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Section with Table of Contents */}
      <div className="flex w-full">
        {/* Mobile Navigation */}
        {/* <MobileNav /> */}

        {/* Main Content */}
        <div className="flex-1 w-full flex flex-col">
          {/* Highlights */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="highlights"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-16">
              <div className="w-full max-w-7xl flex flex-row justify-between">
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
                    <p className="text-xs sm:text-sm md:text-base text-left w-full">
                      Enabling robots with contact-rich manipulation remains a
                      pivotal challenge in robot learning, which is
                      substantially hindered by the data collection gap,
                      including its{" "}
                      <b className="text-[#004cee]">inefficiency</b> and{" "}
                      <b className="text-[#004cee]">limited sensor setup</b>.
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-left w-full">
                      Motivated by the dexterity and force feedback of human
                      motion, we introduce{" "}
                      <b className="text-[#004cee]">FreeTacMan</b>, a robot-free
                      and human-centric visuo-tactile data collection system to
                      acquire robot manipulation data accurately and
                      efficiently. Our main contributions are:
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-left w-full">
                      1. A portable, high-resolution, low-cost{" "}
                      <b className="text-[#004cee]">visuo-tactile sensor</b>{" "}
                      designed for rapid adaptation across multiple robotic
                      end-effectors.
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-left w-full">
                      2. An in-situ, robot-free, real-time tactile{" "}
                      <b className="text-[#004cee]">data-collection system</b>{" "}
                      that leverages a handheld end effector and the proposed
                      sensor to excel at diverse contact-rich tasks efficiently.
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-left w-full">
                      3. Experimental validation shows that imitation policies
                      trained with our visuo-tactile data achieve an average{" "}
                      <b className="text-[#004cee]">50% higher success rate</b>{" "}
                      than vision-only approaches in a wide spectrum of
                      contact-rich manipulation tasks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <div className="w-full max-w-7xl mt-10 md:mt-20">
                <Tabs
                  defaultValue="01"
                  className="flex flex-col md:flex-row w-full gap-4 md:gap-6 h-auto md:h-[576px]"
                >
                  <TabsList className="flex flex-row md:flex-col justify-between gap-2 md:gap-6 h-auto md:h-full w-full md:w-[30%]">
                    <TabsTrigger
                      value="01"
                      key="01"
                      className="data-[state=active]:text-[#174BE5] disabled:pointer-events-none flex flex-col py-2 md:py-6 px-1 md:px-3 justify-around rounded-xl text-background font-bold bg-[url('https://opendrivelab.github.io/FreeTacMan/highlights/01.png')] bg-center bg-cover bg-black bg-opacity-50 bg-blend-overlay w-full md:h-1/3"
                    >
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        01
                      </h2>
                      <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                        Portable, High-resolution, Low-cost<br></br>
                        Visuo-Tactile Hardware Sensor
                      </p>
                    </TabsTrigger>
                    <TabsTrigger
                      value="02"
                      key="02"
                      className="data-[state=active]:text-[#174BE5] disabled:pointer-events-none flex flex-col py-2 md:py-6 px-1 md:px-3 justify-around rounded-xl text-background font-bold bg-[url('https://opendrivelab.github.io/FreeTacMan/highlights/02.png')] bg-center bg-cover bg-black bg-opacity-50 bg-blend-overlay w-full md:h-1/3"
                    >
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        02
                      </h2>
                      <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                        In-situ, Robot-free, Real-time Tactile<br></br>
                        Data-collection System
                      </p>
                    </TabsTrigger>
                    <TabsTrigger
                      value="03"
                      key="03"
                      className="data-[state=active]:text-[#174BE5] disabled:pointer-events-none flex flex-col py-2 md:py-6 px-1 md:px-3 justify-around rounded-xl text-background font-bold bg-[url('https://opendrivelab.github.io/FreeTacMan/highlights/02.png')] bg-center bg-cover bg-black bg-opacity-50 bg-blend-overlay w-full md:h-1/3"
                    >
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        03
                      </h2>
                      <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                        Visuo-Tactile Policy Learning <br></br> Tactile
                        Pretraining
                      </p>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="01" key="01" className="w-full h-full">
                    <Card className="border-4 md:border-8 border-[#98AEF3] h-full">
                      <CardContent className="h-full flex justify-center items-center p-2 md:p-6">
                        <video preload="none" autoPlay loop muted playsInline>
                          <source src="https://opendrivelab.github.io/FreeTacMan/highlights/highlight01.mp4" />
                        </video>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="02" key="02" className="w-full">
                    <Card className="border-4 md:border-8 border-[#98AEF3] h-full">
                      <CardContent className="h-full flex justify-center items-center p-2 md:p-6">
                        <video preload="none" autoPlay loop muted playsInline>
                          <source src="https://opendrivelab.github.io/FreeTacMan/highlights/highlight2_9_16.mp4" />
                        </video>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="03" key="03" className="w-full">
                    <Card className="border-4 md:border-8 border-[#98AEF3] h-full">
                      <CardContent className="h-full flex justify-center items-center p-2 md:p-6">
                        <video preload="none" autoPlay loop muted playsInline>
                          <source src="https://opendrivelab.github.io/FreeTacMan/highlights/20250508-062620.mp4" />
                        </video>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <Separator className="max-w-7xl mt-14 md:mt-28" />
            </div>
          </div>

          {/* FreeTacMan 3D Model  */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="model"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-16">
              <div className="w-full max-w-7xl flex flex-row justify-between">
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
              <div className="w-full max-w-7xl my-3 md:my-5">
                <div className="flex flex-col gap-3 md:gap-5 h-full">
                  <div className="flex flex-col justify-center gap-3 md:gap-5">
                    <span className="font-bold text-xl md:text-2xl text-center">
                      Interactive Model Viewer
                    </span>
                    <p className="text-xs sm:text-sm md:text-base text-center max-w-7xl">
                      Dive into our 💡
                      <b className="text-[#004cee]">interactive</b> 3D model
                      viewer and explore the most popular native 3D formats with
                      ease.
                      <br />
                      Try out the 🖱️<b className="text-[#004cee]">move</b>{" "}
                      command to inspect internal structures.
                      <br />
                      It's more than just viewing — it's a hands-on exploration.
                      Start 💫<b className="text-[#004cee]">discovering</b> now!
                    </p>
                    <iframe
                      src="https://opendrivelab.github.io/FreeTacMan/3d_model/FreeTacMan_Model.html"
                      className="w-[320px] md:w-[480px] lg:w-[640px] h-[240px] md:h-[360px] lg:h-[480px] border-2 md:border-4 border-white hover:border-[#174BE5] transition-colors duration-300 rounded-lg mx-auto"
                    ></iframe>
                  </div>
                  <div className="w-full object-fit bg-white flex flex-col md:flex-row gap-5 md:gap-10 p-4 md:p-10 h-auto md:h-[640px] justify-center">
                    <div className="flex flex-col gap-3 md:gap-5 justify-around">
                      <div className="flex flex-row md:flex-row justify-around">
                        <span className="font-bold text-lg md:text-2xl text-center">
                          FreeTacMan on PIPER
                        </span>
                        <span className="font-bold text-lg md:text-2xl text-center">
                          FreeTacMan on FRANKA
                        </span>
                      </div>
                      <video
                        preload="none"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: "100%", height: "100%" }}
                      >
                        <source src="https://opendrivelab.github.io/FreeTacMan/3d_model/piperandfranka.mp4" />
                      </video>
                      <div className="w-full flex justify-center">
                        <div className="max-w-5xl">
                          <p className="text-xs sm:text-sm md:text-base text-left w-full">
                            FreeTacMan features a universal gripper interface
                            with quick-swap mounts compatible with various
                            robots, such as Piper and Franka, with support for
                            more platforms coming soon. It also includes a
                            camera scaffold designed for precise alignment with
                            the wrist-mounted camera, ensuring a consistent
                            perspective. These components demonstrate the
                            plug-and-play modularity of FreeTacMan, enabling
                            seamless integration across diverse robotic
                            platforms without requiring hardware-specific
                            modifications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:px-6 flex flex-col items-center">
            <Separator className="max-w-7xl mt-10 md:mt-24" />
          </div>

          {/* Application  */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="applications"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-10">
              <div className="w-full max-w-7xl flex flex-row justify-between">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link
                    href="#applications"
                    className="scroll-mt-32 group flex items-center "
                  >
                    Applications
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
              <div className="w-full flex flex-col items-center mt-10 ">
                <div className="w-full max-w-5xl flex flex-row justify-between">
                  <p className="text-xs sm:text-sm md:text-base text-left w-full ">
                    We evaluate the effectiveness of FreeTacMan system and the
                    quality of the collected visuo-tactile demonstration through
                    a diverse set of contact-rich manipulation tasks.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:px-6 flex flex-col items-center">
              <div className="w-full max-w-7xl mt-10 md:mt-20">
                <div className="border-4 md:border-8 border-[#98AEF3] p-2 ">
                  <div className="flex-dings">
                    <div className="flex flex-col gap-3 md:gap-6 max-w-24 md:max-w-32">
                      <span className="font-bold text-xs sm:text-sm md:text-base text-center">
                        Fragile Cup Manipulation
                      </span>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://opendrivelab.github.io/FreeTacMan/task/FragileCupManipulation.png"
                          className="h-16 md:h-24 select-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6 max-w-24 md:max-w-32">
                      <span className="font-bold text-xs sm:text-sm md:text-base text-center">
                        USB Plugging
                      </span>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://opendrivelab.github.io/FreeTacMan/task/USBPlugging.png"
                          className="h-16 md:h-24 select-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6 max-w-24 md:max-w-32">
                      <span className="font-bold text-xs sm:text-sm md:text-base text-center">
                        Texture Classification
                      </span>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://opendrivelab.github.io/FreeTacMan/task/TextureClassification.png"
                          className="h-16 md:h-24 select-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6 max-w-24 md:max-w-32">
                      <span className="font-bold text-xs sm:text-sm md:text-base text-center">
                        Stamp Pressing
                      </span>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://opendrivelab.github.io/FreeTacMan/task/StampPressing.png"
                          className="h-16 md:h-24 select-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-dings">
                    <div className="flex flex-col gap-3 md:gap-6 max-w-24 md:max-w-32">
                      <span className="font-bold text-xs sm:text-sm md:text-base text-center">
                        Calligraphy Writing
                      </span>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://opendrivelab.github.io/FreeTacMan/task/CalligraphyWriting.png"
                          className="h-16 md:h-24 select-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6 max-w-24 md:max-w-32">
                      <span className="font-bold text-xs sm:text-sm md:text-base text-center">
                        Toothpaste Extrusion
                      </span>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://opendrivelab.github.io/FreeTacMan/task/ToothpasteExtrusion.png"
                          className="h-16 md:h-24 select-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6 max-w-24 md:max-w-32">
                      <span className="font-bold text-xs sm:text-sm md:text-base text-center">
                        Tissue Grasping
                      </span>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://opendrivelab.github.io/FreeTacMan/task/TissueGrasping.png"
                          className="h-16 md:h-24 select-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-6 max-w-24 md:max-w-32">
                      <span className="font-bold text-xs sm:text-sm md:text-base text-center">
                        Potato Chip Grasping
                      </span>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://opendrivelab.github.io/FreeTacMan/task/PotatoChipGrasping.png"
                          className="h-16 md:h-24 select-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:px-6 flex flex-col items-center">
            <Separator className="max-w-7xl mt-14 md:mt-28" />
          </div>

          {/* Policy Rollouts */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="policy-rollouts"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-16">
              <div className="w-full max-w-7xl flex flex-row justify-between gap-10 md:gap-20 items-center">
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
                  <p className="text-xs sm:text-sm md:text-base text-left w-full">
                    We integrate{" "}
                    <b className="text-[#004cee]">tactile feedback</b> to assess
                    its impact on policy performance, observing a substantial
                    improvement that highlights its dynamic value in
                    contact-rich tasks.
                    <b className="text-[#004cee]">
                      Temporal-aware pretraining
                    </b>{" "}
                    further enhances performance by aligning visual and tactile
                    embeddings while capturing temporal dynamics. Across five
                    evaluated tasks, imitation policies trained with our
                    visuo-tactile data achieve an average success rate that is{" "}
                    <b className="text-[#004cee]">50% higher</b> than
                    vision-only counterparts.
                  </p>
                </div>
                <div className="w-full flex justify-center mt-5 md:mt-10">
                  <div className="w-full max-w-6xl">
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
            <div className="w-full max-w-7xl mt-10 md:mt-20">
              <Tabs
                defaultValue={policy_rollouts[0].id}
                className="flex flex-col w-full"
              >
                <TabsList className="flex flex-wrap md:flex-row justify-between gap-2 md:gap-6 mb-5 md:mb-10">
                  {policy_rollouts.map((policy_rollout) => (
                    <TabsTrigger
                      value={policy_rollout.id}
                      key={policy_rollout.id}
                      className={
                        "shadow-sm rounded-xl w-full md:w-auto px-1 lg:px-10 py-2 md:py-3 bg-[#eaeaea] font-bold text-background text-xs sm:text-sm md:text-base " +
                        policy_rollout.color
                      }
                    >
                      {policy_rollout.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* 1 */}
                <TabsContent value="01" key="01" className="w-full">
                  <Card className="h-auto xl:h-[750px] border-[#174BE5]/50 bg-[#eaeaea]/50 border-4 md:border-6 flex flex-col gap-0 justify-around">
                    <p className="text-xs sm:text-sm md:text-base text-[#174BE5] text-center mt-5 md:mt-10 px-4 md:px-10">
                      The robot grasps a plastic cup and places it <b>stably</b>{" "}
                      on a tray without causing <b>damage</b>.
                    </p>
                    <CardContent className="flex flex-col xl:flex-row gap-3 md:gap-6 justify-between h-full items-center p-2 md:p-6">
                      <div className="flex flex-col flex-3/5 gap-2 md:gap-3 w-full xl:w-auto">
                        <div className="flex flex-col gap-2 md:gap-3">
                          <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="border-2 md:border-6 border-[#174BE5]/50 rounded-xl object-fit"
                          >
                            <source src="https://opendrivelab.github.io/FreeTacMan/policy_rollouts/FragileCupManipulation.mp4" />
                          </video>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-center italic text-muted-foreground">
                          The videos are played at normal speed.
                        </p>
                      </div>
                      <div className="flex-2/5 w-full">
                        <PolicyRollouts1 />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 2 */}
                <TabsContent value="02" key="02" className="w-full">
                  <Card className="h-auto xl:h-[750px] border-[#43C9C1]/50 bg-[#eaeaea]/50 border-4 md:border-6 flex flex-col gap-0 justify-around">
                    <p className="text-xs sm:text-sm md:text-base text-[#43C9C1] text-center mt-5 md:mt-10 px-4 md:px-10">
                      The robot must grasp and identify one of two{" "}
                      <b>visually indistinguishable</b> cylindrical objects with
                      distinct textures and sort it into the correct bin.
                    </p>
                    <CardContent className="flex flex-col xl:flex-row gap-3 md:gap-6 justify-between h-full items-center p-2 md:p-6">
                      <div className="flex-3/5 flex flex-col md:flex-row gap-3 w-full xl:w-auto">
                        <div className="flex flex-col gap-2 md:gap-3 w-full md:w-3/4">
                          <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="border-2 md:border-6 border-[#43C9C1]/50 rounded-xl object-fit"
                          >
                            <source src="https://opendrivelab.github.io/FreeTacMan/policy_rollouts/TextureClassification.mp4" />
                          </video>
                          <p className="text-xs sm:text-sm md:text-base text-center italic text-muted-foreground">
                            The videos are played at normal speed.
                          </p>
                        </div>
                      </div>
                      <div className="flex-2/5 w-full">
                        <PolicyRollouts2 />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 3 */}
                <TabsContent value="03" key="03" className="w-full">
                  <Card className="h-auto xl:h-[750px] border-[#FFC53D]/50 bg-[#eaeaea]/50 border-4 md:border-6 flex flex-col gap-0 justify-around">
                    <p className="text-xs sm:text-sm md:text-base text-[#FFC53D] text-center mt-5 md:mt-10 px-4 md:px-10">
                      The robot presses a stamp onto paper to produce a{" "}
                      <b>clear</b> imprint.
                    </p>
                    <CardContent className="flex flex-col xl:flex-row gap-3 md:gap-6 justify-between h-full items-center p-2 md:p-6">
                      <div className="flex flex-col flex-3/5 gap-2 md:gap-3 w-full xl:w-auto">
                        <div className="flex flex-col gap-2 md:gap-3">
                          <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="border-2 md:border-6 border-[#FFC53D]/50 rounded-xl object-fit"
                          >
                            <source src="https://opendrivelab.github.io/FreeTacMan/policy_rollouts/StampPressing.mp4" />
                          </video>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-center italic text-muted-foreground">
                          The videos are played at normal speed.
                        </p>
                      </div>
                      <div className="flex-2/5 w-full">
                        <PolicyRollouts3 />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 4 */}
                <TabsContent value="04" key="04" className="w-full">
                  <Card className="h-auto xl:h-[750px] border-[#FF668C]/50 bg-[#eaeaea]/50 border-4 md:border-6 flex flex-col gap-0 justify-around">
                    <p className="text-xs sm:text-sm md:text-base text-[#FF668C] text-center mt-5 md:mt-10 px-4 md:px-10">
                      The robot traces the <b>recognizable</b> digit "5"
                      following a guide labeled "202" with a calligraphy brush.
                    </p>
                    <CardContent className="flex flex-col xl:flex-row gap-3 md:gap-6 justify-between h-full items-center p-2 md:p-6">
                      <div className="flex-3/5 flex flex-col md:flex-row gap-3 w-full xl:w-auto">
                        <div className="video-inner">
                          <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="border-2 md:border-6 border-[#FF668C]/50 rounded-xl object-fit"
                          >
                            <source src="https://opendrivelab.github.io/FreeTacMan/policy_rollouts/CalligraphyWriting.mp4" />
                          </video>
                          <p className="inner-m text-xs sm:text-sm md:text-base text-center italic text-muted-foreground">
                            The videos are played at normal speed.
                          </p>
                        </div>
                      </div>
                      <div className="flex-2/5 w-full">
                        <PolicyRollouts4 />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 5 */}
                <TabsContent value="05" key="05" className="w-full">
                  <Card className="h-auto xl:h-[750px] border-[#8E73E6]/50 bg-[#eaeaea]/50 border-4 md:border-6 flex flex-col gap-0 justify-around">
                    <p className="text-xs sm:text-sm md:text-base text-[#8E73E6] text-center mt-5 md:mt-10 px-4 md:px-10">
                      The robot needs to <b>securely</b> plug a pre-grasped USB
                      into a socket.
                    </p>
                    <CardContent className="flex flex-col xl:flex-row gap-3 md:gap-6 justify-between h-full items-center p-2 md:p-6">
                      <div className="flex flex-col flex-3/5 gap-2 md:gap-3 w-full xl:w-auto">
                        <div className="flex flex-col gap-2 md:gap-3">
                          <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="border-2 md:border-6 border-[#8E73E6]/50 rounded-xl object-fit"
                          >
                            <source src="https://opendrivelab.github.io/FreeTacMan/policy_rollouts/USBPlugging.mp4" />
                          </video>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-center italic text-muted-foreground">
                          The videos are played at normal speed.
                        </p>
                      </div>
                      <div className="flex-2/5 w-full">
                        <PolicyRollouts5 />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="w-full px-4 md:px-6 flex flex-col items-center">
            <Separator className="max-w-7xl mt-14 md:mt-28" />
          </div>

          {/* User Study */}
          <div
            className="w-full px-4 md:px-6 flex flex-col items-center"
            id="user-study"
          >
            <div className="w-full flex flex-col items-center mt-8 md:mt-16">
              <div className="w-full max-w-7xl flex flex-row justify-between items-center gap-10 md:gap-20">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <Link
                    href="#user-study"
                    className="scroll-mt-32 group flex items-center"
                  >
                    User Study
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
                  <p className="text-xs sm:text-sm md:text-base text-left w-full">
                    We evaluate the usability of FreeTacMan through a user study
                    involving 12 human participants with varying levels of
                    experience, each collecting demonstrations across 8 tasks.
                    Compared to previous setups, FreeTacMan consistently
                    achieves the{" "}
                    <b className="text-[#004cee]">
                      highest completion rates and efficiency
                    </b>
                    , and is perceived as{" "}
                    <b className="text-[#004cee]">
                      the most user-friendly and reliable
                    </b>{" "}
                    data collection system.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-5 md:mt-10">
              <div className="w-full max-w-6xl">
                <UserStudyAverage />
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
                  align: "start",
                  loop: true,
                  containScroll: "trimSnaps",
                  dragFree: true,
                  breakpoints: {
                    "(max-width: 640px)": { slidesToScroll: 1 },
                    "(min-width: 641px) and (max-width: 768px)": {
                      slidesToScroll: 1,
                    },
                    "(min-width: 769px)": { slidesToScroll: 2 },
                  },
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="border-[#174BE5]/50 bg-[#eaeaea]/50 border-0 card">
                      <CardContent className="cardContent flex flex-col aspect-square items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="border-2 md:border-6 border-[#174BE5]/50 rounded-xl object-fit"
                        >
                          <source src="https://opendrivelab.github.io/FreeTacMan/user_study/FragileCupManipulation.mp4" />
                        </video>
                        <div className="w-full text-center bg-white p-1 rounded-lg shadow-md">
                          <p className="text-base md:text-xl font-bold text-[#174BE5] whitespace-nowrap">
                            Fragile Cup
                          </p>
                        </div>
                        <div className="w-full">
                          <UserStudy1 />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#43C9C1]/50 bg-[#eaeaea]/50 border-0">
                      <CardContent className="cardContent flex flex-col aspect-square items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="border-2 md:border-6 border-[#43C9C1]/50 rounded-xl object-fit"
                        >
                          <source src="https://opendrivelab.github.io/FreeTacMan/user_study/USBPlugging.mp4" />
                        </video>
                        <div className="w-full text-center bg-white p-1 rounded-lg shadow-md">
                          <p className="text-base md:text-xl font-bold text-[#43C9C1] whitespace-nowrap">
                            USB Plugging
                          </p>
                        </div>
                        <div className="w-full">
                          <UserStudy2 />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#FFC53D]/50 bg-[#eaeaea]/50 border-0">
                      <CardContent className="cardContent flex flex-col aspect-square items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="border-2 md:border-6 border-[#FFC53D]/50 rounded-xl object-fit"
                        >
                          <source src="https://opendrivelab.github.io/FreeTacMan/user_study/TextureClassification.mov" />
                        </video>
                        <div className="w-full text-center bg-white p-1 rounded-lg shadow-md">
                          <p className="text-base md:text-xl font-bold text-[#FFC53D] whitespace-nowrap">
                            Texture Classification
                          </p>
                        </div>
                        <div className="w-full">
                          <UserStudy3 />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#FF668C]/50 bg-[#eaeaea]/50 border-0">
                      <CardContent className="cardContent flex flex-col aspect-square items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="border-2 md:border-6 border-[#FF668C]/50 rounded-xl object-fit"
                        >
                          <source src="https://opendrivelab.github.io/FreeTacMan/user_study/StampPressing.mp4" />
                        </video>
                        <div className="w-full text-center bg-white p-1 rounded-lg shadow-md">
                          <p className="text-base md:text-xl font-bold text-[#FF668C] whitespace-nowrap">
                            Stamp Pressing
                          </p>
                        </div>
                        <div className="w-full">
                          <UserStudy4 />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#8E73E6]/50 bg-[#eaeaea]/50 border-0">
                      <CardContent className="cardContent flex flex-col aspect-square items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="border-2 md:border-6 border-[#8E73E6]/50 rounded-xl object-fit"
                        >
                          <source src="https://opendrivelab.github.io/FreeTacMan/user_study/CalligraphyWriting.mov" />
                        </video>
                        <div className="w-full text-center bg-white p-1 rounded-lg shadow-md">
                          <p className="text-base md:text-xl font-bold text-[#8E73E6] whitespace-nowrap">
                            Calligraphy
                          </p>
                        </div>
                        <div className="w-full">
                          <UserStudy5 />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#d20000]/50 bg-[#eaeaea]/50 border-0">
                      <CardContent className="cardContent flex flex-col aspect-square items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="border-2 md:border-6 border-[#d20000]/50 rounded-xl object-fit"
                        >
                          <source src="https://opendrivelab.github.io/FreeTacMan/user_study/ToothpasteExtrusion.mp4" />
                        </video>
                        <div className="w-full text-center bg-white p-1 rounded-lg shadow-md">
                          <p className="text-base md:text-xl font-bold text-[#d20000] whitespace-nowrap">
                            Toothpaste Extrusion
                          </p>
                        </div>
                        <div className="w-full">
                          <UserStudy6 />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#7ed233]/50 bg-[#eaeaea]/50 border-0">
                      <CardContent className="cardContent flex flex-col aspect-square items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="border-2 md:border-6 border-[#7ed233]/50 rounded-xl object-fit"
                        >
                          <source src="https://opendrivelab.github.io/FreeTacMan/user_study/TissueGrasping.mp4" />
                        </video>
                        <div className="w-full text-center bg-white p-1 rounded-lg shadow-md">
                          <p className="text-base md:text-xl font-bold text-[#7ed233] whitespace-nowrap">
                            Tissue Grasping
                          </p>
                        </div>
                        <div className="w-full">
                          <UserStudy7 />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="carouselItem basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <Card className="card border-[#ff7b00]/50 bg-[#eaeaea]/50 border-0">
                      <CardContent className="cardContent flex flex-col aspect-square items-center justify-center p-2 md:p-6 gap-1 md:gap-1">
                        <video
                          preload="none"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="border-2 md:border-6 border-[#ff7b00]/50 rounded-xl object-fit"
                        >
                          <source src="https://opendrivelab.github.io/FreeTacMan/user_study/PotatoChipGrasping.mp4" />
                        </video>
                        <div className="w-full text-center bg-white p-1 rounded-lg shadow-md">
                          <p className="text-base md:text-xl font-bold text-[#ff7b00] whitespace-nowrap">
                            Chip Grasping
                          </p>
                        </div>
                        <div className="w-full">
                          <UserStudy8 />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="border-0 left-1 md:left-4 size-8 md:size-10" />
                <CarouselNext className="border-0 right-1 md:right-4 size-8 md:size-10" />
              </Carousel>
              <p className="text-xs sm:text-sm md:text-base text-center italic text-gray-400 mt-3 md:mt-6">
                P.S.: Completion per Unit Time (CPUT), defined as
                completion_rate x efficiency
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:px-6 flex flex-col items-center">
            <Separator className="max-w-7xl mt-24 md:mt-48" />
          </div>
        </div>
      </div>

      <footer className="w-full mb-16 md:mb-32 flex flex-col gab-5 md:gap-10">
        <div className="w-full px-4 md:px-6 flex flex-row justify-center mt-16 md:mt-32">
          <div className="max-w-7xl w-full flex flex-row justify-between">
            <div className="flex-1 flex flex-col justify-start">
              <span className="text-xs sm:text-sm md:text-base select-none text-center">
                FreeTacMan © 2025
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
