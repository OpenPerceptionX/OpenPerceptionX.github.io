import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "OpenDriveLab | Robotics and Autonomous Driving at HKU, SII, and beyond",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU", "SII"],
};


export default function Home() {

    return (
        <div className="w-full h-svh flex flex-row justify-center items-center">
            <div className='w-full md:w-3/4 h-full md:h-3/4 md:rounded-sm bg-gradient-landing flex flex-row justify-center items-center'>
                <div className="md:w-full max-w-3xl px-6 flex flex-col gap-6 select-none ">
                    <h1 className="font-bold text-t1 text-white">
                        404
                    </h1>
                    <h1 className="font-bold text-t1 text-white">
                        Not Found
                    </h1>
                </div>
            </div>
        </div>
    )
}
