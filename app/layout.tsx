import type { Metadata } from "next";
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/homesheet"



import "./globals.css";
import Image from 'next/image'



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});
// Google Analystics
import { GoogleAnalytics } from '@next/third-parties/google'



// icon
export const metadata: Metadata = {
    icons: {
        icon: [
            {
                url: "/logo/OpenDriveLab/D_small.png",
                href: "/logo/OpenDriveLab/D_small.png",
            },
        ],
    },
};



// header
const headers: { title: string; href: string; }[] = [
    // {
    //     title: "About Us",
    //     href: "/about-us",
    // },
]



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>
            <body id="#">


                                        
                <header>
                    <div className="fixed flex flex-row gap-3 m-6 z-20 flex-wrap">
                        <Button asChild className="bg-background text-foreground hover:bg-white group">
                            <Link href="/" className="select-none">
                                <Image
                                    src="/logo/OpenDriveLab/D.png"
                                    alt="OpenDriveLab"
                                    width={24}
                                    height={24}
                                    className="group-hover:scale-125 transition delay-100 duration-200"
                                />
                            </Link>
                        </Button>
                        {headers.map((header) => (
                            <Button asChild key={header.title} className="bg-background text-foreground hover:bg-mred hover:text-white">
                                <Link href={header.href} className="select-none">{header.title}</Link>
                            </Button>
                        ))}
                        {/* <Sheet>
                            <SheetTrigger asChild>
                                <Button asChild key={headers[0].title} className="bg-background text-foreground hover:bg-amber-400 md:hidden">
                                    <Button className="select- hover:cursor-pointer">{headers[0].title}</Button>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle className="hidden">hidden</SheetTitle>
                                    <SheetDescription className="hidden">
                                    hidden
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="fixed flex flex-col gap-3 m-6">
                                    {headers.map((header) => (
                                        <Button asChild key={header.title} className="bg-background text-foreground hover:bg-amber-400">
                                            <Link href={header.href} className="select-none">
                                                <div className="w-full flex justify-start">{header.title}</div>
                                            </Link> 
                                        </Button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet> */}
                    </div>
                    <div className="fixed right-0 bottom-0 m-6 z-20">
                        <Link href="#" className="bg-background text-foreground hover:bg-mred hover:text-background rounded-full flex justify-center items-center p-2 select-none">
                            <span>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </header>



                {children}
                


            </body>
            <GoogleAnalytics gaId="G-L7VEDHS6G8" />
        </html>
    );
}
