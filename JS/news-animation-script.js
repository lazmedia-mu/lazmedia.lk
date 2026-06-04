function initNewsSliders() {
    const sliders = document.querySelectorAll('.news-image-slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.news-img');
        if (images.length <= 1) return;

        let current = 0;

        setInterval(() => {
            images[current].classList.remove('active');
            current = (current + 1) % images.length;
            images[current].classList.add('active');
        }, 5000);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initNewsSliders();
    // Animate news cards when they come into view
    const newsCards = document.querySelectorAll('.news-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });
    
    newsCards.forEach(card => observer.observe(card));
});