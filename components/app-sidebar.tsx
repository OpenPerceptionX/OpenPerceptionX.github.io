"use client"



import { ChevronDown } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"



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
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"



import { FadeIn } from "@/components/animation/fade-in"



// import { Embodied, E2EAD } from "@/components/app-drawer"



import { events } from "@/data/events"



function PageSidebar() {

    const { content_projecct, content_page } = useSidebar()

    if (content_projecct != null) {
        return (
            <SidebarMenu className="mb-12 px-8 text-xs overflow-y-scroll no-scrollbar">

                {
                    content_page == null && (
                        <div className="md:h-[33vh] select-none"></div>
                    )
                } {
                    content_page != null && (
                        <span className="font-bold p-2 select-none text-foreground/50">
                            This Page
                        </span>
                    )
                }

                {
                    content_projecct.map((item) => (
                        <Link key={item.text} href={"#" + item.id}  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            {item.text}
                        </Link>
                    ))
                }

            </SidebarMenu>
        )
    } else if (content_page != null) {
        return (
            <SidebarMenu className="mb-12 px-8 text-xs overflow-y-scroll no-scrollbar">
                {
                    content_page.length != 0 && (
                        <span className="font-bold p-2 select-none text-foreground/50">
                            This Page
                        </span>
                    )
                } {
                    content_page.map((item) => (
                        <Link key={item.text} href={"#" + item.id}  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            {item.text}
                        </Link>
                    ))
                }
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



                {/* see header */}
                <div className="fixed flex md:hidden flex-row gap-3 m-6 z-20 flex-wrap">
                    {/* <Button asChild className="bg-background text-foreground hover:bg-white group">
                        <Link href="/" className="select-none">
                            <Image
                                src="/resources/logo/OpenDriveLab/D.png"
                                alt="OpenDriveLab"
                                width={24}
                                height={24}
                                className="group-hover:scale-125 transition delay-100 duration-200"
                            />
                        </Link>
                    </Button> */}
                    <Button className="bg-background text-foreground hover:bg-white">
                        <Link href="/" className="select-none">
                            <Image
                                src="/resources/logo/OpenDriveLab/D.png"
                                alt="OpenDriveLab"
                                width={24}
                                height={24}
                                className="hover:scale-125 transition delay-100 duration-200"
                            />
                        </Link>
                        <div className="h-full min-w-0.5 bg-foreground/50 select-none" />
                        <Link href="https://mmlab.hk/" target="_blank" className="select-none">
                            <Image
                                src="/resources/logo/OpenDriveLab/HKU_MMLAB.png"
                                alt="OpenDriveLab"
                                width={24}
                                height={24}
                                className="hover:scale-125 transition delay-100 duration-200"
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



                                <Collapsible className="group/collapsible flex flex-col gap-6" defaultOpen>
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger className="w-full flex flex-row justify-between items-center p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                            Research
                                            <ChevronDown className="size-4 transition-transform group-data-[state=closed]/collapsible:rotate-270 group-data-[state=open]/collapsible:rotate-0" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <Link href="/EmbodiedAI"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    Embodied AI
                                                </Link> 
                                                <Link href="/AutonomousDriving"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    Autonomous Driving
                                                </Link>
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                        {/* <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <Drawer direction="top">
                                                    <DrawerTrigger asChild>
                                                        <div className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                            Embodied AI
                                                        </div>
                                                    </DrawerTrigger>
                                                    <Embodied/>
                                                </Drawer>
                                                <Drawer direction="top">
                                                    <DrawerTrigger asChild>
                                                        <div className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                            End-to-End AD
                                                        </div>
                                                    </DrawerTrigger>
                                                    <E2EAD/>
                                                </Drawer>
                                            </SidebarMenuSub>
                                        </CollapsibleContent> */}
                                    </SidebarMenuItem>
                                </Collapsible>



                                <Link href="/publications" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                    Publication
                                </Link>
                                {/* <Collapsible className="group/collapsible flex flex-col gap-6">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger className="w-full flex flex-row justify-between items-center p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                            Publication
                                            <ChevronDown className="size-4 transition-transform group-data-[state=closed]/collapsible:rotate-270 group-data-[state=open]/collapsible:rotate-0" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <Link href="https://github.com/OpenDriveLab/UniVLA" target="_blank" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    UniVLA
                                                </Link>
                                                <Link href="https://github.com/OpenDriveLab/UniAD" target="_blank" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    UniAD
                                                </Link>
                                                <Link href="/publications"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    more
                                                </Link>
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible> */}



                                {/* <Link href="/datasets" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                    Dataset
                                </Link> */}
                                {/* <Collapsible className="group/collapsible flex flex-col gap-6">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger className="w-full flex flex-row justify-between items-center p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                            Project
                                            <ChevronDown className="size-4 transition-transform group-data-[state=closed]/collapsible:rotate-270 group-data-[state=open]/collapsible:rotate-0" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <Link href="/AgiBot-World" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    AgiBot World
                                                </Link>
                                                <Link href="/datasets"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    more
                                                </Link>
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible> */}



                                <Collapsible className="group/collapsible flex flex-col gap-6" defaultOpen>
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger className="w-full flex flex-row justify-between items-center p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                            Event
                                            <ChevronDown className="size-4 transition-transform group-data-[state=closed]/collapsible:rotate-270 group-data-[state=open]/collapsible:rotate-0" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {[...events.values()].filter(event => event.keys.includes('editor_pick')).map((event) => (
                                                    <Link href={event.url} target={event.url.startsWith('http') ? '_blank' : '_self'} className="p-2 rounded-sm hover:bg-o-blue/3 select-none" key={event.title}>
                                                        {event.title}
                                                    </Link>
                                                ))}   
                                                <Link href="/events"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                                    more
                                                </Link>
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>



                                <Link href="/team" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                    Team
                                </Link>



                                <Link href="/recruit" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
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
