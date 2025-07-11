import type { Metadata } from "next";
import * as React from "react";
import Link from "next/link";

import "./globals.css";

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
    <html lang="en" className={inter.className}>
      <body id="#">
        <header>
          <div className="fixed right-0 bottom-0 m-6 z-20">
            <Link
              href="#"
              className="bg-background text-foreground hover:bg-[#FF668C] rounded-full flex justify-center items-center p-2 select-none"
            >
              <span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 18.75 7.5-7.5 7.5 7.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
