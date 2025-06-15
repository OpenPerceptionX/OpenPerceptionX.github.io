import * as React from "react"



import "../globals.css";



// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='w-full overflow-hidden'>

            {children}

            <footer className="w-full px-6 my-24 flex flex-row justify-center select-none">
                <div className="w-full max-w-7xl text-xs">
                    OpenDriveLab © 2021 - 2025
                </div>
            </footer>

        </main>
    );
}
