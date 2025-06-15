import * as React from "react"



import Link from "next/link"
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"



const links: {
    icon: string;
    url: string;
}[] = [
    {
        icon: 'email',
        url: 'mailto:contact@opendrivelab.com',
    },
    {
        icon: 'github',
        url: 'https://github.com/OpenDriveLab',
    },
    {
        icon: 'huggingface',
        url: 'https://huggingface.co/OpenDriveLab',
    },
    {
        icon: 'x',
        url: 'https://twitter.com/OpenDriveLab',
    },
    {
        icon: 'bluesky',
        url: 'https://bsky.app/profile/opendrivelab.bsky.social',
    },
    {
        icon: 'linkedin',
        url: 'https://www.linkedin.com/company/opendrivelab/',
    },
    {
        icon: 'zhihu',
        url: 'https://www.zhihu.com/people/PerceptionX',
    },
    {
        icon: 'xiaohongshu',
        url: 'https://www.xiaohongshu.com/user/profile/67467f16000000001c0182ba',
    },
    {
        icon: 'youtube',
        url: 'https://www.youtube.com/@OpenDriveLab',
    },
    {
        icon: 'bilibili',
        url: 'https://space.bilibili.com/503310953',
    },
    {
        icon: 'discord',
        url: 'https://discord.gg/vCw2PjR2B8',
    },
    // {
    //     icon: 'wechat',
    //     url: '2025.06',
    // },
    // {
    //     icon: 'wechatgroup',
    //     url: '2025.06',
    // },
];



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='w-full overflow-hidden'>

            {children}

            <footer className="w-full px-6 mt-24 mb-12 gap-6 flex flex-col items-center select-none">

                <div className="w-full max-w-7xl flex gap-6 flex-wrap">
                    {links.map((link) => (
                        <Link href={link.url} target="_blank" key={link.icon}  className="size-4 md:size-5 group">
                            <AspectRatio ratio={1/1}>
                                <Image
                                    src={"/icon/" + link.icon + ".svg"}
                                    alt={link.icon}
                                    fill
                                    className="group-hover:scale-125 transition duration-200"
                                />
                            </AspectRatio>
                        </Link>
                    ))}
                </div>

                <div className="w-full max-w-7xl text-xs">
                    OpenDriveLab © 2021 - 2025
                </div>

            </footer>

        </main>
    );
}
