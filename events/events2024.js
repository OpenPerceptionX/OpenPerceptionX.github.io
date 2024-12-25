const events2024data = [
    {
        heading: "IEEE Standard P3474",
        subheading: "Human Intentions and AI Alignment",
        link: "https://sagroups.ieee.org/3474/",
        linkoption: 'target="_blank"',
        background: "/assets/event/ieeesa.jpg",
        backgroundoption: "bg-center",
        date: "",
    },
    {
        heading: "PRCV 2024 Challenge",
        subheading: "行车场景下认知与决策",
        link: "http://www.prcv.cn/?competition_130/",
        linkoption: 'target="_blank"',
        background: "/assets/event/Urumqi.jpg",
        backgroundoption: "bg-center",
        date: "October 18 - 20",
    },
    {
        heading: "Events at CVPR 2024",
        subheading: "&nbsp;",
        link: "/cvpr2024/",
        linkoption: '',
        background: "/assets/event/cvpr2024.jpg",
        backgroundoption: "bg-center",
        date: "June 17 - 21",
    },
    {
        heading: "Challenge 2024",
        subheading: "Autonomous Grand Challenge",
        link: "/challenge2024/",
        linkoption: '',
        background: "/assets/background/seattle_space_needle.jpg",
        backgroundoption: "bg-center",
        date: "June 17",
    },
    {
        heading: "端到端具身智能体",
        subheading: "技术研讨会 & 讲习班",
        link: "https://starleague.ai/event2024/",
        linkoption: 'target="_blank"',
        background: "/assets/background/shanghai_xuhuibinjiang.jpg",
        backgroundoption: "bg-center",
        date: "June 08 - 10",
    },
    {
        heading: "VALSE 2024 Workshop",
        subheading: "端到端自动驾驶论坛",
        link: "/valse2024/",
        linkoption: '',
        background: "/assets/background/chongqing.jpg",
        backgroundoption: "bg-center",
        date: "May 07",
    },
];



function events2024render() {
    const events2024body = document.getElementById("events2024");
    events2024body.innerHTML = "";
    events2024data.forEach((item, _) => {
        var innerHTML = `
            <a ${item.linkoption} href="${item.link}" class="hover:opacity-70">
                <div class="w-full h-72 bg-[url('${item.background}')] ${item.backgroundoption} bg-cover rounded-t-3xl"></div>
                <div class="felx flex-col space-y-6 p-10">
                    <h3>
                        ${item.heading}
                    </h3>
                    <h4>
                        ${item.subheading}
                    </h4>
                    <h4 class="text-o-blue">
                        ${item.date}
                    </h4>
                </div>
            </a>
        `;
        const person = document.createElement("div");
        person.className = "flex flex-col rounded-3xl border-2 border-o-white w-full laptop:w-128";
        person.innerHTML = innerHTML;
        events2024body.appendChild(person);
    });
}
