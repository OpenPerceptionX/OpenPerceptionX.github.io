const embodied = [
    {
        title: "Towards Synergistic, Generalized, and Efficient Dual-System for Robotic Manipulation",
        link: "https://arxiv.org/abs/2410.08001",
        image: "/assets/publication/robodual.jpg",
        author: "Qingwen Bu, Hongyang Li, Li Chen, Jisong Cai, Jia Zeng, Heming Cui, Maoqing Yao, Yu Qiao",
        note: "arXiv 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/RoboDual?style=social",
        starlink: "https://github.com/OpenDriveLab/RoboDual",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/RoboDual",
            },
            {
                type: "webpage",
                link: "/RoboDual/",
            },
        ],
        description: "Our objective is to develop a synergistic dual-system framework which supplements the generalizability of large-scale pre-trained generalist with the efficient and task-specific adaptation of specialist.",
        tag: "",
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
        tag: "",
    },
    {
        title: "Learning Manipulation by Predicting Interaction",
        link: "https://arxiv.org/abs/2406.00439",
        image: "/assets/publication/mpi.jpg",
        author: "Jia Zeng, Qingwen Bu, Bangjun Wang, Wenke Xia, Li Chen, Hao Dong, Haoming Song, Dong Wang, Di Hu, Ping Luo, Heming Cui, Bin Zhao, Xuelong Li, Yu Qiao, Hongyang Li",
        note: "RSS 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/MPI?style=social",
        starlink: "https://github.com/OpenDriveLab/MPI",
        icon: [
            {
                type: "webpage",
                link: "/MPI/",
            },
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/MPI",
            },
        ],
        description: "We propose a general pre-training pipeline that learns Manipulation by Predicting the Interaction (MPI).",
        tag: "",
    },
];



function embodiedrender() {
    const homepubbody = document.getElementById("pub_embodied_ai");
    homepubbody.innerHTML = "";
    embodied.forEach((item, _) => {
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
