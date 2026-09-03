// Counter Animation Function
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds animation
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Scroll Animation for Main Card
function animateOnScroll() {
    const card = document.getElementById('mainContentCard');
    let countersAnimated = false; // Prevent multiple animations

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('visible');
                
                // Start counter animation once when card becomes visible
                if (!countersAnimated) {
                    setTimeout(() => {
                        animateCounters();
                        countersAnimated = true;
                    }, 800); // Delay to sync with card animation
                }
                
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