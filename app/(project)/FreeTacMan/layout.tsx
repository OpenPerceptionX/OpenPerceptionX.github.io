import type { Metadata } from "next";
import * as React from "react";
import Link from "next/link";

import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="w-full overflow-hidden">

        {children}
      </div>
  );
}
