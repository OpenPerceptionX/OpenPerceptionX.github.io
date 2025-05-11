const events2025data = [
    {
        heading: "Workshop at ICCV 2025",
        subheading: "&nbsp;",
        link: "/iccv2025/workshop/",
        linkoption: '',
        background: "/assets/event/honolulu.jpg",
        backgroundoption: "bg-left",
        date: "October, 2025",
    },
    {
        heading: "Challenge 2025",
        subheading: "Autonomous Grand Challenge",
        link: "/challenge2025/",
        linkoption: '',
        background: "/assets/event/lHlT9joqwXjGv4c4pIGgK1qlJOvwEEtD.jpg",
        backgroundoption: "bg-center",
        date: "2025",
    },
    {
        heading: "Events at CVPR 2025",
        subheading: "&nbsp;",
        link: "/cvpr2025/",
        linkoption: '',
        background: "/assets/event/nashville_river.jpg",
        backgroundoption: "bg-left",
        date: "June 11 -15, 2025",
    },
];



function events2025render() {
    const events2025body = document.getElementById("events2025");
    events2025body.innerHTML = "";
    events2025data.forEach((item, _) => {
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
        events2025body.appendChild(person);
    });
}
