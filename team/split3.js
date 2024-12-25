const split3data = [
    {
        name: "Yihang Qiu",
        image: "/assets/person/yihang_qiu.jpg",
        note: "HKU",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=qgRUOdIAAAAJ",
            },
            {
                type: "email",
                link: "mailto:qiuyihang@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/GihhArwtw",
            },
        ],
    },
    {
        name: "Shenyuan Gao",
        image: "/assets/person/shenyuan_gao.jpg",
        note: "HKUST",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=hZtOnecAAAAJ",
            },
            {
                type: "email",
                link: "mailto:sygao@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/Little-Podi",
            },
        ],
    },
    {
        name: "Jiazhi Yang",
        image: "/assets/person/jiazhi_yang.jpg",
        note: "CUHK",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=Ju7nGX8AAAAJ",
            },
            {
                type: "email",
                link: "mailto:yangjiazhi@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/YTEP-ZHI",
            },
            {
                type: "x",
                link: "https://x.com/jiazhi_yang2024",
            },
        ],
    },
    {
        name: "Haochen Liu",
        image: "/assets/person/haochen_liu.jpg",
        note: "NTU",
        icon: [
            {
                type: "home",
                link: "https://georgeliu233.github.io/",
            },
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=iizqKUsAAAAJ&hl",
            },
            {
                type: "email",
                link: "mailto:yangjiazhi@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/georgeliu233",
            },
        ],
    },
    {
        name: "Shadi Hamdan",
        image: "/assets/person/shadi_hamdan.jpg",
        note: "Koç University",
        icon: [
            {
                type: "home",
                link: "https://shadihamdan.com/",
            },
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=I6bAD78AAAAJ",
            },
            {
                type: "email",
                link: "mailto:shamdan17@ku.edu.tr",
            },
            {
                type: "github",
                link: "https://github.com/Shamdan17",
            },
        ],
    },
    {
        name: "Yunsong Zhou",
        image: "/assets/person/yunsong_zhou.jpg",
        note: "SJTU",
        icon: [
            {
                type: "home",
                link: "https://zhouyunsong.github.io/",
            },
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=bTsmnwcAAAAJ",
            },
            {
                type: "email",
                link: "mailto:zhouyunsong@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/ZhouYunsong-SJTU",
            },
        ],
    },
    {
        name: "Haochen Tian",
        image: "/assets/person/haochen_tian.jpg",
        note: "CASIA",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=DoyuNwEAAAAJ",
            },
            {
                type: "email",
                link: "mailto:tianhaochen2023@ia.ac.cn",
            },
            {
                type: "github",
                link: "https://github.com/hctian713",
            },
        ],
    },
];



function split3render() {
    const split3body = document.getElementById("split3");
    split3body.innerHTML = "";
    split3data.forEach((item, _) => {
        var innerHTML = `
            <img src="${item.image}" class="size-40 tablet:size-48 rounded-3xl"/>
            <h4>${item.name}</h4>
            <span>${item.note}</span>
            <div class="flex flex-row gap-3 flex-wrap">
        `;
        item.icon.forEach((i, _) => {
            innerHTML += `                
            <a href="${i.link}" target="_blank"> 
                <img src="/assets/icon/${i.type}.png" class="size-6 hover:opacity-70"/> 
            </a>
        `;
        });
        innerHTML += `
            </div>
            <div class="border-b-2 border-o-white"></div>
        `;
        const person = document.createElement("div");
        person.className = "flex flex-col gap-3 pb-3 w-40 tablet:w-48";
        person.innerHTML = innerHTML;
        split3body.appendChild(person);
    });
}
