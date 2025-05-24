import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "OpenDriveLab",
};



import NotFound404 from '@/components/ui/404'



export default function NotFound() {
    return (
        <NotFound404/>
    )
}
