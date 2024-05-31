const track1data = [
    {
        team: "-",
        primary: 1,
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
];


let track1sortDirection = "asc";
track1data.sort((a, b) => b.primary - a.primary);
track1data.forEach((item, index) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
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
            <td>${item.rank} <img src="/assets/icon/${item.award}.png" class="inlineimg"/></td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineimg"/> ${item.country}</td>
            <td>${item.institution}</td>
            <td><b>${item.primary}</b></td>
            <td>${item.team}</td>
            <td>${item.links}</td>
        `;
        track1tableBody.appendChild(row);
    });
    document.getElementById("track1pages").innerHTML = `<b>${track1currentPage} / ${Math.ceil(track1data.length / track1pageSize)}</b>`;
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
