import Image from 'next/image'



import CitationChen2025 from "@/components/citation-chen2025"



import { AspectRatio } from "@/components/ui/aspect-ratio"
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




export function Chen2025_value_learning() {
    return (
        <DrawerContent className='pt-12 pb-6'>
            <DrawerHeader>
                <DrawerTitle className='text-xl'>
                    Please cite this work as
                </DrawerTitle>
            </DrawerHeader>
            <div className="w-full flex justify-center px-6">
                <div className="max-w-5xl">
                    <CitationChen2025 />
                </div>
            </div>
            <DrawerFooter></DrawerFooter>
        </DrawerContent>
    )
}
