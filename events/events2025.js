const events2025data = [
    {
        heading: "Challenge 2025",
        subheading: "Coming Soon",
        link: "",
        linkoption: '',
        background: "/assets/event/lHlT9joqwXjGv4c4pIGgK1qlJOvwEEtD.jpg",
        backgroundoption: "bg-center",
        date: "",
    },
    {
        heading: "Events at CVPR 2025",
        subheading: "Coming Soon",
        link: "",
        linkoption: '',
        background: "/assets/event/nashville_night.jpg",
        backgroundoption: "bg-left",
        date: "June 11 -15",
    },
];



function events2025render() {
    const events2025body = document.getElementById("events2025");
    events2025body.innerHTML = "";
    events2025data.forEach((item, _) => {
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
        events2025body.appendChild(person);
    });
}
