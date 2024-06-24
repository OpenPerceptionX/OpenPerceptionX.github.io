const track4data = [
    {
        team: "THU-LenovoAI",
        primary: "0.5959",
        metric1: "0.3472",
        country: "CN",
        institution: "Tsinghua University / Lenovo<br>清华大学 / 联想",
        award: "blub, rank01",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/multiview_THU-LenovoAI.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>"
    },
    {
        team: "chanc101",
        primary: "0.5858",
        metric1: "0.3463",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Mi-Robot",
        primary: "0.4692",
        metric1: "0.2038",
        country: "CN",
        institution: "Xiaomi Robot<br>小米机器人",
        award: "rank02",
        disqualified: false,
        links: "<a href='https://opendrivelab.github.io/Challenge%202024/multiview_Mi-Robot.pdf' target='_blank'><img class='inlineimg' src='/assets/icon/article.png'/></a>"
    },
    {
        team: "pku",
        primary: "0.4594",
        metric1: "0.2521",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "cuhksz-cv-lab",
        primary: "0.4542",
        metric1: "0.2505",
        country: "CN",
        institution: "The Chinese University of Hong Kong, Shenzhen<br>香港中文大学（深圳）",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "MaxPower",
        primary: "0.4542",
        metric1: "0.2356",
        country: "CN",
        institution: "Nanjing University of Science and Technology<br>南京理工大学",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "CharlesliangC",
        primary: "0.4495",
        metric1: "0.1632",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "alk",
        primary: "0.4272",
        metric1: "0.1808",
        country: "US",
        institution: "Microsoft",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "3dvlab",
        primary: "0.4259",
        metric1: "0.2346",
        country: "CN",
        institution: "University of Science and Technology of China<br>中国科学技术大学",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Zerek",
        primary: "0.3866",
        metric1: "0.1405",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "test",
        primary: "0.3798",
        metric1: "0.1616",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: true,
        links: ""
    },
    {
        team: "bidirectionalFoil",
        primary: "0.3745",
        metric1: "0.1747",
        country: "CN",
        institution: "Harbin Institute of Technology<br>哈尔滨工业大学",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "yesname",
        primary: "0.3708",
        metric1: "0.1684",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Prometheus",
        primary: "0.3708",
        metric1: "0.1684",
        country: "IN",
        // institution: "Anna University, SNS College of Technology, UC Santa Cruz, IIITDM Kancheepuram, RWTH Aachen University, University of Pennsylvania",
        institution: "Anna University",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "UniEmbodied3D",
        primary: "0.3665",
        metric1: "0.1438",
        country: "CN",
        // institution: "Tsinghua University, CASIA, Beihang University<br>清华大学、中国科学院自动化研究所、北京航空航天大学",
        institution: "Tsinghua University<br>清华大学",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "nightwind",
        primary: "0.2101",
        metric1: "0.0833",
        country: "CN",
        institution: "Sun Yat-sen University<br>中山大学 ",
        award: "blank",
        disqualified: false,
        links: ""
    }
];


let track4sortDirection = "asc";
track4data.sort((a, b) => b.primary - a.primary);
index = 0
track4data.forEach((item, xxx) => {
    if (item.disqualified) {
        item.rank = "*";
    } else {
        item.rank = index + 1;
        index = index + 1;
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
            <td>${item.rank} <img src="/assets/icon/${item.award}.png" class="inlineflag"/></td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineflag"/> ${item.country}</td>
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
        document.getElementById("track4tablefoot").style.width = document.getElementById("track4table").offsetWidth;
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
