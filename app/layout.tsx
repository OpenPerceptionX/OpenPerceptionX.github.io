import * as React from "react"
import type { Metadata } from "next";
import Link from "next/link"
import Image from 'next/image'



import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"



import "./globals.css";



// icon
export const metadata: Metadata = {
    icons: {
        icon: [
            {
                url: "/logo/OpenDriveLab/D.png",
                href: "/logo/OpenDriveLab/D.png",
            },
        ],
    },
};



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});



// Google Analystics
import { GoogleAnalytics } from '@next/third-parties/google'



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>



            <body id="#">       
                <SidebarProvider>



                    <header>



                        <AppSidebar />



                        <div className="fixed flex flex-row gap-3 m-6 z-100 flex-wrap">

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

                            <SidebarTrigger />

                        </div>



                        <div className="fixed right-0 bottom-0 m-6 z-20">
                            <Link href="#" className="bg-background text-foreground hover:bg-o-blue hover:text-background rounded-full flex justify-center items-center p-2 select-none">
                                <span>
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </span>
                            </Link>
                        </div>



                    </header>



                    <main>
                        {children}
                    </main>



                </SidebarProvider>
            </body>



            <GoogleAnalytics gaId="G-L7VEDHS6G8" />



        </html>
    );
}
