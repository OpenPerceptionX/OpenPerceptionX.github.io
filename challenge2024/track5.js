const track5data = [
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


let track5sortDirection = "asc";
track5data.sort((a, b) => b.primary - a.primary);
track5data.forEach((item, index) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
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
            <td>${item.rank} <img src="/assets/icon/${item.award}.png" class="inlineimg"/></td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineimg"/> ${item.country}</td>
            <td>${item.institution}</td>
            <td><b>${item.primary}</b></td>
            <td>${item.team}</td>
            <td>${item.links}</td>
            <td>${item.metric1}</td>
        `;
        track5tableBody.appendChild(row);
    });
    document.getElementById("track5pages").innerHTML = `<b>${track5currentPage} / ${Math.ceil(track5data.length / track5pageSize)}</b>`;

    if (window.innerWidth < 1024) {
        document.getElementById("track5tablefoot").style.width = document.getElementById("track5table").offsetWidth - 130;
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
