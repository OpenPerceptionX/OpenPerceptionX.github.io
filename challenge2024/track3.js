const track3data = [
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


let track3sortDirection = "asc";
track3data.sort((a, b) => b.primary - a.primary);
track3data.forEach((item, index) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
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
