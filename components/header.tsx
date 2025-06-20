"use client"



import * as React from "react"
import Link from "next/link"
import Image from 'next/image'
import { usePathname } from 'next/navigation';



import { Button } from "@/components/ui/button"



import { AppSidebar } from "@/components/app-sidebar"
import { NavigatorTrigger } from "@/components/navigator-trigger"



export function Header() {



    const pathname = usePathname()



    return (
        <header key={pathname}>



            <AppSidebar />



            <div className="fixed flex flex-row gap-3 p-6 z-20 flex-wrap w-full justify-between md:w-fit md:justify-start">



                <Button asChild className="bg-background text-foreground hover:bg-white group">
                    <Link href="/" className="select-none">
                        <Image
                            src="/resources/logo/OpenDriveLab/D.png"
                            alt="OpenDriveLab"
                            width={24}
                            height={24}
                            className="group-hover:scale-125 transition delay-100 duration-200"
                        />
                    </Link>
                </Button>



                <NavigatorTrigger />



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
    )
}
