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

// Charts
const chartColors = { robot: '#4A90D9', cotrain: '#00D4AA', grid: 'rgba(255,255,255,0.05)' };
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: { backgroundColor: 'rgba(10,10,15,0.9)', titleColor: '#fff', bodyColor: '#8B8B9E', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 12, cornerRadius: 8 }
    },
    scales: {
        x: { grid: { color: chartColors.grid }, ticks: { color: '#8B8B9E' } },
        y: { grid: { color: chartColors.grid }, ticks: { color: '#8B8B9E' }, min: 0, max: 100 }
    }
};

const inDomainCtx = document.getElementById('inDomainChart');
if (inDomainCtx) {
    new Chart(inDomainCtx, {
        type: 'bar',
        data: {
            labels: ['Pillow', 'Trash', 'Toy', 'Cart', 'Average'],
            datasets: [
                { label: 'Robot-only', data: [60, 61.3, 47.5, 42.5, 58.8], backgroundColor: chartColors.robot, borderRadius: 6 },
                { label: 'Co-training', data: [85, 97.5, 70, 42.5, 78.4], backgroundColor: chartColors.cotrain, borderRadius: 6 }
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

// Nav background
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 50 ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.85)';
});
