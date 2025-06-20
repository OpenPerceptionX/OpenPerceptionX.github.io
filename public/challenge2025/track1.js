const track1data = [
    {
        team: "NVIDIA",
        primary: "49.1124",
        country: "US",
        institution: "NVIDIA, Fudan University",
        award: "rank01",
        disqualified: false,
        links: ""
    },
    {
        team: "RB",
        primary: "45.0070",
        country: "CN",
        institution: "Bosch CR,  Tsinghua University",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "HAOMO.AI",
        primary: "44.5438",
        country: "CN",
        institution: "HAOMO.AI Technology Co., Ltd, Tsinghua University",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "NoName",
        primary: "43.9254",
        country: "CN",
        institution: "Institute of Automation, Chinese Academy of Sciences",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "test__",
        primary: "43.2231",
        country: "CN",
        institution: "-",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "AHHH",
        primary: "42.7971",
        country: "CN",
        institution: "-",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "SNU SPA Lab",
        primary: "42.5207",
        country: "KR",
        institution: "Seoul National University",
        award: "bulb", 
        disqualified: false,
        links: ""
    },
    {
        team: "NoName",
        primary: "41.7187",
        country: "CN",
        institution: "-",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "Simple",
        primary: "41.5534",
        country: "CN",
        institution: "IEIT",
        award: "blank", 
        disqualified: false,
        links: ""
    },
];


let track1sortDirection = "asc";
track1data.sort((a, b) => b.primary - a.primary);
index = 0
track1data.forEach((item, xxx) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
        index = index + 1;
    }
});



let track1currentPage = 1;
let track1pageSize = 10;
let track1sortColumn = null;



function track1render() {
    const track1tableBody = document.getElementById("track1table");
    track1tableBody.innerHTML = "";
    track1data.slice((track1currentPage - 1) * track1pageSize, track1currentPage * track1pageSize).forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="flex flex-row h-full gap-3 justify-start">
                    <span>${item.rank}</span>
                    <img src="/assets/icon/${item.award}.png" class="inlineflag"/>
                </div>
            </td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineflag"/></td>
            <td>${item.institution}</td>
            <td><b>${item.primary}</b></td>
            <td>${item.team}</td>
            <td class="flex gap-3">${item.links}</td>
        `;
        track1tableBody.appendChild(row);
    });
    document.getElementById("track1pages").innerHTML = `<b>${track1currentPage} / ${Math.ceil(track1data.length / track1pageSize)}</b>`;

    if (window.innerWidth < 1024) {
        document.getElementById("track1tablefoot").style.width = document.getElementById("track1table").offsetWidth;
    }
}



function track1sort(columnIndex, columnKey) {
    if (track1sortColumn === columnKey) {
        track1sortDirection = track1sortDirection === "asc" ? "desc" : "asc";
    } else {
        track1sortColumn = columnKey;
        track1sortDirection = "asc";
    }
    track1updateSortIcons(columnIndex);
    track1data.sort((a, b) => {
        if (track1sortDirection === "asc") {
            return a[columnKey] - b[columnKey];
        } else {
            return b[columnKey] - a[columnKey];
        }
    });
    track1currentPage = 1;
    track1render();
}



function track1updateSortIcons(columnIndex) {
    const sortIcons = document.querySelectorAll(".track1button");
    sortIcons.forEach((icon, index) => {
        if (index === columnIndex) {
            if (track1sortDirection === "asc") {
                icon.innerHTML = icon.innerHTML.replace("&nbsp;&nbsp;&nbsp;", "▲");
                icon.innerHTML = icon.innerHTML.replace("▼", "▲");
            } else {
                icon.innerHTML = icon.innerHTML.replace("&nbsp;&nbsp;&nbsp;", "▼");
                icon.innerHTML = icon.innerHTML.replace("▲", "▼");
            }
        } else {
            icon.innerHTML = icon.innerHTML.replace("▼", "&nbsp;&nbsp;&nbsp;");
            icon.innerHTML = icon.innerHTML.replace("▲", "&nbsp;&nbsp;&nbsp;");
        }
    });
}



function track1previous() {
    if (track1currentPage > 1) {
        track1currentPage--;
        track1render();
    }
}



function track1next() {
    if (track1currentPage < Math.ceil(track1data.length / track1pageSize)) {
        track1currentPage++;
        track1render();
    }
}
