'use client'



// import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'



import { FadeIn } from "@/components/animation/fade-in"



export default function NotFound404() {



    const pathname = usePathname()
    if (
        pathname.toLowerCase() == '/'
    ) {
        redirect('/legacy/index.html')
    }
    if (
        pathname.toLowerCase() == '/team' ||
        pathname.toLowerCase() == '/team/'
    ) {
        redirect('/legacy/team/index.html')
    }
    if (
        pathname.toLowerCase() == '/recruit' ||
        pathname.toLowerCase() == '/recruit/'
    ) {
        redirect('/legacy/recruit/index.html')
    }
    if (
        pathname.toLowerCase() == '/dataset' || 
        pathname.toLowerCase() == '/dataset/' ||
        pathname.toLowerCase() == '/datasets' ||
        pathname.toLowerCase() == '/datasets/'
    ) {
        redirect('/legacy/datasets/index.html')
    }
    if (
        pathname.toLowerCase() == '/publication' || 
        pathname.toLowerCase() == '/publication/' ||
        pathname.toLowerCase() == '/publications' ||
        pathname.toLowerCase() == '/publications/'
    ) {
        redirect('/legacy/publications/index.html')
    }
    if (
        pathname.toLowerCase() == '/event' || 
        pathname.toLowerCase() == '/event/' ||
        pathname.toLowerCase() == '/events' ||
        pathname.toLowerCase() == '/events/'
    ) {
        redirect('/legacy/events/index.html')
    }
    // project
    if (
        pathname.toLowerCase().startsWith('/blog/agibot-world-colosseo') || 
        pathname.toLowerCase() == '/blog/agibot-world/' ||
        pathname.toLowerCase() == '/blog/agibot-world'
    ) {
        redirect('/legacy/blog/agibot-world/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/agibotworld_paper.pdf') || 
        pathname.toLowerCase().startsWith('/assets/file/AgiBot_World_Colosseo.pdf')
    ) {
        redirect('https://arxiv.org/pdf/2503.06669')
    }
    if (
        pathname.toLowerCase().startsWith('/DriveAGI')
    ) {
        redirect('https://github.com/OpenDriveLab/DriveAGI')
    }
    if (
        pathname.toLowerCase().startsWith('/mpi')
    ) {
        redirect('/legacy/MPI/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/vista')
    ) {
        redirect('/legacy/Vista/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/drivelm')
    ) {
        redirect('/legacy/DriveLM/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/nexus')
    ) {
        redirect('/legacy/Nexus/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/robodual')
    ) {
        redirect('/legacy/RoboDual/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/freetacman')
    ) {
        redirect('/FreeTacMan')
    }
    if (
        pathname.toLowerCase().startsWith('/elm')
    ) {
        redirect('https://opendrivelab.github.io/elm.github.io/')
    }
    // event 2025
    if (
        pathname.toLowerCase() =='/cvpr2025' ||
        pathname.toLowerCase() =='/cvpr2025/'
    ) {
        redirect('/legacy/cvpr2025/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/corl2025')
    ) {
        redirect('/legacy/corl2025/workshop/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/iccv2025')
    ) {
        redirect('/legacy/iccv2025/workshop/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2025/workshop')
    ) {
        redirect('/legacy/cvpr2025/workshop/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2025/tutorial')
    ) {
        redirect('/legacy/cvpr2025/tutorial/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/challenge2025')
    ) {
        redirect('/legacy/challenge2025/index.html')
    }
    // event 2024
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/workshop')
    ) {
        redirect('/legacy/cvpr2024/workshop/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/tutorial')
    ) {
        redirect('/legacy/cvpr2024/tutorial/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/challenge') || 
        pathname.toLowerCase().startsWith('/challenge2024')
    ) {
        redirect('/legacy/challenge2024/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/valse2024')
    ) {
        redirect('/legacy/valse2024/workshop/index.html')
    }
    if (
        pathname.toLowerCase() =='/cvpr2024' ||
        pathname.toLowerCase() =='/cvpr2024/'
    ) {
        redirect('/legacy/cvpr2024/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/event2024')
    ) {
        redirect('https://starleague.ai/event2024/')
    }
    // event 2023
    if (
        pathname.toLowerCase().startsWith('/AD23Challenge') || 
        pathname.toLowerCase().startsWith('/challenge2023')
    ) {
        redirect('/legacy/challenge2023/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/event/iclr23_ADworkshop') || 
        pathname.toLowerCase().startsWith('/sr4ad/iclr23') || 
        pathname.toLowerCase().startsWith('/iclr2023')
    ) {
        redirect('/legacy/iclr2023/workshop/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/event/cvpr23_ADworkshop') ||
        pathname.toLowerCase().startsWith('/e2ead/cvpr23') ||
        pathname.toLowerCase().startsWith('/cvpr2023')
    ) {
        redirect('/legacy/cvpr2023/workshop/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/e2ead/cvpr23_CN') || 
        pathname.toLowerCase().startsWith('/event2023')
    ) {
        redirect('/legacy/event2023/index.html')
    }
    // misc.
    if (
        pathname.toLowerCase().startsWith('/lihongyang')
    ) {
        redirect('https://lihongyang.info/')
    }

    if (
        pathname.toLowerCase() == '/e2ead/UniAD_plenary_talk_slides.pdf'
    ) {
        redirect('https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf')
    }
    if (
        pathname.toLowerCase() == '/Dataset_Survey_Chinese_V2.pdf'
    ) {
        redirect('http://engine.scichina.com/doi/10.1360/SSI-2023-0313')
    }    
    if (
        pathname.toLowerCase() == '/ICCV23_towards_general_ai_in_ad.pdf'
    ) {
        redirect('/assets/file/ICCV23_towards_general_ai_in_ad.pdf')
    }
    if (
        pathname.toLowerCase() == '/ICCV23_oral_DriveAdapter.pdf'
    ) {
        redirect('/assets/file/ICCV23_oral_DriveAdapter.pdf')
    }



    return (
        <main>
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-loading">
                <div className="w-full max-w-7xl flex flex-col gap-6 select-none">
                    <FadeIn>
                        <h1 className="font-bold text-t0 text-white">
                            404
                        </h1>
                    </FadeIn>
                    <FadeIn>
                        <h1 className="font-bold text-t0 text-white">
                            Not Found
                        </h1>
                    </FadeIn>
                    {/* <Link href="/" className='font-bold text-white animated-underline'>
                        return home
                    </Link> */}
                </div>
            </div>
        </main>
    )
}
