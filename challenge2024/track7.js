const track7data = [
    {
        metrics: 0.94,
        country: "China",
        flag: "China",
        key: "key1测试1111111",
    },
    {
        metrics: 0.93,
        country: "United States",
        flag: "United States",
        key: "key1测试2",
    },
    {
        metrics: 0.66,
        country: "Türkiye",
        flag: "Türkiye",
        key: "key1测试4",
    },
    {
        metrics: 0.34,
        country: "Britain",
        flag: "Britain",
        key: "key1测试5",
    },
    {
        metrics: 0.094,
        country: "China",
        flag: "China",
        key: "key1测试1111111",
    },
    {
        metrics: 0.093,
        country: "United States",
        flag: "United States",
        key: "key1测试2",
    },
    {
        metrics: 0.066,
        country: "Türkiye",
        flag: "Türkiye",
        key: "key1测试4",
    },
    {
        metrics: 0.034,
        country: "Britain",
        flag: "Britain",
        key: "key1测试5",
    },
    {
        metrics: 0.0094,
        country: "China",
        flag: "China",
        key: "key1测试1111111",
    },
    {
        metrics: 0.0093,
        country: "United States",
        flag: "United States",
        key: "key1测试2",
    },
    {
        metrics: 0.0066,
        country: "Türkiye",
        flag: "Türkiye",
        key: "key1测试4",
    },
    {
        metrics: 0.0034,
        country: "Britain",
        flag: "Britain",
        key: "key1测试5",
    },
    {
        metrics: 0.00094,
        country: "China",
        flag: "China",
        key: "key1测试1111111",
    },
    {
        metrics: 0.00093,
        country: "United States",
        flag: "United States",
        key: "key1测试2",
    },
    {
        metrics: 0.00066,
        country: "Türkiye",
        flag: "Türkiye",
        key: "key1测试4",
    },
];

track7data.sort((a, b) => b.metrics - a.metrics);
track7data.forEach((item, index) => {
    item.rank = index + 1;
});

let currentPage = 1;
let pageSize = 10;
let sortColumn = null;
let sortDirection = "asc";

function track7render() {
    const tableBody = document.getElementById("track7table");
    tableBody.innerHTML = "";
    track7data.slice((currentPage - 1) * pageSize, currentPage * pageSize).forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.rank}</td>
            <td><img src="/ui2024/style/icon/flag/${item.flag}.png" alt="${item.country}"> ${item.country}</td>
            <td>ins</td>
            <td>${item.metrics}</td>
            <td>name</td>
            <td>links</td>
            <td>${item.key}</td>
        `;
        tableBody.appendChild(row);
    });
    document.getElementById("track7pages").innerHTML = `<b>${currentPage} / ${Math.ceil(track7data.length / pageSize)}</b>`;
}

function track7sort(columnIndex, columnKey) {
if (sortColumn === columnKey) {
    sortDirection = sortDirection === "asc" ? "desc" : "asc";
} else {
    sortColumn = columnKey;
    sortDirection = "asc";
}
updateSortIcons(columnIndex);
track7data.sort((a, b) => {
    if (sortDirection === "asc") {
    return a[columnKey] - b[columnKey];
    } else {
    return b[columnKey] - a[columnKey];
    }
});
track7render();
}

function updateSortIcons(columnIndex) {
const sortIcons = document.querySelectorAll(".sort-icon");
sortIcons.forEach((icon, index) => {
    if (index === columnIndex) {
    if (sortDirection === "asc") {
        icon.className = "sort-icon up";
        icon.innerHTML = "▲";
    } else {
        icon.className = "sort-icon down";
        icon.innerHTML = "▼";
    }
    } else {
    icon.className = "sort-icon";
    icon.innerHTML = "";
    }
});
}

function track7previous() {
    if (currentPage > 1) {
        currentPage--;
        track7render();
    }
}

function track7next() {
    if (currentPage < Math.ceil(track7data.length / pageSize)) {
        currentPage++;
        track7render();
    }
}

track7render();