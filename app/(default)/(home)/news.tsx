'use client'



import * as React from "react"



import Link from "next/link"



import { Badge } from "@/components/ui/badge"



import { publications } from "@/data/publications"
import { type_mapping } from "@/data/mapping"



function isWithinLastNMonths(time: string, months = 3) {
    const pubDate = new Date(time.replace(/\./g, '-'));
    const now = new Date();
  
    const past = new Date();
    past.setMonth(now.getMonth() - months);
  
    return pubDate >= past && pubDate <= now;
}
const recentPublications = publications
    .filter(pub => pub.time && isWithinLastNMonths(pub.time, 2))
    .sort(
        (a, b) =>
        new Date(b.time.replace(/\./g, '-')).getTime() -
        new Date(a.time.replace(/\./g, '-')).getTime()
);



type NewsItem = {
    date: string;
    content: string;
    links?: { label: string; url: string }[];
  };
function getPublicationLinks(pub: {
        link?: string;
        icon?: { type: string; link: string }[];
    }) {
        const links: { label: string; url: string }[] = [];
    
        // Paper 主链接
        if (pub.link) {
        links.push({
            label: 'Paper',
            url: pub.link,
        });
        }
    
        // icon 里的所有链接，全部保留
        if (Array.isArray(pub.icon)) {
        pub.icon.forEach(icon => {
            if (icon.type === 'cite') return;
            links.push({
            label: type_mapping[icon.type] ??
            icon.type.charAt(0).toUpperCase() + icon.type.slice(1),
            url: icon.link,
            });
        });
        }
    
        return links;
  }
const publicationNews: NewsItem[] = recentPublications.map(pub => ({
    date: pub.time,
    content: `${pub.title}.`,
    links: getPublicationLinks(pub),
}));



export function News() {
    return (
        <div className="w-full px-6 flex justify-center mt-12">
            <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                <ul className="space-y-6">


                

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <Badge variant="default" className="w-[80px] text-center shrink-0">
                            2026.02.12
                        </Badge>
                        <div className="flex flex-col md:flex-row items-start md:items-center flex-wrap gap-2">
                            <span>
                                Announcing the strategic partnerships with Unitree, Noitom Robotics, and BrainCo. Check more details&nbsp;
                                <Link className="text-o-blue animated-underline" href='https://mp.weixin.qq.com/s/i2s8g8sHAC9uDFsVyucTxA' target="_blank">
                                    here
                                </Link>
                                .
                            </span>
                        </div>
                    </div>



                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <Badge variant="default" className="w-[80px] text-center shrink-0">
                            2026.02.12
                        </Badge>
                        <div className="flex flex-col md:flex-row items-start md:items-center flex-wrap gap-2">
                            <span>
                                <Link className="text-o-blue animated-underline" href='https://mmlab.hk/research/MM-Hand' target="_blank">
                                    MM-Hand 1.0
                                </Link>
                                &nbsp;is currently open for preorder.
                            </span>
                        </div>
                    </div>



                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <Badge variant="default" className="w-[80px] text-center shrink-0">
                            2026.02.05
                        </Badge>
                        <div className="flex flex-col md:flex-row items-start md:items-center flex-wrap gap-2">
                            <span>
                                We are proud to recognize our members for their outstanding achievements in&nbsp;
                                <Link className="text-o-blue animated-underline" href='/team/recognition2025'>
                                    2025
                                </Link>
                                .
                            </span>
                        </div>
                    </div>



                    {
                        publicationNews.map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-2">
                                <Badge variant="default" className="w-[80px] text-center shrink-0">
                                    {item.date}
                                </Badge>
                                <div className="flex flex-col md:flex-row items-start md:items-center flex-wrap gap-2">
                                    <span>
                                        {item.content}
                                    </span>
                                    <div className="flex flex-row flex-wrap">
                                        {
                                            item.links?.map((link, index) => (
                                                <span key={index} className="flex items-center">
                                                    <Link className="text-o-blue animated-underline" href={link.url} target={link.url.startsWith('http') ? '_blank' : '_self'}>
                                                        {link.label}
                                                    </Link>
                                                    {index < (item.links ?? []).length - 1 && (
                                                        <span className="text-xs mx-2"> | </span>
                                                    )}
                                                </span>
                                            ))
                                        } 
                                    </div>
                                </div>
                            </div>
                        ))
                    }



                </ul>
            </div>
        </div>
    )
}
