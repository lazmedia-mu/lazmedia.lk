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

// Know More / Expand Functionality
function initKnowMoreButtons() {
    const knowMoreBtns = document.querySelectorAll('.know-more-btn');
    const timelineContents = document.querySelectorAll('.timeline-content');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    knowMoreBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const content = this.parentElement;
            const isExpanded = content.classList.contains('expanded');
            
            // Close all expanded items first
            timelineContents.forEach(c => c.classList.remove('expanded'));
            timelineItems.forEach(item => item.classList.remove('other-blurred'));
            
            // If it wasn't expanded before, expand it and blur others
            if (!isExpanded) {
                content.classList.add('expanded');
                
                // Add blur to other items
                timelineItems.forEach((item, i) => {
                    if (i !== index) {
                        item.classList.add('other-blurred');
                    }
                });
                
                // Update button text
                this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                this.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
            }
        });
    });
    
    // Close expanded item when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.timeline-content')) {
            timelineContents.forEach(c => c.classList.remove('expanded'));
            timelineItems.forEach(item => item.classList.remove('other-blurred'));
            // Reset all button texts
            knowMoreBtns.forEach(btn => {
                btn.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
            });
        }
    });
}

window.addEventListener('load', () => {
    animateTimeline();
    initKnowMoreButtons();
});