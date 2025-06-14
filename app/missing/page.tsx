import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "404 | OpenDriveLab",
    description: "404 Not Found",
    keywords: ["404", "OpenDriveLab", "HKU", "SII"],
};


export default function Home() {

    return (
        <main className='w-full'>
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
        </main>
    )
}
