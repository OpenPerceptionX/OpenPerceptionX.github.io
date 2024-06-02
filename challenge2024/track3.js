const track3data = [
    {
        team: "IEIT-AD",
        primary: "0.4890",
        metric1: "0.4605",
        metric2: "0.2541",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "SaicOcc",
        primary: "0.4457",
        metric1: "0.4307",
        metric2: "0.4193",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "UM-IT",
        primary: "0.4431",
        metric1: "0.4503",
        metric2: "0.6214",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Herman1995",
        primary: "0.4265",
        metric1: "0.4320",
        metric2: "0.6236",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Harbour-Chips",
        primary: "0.4089",
        metric1: "0.3776",
        metric2: "0.3092",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Ming9898",
        primary: "0.3930",
        metric1: "0.3738",
        metric2: "0.4347",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ARM330",
        primary: "0.3434",
        metric1: "0.3160",
        metric2: "0.4094",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "wdg9527",
        primary: "0.3275",
        metric1: "0.2996",
        metric2: "0.4211",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "NJVLab",
        primary: "0.3218",
        metric1: "0.3154",
        metric2: "0.6202",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "xyq019971",
        primary: "0.3048",
        metric1: "0.2952",
        metric2: "0.6088",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "HCMUT",
        primary: "0.2600",
        metric1: "0.2521",
        metric2: "0.6688",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "beintelli",
        primary: "0.2585",
        metric1: "0.2378",
        metric2: "0.5551",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "SYI team",
        primary: "0.2566",
        metric1: "0.2403",
        metric2: "0.5965",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "SYI team",
        primary: "0.2566",
        metric1: "0.2403",
        metric2: "0.5965",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Laoda24vsYaoxi",
        primary: "0.2497",
        metric1: "0.2314",
        metric2: "0.5854",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "danking",
        primary: "0.2485",
        metric1: "0.2362",
        metric2: "0.6408",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Haobo Zhang",
        primary: "0.2479",
        metric1: "0.2344",
        metric2: "0.6302",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "gouziwang1",
        primary: "0.2183",
        metric1: "0.2038",
        metric2: "0.6512",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "CUMT",
        primary: "0.1940",
        metric1: "0.1785",
        metric2: "0.6659",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "RainbowJin",
        primary: "0.0884",
        metric1: "0.0559",
        metric2: "0.6192",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ClearLove7777",
        primary: "0.0018",
        metric1: "0.0020",
        metric2: "10.8684",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "yuki",
        primary: "0.0015",
        metric1: "0.0017",
        metric2: "11.9385",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    }
];


let track3sortDirection = "asc";
track3data.sort((a, b) => b.primary - a.primary);
index = 0
track3data.forEach((item, xxx) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
        index = index + 1;
    }
});



let track3currentPage = 1;
let track3pageSize = 10;
let track3sortColumn = null;



function track3render() {
    const track3tableBody = document.getElementById("track3table");
    track3tableBody.innerHTML = "";
    track3data.slice((track3currentPage - 1) * track3pageSize, track3currentPage * track3pageSize).forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.rank} <img src="/assets/icon/${item.award}.png" class="inlineimg"/></td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineimg"/> ${item.country}</td>
            <td>${item.institution}</td>
            <td><b>${item.primary}</b></td>
            <td>${item.team}</td>
            <td>${item.links}</td>
            <td>${item.metric1}</td>
            <td>${item.metric2}</td>
        `;
        track3tableBody.appendChild(row);
    });
    document.getElementById("track3pages").innerHTML = `<b>${track3currentPage} / ${Math.ceil(track3data.length / track3pageSize)}</b>`;

    if (window.innerWidth < 1024) {
        document.getElementById("track3tablefoot").style.width = document.getElementById("track3table").offsetWidth;
    }
}



function track3sort(columnIndex, columnKey) {
    if (track3sortColumn === columnKey) {
        track3sortDirection = track3sortDirection === "asc" ? "desc" : "asc";
    } else {
        track3sortColumn = columnKey;
        track3sortDirection = "asc";
    }
    track3updateSortIcons(columnIndex);
    track3data.sort((a, b) => {
        if (track3sortDirection === "asc") {
            return a[columnKey] - b[columnKey];
        } else {
            return b[columnKey] - a[columnKey];
        }
    });
    track3currentPage = 1;
    track3render();
}



function track3updateSortIcons(columnIndex) {
    const sortIcons = document.querySelectorAll(".track3button");
    sortIcons.forEach((icon, index) => {
        if (index === columnIndex) {
            if (track3sortDirection === "asc") {
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



function track3previous() {
    if (track3currentPage > 1) {
        track3currentPage--;
        track3render();
    }
}



function track3next() {
    if (track3currentPage < Math.ceil(track3data.length / track3pageSize)) {
        track3currentPage++;
        track3render();
    }
}
