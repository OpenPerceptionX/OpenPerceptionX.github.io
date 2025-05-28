const events2022data = [
    {
        heading: "Workshop at PRCV 2022",
        subheading: "自動駕駛感知技術發展趨勢與探索<br><br>",
        link: "https://zhuanlan.zhihu.com/p/596218293",
        linkoption: 'target="_blank"',
        background: "/assets/event/prcv2022.jpg",
        backgroundoption: "bg-center",
        date: "December 24, 2022",
    },
    {
        heading: "Waymo Global Challenge at CVPR 2022",
        subheading: "Top First Place",
        link: "https://zhuanlan.zhihu.com/p/531987378",
        linkoption: 'target="_blank"',
        background: "/assets/event/waymo2022.jpg",
        backgroundoption: "bg-center",
        date: "June 20, 2022",
    },
];



function events2022render() {
    const events2022body = document.getElementById("events2022");
    events2022body.innerHTML = "";
    events2022data.forEach((item, _) => {
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
        events2022body.appendChild(person);
    });
}
