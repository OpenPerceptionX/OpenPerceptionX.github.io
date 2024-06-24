const track2data = [
    {
        team: "USTC_IAT_United",
        primary: "0.6615",
        metric1: "0.5448",
        metric2: "0.7878",
        country: "CN",
        institution: "University of Science and Technology of China<br>中国科学技术大学",
        award: "rank01",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/predictive_USTC_IAT_United.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>"
    },
    {
        team: "Huawei-Noah & CUHK-SZ",
        primary: "0.7958",
        metric1: "0.5596",
        metric2: "0.9996",
        country: "CN",
        institution: "Huawei / The Chinese University of Hong Kong, Shenzhen<br>华为 / 香港中文大学（深圳）",
        award: "blub, rank02",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/predictive_Huawei-Noah & CUHK-SZ.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>&nbsp;<a href='https://youtu.be/0ldD02RuNLA' target='_blank'><img class='inlineimg' src='/assets/icon/youtube.png'/></a>"
    },
    {
        team: "mcchi",
        primary: "0.9396",
        metric1: "0.7669",
        metric2: "1.1677",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Test",
        primary: "1.4457",
        metric1: "1.2784",
        metric2: "1.6168",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "test",
        primary: "1.5231",
        metric1: "1.1985",
        metric2: "1.7908",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "FGFGFGFGF",
        primary: "1.5388",
        metric1: "1.3262",
        metric2: "1.7133",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "baseline",
        primary: "1.5870",
        metric1: "1.3270",
        metric2: "1.9300",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "test",
        primary: "1.5870",
        metric1: "1.3270",
        metric2: "1.9300",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "Oracle",
        primary: "1.5871",
        metric1: "1.3274",
        metric2: "1.9318",
        country: "HK",
        institution: "The Hong Kong University of Science and Technology<br>香港科技大学",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "jiangxb24",
        primary: "1.5873",
        metric1: "1.3273",
        metric2: "1.9325",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Test",
        primary: "1.6247",
        metric1: "1.3311",
        metric2: "1.9649",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "cdcdcxcy",
        primary: "1.6311",
        metric1: "1.3615",
        metric2: "1.9507",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "wm",
        primary: "3.6411",
        metric1: "3.4584",
        metric2: "3.7533",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ABC",
        primary: "7.8603",
        metric1: "11.9668",
        metric2: "5.6330",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "3DVLab",
        primary: "22.5286",
        metric1: "22.5762",
        metric2: "22.5172",
        country: "CN",
        institution: "University of Science and Technology of China<br>中国科学技术大学",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Gyomber",
        primary: "22.7817",
        metric1: "12.0847",
        metric2: "25.0160",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
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
            <td>${item.rank} <img src="/assets/icon/${item.award}.png" class="inlineflag"/></td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineflag"/> ${item.country}</td>
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
