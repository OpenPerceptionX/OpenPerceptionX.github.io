const track2data = [
    {
        team: "-",
        primary: 1,
        metric1: 1,
        metric2: 1,
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
];


let track2sortDirection = "desc";
track2data.sort((a, b) => - b.primary + a.primary);
index = 0
track2data.forEach((item, xxx) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
        index = index + 1;
    }
});



let track2currentPage = 1;
let track2pageSize = 10;
let track2sortColumn = null;



function track2render() {
    const track2tableBody = document.getElementById("track2table");
    track2tableBody.innerHTML = "";
    track2data.slice((track2currentPage - 1) * track2pageSize, track2currentPage * track2pageSize).forEach((item, index) => {
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
        track2tableBody.appendChild(row);
    });
    document.getElementById("track2pages").innerHTML = `<b>${track2currentPage} / ${Math.ceil(track2data.length / track2pageSize)}</b>`;

    if (window.innerWidth < 1024) {
        document.getElementById("track2tablefoot").style.width = document.getElementById("track2table").offsetWidth;
    }
}



function track2sort(columnIndex, columnKey) {
    if (track2sortColumn === columnKey) {
        track2sortDirection = track2sortDirection === "desc" ? "asc" : "desc";
    } else {
        track2sortColumn = columnKey;
        track2sortDirection = "desc";
    }
    track2updateSortIcons(columnIndex);
    track2data.sort((a, b) => {
        if (track2sortDirection === "asc") {
            return a[columnKey] - b[columnKey];
        } else {
            return b[columnKey] - a[columnKey];
        }
    });
    track2currentPage = 1;
    track2render();
}



function track2updateSortIcons(columnIndex) {
    const sortIcons = document.querySelectorAll(".track2button");
    sortIcons.forEach((icon, index) => {
        if (index === columnIndex) {
            if (track2sortDirection === "asc") {
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



function track2previous() {
    if (track2currentPage > 1) {
        track2currentPage--;
        track2render();
    }
}



function track2next() {
    if (track2currentPage < Math.ceil(track2data.length / track2pageSize)) {
        track2currentPage++;
        track2render();
    }
}
