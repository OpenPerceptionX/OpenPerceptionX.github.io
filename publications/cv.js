const cv = [
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
];



function cvrender() {
    const homepubbody = document.getElementById("pub_cv_at_scale");
    homepubbody.innerHTML = "";
    cv.forEach((item, _) => {
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
