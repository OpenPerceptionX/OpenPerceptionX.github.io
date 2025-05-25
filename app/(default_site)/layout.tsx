import * as React from "react"
import { Separator } from "@/components/ui/separator"



import "../globals.css";



import Image from 'next/image'
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { AspectRatio } from "@/components/ui/aspect-ratio"



import { FadeIn } from "@/components/animation/fade-in"



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});




// footer
const footers: { title: string; href: string; links: { subtitle: string; href: string; target: string; }[];}[] = [
    {
        title: "About Us",
        href: "/about-us",
        links: [
            {
                subtitle: "Member",
                href: "/about-us#member",
                target: "_self",
            },
            {
                subtitle: "Career",
                href: "/about-us#career",
                target: "_self",
            },
        ],
    },
    {
        title: "Research",
        href: "/research",
        links: [
            {
                subtitle: "Publication",
                href: "/research#publication",
                target: "_self",
            },            
            {
                subtitle: "Open Source",
                href: "/research#open-source",
                target: "_self",
            },
            {
                subtitle: "Event",
                href: "/research#event",
                target: "_self",
            },
        ],
    },
    {
        title: "",
        href: "",
        links: [
        ],
    },
    {
        title: "MMLab",
        href: "/",
        links: [
            {
                subtitle: "@ HKU",
                href: "/#MMLab@HKU",
                target: "_self",
            },
            {
                subtitle: "@ CUHK",
                href: "/#MMLab@CUHK",
                target: "_self",
            },
            {
                subtitle: "@ NTU",
                href: "/#MMLab@NTU",
                target: "_self",
            },
        ],
    },
]



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <main className='w-full'>



                {children}



            </main>
    );
}
