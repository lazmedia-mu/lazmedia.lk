// Intro Card Animation - always works since it's at the top of the page
function animateIntroCard() {
    const card = document.querySelector('.intro-card');
    if (card) {
        // Force browser to process initial state first, then add animation class
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                card.classList.add('visible');
            });
        });
    }
}

// Counter Animation - Rolling numbers effect
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Run animations when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    animateIntroCard();
    animateCounters();
});