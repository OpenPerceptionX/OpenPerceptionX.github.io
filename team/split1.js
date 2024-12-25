const split1data = [
    {
        name: "Hongyang Li",
        image: "/assets/person/hongyang_li.jpg",
        note: "Autonomous Driving & Embodied AI",
        icon: [
            {
                type: "home",
                link: "https://lihongyang.info/"
            },
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=Hfrih1EAAAAJ"
            },
            {
                type: "email",
                link: "mailto:hy@opendrivelab.com"
            },
        ],
    },
    {
        name: "Li Chen",
        image: "/assets/person/li_chen.jpg",
        note: "End-to-end Autonomous Driving & Embodied AI",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=ulZxvY0AAAAJ"
            },
            {
                type: "email",
                link: "mailto:lichen@opendrivelab.com"
            },
            {
                type: "github",
                link: "https://github.com/ilnehc"
            },
            {
                type: "x",
                link: "https://twitter.com/ilnehc"
            },
        ],
    },
    {
        name: "Zetong Yang",
        image: "/assets/person/zetong_yang.jpg",
        note: "Autonomous Driving",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=oPiZSVYAAAAJ"
            },
            {
                type: "email",
                link: "mailto:yangzetong@opendrivelab.com"
            },
            {
                type: "github",
                link: "https://github.com/tomztyang"
            },
        ],
    },
    {
        name: "Huijie Wang",
        image: "/assets/person/huijie_wang.jpg",
        note: "Ecosystem",
        icon: [
            {
                type: "home",
                link: "https://faikit.github.io/"
            },
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=Xg4cp-EAAAAJ"
            },
            {
                type: "email",
                link: "mailto:wanghuijie@opendrivelab.com"
            },
            {
                type: "github",
                link: "https://github.com/faikit"
            },
            {
                type: "x",
                link: "https://twitter.com/wongfaikit"
            },
        ],
    },
    {
        name: "Chonghao Sima",
        image: "/assets/person/chonghao_sima.jpg",
        note: "Autonomous Driving",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=dgYJ6esAAAAJ"
            },
            {
                type: "email",
                link: "mailto:smch@opendrivelab.com"
            },
            {
                type: "github",
                link: "https://github.com/ChonghaoSima"
            },
            {
                type: "x",
                link: "https://twitter.com/smch_1127"
            },
        ],
    },
];



function split1render() {
    const split1body = document.getElementById("split1");
    split1body.innerHTML = "";
    split1data.forEach((item, _) => {
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
        split1body.appendChild(person);
    });
}
