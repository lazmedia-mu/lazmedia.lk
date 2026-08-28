
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const societyCards = document.querySelectorAll('.society-card');
            const emptyState = document.getElementById('emptyState');
            const societiesGrid = document.getElementById('societiesGrid');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');

                    const filter = button.getAttribute('data-filter');
                    let visibleCount = 0;

                    societyCards.forEach(card => {
                        const cardCategory = card.getAttribute('data-category');
                        
                        // First remove any hiding class to reset
                        card.classList.remove('hiding');
                        
                        // Check if card matches the filter
                        if (filter === 'all' || cardCategory === filter) {
                            card.style.display = 'flex';
                            // Trigger reflow for animation
                            card.offsetHeight;
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                            card.style.position = 'relative';
                            visibleCount++;
                        } else {
                            // Add hiding class for smooth transition
                            card.classList.add('hiding');
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 400);
                        }
                    });

                    // Show empty state if no cards visible
                    setTimeout(() => {
                        if (visibleCount === 0) {
                            emptyState.style.display = 'block';
                            societiesGrid.style.display = 'none';
                        } else {
                            emptyState.style.display = 'none';
                            societiesGrid.style.display = 'grid';
                        }
                    }, 400);
                });
            });
        });