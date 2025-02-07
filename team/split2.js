const split2data = [
    {
        name: "Tianyu Li",
        image: "/assets/person/tianyu_li.jpg",
        note: "復旦大學（23級聯培）",
        image_s: "/assets/person/tianyu_li_s.jpg",
        page: "https://scholar.google.com/citations?user=X6vTmEMAAAAJ",
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
        tag: "Best Mentor and Connection<br><br>最佳指導與外部連接獎",
        tagshort: "Best Mentor & Connection",
    },
    {
        name: "Qingwen Bu",
        image: "/assets/person/qingwen_bu.jpg",
        note: "上海交通大學（23級聯培）",
        image_s: "/assets/person/qingwen_bu_s.jpg",
        page: "https://scholar.google.com/citations?user=-JCRysgAAAAJ",
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
        tag: "Best Research<br><br>最佳科研獎",
        tagshort: "Best Research",
    },
    {
        name: "Hanxue Zhang",
        image: "/assets/person/hanxue_zhang.jpg",
        note: "上海交通大學（24級聯培）",
        image_s: "/assets/person/hanxue_zhang_s.jpg",
        page: "https://scholar.google.com/citations?user=vy5r8rMAAAAJ",
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
        tag: "",
    },
    {
        name: "Chengen Xie",
        image: "/assets/person/chengen_xie.jpg",
        note: "上海交通大學（24級聯培）",
        image_s: "/assets/person/chengen_xie_s.jpg",
        page: "https://scholar.google.com/citations?user=-Sk1x_gAAAAJ",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=-Sk1x_gAAAAJ",
            },
            {
                type: "email",
                link: "mailto:xiechengen@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/ChengenXie",
            },
        ],
        tag: "Outstanding Servant<br><br>傑出服務獎",
        tagshort: "Outstanding Servant",
    },
    {
        name: "Haoran Jiang",
        image: "/assets/person/haoran_jiang.jpg",
        note: "復旦大學（24級聯培）",
        image_s: "/assets/person/haoran_jiang_s.jpg",
        page: "https://scholar.google.com/citations?user=KYzm-k0AAAAJ",
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
        tag: "",
    },
];



function split2render() {
    const split2body = document.getElementById("split2");
    split2body.innerHTML = "";
    split2data.forEach((item, _) => {
        var innerHTML = `
            <a href="${item.page}" target="_blank">
                <img loading="lazy" src="${item.image_s}" class="size-36 tablet:size-48 rounded-3xl hidden group-hover:block group-hover:absolute"/>
                <img loading="lazy" src="${item.image}" class="size-36 tablet:size-48 rounded-3xl"/>
            </a>
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
        // tag
        if (item.tag != "") {
            innerHTML += `
            <a class="absolute size-36 tablet:size-48 flex flex-col justify-end" href="${item.page}" target="_blank">
                <div class="flex flex-row justify-end">
                    <span class="m-2 p-1 pl-2 pr-2 rounded-xl bg-o-blue text-white select-none text-xs group-hover:hidden">${item.tagshort}</span>
                    <span class="m-2 p-2 rounded-xl bg-o-blue text-white select-none text-xs hidden group-hover:block">${item.tag}</span>
                    </div>
            </a>
            `;
        }
        const person = document.createElement("div");
        person.className = "flex flex-col gap-3 pb-3 w-36 tablet:w-48 group";
        person.innerHTML = innerHTML;
        split2body.appendChild(person);
    });
}
