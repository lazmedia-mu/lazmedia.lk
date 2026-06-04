// Priest Card Scroll Animation with fade-out on scroll up
function animatePriestCard() {
    const card = document.getElementById('priestCard');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.25
    });

    observer.observe(card);
}

// Timeline Scroll Animation with fade-out on scroll up
function animateTimeline() {
    const items = document.querySelectorAll('#priests-timeline .timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    items.forEach(item => observer.observe(item));
}

// Initialize
window.addEventListener('load', () => {
    animatePriestCard();
    animateTimeline();
});