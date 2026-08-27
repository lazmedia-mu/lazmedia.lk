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


        // Timeline Search and Filter Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('history-search');
            const clearSearchBtn = document.getElementById('clear-search');
            const filterTags = document.querySelectorAll('.filter-tag');
            const timelineItems = document.querySelectorAll('.timeline-item');
            const resultsCount = document.getElementById('results-count');
            const noResults = document.querySelector('.no-results');
            const resetFiltersBtn = document.querySelector('.reset-filters');
            
            let activeFilter = 'all';
            const totalItems = timelineItems.length;

            // Show clear search button when there's input
            searchInput.addEventListener('input', function() {
                if (this.value.length > 0) {
                    clearSearchBtn.classList.add('visible');
                } else {
                    clearSearchBtn.classList.remove('visible');
                }
                filterTimeline();
            });

            // Clear search
            clearSearchBtn.addEventListener('click', function() {
                searchInput.value = '';
                clearSearchBtn.classList.remove('visible');
                filterTimeline();
            });

            // Filter tag clicks
            filterTags.forEach(tag => {
                tag.addEventListener('click', function() {
                    filterTags.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    activeFilter = this.dataset.filter;
                    filterTimeline();
                });
            });

            // Reset filters button
            resetFiltersBtn.addEventListener('click', function() {
                searchInput.value = '';
                clearSearchBtn.classList.remove('visible');
                filterTags.forEach(t => t.classList.remove('active'));
                document.querySelector('.filter-tag[data-filter="all"]').classList.add('active');
                activeFilter = 'all';
                filterTimeline();
            });

            // Main filter function
            function filterTimeline() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                let visibleCount = 0;

                timelineItems.forEach(item => {
                    const year = item.dataset.year;
                    const decades = item.dataset.decade.split(',');
                    const tags = item.dataset.tags.toLowerCase();
                    const title = item.querySelector('h3').textContent.toLowerCase();
                    const description = item.querySelector('p').textContent.toLowerCase();

                    // Check if matches filter decade
                    const matchesDecade = activeFilter === 'all' || decades.includes(activeFilter);
                    
                    // Check if matches search term (keywords, years, titles)
                    const matchesSearch = searchTerm === '' || 
                        year.includes(searchTerm) || 
                        tags.includes(searchTerm) || 
                        title.includes(searchTerm) || 
                        description.includes(searchTerm);

                    if (matchesDecade && matchesSearch) {
                        item.classList.remove('hidden');
                        // Re-add visible class for animation if it was hidden before
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, 50);
                        visibleCount++;
                    } else {
                        item.classList.remove('visible');
                        item.classList.add('hidden');
                    }
                });

                // Update results count
                if (visibleCount === 0) {
                    resultsCount.style.display = 'none';
                    noResults.style.display = 'block';
                } else {
                    resultsCount.style.display = 'block';
                    noResults.style.display = 'none';
                    resultsCount.innerHTML = `<i class="fas fa-list-ul"></i> Showing <span>${visibleCount}</span> of ${totalItems} timeline events`;
                }

                // Reset to show all message
                if (activeFilter === 'all' && searchTerm === '') {
                    resultsCount.innerHTML = `<i class="fas fa-list-ul"></i> Showing all <span>${totalItems}</span> timeline events`;
                }
            }

            // Initialize the timeline scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            timelineItems.forEach(item => {
                observer.observe(item);
            });

            // Initial filter to set everything up
            filterTimeline();
        });