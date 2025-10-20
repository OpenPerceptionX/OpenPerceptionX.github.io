const track3data = [
    {
        team: "Revontuli",
        primary: "20",
        compression: "6.6386",
        sampling: "23.0434",
        country: "FI",
        institution: "Aalto University",
        award: "rank01",
        innovation: true,
        disqualified: false,
        links: ""
    },
    {
        team: "Duke",
        primary: "14",
        compression: "7.4976",
        sampling: "21.5578",
        country: "US",
        institution: "Duke University",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "WaterlooVipLab",
        primary: "5",
        compression: "7.9869",
        sampling: "18.0394",
        country: "CA",
        institution: "University of Waterloo",
        award: "blank",
        disqualified: false,
        links: ""
    },
    {
        team: "Micheal",
        primary: "5",
        compression: "-",
        sampling: "18.3428",
        country: "-",
        institution: "-",
        award: "blank",
        disqualified: false,
        links: ""
    }
];

let track3currentPage = 0;
let track3itemsPerPage = 10;
let track3sortColumn = 0;
let track3sortDirection = 'desc';

function track3render() {
    const tbody = document.getElementById('track3table');
    if (!tbody) return;

    const startIndex = track3currentPage * track3itemsPerPage;
    const endIndex = Math.min(startIndex + track3itemsPerPage, track3data.length);
    const pageData = track3data.slice(startIndex, endIndex);

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
        
        // Add innovation award icon if applicable
        if (item.innovation) {
            awardIcon += '<img src="/assets/icon/bulb.png" class="inlineflag"/>';
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
            <td>${item.compression}</td>
            <td>${item.sampling}</td>
            <td>${item.team}</td>
            <td class="flex gap-3">${item.links}</td>
        `;
        
        tbody.appendChild(row);
    });

    // Update pagination
    const totalPages = Math.ceil(track3data.length / track3itemsPerPage);
    const pagesButton = document.getElementById('track3pages');
    if (pagesButton) {
        pagesButton.textContent = `${track3currentPage + 1} / ${totalPages}`;
    }
}

function track3sort(column, type) {
    if (track3sortColumn === column) {
        track3sortDirection = track3sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        track3sortColumn = column;
        track3sortDirection = 'desc';
    }

    track3data.sort((a, b) => {
        let aVal, bVal;
        
        if (type === 'Point') {
            aVal = parseFloat(a.primary);
            bVal = parseFloat(b.primary);
        } else {
            aVal = a.team.toLowerCase();
            bVal = b.team.toLowerCase();
        }

        if (track3sortDirection === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });

    track3currentPage = 0;
    track3render();
}

function track3previous() {
    const totalPages = Math.ceil(track3data.length / track3itemsPerPage);
    if (track3currentPage > 0) {
        track3currentPage--;
        track3render();
    }
}

function track3next() {
    const totalPages = Math.ceil(track3data.length / track3itemsPerPage);
    if (track3currentPage < totalPages - 1) {
        track3currentPage++;
        track3render();
    }
}
