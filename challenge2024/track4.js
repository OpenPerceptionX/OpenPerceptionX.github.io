const track4data = [
    {
        team: "-",
        primary: 1,
        metric1: 1,
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
];


let track4sortDirection = "asc";
track4data.sort((a, b) => b.primary - a.primary);
track4data.forEach((item, index) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
    }
});



let track4currentPage = 1;
let track4pageSize = 10;
let track4sortColumn = null;



function track4render() {
    const track4tableBody = document.getElementById("track4table");
    track4tableBody.innerHTML = "";
    track4data.slice((track4currentPage - 1) * track4pageSize, track4currentPage * track4pageSize).forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.rank} <img src="/assets/icon/${item.award}.png" class="inlineimg"/></td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineimg"/> ${item.country}</td>
            <td>${item.institution}</td>
            <td><b>${item.primary}</b></td>
            <td>${item.team}</td>
            <td>${item.links}</td>
            <td>${item.metric1}</td>
        `;
        track4tableBody.appendChild(row);
    });
    document.getElementById("track4pages").innerHTML = `<b>${track4currentPage} / ${Math.ceil(track4data.length / track4pageSize)}</b>`;

    if (window.innerWidth < 1024) {
        document.getElementById("track4tablefoot").style.width = document.getElementById("track4table").offsetWidth - 130;
    }
}



function track4sort(columnIndex, columnKey) {
    if (track4sortColumn === columnKey) {
        track4sortDirection = track4sortDirection === "asc" ? "desc" : "asc";
    } else {
        track4sortColumn = columnKey;
        track4sortDirection = "asc";
    }
    track4updateSortIcons(columnIndex);
    track4data.sort((a, b) => {
        if (track4sortDirection === "asc") {
            return a[columnKey] - b[columnKey];
        } else {
            return b[columnKey] - a[columnKey];
        }
    });
    track4currentPage = 1;
    track4render();
}



function track4updateSortIcons(columnIndex) {
    const sortIcons = document.querySelectorAll(".track4button");
    sortIcons.forEach((icon, index) => {
        if (index === columnIndex) {
            if (track4sortDirection === "asc") {
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



function track4previous() {
    if (track4currentPage > 1) {
        track4currentPage--;
        track4render();
    }
}



function track4next() {
    if (track4currentPage < Math.ceil(track4data.length / track4pageSize)) {
        track4currentPage++;
        track4render();
    }
}
