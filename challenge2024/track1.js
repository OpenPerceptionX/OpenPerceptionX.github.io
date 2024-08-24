const track1data = [
    {
        team: "Team NVIDIA",
        primary: "0.9274",
        country: "US",
        // institution: "NVIDIA, Nankai University, Nanjing University, Fudan University, East China Normal University, Beijing Institute of Technology<br>英伟达、南开大学、南京大学、复旦大学、华东师范大学、北京理工大学",
        institution: "NVIDIA",
        award: "blub, rank01",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/e2e_Team NVIDIA.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>&nbsp;<a href='https://arxiv.org/abs/2406.06978' target='_blank'><img class='inlineimg' src='/assets/icon/arxiv.png'/>"
    },
    {
        team: "ZERON",
        primary: "0.8747",
        country: "CN",
        institution: "ZERON<br>零一汽车",
        award: "rank02",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/e2e_ZERON.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/>&nbsp;</a><a href='https://opendrivelab.github.io/Challenge%202024/e2e_ZERON_poster.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/poster.png'/></a>"
    },
    {
        team: "abc",
        primary: "0.8626",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "xiaokt001",
        primary: "0.8549",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Neuros",
        primary: "0.8542",
        country: "CN",
        institution: "Institute of Automation, Chinese Academy of Sciences / University of Science and Technology Beijing<br>中国科学院自动化研究所 / 北京科技大学",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "TBD",
        primary: "0.8535",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "ppp",
        primary: "0.8502",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "cam_f0_only",
        primary: "0.8488",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "sdw2go",
        primary: "0.8488",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Baseline: Transfuser",
        primary: "0.8483",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "mczhi",
        primary: "0.8478",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "lukedart",
        primary: "0.8471",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "xxxyppp",
        primary: "0.8470",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "abc002",
        primary: "0.8458",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "abc",
        primary: "0.8414",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "cyxum",
        primary: "0.8413",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "pxyang",
        primary: "0.8408",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ucaszyp",
        primary: "0.8408",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "VCCIV",
        primary: "0.8404",
        country: "CN",
        institution: "Xi'an Jiaotong University<br>西安交通大学",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "catttt31",
        primary: "0.8382",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "abc",
        primary: "0.8377",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "Akira",
        primary: "0.8351",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "wlll",
        primary: "0.8350",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "VCCIV",
        primary: "0.8292",
        country: "CN",
        institution: "Xi'an Jiaotong University<br>西安交通大学",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "Teora",
        primary: "0.8267",
        country: "KR",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Plusgo",
        primary: "0.8255",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "abc",
        primary: "0.8178",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "pxyang1",
        primary: "0.8174",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ucwxb",
        primary: "0.8173",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "weitao",
        primary: "0.8168",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Plusgo",
        primary: "0.8161",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "TBD",
        primary: "0.8114",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "sai0119",
        primary: "0.8087",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "6d777",
        primary: "0.8085",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "frank2000sinatral",
        primary: "0.8078",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Ldq666666",
        primary: "0.8069",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ucwxb",
        primary: "0.8005",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "sai",
        primary: "0.7952",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "xxxxxznb",
        primary: "0.7920",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "USTC",
        primary: "0.7920",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "xadsda",
        primary: "0.7892",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "morsun",
        primary: "0.7868",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ugxx",
        primary: "0.7829",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "JohnZhan",
        primary: "0.7788",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "pppc",
        primary: "0.7701",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ucwxb",
        primary: "0.7665",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "imstvn",
        primary: "0.7643",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "zhiaid",
        primary: "0.7635",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "wwwucasp",
        primary: "0.7556",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "zypzyp",
        primary: "0.7468",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ssa",
        primary: "0.7312",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "YouGiOh",
        primary: "0.7125",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "SmallFish",
        primary: "0.6949",
        country: "DE",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "chenehlf",
        primary: "0.6914",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "YujieGuo",
        primary: "0.6881",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ZBY2024",
        primary: "0.6836",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "SmallFish",
        primary: "0.6699",
        country: "DE",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "ZBY",
        primary: "0.6626",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "Alissa0708",
        primary: "0.6625",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Alissa111",
        primary: "0.6596",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "yh1306",
        primary: "0.6593",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ZBY",
        primary: "0.6578",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "hao1306",
        primary: "0.6532",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ZBY2024",
        primary: "0.6504",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "Junqiao",
        primary: "0.6412",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Alissa1215",
        primary: "0.6393",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "TUMDriving1",
        primary: "0.6331",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ggboy123",
        primary: "0.6310",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Mauerrr",
        primary: "0.6290",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "aidzhiyu",
        primary: "0.6109",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "LeoHuaDY",
        primary: "0.6099",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Mrchicken007",
        primary: "0.5798",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "llll2024",
        primary: "0.5732",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Gewerbegebiet",
        primary: "0.5582",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "le123le",
        primary: "0.5542",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "ghgh2024",
        primary: "0.4462",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "zehaooooo",
        primary: "0.3820",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Baseline: Constant Velocity",
        primary: "0.1930",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    }
];


let track1sortDirection = "asc";
track1data.sort((a, b) => b.primary - a.primary);
index = 0
track1data.forEach((item, xxx) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
        index = index + 1;
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
            <td>${item.rank} <img src="/assets/icon/${item.award}.png" class="inlineflag"/></td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineflag"/> ${item.country}</td>
            <td>${item.institution}</td>
            <td><b>${item.primary}</b></td>
            <td>${item.team}</td>
            <td>${item.links}</td>
        `;
        track1tableBody.appendChild(row);
    });
    document.getElementById("track1pages").innerHTML = `<b>${track1currentPage} / ${Math.ceil(track1data.length / track1pageSize)}</b>`;

    if (window.innerWidth < 1024) {
        document.getElementById("track1tablefoot").style.width = document.getElementById("track1table").offsetWidth;
    }
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
