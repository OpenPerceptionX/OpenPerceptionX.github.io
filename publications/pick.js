const pick = [
    {
        title: "Planning-oriented Autonomous Driving",
        link: "https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html",
        image: "/assets/publication/uniad.jpg",
        author: "Yihan Hu, Jiazhi Yang, Li Chen, Keyu Li, Chonghao Sima, Xizhou Zhu, Siqi Chai, Senyao Du, Tianwei Lin, Wenhai Wang, Lewei Lu, Xiaosong Jia, Qiang Liu, Jifeng Dai, Yu Qiao, Hongyang Li",
        note: "CVPR 2023 Best Paper Award",
        noteoption: 'href="https://cvpr2023.thecvf.com/Conferences/2023/Awards" target="_blank"',
        star: "https://img.shields.io/github/stars/OpenDriveLab/UniAD?style=social",
        starlink: "https://github.com/OpenDriveLab/UniAD",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/UniAD",
            },
            {
                type: "youtube",
                link: "https://www.youtube.com/watch?v=cyrxJJ_nnaQ",
            },
            {
                type: "slides",
                link: "/e2ead/UniAD_plenary_talk_slides.pdf",
            },
            {
                type: "zhihu",
                link: "https://zhuanlan.zhihu.com/p/638780421",
            },
            {
                type: "wechat",
                link: "https://mp.weixin.qq.com/s?__biz=MzkyMDUzMDE2Mw==&mid=2247485809&idx=1&sn=5dbd00380bcf80cc32d11b6e15e93829",
            },
        ],
        description: "A comprehensive framework up-to-date that incorporates full-stack driving tasks in one network.",
    },
    {
        title: "End-to-end Autonomous Driving: Challenges and Frontiers",
        link: "https://ieeexplore.ieee.org/abstract/document/10614862/",
        image: "/assets/publication/e2esurvey.jpg",
        author: "Li Chen, Penghao Wu, Kashyap Chitta, Bernhard Jaeger, Andreas Geiger, Hongyang Li",
        note: "TPAMI 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/End-to-end-Autonomous-Driving?style=social",
        starlink: "https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving",
            },
        ],
        description: "In this survey, we provide a comprehensive analysis of more than 270 papers on the motivation, roadmap, methodology, challenges, and future trends in end-to-end autonomous driving.",
    },
    {
        title: "Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation",
        link: "https://arxiv.org/abs/2409.09016",
        image: "/assets/publication/clover.jpg",
        author: "Qingwen Bu, Jia Zeng, Li Chen, Yanchao Yang, Guyue Zhou, Junchi Yan, Ping Luo, Heming Cui, Yi Ma, Hongyang Li",
        note: "NeurIPS 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/CLOVER?style=social",
        starlink: "https://github.com/OpenDriveLab/CLOVER",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/CLOVER",
            },
            {
                type: "bilibili",
                link: "https://www.bilibili.com/video/BV1rHqZYeECL",
            },
        ],
        description: "CLOVER employs a text-conditioned video diffusion model for generating visual plans as reference inputs, then these sub-goals guide the feedback-driven policy to generate actions with an error measurement strategy.",
    },
    {
        title: "Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability",
        link: "https://arxiv.org/abs/2405.17398",
        image: "/assets/publication/vista.jpg",
        author: "Shenyuan Gao, Jiazhi Yang, Li Chen, Kashyap Chitta, Yihang Qiu, Andreas Geiger, Jun Zhang, Hongyang Li",
        note: "NeurIPS 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/Vista?style=social",
        starlink: "https://github.com/OpenDriveLab/Vista",
        icon: [
            {
                type: "dataset",
                link: "https://github.com/OpenDriveLab/DriveAGI/tree/main/opendv",
            },
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/Vista",
            },
            {
                type: "hugging_face",
                link: "https://huggingface.co/OpenDriveLab/Vista",
            },
            {
                type: "medium",
                link: "https://medium.com/@opendrivelab/towards-next-level-of-autonomous-driving-via-world-models-aff0eb7fee00",
            },
            {
                type: "poster",
                link: "https://opendrivelab.github.io/Vista/nips24_vista_poster.png",
            },
        ],
        description: "A generalizable driving world model with high-fidelity open-world prediction, continuous long-horizon rollout, and zero-shot action controllability.",
    },
    {
        title: "DriveLM: Driving with Graph Visual Question Answering",
        link: "https://arxiv.org/abs/2312.14150",
        image: "/assets/publication/drivelm.jpg",
        author: "Chonghao Sima, Katrin Renz, Kashyap Chitta, Li Chen, Hanxue Zhang, Chengen Xie, Ping Luo, Andreas Geiger, Hongyang Li",
        note: "ECCV 2024 (Oral)",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/DriveLM?style=social",
        starlink: "https://github.com/OpenDriveLab/DriveLM",
        icon: [
            {
                type: "dataset",
                link: "ttps://github.com/OpenDriveLab/DriveLM",
            },
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                type: "webpage",
                link: "/DriveLM/",
            },
            {
                type: "hugging_face",
                link: "https://huggingface.co/datasets/OpenDriveLab-org/DriveLM",
            },
        ],
        description: ".",
    },
];



function renderhomepage() {
    const homepubbody = document.getElementById("home_pub");
    homepubbody.innerHTML = "";
    pick.forEach((item, _) => {
        var innerHTML = `
            <h3><a class="hover:text-o-blue" href=${item.link} target="_blank">${item.title}</a></h3>
            <div class="flex flex-row gap-6 flex-wrap justify-items-center">
                <h5 class="bg-o-blue text-white p-1 pl-3 pr-3 rounded-3xl font-bold"><a ${item.noteoption}>${item.note}</a></h5>
        `;
        item.icon.forEach((i, _) => {
            innerHTML += `                
                <a href=${i.link} target="_blank"> 
                    <img loading="lazy" src="/assets/icon/${i.type}.png" class="h-8 hover:opacity-70"/> 
                </a>
            `;
        });
        innerHTML += `
            </div>
        `;
        const pub = document.createElement("div");
        pub.className = "flex flex-col gap-6";
        pub.innerHTML = innerHTML;
        homepubbody.appendChild(pub);
    });
}
