import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "redirecting",
};



import Redirect from '@/components/redirect'



export default function NotFound() {
    return (
        <Redirect/>
    )
}
