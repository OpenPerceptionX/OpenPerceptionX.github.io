// Progress bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
reveals.forEach(el => revealObserver.observe(el));

// Counter animation
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });
counters.forEach(counter => counterObserver.observe(counter));

// Deploy tabs
const deployTabs = document.querySelectorAll('.deploy-tab');
const deployContents = document.querySelectorAll('.deploy-content');
deployTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        deployTabs.forEach(t => t.classList.remove('active'));
        deployContents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Copy citation
function copyCitation() {
    const citation = document.querySelector('.citation-code').textContent;
    navigator.clipboard.writeText(citation);
    const btn = document.querySelector('.citation-copy');
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
}

// Charts - Updated with blue color scheme
const chartColors = { 
    robot: '#2563EB',      // Primary blue
    cotrain: '#10B981',    // Accent green
    grid: 'rgba(37,99,235,0.08)' 
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: { 
            backgroundColor: 'rgba(30,41,59,0.95)', 
            titleColor: '#fff', 
            bodyColor: '#94A3B8', 
            borderColor: 'rgba(37,99,235,0.2)', 
            borderWidth: 1, 
            padding: 12, 
            cornerRadius: 8 
        }
    },
    scales: {
        x: { 
            grid: { color: chartColors.grid }, 
            ticks: { color: '#64748B' },
            border: { color: 'rgba(37,99,235,0.15)' }
        },
        y: { 
            grid: { color: chartColors.grid }, 
            ticks: { color: '#64748B' }, 
            min: 0, 
            max: 100,
            border: { color: 'rgba(37,99,235,0.15)' }
        }
    }
};

const inDomainCtx = document.getElementById('inDomainChart');
if (inDomainCtx) {
    new Chart(inDomainCtx, {
        type: 'bar',
        data: {
            labels: ['Pillow', 'Trash', 'Toy', 'Cart', 'Average'],
            datasets: [
                { label: 'Robot-only', data: [60, 85, 47.5, 42.5, 58.8], backgroundColor: chartColors.robot, borderRadius: 6 },
                { label: 'Co-training', data: [85, 97.5, 61.3, 70, 78.4], backgroundColor: chartColors.cotrain, borderRadius: 6 }
            ]
        },
        options: chartOptions
    });
}

const genCtx = document.getElementById('generalizationChart');
if (genCtx) {
    new Chart(genCtx, {
        type: 'bar',
        data: {
            labels: ['Pillow', 'Trash', 'Toy', 'Cart', 'Average'],
            datasets: [
                { label: 'Robot-only', data: [0, 55, 37.5, 31.3, 30.9], backgroundColor: chartColors.robot, borderRadius: 6 },
                { label: 'Co-training', data: [97.5, 87.5, 78.8, 65, 82.2], backgroundColor: chartColors.cotrain, borderRadius: 6 }
            ]
        },
        options: chartOptions
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Nav background - transparent on hero, solid when scrolled
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Side Navigation - Active section tracking
const sideNavItems = document.querySelectorAll('.side-nav-item');
const sections = document.querySelectorAll('section[id], .hero[id]');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            sideNavItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-section') === id) {
                    item.classList.add('active');
                }
            });
        }
    });
}, { 
    threshold: 0.2,
    rootMargin: '-10% 0px -70% 0px'
});

sections.forEach(section => sectionObserver.observe(section));

// Side nav smooth scroll
sideNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scaling Analysis Charts - Data from scaling.py
const scalingColors = {
    ratio_1_2: '#3A8DC1',  // Blue
    ratio_1_1: '#5AAE61',  // Green
    ratio_2_1: '#E5A835'   // Orange
};

// Raw data from scaling.py
const scalingRawData = {
    pillow: { '1:2': [0, 65, 90, 97.5], '1:1': [0, 77.5, 85, 80], '2:1': [0, 82.5, 85, 80] },
    trash: { '1:2': [55, 80, 92.5, 87.5], '1:1': [55, 80, 95, 82.5], '2:1': [55, 95, 87.5, 85] },
    toy: { '1:2': [37.5, 35, 68.75, 58.75], '1:1': [37.5, 41.25, 58.75, 71.25], '2:1': [37.5, 41.25, 61.25, 78.75] },
    cart: { '1:2': [31.25, 26.25, 38.75, 50], '1:1': [31.25, 40, 58.75, 52.5], '2:1': [31.25, 67.5, 41.25, 65] }
};

// Calculate average for each ratio
function calcAverage(ratio) {
    return [0, 1, 2, 3].map(i => 
        (scalingRawData.pillow[ratio][i] + scalingRawData.trash[ratio][i] + scalingRawData.toy[ratio][i] + scalingRawData.cart[ratio][i]) / 4
    );
}

scalingRawData.average = {
    '1:2': calcAverage('1:2'),
    '1:1': calcAverage('1:1'),
    '2:1': calcAverage('2:1')
};

const scalingLabels = ['0', '100', '200', '300'];

const scalingChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            titleColor: '#fff',
            bodyColor: '#94A3B8',
            borderColor: 'rgba(37, 99, 235, 0.2)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8
        }
    },
    scales: {
        x: {
            grid: { color: 'rgba(0, 0, 0, 0.06)' },
            ticks: { color: '#666666', font: { size: 12 } },
            border: { color: '#CCCCCC' },
            title: { display: true, text: 'Human Demos', color: '#555555', font: { size: 13, weight: 'bold' } }
        },
        y: {
            grid: { color: 'rgba(0, 0, 0, 0.06)' },
            ticks: { color: '#666666', font: { size: 12 } },
            min: 0,
            max: 100,
            border: { color: '#CCCCCC' }
        }
    }
};

function createScalingChart(canvasId, taskKey) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return null;
    
    const taskData = scalingRawData[taskKey];
    
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: scalingLabels,
            datasets: [
                {
                    label: 'Robot:Human 1:2',
                    data: taskData['1:2'],
                    borderColor: scalingColors.ratio_1_2,
                    backgroundColor: scalingColors.ratio_1_2 + '20',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 6,
                    pointBackgroundColor: scalingColors.ratio_1_2,
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointHoverRadius: 8,
                    borderWidth: 3
                },
                {
                    label: 'Robot:Human 1:1',
                    data: taskData['1:1'],
                    borderColor: scalingColors.ratio_1_1,
                    backgroundColor: scalingColors.ratio_1_1 + '20',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 6,
                    pointBackgroundColor: scalingColors.ratio_1_1,
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointHoverRadius: 8,
                    borderWidth: 3
                },
                {
                    label: 'Robot:Human 2:1',
                    data: taskData['2:1'],
                    borderColor: scalingColors.ratio_2_1,
                    backgroundColor: scalingColors.ratio_2_1 + '20',
                    fill: false,
                    tension: 0.3,
                    pointRadius: 6,
                    pointBackgroundColor: scalingColors.ratio_2_1,
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointHoverRadius: 8,
                    borderWidth: 3
                }
            ]
        },
        options: scalingChartOptions
    });
}

let scalingCharts = {};

function initScalingCharts() {
    // Create all 5 charts
    scalingCharts.average = createScalingChart('scalingAverage', 'average');
    scalingCharts.pillow = createScalingChart('scalingPillow', 'pillow');
    scalingCharts.trash = createScalingChart('scalingTrash', 'trash');
    scalingCharts.toy = createScalingChart('scalingToy', 'toy');
    scalingCharts.cart = createScalingChart('scalingCart', 'cart');
}

// Initialize charts
initScalingCharts();
