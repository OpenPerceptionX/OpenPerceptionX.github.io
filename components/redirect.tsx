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
        redirect('/datasets')
    }
    if (
        pathname.toLowerCase() == '/event' || 
        pathname.toLowerCase() == '/event/' ||
        pathname.toLowerCase().startsWith('/events')
    ) {
        redirect('/events')
    }    
    if (
        pathname.toLowerCase().startsWith('/embodiedai')
    ) {
        redirect('/EmbodiedAI')
    }
    if (
        pathname.toLowerCase().startsWith('/autonomousdriving')
    ) {
        redirect('/AutonomousDriving')
    }


    
    // project
    if (
        pathname.toLowerCase().startsWith('/blog/agibot-world') || 
        pathname.toLowerCase().startsWith('/agibot-world')
    ) {
        redirect('/AgiBot-World/')
    }
    if (
        pathname.toLowerCase().startsWith('/agibotworld_paper.pdf') || 
        pathname.toLowerCase().startsWith('/assets/file/AgiBot_World_Colosseo.pdf')
    ) {
        redirect('https://arxiv.org/pdf/2503.06669')
    }
    if (
        pathname.toLowerCase().startsWith('/driveagi')
    ) {
        redirect('https://github.com/OpenDriveLab/DriveAGI')
    }
    if (
        pathname.toLowerCase().startsWith('/mpi')
    ) {
        redirect('/MPI/')
    }
    if (
        pathname.toLowerCase().startsWith('/vista')
    ) {
        redirect('/Vista/')
    }
    if (
        pathname.toLowerCase().startsWith('/drivelm')
    ) {
        redirect('/DriveLM/')
    }
    if (
        pathname.toLowerCase().startsWith('/nexus')
    ) {
        redirect('/Nexus/')
    }
    if (
        pathname.toLowerCase().startsWith('/robodual')
    ) {
        redirect('/RoboDual/')
    }
    if (
        pathname.toLowerCase().startsWith('/freetacman') ||
        pathname.toLowerCase().startsWith('/blog/freetacman')
    ) {
        redirect('/FreeTacMan/')
    }
    if (
        pathname.toLowerCase().startsWith('/resim')
    ) {
        redirect('/ReSim/')
    }
    if (
        pathname.toLowerCase().startsWith('/elm')
    ) {
        redirect('https://opendrivelab.github.io/elm.github.io/')
    }
    if (
        pathname.toLowerCase().startsWith('/ams')
    ) {
        redirect('/AMS/')
    }
    if (
        pathname.toLowerCase().startsWith('/wholebodyvla')
    ) {
        redirect('/WholeBodyVLA/')
    }
    if (
        pathname.toLowerCase().startsWith('/omega')
    ) {
        redirect('/OMEGA/')
    }
    if (
        pathname.toLowerCase().startsWith('/kai0') ||
        pathname.toLowerCase().startsWith('/foldanything')
    ) {
        redirect('/kai0/')
    }
    if (
        pathname.toLowerCase().startsWith('/simscale')
    ) {
        redirect('/SimScale/')
    }
    if (
        pathname.toLowerCase().startsWith('/opengo1')
    ) {
        redirect('/OpenGO1/')
    }




    // event 2025
    if (
        pathname.toLowerCase() == '/cvpr2025' ||
        pathname.toLowerCase() == '/cvpr2025/'
    ) {
        redirect('/cvpr2025/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2026/workshop')
    ) {
        redirect('/cvpr2026/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2025/workshop')
    ) {
        redirect('/cvpr2025/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2025/tutorial')
    ) {
        redirect('/cvpr2025/tutorial/')
    }
    if (
        pathname.toLowerCase().startsWith('/iccv2025')
    ) {
        redirect('/iccv2025/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/challenge2025')
    ) {
        redirect('/challenge2025/')
    }



    // event 2024
    if (
        pathname.toLowerCase() =='/cvpr2024' ||
        pathname.toLowerCase() =='/cvpr2024/'
    ) {
        redirect('/cvpr2024/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/workshop')
    ) {
        redirect('/cvpr2024/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/tutorial')
    ) {
        redirect('/cvpr2024/tutorial/')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/challenge') || 
        pathname.toLowerCase().startsWith('/challenge2024')
    ) {
        redirect('/challenge2024/')
    }
    if (
        pathname.toLowerCase().startsWith('/valse2024')
    ) {
        redirect('/valse2024/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/event2024')
    ) {
        redirect('https://starleague.ai/event2024/')
    }
    // 
    if (
        pathname.toLowerCase() =='/zoom'
    ) {
        redirect('https://us06web.zoom.us/j/86046877909?pwd=Tyt3WiQ3bNcI8KTNcW9E6Kztj1Hd5u.1')
    }



    // event 2023
    if (
        pathname.toLowerCase().startsWith('/AD23Challenge') || 
        pathname.toLowerCase().startsWith('/challenge2023')
    ) {
        redirect('/challenge2023/')
    }
    if (
        pathname.toLowerCase().startsWith('/event/iclr23_ADworkshop') || 
        pathname.toLowerCase().startsWith('/sr4ad/iclr23') || 
        pathname.toLowerCase().startsWith('/iclr2023')
    ) {
        redirect('/iclr2023/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/event/cvpr23_ADworkshop') ||
        pathname.toLowerCase().startsWith('/e2ead/cvpr23') ||
        pathname.toLowerCase().startsWith('/cvpr2023')
    ) {
        redirect('/cvpr2023/workshop/')
    }
    if (
        pathname.toLowerCase().startsWith('/e2ead/cvpr23_CN') || 
        pathname.toLowerCase().startsWith('/event2023')
    ) {
        redirect('/event2023/')
    }



    // misc.
    if (
        pathname.toLowerCase().startsWith('/lihongyang')
    ) {
        redirect('https://lihongyang.info/')
    }
    if (
        pathname == '/e2ead/UniAD_plenary_talk_slides.pdf'
    ) {
        redirect('https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf')
    }
    if (
        pathname == '/Dataset_Survey_Chinese_V2.pdf'
    ) {
        redirect('http://engine.scichina.com/doi/10.1360/SSI-2023-0313')
    }    
    if (
        pathname == '/ICCV23_towards_general_ai_in_ad.pdf'
    ) {
        redirect('/assets/file/ICCV23_towards_general_ai_in_ad.pdf')
    }
    if (
        pathname == '/ICCV23_oral_DriveAdapter.pdf'
    ) {
        redirect('/assets/file/ICCV23_oral_DriveAdapter.pdf')
    }



    redirect('/')
    return (
        <main className='w-full'></main>
    )
}
