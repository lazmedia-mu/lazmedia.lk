// Scroll Animation (appears once)
function animateOnScroll() {
    const card = document.querySelector('.intro-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('visible');
                observer.unobserve(card); // Run animation only once
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(card);
}

// Run animation when page loads
window.addEventListener('load', animateOnScroll);