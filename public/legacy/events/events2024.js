const events2024data = [
    {
        heading: "IEEE Standard P3474",
        subheading: "Human Intentions and AI Alignment",
        link: "https://sagroups.ieee.org/3474/",
        linkoption: 'target="_blank"',
        background: "/assets/event/ieeesa.jpg",
        backgroundoption: "bg-center",
        date: "2024 - ongoing",
    },
    {
        heading: "Challenge at PRCV 2024",
        subheading: "行車場景下認知與決策",
        link: "http://www.prcv.cn/?competition_130/",
        linkoption: 'target="_blank"',
        background: "/assets/event/Urumqi.jpg",
        backgroundoption: "bg-center",
        date: "October 18 - 20, 2024",
    },
    {
        heading: "Events at CVPR 2024",
        subheading: "&nbsp;",
        link: "/cvpr2024/",
        linkoption: '',
        background: "/assets/event/cvpr2024.jpg",
        backgroundoption: "bg-center",
        date: "June 17 - 21, 2024",
    },
    {
        heading: "Challenge 2024",
        subheading: "Autonomous Grand Challenge",
        link: "/challenge2024/",
        linkoption: '',
        background: "/assets/event/seattle_space_needle.jpg",
        backgroundoption: "bg-center",
        date: "June 17, 2024",
    },
    {
        heading: "端到端具身智能體",
        subheading: "技術研討會 & 講習班",
        link: "https://starleague.ai/event2024/",
        linkoption: 'target="_blank"',
        background: "/assets/event/shanghai_xuhuibinjiang.jpg",
        backgroundoption: "bg-center",
        date: "June 08 - 10, 2024",
    },
    {
        heading: "Workshop at VALSE 2024",
        subheading: "端到端自動駕駛論壇",
        link: "/valse2024/workshop/",
        linkoption: '',
        background: "/assets/event/chongqing.jpg",
        backgroundoption: "bg-center",
        date: "May 07, 2024",
    },
];



function events2024render() {
    const events2024body = document.getElementById("events2024");
    events2024body.innerHTML = "";
    events2024data.forEach((item, _) => {
        var innerHTML = `
            <a ${item.linkoption} href="${item.link}" class="hover:opacity-70">
                <img loading="lazy" src='${item.background}' class="w-full h-72 object-cover object-center rounded-t-3xl"/>
                <div class="felx flex-col space-y-6 p-6 laptop:p-10">
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
