const track7data = [
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


let track7sortDirection = "asc";
track7data.sort((a, b) => b.primary - a.primary);
track7data.forEach((item, index) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
    }
});



let track7currentPage = 1;
let track7pageSize = 10;
let track7sortColumn = null;



function track7render() {
    const track7tableBody = document.getElementById("track7table");
    track7tableBody.innerHTML = "";
    track7data.slice((track7currentPage - 1) * track7pageSize, track7currentPage * track7pageSize).forEach((item, index) => {
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
        track7tableBody.appendChild(row);
    });
    document.getElementById("track7pages").innerHTML = `<b>${track7currentPage} / ${Math.ceil(track7data.length / track7pageSize)}</b>`;

    if (window.innerWidth < 1024) {
        document.getElementById("track7tablefoot").style.width = document.getElementById("track7table").offsetWidth - 130;
    }
}



function track7sort(columnIndex, columnKey) {
    if (track7sortColumn === columnKey) {
        track7sortDirection = track7sortDirection === "asc" ? "desc" : "asc";
    } else {
        track7sortColumn = columnKey;
        track7sortDirection = "asc";
    }
    track7updateSortIcons(columnIndex);
    track7data.sort((a, b) => {
        if (track7sortDirection === "asc") {
            return a[columnKey] - b[columnKey];
        } else {
            return b[columnKey] - a[columnKey];
        }
    });
    track7currentPage = 1;
    track7render();
}



function track7updateSortIcons(columnIndex) {
    const sortIcons = document.querySelectorAll(".track7button");
    sortIcons.forEach((icon, index) => {
        if (index === columnIndex) {
            if (track7sortDirection === "asc") {
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



function track7previous() {
    if (track7currentPage > 1) {
        track7currentPage--;
        track7render();
    }
}



function track7next() {
    if (track7currentPage < Math.ceil(track7data.length / track7pageSize)) {
        track7currentPage++;
        track7render();
    }
}
