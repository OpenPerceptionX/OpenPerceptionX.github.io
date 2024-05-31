const track6data = [
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


let track6sortDirection = "asc";
track6data.sort((a, b) => b.primary - a.primary);
track6data.forEach((item, index) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
    }
});



let track6currentPage = 1;
let track6pageSize = 10;
let track6sortColumn = null;



function track6render() {
    const track6tableBody = document.getElementById("track6table");
    track6tableBody.innerHTML = "";
    track6data.slice((track6currentPage - 1) * track6pageSize, track6currentPage * track6pageSize).forEach((item, index) => {
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
        track6tableBody.appendChild(row);
    });
    document.getElementById("track6pages").innerHTML = `<b>${track6currentPage} / ${Math.ceil(track6data.length / track6pageSize)}</b>`;
}



function track6sort(columnIndex, columnKey) {
    if (track6sortColumn === columnKey) {
        track6sortDirection = track6sortDirection === "asc" ? "desc" : "asc";
    } else {
        track6sortColumn = columnKey;
        track6sortDirection = "asc";
    }
    track6updateSortIcons(columnIndex);
    track6data.sort((a, b) => {
        if (track6sortDirection === "asc") {
            return a[columnKey] - b[columnKey];
        } else {
            return b[columnKey] - a[columnKey];
        }
    });
    track6currentPage = 1;
    track6render();
}



function track6updateSortIcons(columnIndex) {
    const sortIcons = document.querySelectorAll(".track6button");
    sortIcons.forEach((icon, index) => {
        if (index === columnIndex) {
            if (track6sortDirection === "asc") {
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



function track6previous() {
    if (track6currentPage > 1) {
        track6currentPage--;
        track6render();
    }
}



function track6next() {
    if (track6currentPage < Math.ceil(track6data.length / track6pageSize)) {
        track6currentPage++;
        track6render();
    }
}
