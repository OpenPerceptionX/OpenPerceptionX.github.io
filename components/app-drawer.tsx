
import Image from 'next/image'
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



export function WeChat() {
    return (
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    Subscribe to WeChat Public Account
                    <br></br>
                    關注微信公眾號
                </DrawerTitle>
            </DrawerHeader>
            <div className="w-full flex justify-center">
                <div className="w-1/2 max-w-48">
                    <AspectRatio ratio={1/1}>
                        <Image
                            src="/assets/qrcode_wechat.png"
                            alt="WeChat"
                            fill
                        />
                    </AspectRatio>
                </div>
            </div>
            <DrawerFooter></DrawerFooter>
        </DrawerContent>
    )
}


export function WeChatGroup() {
    return (
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    Join WeChat Group
                    <br></br>
                    加入微信羣組
                </DrawerTitle>
            </DrawerHeader>
            <div className="w-full flex justify-center">
                <div className="w-1/2 max-w-48">
                    <AspectRatio ratio={1/1}>
                        <Image
                            src="/assets/qrcode_wechat_group.png"
                            alt="WeChat Group"
                            fill
                        />
                    </AspectRatio>
                </div>
            </div>
            <DrawerFooter></DrawerFooter>
        </DrawerContent>
    )
}
