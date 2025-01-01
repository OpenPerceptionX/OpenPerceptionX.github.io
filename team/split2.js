const split2data = [
    {
        name: "Tianyu Li",
        image: "/assets/person/tianyu_li.jpg",
        note: "复旦大学（23级联培）",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=X6vTmEMAAAAJ",
            },
            {
                type: "email",
                link: "mailto:litianyu@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/sephyli",
            },
            {
                type: "x",
                link: "https://twitter.com/sephy_li",
            },
        ],
    },
    {
        name: "Qingwen Bu",
        image: "/assets/person/qingwen_bu.jpg",
        note: "上海交通大学（23级联培）",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=-JCRysgAAAAJ",
            },
            {
                type: "email",
                link: "mailto:qwbu01@sjtu.edu.cn",
            },
            {
                type: "github",
                link: "https://github.com/retsuh-bqw",
            },
        ],
    },
    {
        name: "Hanxue Zhang",
        image: "/assets/person/hanxue_zhang.jpg",
        note: "上海交通大学（24级联培）",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=vy5r8rMAAAAJ",
            },
            {
                type: "email",
                link: "mailto:snow@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/jjxjiaxue",
            },
        ],
    },
    {
        name: "Chengen Xie",
        image: "/assets/person/chengen_xie.jpg",
        note: "上海交通大学（24级联培）",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=-Sk1x_gAAAAJ"
            },
            {
                type: "email",
                link: "mailto:xiechengen@opendrivelab.com"
            },
            {
                type: "github",
                link: "https://github.com/ChengenXie"
            },
        ],
    },
    {
        name: "Haoran Jiang",
        image: "/assets/person/haoran_jiang.jpg",
        note: "复旦大学（24级联培）",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=KYzm-k0AAAAJ",
            },
            {
                type: "email",
                link: "mailto:jianghaoran2024@gmail.com",
            },
            {
                type: "github",
                link: "https://github.com/HRRiver7",
            },
        ],
    },
    {
        name: "Yang Li",
        image: "/assets/person/yang_li.jpg",
        note: "同济大学（24级联培）",
        icon: [
            {
                type: "email",
                link: "mailto:liyang@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/RicardLee",
            },
        ],
    },
    // {
    //     name: "Jin Chen",
    //     image: "/assets/person/jin_chen.jpg",
    //     note: "同济大学（24级联培）",
    //     icon: [
    //         {
    //             type: "email",
    //             link: "mailto:cj65000816081@gmail.com",
    //         },
    //         {
    //             type: "scholar",
    //             link: "https://scholar.google.com/citations?user=4FqHXOsAAAAJ",
    //         },
    //         {
    //             type: "github",
    //             link: "https://github.com/dunknsabsw",
    //         },
    //         {
    //             type: "zhihu",
    //             link: "https://www.zhihu.com/people/lu-kou-5-68",
    //         },
    //         {
    //             type: "xiaohongshu",
    //             link: "https://www.xiaohongshu.com/user/profile/609cbe510000000001002922",
    //         },
    //     ],
    // },
    // {
    //     name: "Jison Cai",
    //     image: "/assets/person/jison_cai.jpg",
    //     note: "同济大学（24级联培）",
    //     icon: [
    //         {
    //             type: "email",
    //             link: "mailto:liyang@opendrivelab.com",
    //         },
    //         {
    //             type: "github",
    //             link: "https://github.com/RicardLee",
    //         },
    //     ],
    // },
    // {
    //     name: "Naisheng Ye",
    //     image: "/assets/person/naisheng_ye.jpg",
    //     note: "复旦大学",
    //     icon: [
    //         {
    //             type: "email",
    //             link: "mailto:yns.victory@gmail.com",
    //         },
    //         {
    //             type: "github",
    //             link: "https://github.com/Y-vic",
    //         },
    //     ],
    // },
];



function split2render() {
    const split2body = document.getElementById("split2");
    split2body.innerHTML = "";
    split2data.forEach((item, _) => {
        var innerHTML = `
            <img loading="lazy" src="${item.image}" class="size-36 tablet:size-48 rounded-3xl"/>
            <h4>${item.name}</h4>
            <span>${item.note}</span>
            <div class="flex flex-row gap-3 flex-wrap">
        `;
        item.icon.forEach((i, _) => {
            innerHTML += `                
            <a href="${i.link}" target="_blank"> 
                <img loading="lazy" src="/assets/icon/${i.type}.png" class="size-6 hover:opacity-70"/> 
            </a>
        `;
        });
        innerHTML += `
            </div>
            <div class="border-b-2 border-o-white"></div>
        `;
        const person = document.createElement("div");
        person.className = "flex flex-col gap-3 pb-3 w-36 tablet:w-48";
        person.innerHTML = innerHTML;
        split2body.appendChild(person);
    });
}
