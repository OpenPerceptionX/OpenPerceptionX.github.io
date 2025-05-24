const events2023data = [
    {
        heading: "Workshop at CVPR 2023",
        subheading: "End-to-End Autonomous Driving: Emerging Tasks and Challenges",
        link: "/cvpr2023/workshop/",
        linkoption: '',
        background: "/assets/event/cvpr2023workshop.jpg",
        backgroundoption: "bg-center",
        date: "June 18, 2023",
    },
    {
        heading: "Challenge 2023",
        subheading: "Autonomous Driving Challenge<br><br>",
        link: "/challenge2023/",
        linkoption: '',
        background: "/assets/event/cvpr2023_challenge.jpg",
        backgroundoption: "bg-center",
        date: "June 18, 2023",
    },
    {
        heading: "行業大模型論壇<br>暨<br>國際挑戰賽分享會",
        subheading: "",
        link: "/event2023/",
        linkoption: '',
        background: "/assets/event/beijing.jpg",
        backgroundoption: "bg-center",
        date: "June 18, 2023",
    },
    {
        heading: "Workshop at ICLR 2023",
        subheading: "Scene Representations for Autonomous Driving",
        link: "/iclr2023/workshop/",
        linkoption: '',
        background: "/assets/event/iclr2023workshop.jpg",
        backgroundoption: "bg-center",
        date: "May 05, 2023",
    },
    {
        heading: "GAIDC 2023",
        subheading: "數聯新出行 開源新發展",
        link: "https://mp.weixin.qq.com/s/hr4WxKO-9ZOJ-zea98-E3A",
        linkoption: 'target="_blank"',
        background: "/assets/event/gaidc2023.jpg",
        backgroundoption: "bg-center",
        date: "February 26, 2023",
    },
];



function events2023render() {
    const events2023body = document.getElementById("events2023");
    events2023body.innerHTML = "";
    events2023data.forEach((item, _) => {
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
        events2023body.appendChild(person);
    });
}
