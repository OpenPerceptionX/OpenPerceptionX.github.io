const pick = [
    {
        title: "Planning-oriented Autonomous Driving",
        link: "https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html",
        image: "/assets/publication/uniad.jpg",
        author: "Yihan Hu, Jiazhi Yang, Li Chen, Keyu Li, Chonghao Sima, Xizhou Zhu, Siqi Chai, Senyao Du, Tianwei Lin, Wenhai Wang, Lewei Lu, Xiaosong Jia, Qiang Liu, Jifeng Dai, Yu Qiao, Hongyang Li",
        note: "CVPR 2023 Best Paper Award",
        noteoption: '',
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
        tag: "",
    },
];



function pickrender() {
    const homepubbody = document.getElementById("pub_embodied_ai");
    homepubbody.innerHTML = "";
    pick.forEach((item, _) => {
        var innerHTML = `
            <a href="${item.link}" target="_blank" class="hover:opacity-70 flex flex-row laptop:flex-col justify-center">
                <img loading="lazy" src="${item.image}" class="w-5/6 laptop:w-96"/>
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
        pub.className = "flex flex-col laptop:flex-row gap-20";
        pub.innerHTML = innerHTML;
        homepubbody.appendChild(pub);
    });
}
