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

// News card scroll animations - Animate in when visible
function animateNewsCards() {
    const newsCards = document.querySelectorAll('.news-card');
    
    const newsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                newsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    newsCards.forEach(card => {
        newsObserver.observe(card);
    });
}

// ==================== NOTIFICATIONS FUNCTIONALITY - Only for Index.html ====================
function createNotifications() {
  const container = document.getElementById('notifications-container');
  if (!container) return;
  
  const notifications = [
    { message: "This site is a project by Lazmedia. and still in development." },
    { message: "Developed and Maintained by Alpha Studios UK pvt Ltd." } //let users know about the developer.
  ];

  notifications.forEach((notification, index) => {
    setTimeout(() => {
      const notifElement = document.createElement('div');
      notifElement.className = 'notification';
      notifElement.innerHTML = `
        <i class="fas fa-info-circle notification-icon"></i>
        <p class="notification-message">${notification.message}</p>
        <button class="notification-close" aria-label="Close notification"><i class="fas fa-times"></i></button>
      `;
      container.appendChild(notifElement);

      // Trigger animation to slide in
      setTimeout(() => {
        notifElement.style.transform = 'translateX(0)';
        notifElement.style.opacity = '1';
      }, 50);

      // Add close button functionality
      const closeBtn = notifElement.querySelector('.notification-close');
      closeBtn.addEventListener('click', () => {
        hideNotification(notifElement);
      });

      // Auto-hide after 12 seconds
      setTimeout(() => {
        hideNotification(notifElement);
      }, 12000);
    }, index * 1500); // Stagger notifications by 1.5 seconds
  });
}

function hideNotification(element) {
  element.style.transform = 'translateX(120%)';
  element.style.opacity = '0';
  setTimeout(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }, 500);
}

// ==================== MASS SCHEDULE SEARCH & FILTER FUNCTIONALITY ====================
function initMassSchedule() {
  const searchInput = document.getElementById('mass-search');
  const clearSearchBtn = document.getElementById('clear-search');
  const filterTags = document.querySelectorAll('.filter-tag');
  const massItems = document.querySelectorAll('.mass-item');
  const resultsCount = document.getElementById('results-count');
  const resetFiltersBtn = document.querySelector('.reset-filters');

  let currentFilter = 'all';
  let searchTerm = '';

  // Update results count
  function updateResultsCount(visibleItems) {
    const totalItems = massItems.length;
    if (resultsCount) {
      resultsCount.innerHTML = `<i class="fas fa-list-ul"></i> Showing <span>${visibleItems}</span> of ${totalItems} events`;
    }
  }

  // Filter items based on current filter and search term
  function filterItems() {
    let visibleCount = 0;
    const noResults = document.querySelector('.no-results');
    
    massItems.forEach((item, index) => {
      const category = item.dataset.category;
      const tags = item.dataset.tags.toLowerCase();
      const text = item.textContent.toLowerCase();
      
      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesSearch = searchTerm === '' || text.includes(searchTerm.toLowerCase());
      
      setTimeout(() => {
        if (matchesFilter && matchesSearch) {
          item.classList.remove('hidden');
          visibleCount++;
        } else {
          item.classList.add('hidden');
        }
      }, index * 50); // Stagger animations
    });

    // Show/hide no results state
    setTimeout(() => {
      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
      updateResultsCount(visibleCount);
    }, massItems.length * 50 + 100);
  }

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      if (searchTerm.length > 0) {
        clearSearchBtn.classList.add('visible');
      } else {
        clearSearchBtn.classList.remove('visible');
      }
      filterItems();
    });
  }

  // Clear search button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchTerm = '';
      clearSearchBtn.classList.remove('visible');
      filterItems();
    });
  }

  // Filter tags
  if (filterTags) {
    filterTags.forEach(tag => {
      tag.addEventListener('click', () => {
        // Update active state
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        
        currentFilter = tag.dataset.filter;
        filterItems();
      });
    });
  }

  // Reset filters button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      currentFilter = 'all';
      searchTerm = '';
      if (searchInput) {
        searchInput.value = '';
        clearSearchBtn.classList.remove('visible');
      }
      filterTags.forEach(tag => {
        tag.classList.remove('active');
        if (tag.dataset.filter === 'all') {
          tag.classList.add('active');
        }
      });
      filterItems();
    });
  }

  // Favorite button functionality
  const favButtons = document.querySelectorAll('.fav-btn');
  favButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const icon = btn.querySelector('i');
      if (btn.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
      }
    });
  });

  // Initialize with all items visible
  updateResultsCount(massItems.length);
}

// Run animations when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    animateIntroCard();
    animateCounters();
    animateNewsCards();
    createNotifications(); // Initialize notifications
    initMassSchedule(); // Initialize mass schedule search & filter
});