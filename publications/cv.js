const cv = [
    {
        title: "Test-time Correction with Human Feedback: An Online 3D Detection System via Visual Prompting",
        link: "https://arxiv.org/abs/2412.07768",
        image: "/assets/publication/ttc.jpg",
        author: "Zetong Yang, Hanxue Zhang, Yanan Sun, Li Chen, Fei Xia, Fatma Güney, Hongyang Li",
        note: "arXiv 2024",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "",
        tag: "",
    },
    {
        title: "FastMAC: Stochastic Spectral Sampling of Correspondence Graph",
        link: "https://arxiv.org/abs/2403.08770",
        image: "/assets/publication/FastMAC.jpg",
        author: "Yifei Zhang, Hao Zhao, Hongyang Li, Siheng Chen",
        note: "CVPR 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/Forrest-110/FastMAC?style=social",
        starlink: "https://github.com/Forrest-110/FastMAC",
        icon: [
            {
                type: "github",
                link: "https://github.com/Forrest-110/FastMAC",
            },
        ],
        description: "",
        tag: "",
    },
    {
        title: "Referred by Multi-Modality: A Unified Temporal Transformer for Video Object Segmentation",
        link: "https://arxiv.org/abs/2305.16318",
        image: "/assets/publication/mutr.jpg",
        author: "Shilin Yan, Renrui Zhang, Ziyu Guo, Wenchao Chen, Wei Zhang, Hongyang Li, Yu Qiao, Zhongjiang He, Peng Gao",
        note: "AAAI 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenGVLab/MUTR?style=social",
        starlink: "https://github.com/OpenGVLab/MUTR",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenGVLab/MUTR",
            },
        ],
        description: "",
        tag: "",
    },
    {
        title: "Stare at What You See: Masked Image Modeling without Reconstruction",
        link: "https://openaccess.thecvf.com/content/CVPR2023/html/Xue_Stare_at_What_You_See_Masked_Image_Modeling_Without_Reconstruction_CVPR_2023_paper.html",
        image: "/assets/publication/maskalign.jpg",
        author: "Hongwei Xue, Peng Gao, Hongyang Li, Yu Qiao, Hao Sun, Houqiang Li, Jiebo Luo",
        note: "CVPR 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/maskalign?style=social",
        starlink: "https://github.com/OpenDriveLab/maskalign",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/maskalign",
            },
        ],
        description: "An efficient MIM paradigm MaskAlign and a Dynamic Alignment module to apply learnable alignment to tackle the problem of input inconsistency.",
        tag: "",
    },
    {
        title: "Mimic before Reconstruct: Enhancing Masked Autoencoders with Feature Mimicking",
        link: "https://link.springer.com/article/10.1007/s11263-023-01898-4",
        image: "/assets/publication/mimic.jpg",
        author: "Peng Gao, Renrui Zhang, Rongyao Fang, Ziyi Lin, Hongyang Li, Hongsheng Li, Qiao Yu",
        note: "IJCV 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/Alpha-VL/ConvMAE?style=social",
        starlink: "https://github.com/Alpha-VL/ConvMAE",
        icon: [
            {
                type: "github",
                link: "https://github.com/Alpha-VL/ConvMAE",
            },
        ],
        description: "Introducing high-level and low-level representations to MAE without interference during pre-training.",
        tag: "",
    },
    {
        title: "Align Representations With Base: A New Approach to Self-Supervised Learning",
        link: "https://openaccess.thecvf.com/content/CVPR2022/html/Zhang_Align_Representations_With_Base_A_New_Approach_to_Self-Supervised_Learning_CVPR_2022_paper.html",
        image: "/assets/publication/arb.jpg",
        author: "Shaofeng Zhang, Lyn Qiu, Feng Zhu, Junchi Yan, Hengrui Zhang, Rui Zhao, Hongyang Li, Xiaokang Yang",
        note: "CVPR 2022",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "",
        tag: "",
    },
];



function cvrender() {
    const homepubbody = document.getElementById("pub_cv_at_scale");
    homepubbody.innerHTML = "";
    cv.forEach((item, _) => {
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
