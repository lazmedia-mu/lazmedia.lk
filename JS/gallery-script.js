// Simplified script for external Google Drive album links

// DOM Elements - simplified for external album links

// Animate album cards when they come into view
function animateAlbumCards() {
    const cards = document.querySelectorAll('.album-card');

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

// No longer need album navigation functions since links open externally

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize album animations only
    animateAlbumCards();
});

// Initialize on window load
window.addEventListener('load', () => {
    // Lightbox configuration
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 300,
            'wrapAround': true,
            'alwaysShowNavOnTouchDevices': true,
            'albumLabel': 'Photo %1 of %2'
        });
    }
});