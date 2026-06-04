// Scroll Animation for Main Card
function animateOnScroll() {
    const card = document.getElementById('mainContentCard');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('visible');
                observer.unobserve(card); // Animate only once
            }
        });
    }, {
        threshold: 0.25
    });

    observer.observe(card);
}

// Run when page loads
window.addEventListener('load', animateOnScroll);