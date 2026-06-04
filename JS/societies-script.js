// Scroll Animation for Society Cards - fade in/out when scrolling
function animateSocietyCards() {
    const cards = document.querySelectorAll('.society-card');

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

    cards.forEach(card => observer.observe(card));
}

// Initialize all animations
window.addEventListener('load', () => {
    animateSocietyCards();
});