"use client"



import * as React from "react"



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
    SidebarGroupLabel,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown  } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image'



import { FadeIn } from "@/components/animation/fade-in"



type NavigatorContextProps = {
    content: { text: string; id: string }[] | null
}
const  NavigatorContext = React.createContext< NavigatorContextProps | null>(null)
function usePageSidebar() {
    return NavigatorContext
}


function PageSidebarProvider() {
    const content = [{ text: "dw", id: "dwd"}]
    const contextValue = React.useMemo<NavigatorContextProps>(
        () => ({
            content
        }),
        [content]
      )
    return (
        <NavigatorContext.Provider value={contextValue}>
            
        </NavigatorContext.Provider>
  )
}



export function AppSidebar() {
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
                
                <SidebarMenu className="mt-24 mb-12 px-8 text-xs overflow-y-scroll no-scrollbar">



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
                                    <Link href="https://www.computer.org/csdl/journal/tp/2025/03/10791908/22ABgP6PlUQ" target="_blank" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                        BEVFormer
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
                                    <Link href="/cvpr2025" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                        Events at CVPR 2025
                                    </Link>
                                    <Link href="https://sagroups.ieee.org/3474/" target="_blank" className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                                        IEEE Standard P3474
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



                <PageSidebarProvider/>



            </Sidebar>
        </FadeIn>
    )
}
