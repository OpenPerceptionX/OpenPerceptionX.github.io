import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "404 | OpenDriveLab",
    description: "404 Not Found",
    keywords: ["404", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import NotFound404 from '@/components/ui/404'



export default function NotFound() {
    return (
        <NotFound404/>
    )
}
