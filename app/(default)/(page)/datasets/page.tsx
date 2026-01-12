import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Dataset | OpenDriveLab",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["Dataset", "OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU" ],
};



import Link from "next/link"
import Image from 'next/image'



export default function Home() {
    return (
        <div className="w-full">


            <div className="w-full px-6 flex justify-center mt-36 md:mt-24">
                <div className="w-full max-w-7xl flex flex-col gap-6 fg-gradient-blue">
                    {/* pb-24 for fading color */}
                    <h1 className="text-t0 font-bold pb-24">
                        Dataset
                    </h1>
                </div>
            </div>









        </div>
    )
}
