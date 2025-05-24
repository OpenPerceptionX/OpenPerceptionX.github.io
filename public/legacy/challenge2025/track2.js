const track2data = [
    { 
        team: "Duke", 
        Compression: "7.4976",
        Sampling: "21.5578",
        Point: "20",
        award: "blank",
        // award: "rank01", 
        disqualified: false,
        links: "-",
        country: "US",
        institution: "Duke University",
    },
    { 
        team: "WaterlooVipLab", 
        Compression: "7.9869",
        Sampling: "18.0394",
        Point: "12",
        award: "blank", 
        disqualified: false,
        links: "-",
        country: "CA",
        institution: "University of Waterloo",
    },
    { 
        team: "Micheal", 
        Compression: "-",
        Sampling: "18.3428",
        Point: "7",
        award: "blank", 
        disqualified: false,
        links: "-",
        country: "-",
        institution: "-",
    },
    { 
        team: "Shortnapse", 
        Compression: "8.2723",
        Sampling: "-",
        Point: "5",
        award: "blank", 
        disqualified: false,
        links: "-",
        country: "KR",
        institution: "CJ Corporation",
    }
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
            <td>
                <div class="flex flex-row h-full gap-3 justify-start">
                    <span>${item.rank}</span>
                    <img src="/assets/icon/${item.award}.png" class="inlineflag"/>
                </div>
            </td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineflag"/></td>
            <td>${item.institution}</td>
            <td><b>${item.Point}</b></td>
            <td>${item.Compression}</td>
            <td>${item.Sampling}</td>
            <td>${item.team}</td>
            <td class="flex gap-3">${item.links}</td>
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
