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