// Force direct download - never opens in new tab
function forceDownload() {
    const fileUrl = 'Assets/Jubilee Site/Jubilee-Hymn-Test-Version.mp3';
    const fileName = 'St-Lazarus-Jubilee-Hymn-Test-Version.mp3';

    // This method guarantees download on ALL browsers
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        if (xhr.status === 200) {
            const blob = xhr.response;
            const link = document.createElement('a');
            if (link.download !== undefined) {
                const url = window.URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', fileName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }
        }
    };
    xhr.send();
}

function openLightbox(imageSrc, captionText) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const caption = lightbox.querySelector('.lightbox-caption');

    lightbox.style.display = 'block';
    lightboxImg.src = imageSrc;
    caption.textContent = captionText;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close lightbox with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});


// Add subtle parallax effect to hero section
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.jubilee-hero');
    const eventInfo = document.querySelector('.event-info');
    const floatingLogo = document.querySelector('.floating-logo');
    
    if (hero && eventInfo && floatingLogo) {
        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            // Subtle parallax movement - different speeds for different elements
            eventInfo.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
            floatingLogo.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
        });
        
        // Reset position when mouse leaves
        hero.addEventListener('mouseleave', function() {
            eventInfo.style.transform = 'translate(0, 0)';
            floatingLogo.style.transform = 'translate(0, 0)';
        });
    }
});

// =======================Event Scripting=======================
function filterEvents(category, element) {
    // Safety check - if element is null/undefined, exit to prevent errors
    if (!element) return;
    
    // Update active tab styling
    const allTabs = document.querySelectorAll('.tab-btn');
    allTabs.forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');

    // Filter events with improved transitions to maintain vertical waterfall flow
    const eventsContainer = document.getElementById('eventsTimeline');
    const events = document.querySelectorAll('.event-card');
    let visibleCount = 0;
    
    // First collect all matching events to maintain proper order
    const matchingEvents = [];
    const nonMatchingEvents = [];
    
    events.forEach(event => {
        if (category === 'all' || event.dataset.category === category) {
            matchingEvents.push(event);
        } else {
            nonMatchingEvents.push(event);
        }
    });
    
    // Hide non-matching events first
    nonMatchingEvents.forEach(event => {
        event.style.opacity = '0';
        event.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            event.style.display = 'none';
        }, 250);
    });
    
    // Show matching events in their original vertical order with staggered animations
     matchingEvents.forEach((event, index) => {
         // Reappend to maintain DOM order (ensures vertical stacking)
         eventsContainer.appendChild(event);
         
         // Show with staggered delay
         const delay = index * 80;
         event.style.display = 'flex';
         setTimeout(() => {
             event.style.opacity = '1';
             event.style.transform = 'translateY(0)';
         }, delay + 50);
     });
     
     // Show empty state if no events match (for future-proofing)
      const emptyState = document.querySelector('.no-events-message');
      if (matchingEvents.length === 0 && !emptyState) {
        const noEvents = document.createElement('div');
        noEvents.className = 'no-events-message';
        noEvents.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; width: 100%;">
                <i class="fas fa-calendar-times" style="font-size: 3rem; color: #d4a017; margin-bottom: 20px;"></i>
                <h3>No events in this category</h3>
                <p>Check back soon for upcoming ${category} events.</p>
            </div>
        `;
        eventsContainer.appendChild(noEvents);
    } else if (visibleCount > 0 && emptyState) {
        emptyState.remove();
    }
}

function toggleEventDetails(element) {
    const expandedContent = element.nextElementSibling;
    const icon = element.querySelector('i');
    if (expandedContent.classList.contains('hidden')) {
        expandedContent.classList.remove('hidden');
        element.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    } else {
        expandedContent.classList.add('hidden');
        element.innerHTML = 'More Details <i class="fas fa-chevron-down"></i>';
    }
}