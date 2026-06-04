// Calm Scroll Animation using Intersection Observer
function animateTimeline() {
    const items = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    items.forEach(item => observer.observe(item));
}

window.addEventListener('load', animateTimeline);