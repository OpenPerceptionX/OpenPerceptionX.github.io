const pick = [
    {
        title: "Learning to Act Anywhere with Task-centric Latent Actions",
        link: "https://arxiv.org/abs/2505.06111",
        image: "/assets/publication/univla.jpg",
        author: "Qingwen Bu, Yanting Yang, Jisong Cai, Shenyuan Gao, Guanghui Ren, Maoqing Yao, Ping Luo, Hongyang Li",
        note: "RSS 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/UniVLA?style=social",
        starlink: "https://github.com/OpenDriveLab/UniVLA",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/UniVLA",
            },
        ],
        description: "A unified vision-language-action framework that enables policy learning across different environments.",
        tag: "",
    },
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
                link: "https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf",
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
        tag: "",
    },
    {
        title: "AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems",
        link: "https://arxiv.org/abs/2503.06669",
        image: "/assets/publication/go-1.jpg",
        author: "Team AgiBot-World",
        note: "arXiv 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/AgiBot-World?style=social",
        starlink: "https://github.com/OpenDriveLab/AgiBot-World",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/AgiBot-World",
            },
            {
                type: "article",
                link: "/blog/agibot-world/",
            },
            {
                type: "webpage",
                link: "http://agibot-world.com/",
            },
            {
                type: "hugging_face",
                link: "https://huggingface.co/agibot-world",
            },
            {
                type: "bilibili",
                link: "https://www.bilibili.com/video/BV1sNdGYWEBY",
            }
        ],
        description: "A novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume.",
        tag: "",
    },
    {
        title: "End-to-End Autonomous Driving: Challenges and Frontiers",
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
        tag: "",
    },
    {
        title: "DriveLM: Driving with Graph Visual Question Answering",
        link: "https://arxiv.org/abs/2312.14150",
        image: "/assets/publication/drivelm.jpg",
        author: "Chonghao Sima, Katrin Renz, Kashyap Chitta, Li Chen, Hanxue Zhang, Chengen Xie, Ping Luo, Andreas Geiger, Hongyang Li",
        note: "ECCV 2024 Oral",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/DriveLM?style=social",
        starlink: "https://github.com/OpenDriveLab/DriveLM",
        icon: [
            {
                type: "dataset",
                link: "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                type: "webpage",
                link: "/DriveLM/",
            },
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                type: "hugging_face",
                link: "https://huggingface.co/datasets/OpenDriveLab-org/DriveLM",
            },
        ],
        description: "",
        tag: "",
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



function pickrender() {
    const homepubbody = document.getElementById("pub_editor_pick");
    homepubbody.innerHTML = "";
    pick.forEach((item, _) => {
        var innerHTML = `
            <a href="${item.link}" target="_blank" class="hover:opacity-70 flex flex-row laptop:flex-col justify-center">
                <img loading="lazy" src="${item.image}" class="w-full tablet:w-5/6 laptop:w-96"/>
            </a>
            <div class="flex flex-col justify-center flex-1">
                <h3>
                    <a class="hover:text-o-blue" href=${item.link} target="_blank">
                        ${item.title}
                    </a>
                </h3>
                <p class="mt-3 authors">
                    ${item.author}
                </p>
                <div class="flex flex-row gap-6 flex-wrap justify-items-center mt-6">
                    <p class="bg-o-blue text-white p-1 pl-3 pr-3 rounded-3xl">
                        <a ${item.noteoption}>${item.note}</a>
                    </p>
                </div>
                <div class="flex flex-row gap-6 flex-wrap justify-items-center mt-6">
        `;
        if (item.star != "") {
            innerHTML += `
                    <a href="${item.starlink}" target="_blank"><img loading="lazy" src="${item.star}" class="h-8 hover:opacity-70"/></a>
            `;
        }
        item.icon.forEach((i, _) => {
            if (i.type != "github") {
                innerHTML += `                
                    <a href=${i.link} target="_blank"> 
                        <img loading="lazy" src="/assets/icon/${i.type}.png" class="h-8 hover:opacity-70"/> 
                    </a>
                `;
            };
        });
        innerHTML += `
                </div>
                <i class="mt-6 text-o-gray">
        `;
        if (item.tag != "") {
            item.tag.forEach((i, _) => {
                innerHTML += `
                <code>${i}</code>
                `;
            });
        };
        innerHTML += `
                    ${item.description}
                </i>
            </div>
        `;
        const pub = document.createElement("div");
        pub.className = "flex flex-col laptop:flex-row gap-6 laptop:gap-20";
        pub.innerHTML = innerHTML;
        homepubbody.appendChild(pub);
    });
}
