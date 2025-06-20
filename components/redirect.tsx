'use client'



import { redirect, usePathname } from 'next/navigation'



export default function Redirect() {



    const pathname = usePathname()


    
    if (
        pathname.toLowerCase().startsWith('/team')
    ) {
        redirect('/team')
    }
    if (
        pathname.toLowerCase().startsWith('/publication')
    ) {
        redirect('/publications')
    }
    if (
        pathname.toLowerCase().startsWith('/recruit')
    ) {
        redirect('/recruit')
    }
    if (
        pathname.toLowerCase().startsWith('/dataset') || 
        pathname.toLowerCase().startsWith('/project')
    ) {
        redirect('/projects')
    }
    if (
        pathname.toLowerCase() == '/event' || 
        pathname.toLowerCase() == '/event/' ||
        pathname.toLowerCase().startsWith('/events')
    ) {
        redirect('/events')
    }


    
    // project
    if (
        pathname.toLowerCase().startsWith('/blog/agibot-world') || 
        pathname.toLowerCase().startsWith('/agibot-world')
    ) {
        redirect('/legacy/AgiBot-World/')
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
        redirect('/legacy/MPI/')
    }
    if (
        pathname.toLowerCase().startsWith('/vista')
    ) {
        redirect('/legacy/Vista/')
    }
    if (
        pathname.toLowerCase().startsWith('/drivelm')
    ) {
        redirect('/legacy/DriveLM/')
    }
    if (
        pathname.toLowerCase().startsWith('/nexus')
    ) {
        redirect('/legacy/Nexus/')
    }
    if (
        pathname.toLowerCase().startsWith('/robodual')
    ) {
        redirect('/legacy/RoboDual/')
    }
    if (
        pathname.toLowerCase().startsWith('/freetacman')
    ) {
        redirect('https://freetacmanblog.github.io/')
    }
    if (
        pathname.toLowerCase().startsWith('/resim')
    ) {
        redirect('/ReSim')
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
        redirect('/legacy/cvpr2025/')
    }
    if (
        pathname.toLowerCase().startsWith('/corl2025')
    ) {
        redirect('/legacy/corl2025/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/iccv2025')
    ) {
        redirect('/legacy/iccv2025/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2025/workshop')
    ) {
        redirect('/legacy/cvpr2025/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2025/tutorial')
    ) {
        redirect('/legacy/cvpr2025/tutorial/')
    }
    if (
        pathname.toLowerCase().startsWith('/challenge2025')
    ) {
        redirect('/legacy/challenge2025/')
    }



    // event 2024
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/workshop')
    ) {
        redirect('/legacy/cvpr2024/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/tutorial')
    ) {
        redirect('/legacy/cvpr2024/tutorial/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/challenge') || 
        pathname.toLowerCase().startsWith('/challenge2024')
    ) {
        redirect('/legacy/challenge2024/')
    }
    if (
        pathname.toLowerCase().startsWith('/valse2024')
    ) {
        redirect('/legacy/valse2024/workshop/')
    }
    if (
        pathname.toLowerCase() =='/cvpr2024' ||
        pathname.toLowerCase() =='/cvpr2024/'
    ) {
        redirect('/legacy/cvpr2024/')
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
        redirect('/legacy/challenge2023/')
    }
    if (
        pathname.toLowerCase().startsWith('/event/iclr23_ADworkshop') || 
        pathname.toLowerCase().startsWith('/sr4ad/iclr23') || 
        pathname.toLowerCase().startsWith('/iclr2023')
    ) {
        redirect('/legacy/iclr2023/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/event/cvpr23_ADworkshop') ||
        pathname.toLowerCase().startsWith('/e2ead/cvpr23') ||
        pathname.toLowerCase().startsWith('/cvpr2023')
    ) {
        redirect('/legacy/cvpr2023/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/e2ead/cvpr23_CN') || 
        pathname.toLowerCase().startsWith('/event2023')
    ) {
        redirect('/legacy/event2023/')
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


    
    redirect('')
    return (
        <main className='w-full'></main>
    )
}
