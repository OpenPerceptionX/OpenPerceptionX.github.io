"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"



function MultiTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
        className
      )}
      {...props}
    />
  )
}

function MultiTabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "select-none hover:cursor-pointer bg-muted py-[3px] px-[6px] rounded-lg h-9 text-sm data-[state=active]:bg-mred data-[state=active]:text-background transition-[color,box-shadow] shadow-sm data-[state=active]:border-muted",
        className
      )}
      {...props}
    />
  )
}


export { MultiTabsList, MultiTabsTrigger }
