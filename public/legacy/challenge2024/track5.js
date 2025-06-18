const track5data = [
    {
        team: "LLM4AD",
        primary: "6.865",
        country: "GB",
        institution: "Wayve / University of Tübingen",
        award: "blub, rank01",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/carla_LLM4AD.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>&nbsp;<a href='https://arxiv.org/abs/2406.10165' target='_blank'><img class='inlineimg' src='/assets/icon/arxiv.png'/></a>"
    },
    {
        team: "Tuebingen_AI",
        primary: "5.183",
        country: "DE",
        institution: "University of Tübingen",
        award: "rank02",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/carla_Tuebingen AI.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>&nbsp;<a href='https://arxiv.org/abs/2412.09602' target='_blank'><img class='inlineimg' src='/assets/icon/arxiv.png'/></a>"
    },
    {
        team: "LRM",
        primary: "0.719",
        country: "BR",
        institution: "Universidade de São Paulo",
        award: "blank",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/carla_LRM.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>"
    },
];


let track5sortDirection = "asc";
track5data.sort((a, b) => b.primary - a.primary);
index = 0
track5data.forEach((item, xxx) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
        index = index + 1;
    }
});



let track5currentPage = 1;
let track5pageSize = 10;
let track5sortColumn = null;



function track5render() {
    const track5tableBody = document.getElementById("track5table");
    track5tableBody.innerHTML = "";
    track5data.slice((track5currentPage - 1) * track5pageSize, track5currentPage * track5pageSize).forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.rank} <img src="/assets/icon/${item.award}.png" class="inlineflag"/></td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineflag"/> ${item.country}</td>
            <td>${item.institution}</td>
            <td><b>${item.primary}</b></td>
            <td>${item.team}</td>
            <td>${item.links}</td>
        `;
        track5tableBody.appendChild(row);
    });
    document.getElementById("track5pages").innerHTML = `<b>${track5currentPage} / ${Math.ceil(track5data.length / track5pageSize)}</b>`;

    if (window.innerWidth < 1024) {
        document.getElementById("track5tablefoot").style.width = document.getElementById("track5table").offsetWidth;
    }
}



function track5sort(columnIndex, columnKey) {
    if (track5sortColumn === columnKey) {
        track5sortDirection = track5sortDirection === "asc" ? "desc" : "asc";
    } else {
        track5sortColumn = columnKey;
        track5sortDirection = "asc";
    }
    track5updateSortIcons(columnIndex);
    track5data.sort((a, b) => {
        if (track5sortDirection === "asc") {
            return a[columnKey] - b[columnKey];
        } else {
            return b[columnKey] - a[columnKey];
        }
    });
    track5currentPage = 1;
    track5render();
}



function track5updateSortIcons(columnIndex) {
    const sortIcons = document.querySelectorAll(".track5button");
    sortIcons.forEach((icon, index) => {
        if (index === columnIndex) {
            if (track5sortDirection === "asc") {
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



function track5previous() {
    if (track5currentPage > 1) {
        track5currentPage--;
        track5render();
    }
}



function track5next() {
    if (track5currentPage < Math.ceil(track5data.length / track5pageSize)) {
        track5currentPage++;
        track5render();
    }
}
