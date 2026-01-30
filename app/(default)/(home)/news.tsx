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
    .filter(pub => pub.time && isWithinLastNMonths(pub.time, 3))
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
    content: `${pub.title} has been published.`,
    links: getPublicationLinks(pub),
}));



export function News() {
    return (
        <div className="w-full px-6 flex justify-center mt-12">
            <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                <ul className="space-y-6">
                    {
                        publicationNews.map((item, idx) => (
                            <div key={idx} className="flex flex-row items-center">
                                <Badge variant="default" className="mr-2 w-[88px] text-center shrink-0">
                                    {item.date}
                                </Badge>
                                <div className="flex flex-row items-center flex-wrap">
                                    <span>
                                        {item.content}
                                    </span>
                                    <span className="select-none">
                                        &nbsp;
                                    </span>
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
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
