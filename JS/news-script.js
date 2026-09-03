// News page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get all news cards
    const newsCards = document.querySelectorAll('.news-card');
    
    // Initialize featured card as expanded
    const featuredCard = document.querySelector('.news-card.featured');
    if (featuredCard) {
        featuredCard.classList.add('expanded');
    }
    
    // Add click handlers to read more buttons
    newsCards.forEach(card => {
        const readMoreBtn = card.querySelector('.read-more-btn');
        const btnText = readMoreBtn.querySelector('.btn-text');
        
        readMoreBtn.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');
            
            // Toggle expanded class
            card.classList.toggle('expanded');
            
            // Update button text
            if (isExpanded) {
                btnText.textContent = 'Read More';
            } else {
                btnText.textContent = 'Read Less';
            }
            
            // Smooth scroll to card top when collapsing
            if (isExpanded) {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
    
    // Image Carousel Functionality
    function initCarousels() {
        const carousels = document.querySelectorAll('.carousel-container');
        
        carousels.forEach(carousel => {
            const slides = carousel.querySelectorAll('.carousel-slide');
            const indicators = carousel.querySelectorAll('.indicator');
            const prevBtn = carousel.querySelector('.carousel-prev');
            const nextBtn = carousel.querySelector('.carousel-next');
            let currentIndex = 0;
            let autoplayInterval;
            
            // Function to update slide
            function updateSlide(index) {
                // Remove active class from all slides and indicators
                slides.forEach(slide => slide.classList.remove('active'));
                indicators.forEach(indicator => indicator.classList.remove('active'));
                
                // Add active class to current slide and indicator
                slides[index].classList.add('active');
                indicators[index].classList.add('active');
                
                currentIndex = index;
            }
            
            // Next slide
            function nextSlide() {
                const newIndex = (currentIndex + 1) % slides.length;
                updateSlide(newIndex);
            }
            
            // Previous slide
            function prevSlide() {
                const newIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlide(newIndex);
            }
            
            // Start autoplay
            function startAutoplay() {
                autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
            }
            
            // Stop autoplay
            function stopAutoplay() {
                clearInterval(autoplayInterval);
            }
            
            // Event listeners for buttons
            prevBtn.addEventListener('click', () => {
                stopAutoplay();
                prevSlide();
                startAutoplay();
            });
            
            nextBtn.addEventListener('click', () => {
                stopAutoplay();
                nextSlide();
                startAutoplay();
            });
            
            // Event listeners for indicators
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    stopAutoplay();
                    updateSlide(index);
                    startAutoplay();
                });
            });
            
            // Pause autoplay when user interacts with carousel
            carousel.addEventListener('mouseenter', stopAutoplay);
            carousel.addEventListener('mouseleave', startAutoplay);
            
            // Touch support for mobile
            let touchStartX = 0;
            let touchEndX = 0;
            
            carousel.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoplay();
            }, { passive: true });
            
            carousel.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoplay();
            }, { passive: true });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        // Swipe left - next slide
                        nextSlide();
                    } else {
                        // Swipe right - previous slide
                        prevSlide();
                    }
                }
            }
            
            // Set initial slide
            updateSlide(0);
            // Start autoplay initially
            startAutoplay();
        });
    }
    
    // Initialize carousels
    initCarousels();
    
    // Animate news cards when they come into view
    function animateNewsCards() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('visible', entry.isIntersecting);
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        });
        
        newsCards.forEach(card => observer.observe(card));
    }
    
    // Initialize animations
    animateNewsCards();
});