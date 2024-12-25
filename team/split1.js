const split1data = [
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
];



function split1render() {
    const split1tableBody = document.getElementById("split1table");
    split1tableBody.innerHTML = "";
    split1data.forEach((item, index) => {
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
        split1tableBody.appendChild(row);
    });
}
