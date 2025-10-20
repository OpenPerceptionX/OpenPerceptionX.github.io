const track0data = [
    {
        team: "Simple",
        primary: "53.0582",
        country: "CN",
        institution: "IEIT",
        award: "rank01",
        disqualified: false,
        links: ""
    },
    {
        team: "bjtu_jia_team&qcraft",
        primary: "51.3117",
        country: "CN",
        institution: "Beijing Jiaotong University",
        award: "bulb", 
        disqualified: false,
        links: ""
    },
    {
        team: "DRL_CASIA&XIAOMI",
        primary: "51.081",
        country: "CN",
        institution: "CASIA",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "ONE",
        primary: "50.9529",
        country: "CN",
        institution: "UCAS",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "aduiduidui",
        primary: "50.511",
        country: "CN",
        institution: "Sichuan University",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "Westwell",
        primary: "50.017",
        country: "CN",
        institution: "Westwell",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "GG Bone",
        primary: "50.0081",
        country: "CN",
        institution: "Institute of Automation, Chinese Academy of Sciences",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "DiffVLA++",
        primary: "49.1238",
        country: "CN",
        institution: "Bosch",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "Genshin, launch!",
        primary: "48.8439",
        country: "CN",
        institution: "University of Electronic Science and Technology of China",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "ACM Lab",
        primary: "48.4414",
        country: "CN",
        institution: "National Yang Ming Chiao Tung University",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "asdf",
        primary: "45.9287",
        country: "CN",
        institution: "NWPU",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "Simple_2",
        primary: "43.6824",
        country: "CN",
        institution: "Harbin Institute of Technology",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "IRCV",
        primary: "35.055",
        country: "KR",
        institution: "Hanyang University",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "NYCU_CSSP917_Lab",
        primary: "34.0479",
        country: "CN",
        institution: "National Yang Ming Chiao Tung University",
        award: "bulb", 
        disqualified: false,
        links: ""
    },
    {
        team: "CVML",
        primary: "31.8458",
        country: "KR",
        institution: "KAIST",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "hawaiidriver",
        primary: "28.221",
        country: "SE",
        institution: "KTH Royal Institute of Technology",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "KRS-Drive",
        primary: "24.4562",
        country: "CN",
        institution: "SANECHIPS",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "xrHumanLab",
        primary: "23.4072",
        country: "KR",
        institution: "Korea Institute of Science and Technology",
        award: "blank", 
        disqualified: false,
        links: ""
    },
    {
        team: "baseline_constant_velocity",
        primary: "17.5071",
        country: "HK",
        institution: "HKU",
        award: "blank", 
        disqualified: false,
        links: ""
    }
];

let track0currentPage = 0;
let track0itemsPerPage = 10;
let track0sortColumn = 0;
let track0sortDirection = 'desc';

function track0render() {
    const tbody = document.getElementById('track0table');
    if (!tbody) return;

    const startIndex = track0currentPage * track0itemsPerPage;
    const endIndex = Math.min(startIndex + track0itemsPerPage, track0data.length);
    const pageData = track0data.slice(startIndex, endIndex);

    tbody.innerHTML = '';

    pageData.forEach((item, index) => {
        const row = document.createElement('tr');
        const rank = startIndex + index + 1;
        
        let awardIcon = '';
        if (item.award === 'rank01') {
            awardIcon = '<img src="/assets/icon/rank01.png" class="inlineflag"/>';
        } else if (item.award === 'rank02') {
            awardIcon = '<img src="/assets/icon/rank02.png" class="inlineflag"/>';
        } else if (item.award === 'rank03') {
            awardIcon = '<img src="/assets/icon/rank03.png" class="inlineflag"/>';
        } else if (item.award === 'bulb') {
            awardIcon = '<img src="/assets/icon/bulb.png" class="inlineflag"/>';
        }

        row.innerHTML = `
            <td>
                <div class="flex flex-row h-full gap-3 justify-start">
                    <span>${rank}</span>
                    ${awardIcon}
                </div>
            </td>
            <td><img src="/assets/flags/${item.country}.svg" class="inlineflag"/></td>
            <td>${item.institution}</td>
            <td><b>${item.primary}</b></td>
            <td>${item.team}</td>
            <td class="flex gap-3">${item.links}</td>
        `;
        
        tbody.appendChild(row);
    });

    // Update pagination
    const totalPages = Math.ceil(track0data.length / track0itemsPerPage);
    const pagesButton = document.getElementById('track0pages');
    if (pagesButton) {
        pagesButton.textContent = `${track0currentPage + 1} / ${totalPages}`;
    }
}

function track0sort(column, type) {
    if (track0sortColumn === column) {
        track0sortDirection = track0sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        track0sortColumn = column;
        track0sortDirection = 'desc';
    }

    track0data.sort((a, b) => {
        let aVal, bVal;
        
        if (type === 'primary') {
            aVal = parseFloat(a.primary);
            bVal = parseFloat(b.primary);
        } else {
            aVal = a.team.toLowerCase();
            bVal = b.team.toLowerCase();
        }

        if (track0sortDirection === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });

    track0currentPage = 0;
    track0render();
}

function track0previous() {
    const totalPages = Math.ceil(track0data.length / track0itemsPerPage);
    if (track0currentPage > 0) {
        track0currentPage--;
        track0render();
    }
}

function track0next() {
    const totalPages = Math.ceil(track0data.length / track0itemsPerPage);
    if (track0currentPage < totalPages - 1) {
        track0currentPage++;
        track0render();
    }
}
