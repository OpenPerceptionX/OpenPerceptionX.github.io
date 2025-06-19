import Image from 'next/image'


import { publications } from "@/data/publications"



import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"



export function WeChat() {
    return (
        <DrawerContent className='pt-12 pb-6'>
            <DrawerHeader>
                <DrawerTitle>
                    Subscribe to WeChat Public Account
                    <br></br>
                    關注微信公眾號
                </DrawerTitle>
            </DrawerHeader>
            <div className="w-full flex justify-center px-6">
                <div className="w-1/2 max-w-48">
                    <AspectRatio ratio={1/1}>
                        <Image
                            src="/assets/qrcode_wechat.png"
                            alt="WeChat"
                            fill
                        />
                    </AspectRatio>
                </div>
            </div>
            <DrawerFooter></DrawerFooter>
        </DrawerContent>
    )
}


export function WeChatGroup() {
    return (
        <DrawerContent className='pt-12 pb-6'>
            <DrawerHeader>
                <DrawerTitle>
                    Join WeChat Group
                    <br></br>
                    加入微信羣組
                </DrawerTitle>
            </DrawerHeader>
            <div className="w-full flex justify-center px-6">
                <div className="w-1/2 max-w-48">
                    <AspectRatio ratio={1/1}>
                        <Image
                            src="/assets/qrcode_wechat_group.png"
                            alt="WeChat Group"
                            fill
                        />
                    </AspectRatio>
                </div>
            </div>
            <DrawerFooter></DrawerFooter>
        </DrawerContent>
    )
}



export function Embodied() {
    return (
        <DrawerContent className='pt-12 pb-6'>
            <DrawerHeader>
                <DrawerTitle className='text-xl'>
                    Embodied AI
                </DrawerTitle>
            </DrawerHeader>
            <div className="w-full flex justify-center px-6">
                <div className="max-w-5xl">
                    Embodied AI is the integration of artificial intelligence with the physical world, enabling robots to interact with and learn from the real world. We focus on the most critical areas of embodied AI, including humanoid, robot manipulation, and dexterous hand. Our goal is to explore the scaling law for robots, develop general world models, and unveil the power of reinforcement learning to achieve general-purpose embodied agents.
                </div>
            </div>
            <div className="w-full flex justify-center px-6 mt-6">
                <div className='w-full max-w-5xl flex flex-col gap-6'>
                    {[...publications.values()].filter(publication => publication.keys.includes('drawer_embodied')).map((publication) => (
                        <div className="hidden md:flex flex-col gap-3" key={publication.title}>
                            <a className="border-l-3 border-o-gray pl-6 hover:border-o-blue flex flex-col gap-1 group" href={publication.starlink} target={publication.starlink.startsWith('http') ? '_blank' : '_self'}>
                                <span className="group-hover:text-o-blue">
                                    {publication.title}
                                </span>
                                <span className="text-o-gray group-hover:text-o-blue group-hover:opacity-70 italic">
                                    {publication.note}
                                </span>
                            </a>
                        </div>
                    ))}
                    <div className="flex flex-col gap-3">
                        <a className="border-l-3 border-o-gray pl-6 hover:border-o-blue flex flex-col gap-1 group" href='/publications'>
                            <span className="group-hover:text-o-blue">
                                more
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <DrawerFooter></DrawerFooter>
        </DrawerContent>
    )
}



export function E2EAD() {
    return (
        <DrawerContent className='pt-12 pb-6'>
            <DrawerHeader>
                <DrawerTitle className='text-xl'>
                    End-to-End Autonomous Driving
                </DrawerTitle>
            </DrawerHeader>
            <div className="w-full flex justify-center px-6">
                <div className="max-w-5xl">
                    Autonomous Driving stands at the intersection of intelligence, world modeling, and safety alignment, enabling vehicles to respond to the surroundings effectively for both comfort and safety. We target the crucial areas of autonomous driving, including whole-scene perception systems, critical data generation, and end-to-end decision-making. Our mission is to establish a comprehensive pipeline by leveraging massive real-world driving data and building efficient world representation for safe and generalizable autonomy.
                </div>
            </div>
            <div className="w-full flex justify-center px-6 mt-6">
                <div className='w-full max-w-5xl flex flex-col gap-6'>
                    {[...publications.values()].filter(publication => publication.keys.includes('drawer_e2e')).map((publication) => (
                        <div className="hidden md:flex flex-col gap-3" key={publication.title}>
                            <a className="border-l-3 border-o-gray pl-6 hover:border-o-blue flex flex-col gap-1 group" href={publication.starlink} target={publication.starlink.startsWith('http') ? '_blank' : '_self'}>
                                <span className="group-hover:text-o-blue">
                                    {publication.title}
                                </span>
                                <span className="text-o-gray group-hover:text-o-blue group-hover:opacity-70 italic">
                                    {publication.note}
                                </span>
                            </a>
                        </div>
                    ))}
                    <div className="flex flex-col gap-3">
                        <a className="border-l-3 border-o-gray pl-6 hover:border-o-blue flex flex-col gap-1 group" href='/publications'>
                            <span className="group-hover:text-o-blue">
                                more
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <DrawerFooter></DrawerFooter>
        </DrawerContent>
    )
}
