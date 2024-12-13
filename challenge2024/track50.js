const track50data = [
    {
        team: "Tuebingen_AI",
        primary: "5.564",
        country: "DE",
        institution: "University of Tübingen",
        award: "rank02",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/carla_Tuebingen AI.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>&nbsp;<a href='https://arxiv.org/abs/2412.09602' target='_blank'><img class='inlineimg' src='/assets/icon/arxiv.png'/></a>"
    },
    {
        team: "LLM4AD",
        primary: "5.040",
        country: "GB",
        institution: "Wayve / University of Tübingen",
        award: "blub, rank01",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/carla_LLM4AD.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>&nbsp;<a href='https://arxiv.org/abs/2406.10165' target='_blank'><img class='inlineimg' src='/assets/icon/arxiv.png'/></a>"
    },
    {
        team: "Kyber-E2E",
        primary: "3.471",
        country: "CN",
        institution: "Huawei<br>华为",
        award: "blank",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/carla_Kyber-E2E.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>"
    },
    {
        team: "greatone",
        primary: "2.168",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "LRM",
        primary: "0.707",
        country: "BR",
        institution: "Universidade de São Paulo",
        award: "blank",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/carla_LRM.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>"
    },
];


let track50sortDirection = "asc";
track50data.sort((a, b) => b.primary - a.primary);
index = 0
track50data.forEach((item, xxx) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
        index = index + 1;
    }
});



let track50currentPage = 1;
let track50pageSize = 10;
let track50sortColumn = null;



function track50render() {
    const track50tableBody = document.getElementById("track50table");
    track50tableBody.innerHTML = "";
    track50data.slice((track50currentPage - 1) * track50pageSize, track50currentPage * track50pageSize).forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.rank} <img src="/assets/icon/${item.award}.png" class="inlineflag"/></td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineflag"/> ${item.country}</td>
            <td>${item.institution}</td>
            <td><b>${item.primary}</b></td>
            <td>${item.team}</td>
            <td>${item.links}</td>
        `;
        track50tableBody.appendChild(row);
    });
    document.getElementById("track50pages").innerHTML = `<b>${track50currentPage} / ${Math.ceil(track50data.length / track50pageSize)}</b>`;

    if (window.innerWidth < 1024) {
        document.getElementById("track50tablefoot").style.width = document.getElementById("track50table").offsetWidth;
    }
}



function track50sort(columnIndex, columnKey) {
    if (track50sortColumn === columnKey) {
        track50sortDirection = track50sortDirection === "asc" ? "desc" : "asc";
    } else {
        track50sortColumn = columnKey;
        track50sortDirection = "asc";
    }
    track50updateSortIcons(columnIndex);
    track50data.sort((a, b) => {
        if (track50sortDirection === "asc") {
            return a[columnKey] - b[columnKey];
        } else {
            return b[columnKey] - a[columnKey];
        }
    });
    track50currentPage = 1;
    track50render();
}



function track50updateSortIcons(columnIndex) {
    const sortIcons = document.querySelectorAll(".track50button");
    sortIcons.forEach((icon, index) => {
        if (index === columnIndex) {
            if (track50sortDirection === "asc") {
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



function track50previous() {
    if (track50currentPage > 1) {
        track50currentPage--;
        track50render();
    }
}



function track50next() {
    if (track50currentPage < Math.ceil(track50data.length / track50pageSize)) {
        track50currentPage++;
        track50render();
    }
}
