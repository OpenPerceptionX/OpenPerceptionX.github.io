const split1data = [
    {
        name: "Hongyang Li",
        image: "/assets/person/hongyang_li.jpg",
        note: "Autonomous Driving & Embodied AI",
        image_s: "/assets/person/hongyang_li_s.jpg",
        page: "https://lihongyang.info/",
        icon: [
            {
                type: "webpage",
                link: "https://lihongyang.info/",
            },
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=Hfrih1EAAAAJ",
            },
            {
                type: "email",
                link: "mailto:hy@opendrivelab.com",
            },
        ],
        tag: "",
    },
    {
        name: "Li Chen",
        image: "/assets/person/li_chen.jpg",
        note: "End-to-end Autonomous Driving & Embodied AI",
        image_s: "/assets/person/li_chen_s.jpg",
        page: "https://scholar.google.com/citations?user=ulZxvY0AAAAJ",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=ulZxvY0AAAAJ",
            },
            {
                type: "email",
                link: "mailto:lichen@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/ilnehc",
            },
            {
                type: "x",
                link: "https://twitter.com/ilnehc",
            },
        ],
        tag: "Excellent Scholarship",
    },
    {
        name: "Huijie Wang",
        image: "/assets/person/huijie_wang.jpg",
        note: "Ecosystem",
        image_s: "/assets/person/huijie_wang_s.jpg",
        page: "https://faikit.github.io/",
        icon: [
            {
                type: "webpage",
                link: "https://faikit.github.io/",
            },
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=Xg4cp-EAAAAJ",
            },
            {
                type: "email",
                link: "mailto:huijie.wang@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/faikit",
            },
            {
                type: "x",
                link: "https://twitter.com/wongfaikit",
            },
        ],
        tag: "",
    },
    {
        name: "Chonghao Sima",
        image: "/assets/person/chonghao_sima.jpg",
        note: "Autonomous Driving",
        image_s: "/assets/person/chonghao_sima_s.jpg",
        page: "https://scholar.google.com/citations?user=dgYJ6esAAAAJ",
        icon: [
            {
                type: "scholar",
                link: "https://scholar.google.com/citations?user=dgYJ6esAAAAJ",
            },
            {
                type: "email",
                link: "mailto:smch@opendrivelab.com",
            },
            {
                type: "github",
                link: "https://github.com/ChonghaoSima",
            },
            {
                type: "x",
                link: "https://twitter.com/smch_1127",
            },
        ],
        tag: "",
    },
];



function split1render() {
    const split1body = document.getElementById("split1");
    split1body.innerHTML = "";
    split1data.forEach((item, _) => {
        var innerHTML = `
            <a class="group" href="${item.page}" target="_blank">
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
        // if (item.tag != "") {
        //     innerHTML += `
        //     <div class="absolute size-36 tablet:size-48 flex flex-col justify-end">
        //         <div class="flex flex-row justify-end">
        //             <span class=" m-2 p-1 pl-2 pr-2 rounded-xl bg-o-blue text-white select-none text-xs">${item.tag}</span>
        //          </div>
        //     </div>
        // `;
        // }
        const person = document.createElement("div");
        person.className = "flex flex-col gap-3 pb-3 w-36 tablet:w-48";
        person.innerHTML = innerHTML;
        split1body.appendChild(person);
    });
}
