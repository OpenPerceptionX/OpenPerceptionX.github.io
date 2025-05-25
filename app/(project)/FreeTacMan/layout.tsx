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

        {children}
      </body>
    </html>
  );
}
