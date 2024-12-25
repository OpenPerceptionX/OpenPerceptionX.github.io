const split1data = [
    {
        name: "Hongyang Li",
        link: "https://lihongyang.info",
        image: "/assets/person/hongyang_li.jpg",
        note: "Autonomous Driving & Embodied AI",
        icon: [
            {
                type: "home",
                link: "https://lihongyang.info/"
            },
            {
                type: "home",
                link: "https://lihongyang.info/"
            },
        ],
    },
];



function split1render() {
    const split1body = document.getElementById("split1");
    split1body.innerHTML = "";
    split1data.forEach((item, _) => {
        const person = document.createElement("div");
        person.className = "flex flex-col gap-3 pb-3 border-b-2 border-o-white w-40 tablet:w-48";
        person.innerHTML = `
            <a href="${item.link}" target="_blank" class="hover:opacity-70">
                <img src="${item.image}" class="size-40 tablet:size-48 rounded-3xl"/>
            </a>
            <h4>${item.name}</h4>
            <span>${item.note}</span>
            <div class="flex flex-row gap-3 flex-wrap">
        `;
        item.icon.forEach((i, _) => {
            person.innerHTML += `                
            <a href="${i.link}" target="_blank"> 
                <img src="/assets/icon/${i.type}.png" class="size-6 hover:opacity-70"/> 
            </a>
        `;
        });
        person.innerHTML += `
            </div>
        `,
        split1body.appendChild(person);
    });
}
