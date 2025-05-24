import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "OpenDriveLab",
    description: "404 Not Found",
    keywords: ["404", "OpenDriveLab", "HKU", "SII"],
};



import NotFound404 from '@/components/ui/404'



export default function NotFound() {
    return (
        <NotFound404/>
    )
}
