"use client"



import Image from 'next/image'
import Link from "next/link"
import { ChevronDown  } from "lucide-react"



import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSubItem,
    SidebarMenuSub,
} from "@/components/ui/sidebar"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animation/fade-in"



function PageSidebar() {
    const { content_projecct, content_page } = useSidebar()
    if (content_projecct != null) {
        return (
                <SidebarMenu className="mb-12 px-8 text-xs overflow-y-scroll no-scrollbar">
                    {
                        content_page != null && (
                            <span className="font-bold p-2 select-none text-foreground/50">
                                This Page
                            </span>
                        )
                    }
                    {content_projecct.map((item) => (
                        <Link key={item.text} href={"#" + item.id}  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            {item.text}
                        </Link>
                    ))}

                </SidebarMenu>
        )
    } else if (content_page != null) {
        return (
                <SidebarMenu className="mb-12 px-8 text-xs overflow-y-scroll no-scrollbar">
                    <span className="font-bold p-2 select-none text-foreground/50">
                        This Page
                    </span>
                    {content_page.map((item) => (
                        <Link key={item.text} href={"#" + item.id}  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            {item.text}
                        </Link>
                    ))}

                </SidebarMenu>
        )
    } 
    else {
        return <SidebarMenu/>
    }
}



export function AppSidebar() {

    const { content_page } = useSidebar()

    return (
        <FadeIn>
            <Sidebar>
                <div className="fixed flex flex-row gap-3 m-6 z-20 flex-wrap">
                    <Button asChild className="bg-background text-foreground hover:bg-white group">
                        <Link href="/" className="select-none">
                            <Image
                                src="/logo/OpenDriveLab/D.png"
                                alt="OpenDriveLab"
                                width={24}
                                height={24}
                            className="group-hover:scale-125 transition delay-100 duration-200"
                            />
                        </Link>
                    </Button>
                </div>


                <div className="mt-24 overflow-y-scroll no-scrollbar">


                    {
                        content_page != null && (

                            <SidebarMenu className="mb-12 px-8 text-xs overflow-y-scroll no-scrollbar">



                                <span className="font-bold p-2 select-none text-foreground/50">
                                    OpenDriveLab
                                </span>



                                <Collapsible  className="group/collapsible flex flex-col gap-6">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger className="w-full flex flex-row justify-between items-center p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                            Project
                                            <ChevronDown className="size-4 transition-transform group-data-[state=closed]/collapsible:rotate-270 group-data-[state=open]/collapsible:rotate-0" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <Link href="/blog/agibot-world" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    AgiBot World
                                                </Link>
                                                <Link href="/vista" target="_blank" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    OpenDV
                                                </Link>
                                                <Link href="/drivelm" target="_blank" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    DriveLM
                                                </Link>
                                                <Link href="/dataset"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    more
                                                </Link>
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>



                                <Collapsible  className="group/collapsible flex flex-col gap-6">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger className="w-full flex flex-row justify-between items-center p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                            Publication
                                            <ChevronDown className="size-4 transition-transform group-data-[state=closed]/collapsible:rotate-270 group-data-[state=open]/collapsible:rotate-0" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <Link href="https://github.com/OpenDriveLab/UniAD" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    UniAD
                                                </Link>
                                                <Link href="https://github.com/OpenDriveLab/UniVLA" target="_blank" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    UniVLA
                                                </Link>
                                                <Link href="/publications"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    more
                                                </Link>
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>



                                <Collapsible  className="group/collapsible flex flex-col gap-6">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger className="w-full flex flex-row justify-between items-center p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                            Event
                                            <ChevronDown className="size-4 transition-transform group-data-[state=closed]/collapsible:rotate-270 group-data-[state=open]/collapsible:rotate-0" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <Link href="/challenge2025" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    Challenge 2025
                                                </Link>
                                                <Link href="/iccv2025" target="_blank" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    Workshop at ICCV 2025
                                                </Link>
                                                <Link href="/events"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    more
                                                </Link>
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>



                                <Link href="/team"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                    Team
                                </Link>



                                <Link href="/recruit"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                    Recruit
                                </Link>



                                <Link href="https://github.com/sponsors/OpenDriveLab" target="_blank" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                    Sponsor
                                </Link>



                            </SidebarMenu>

                        )
                    }
                




                    <PageSidebar/>



                </div>



            </Sidebar>
        </FadeIn>
    )
}
