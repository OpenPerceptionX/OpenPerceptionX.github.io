const events2023data = [
    {
        heading: "CVPR 2023 Workshop",
        subheading: "End-to-End Autonomous Driving: Emerging Tasks and Challenges",
        link: "/e2ead/cvpr23.html",
        linkoption: '',
        background: "/ui2023/cvpr2023/img/workshop/banner.jpg",
        backgroundoption: "bg-center",
        date: "June 18",
    },
    {
        heading: "CVPR 2023 Challenge",
        subheading: "Autonomous Driving Challenge",
        link: "/challenge2023/",
        linkoption: '',
        background: "/assets/event/cvpr2023_challenge.jpg",
        backgroundoption: "bg-center",
        date: "June 18",
    },
    {
        heading: "行业大模型论坛<br>暨<br>国际挑战赛分享会",
        subheading: "",
        link: "/e2ead/cvpr23_CN.html",
        linkoption: '',
        background: "/ui2023/cvpr2023/img/beijing/beijing.jpg",
        backgroundoption: "bg-center",
        date: "June 18",
    },
    {
        heading: "ICLR 2023 Workshop",
        subheading: "Scene Representations for Autonomous Driving",
        link: "/sr4ad/iclr23.html",
        linkoption: '',
        background: "/ui2023/cvpr2023/iclr2023/banner.jpg",
        backgroundoption: "bg-center",
        date: "May 05",
    },
    {
        heading: "GAIDC 2023",
        subheading: "数联新出行 开源新发展",
        link: "https://mp.weixin.qq.com/s/hr4WxKO-9ZOJ-zea98-E3A",
        linkoption: 'target="_blank"',
        background: "/assets/event/gaidc2023.jpg",
        backgroundoption: "bg-center",
        date: "February 26",
    },
];



function events2023render() {
    const events2023body = document.getElementById("events2023");
    events2023body.innerHTML = "";
    events2023data.forEach((item, _) => {
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
                    <h4 class="text-o-blue text-right pr-3 border-r-4 border-o-blue">
                        ${item.date}
                    </h4>
                </div>
            </a>
        `;
        const person = document.createElement("div");
        person.className = "flex flex-col rounded-3xl border-2 border-o-white w-full laptop:w-128";
        person.innerHTML = innerHTML;
        events2023body.appendChild(person);
    });
}
