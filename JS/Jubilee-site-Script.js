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

// =======================Custom Audio Player Script=======================
document.addEventListener('DOMContentLoaded', function() {
    // Audio elements
    const audio = document.getElementById('jubileeAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const progressFill = document.getElementById('progressFill');
    const progressSlider = document.getElementById('progressSlider');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeIcon = document.getElementById('volumeIcon');
    const speedBtn = document.getElementById('speedBtn');
    const speedMenu = document.getElementById('speedMenu');
    const speedOptions = document.querySelectorAll('.speed-option');
    const rewindBtn = document.getElementById('rewindBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const shareBtn = document.getElementById('shareBtn');
    const shareModal = document.getElementById('shareModal');
    const closeShare = document.getElementById('closeShare');

    // Play/Pause functionality
    if (playPauseBtn && audio) {
        playPauseBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');
            } else {
                audio.pause();
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
            }
        });
    }

    // Update progress bar
    if (audio && progressFill && progressSlider && currentTimeEl) {
        audio.addEventListener('timeupdate', function() {
            const current = audio.currentTime;
            const duration = audio.duration;
            if (!isNaN(duration)) {
                const percent = (current / duration) * 100;
                progressFill.style.width = percent + '%';
                progressSlider.value = percent;
                currentTimeEl.textContent = formatTime(current);
            }
        });

        // Set duration when metadata is loaded
        audio.addEventListener('loadedmetadata', function() {
            if (durationEl) {
                durationEl.textContent = formatTime(audio.duration);
            }
        });

        // Seek functionality
        if (progressSlider) {
            progressSlider.addEventListener('input', function() {
                const percent = this.value;
                const time = (percent / 100) * audio.duration;
                audio.currentTime = time;
                progressFill.style.width = percent + '%';
            });
        }
    }

    // Rewind 10 seconds
    if (rewindBtn && audio) {
        rewindBtn.addEventListener('click', function() {
            audio.currentTime = Math.max(0, audio.currentTime - 10);
        });
    }

    // Forward 10 seconds
    if (forwardBtn && audio) {
        forwardBtn.addEventListener('click', function() {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        });
    }

    // Volume control
    if (volumeSlider && audio) {
        volumeSlider.addEventListener('input', function() {
            const volume = this.value / 100;
            audio.volume = volume;
            
            // Update volume icon
            if (volumeIcon) {
                if (volume === 0) {
                    volumeIcon.classList.remove('fa-volume-up', 'fa-volume-down');
                    volumeIcon.classList.add('fa-volume-mute');
                } else if (volume < 0.5) {
                    volumeIcon.classList.remove('fa-volume-up', 'fa-volume-mute');
                    volumeIcon.classList.add('fa-volume-down');
                } else {
                    volumeIcon.classList.remove('fa-volume-down', 'fa-volume-mute');
                    volumeIcon.classList.add('fa-volume-up');
                }
            }
        });
    }

    // Mute/unmute on volume button click
    if (volumeBtn && audio && volumeSlider) {
        let previousVolume = 100;
        volumeBtn.addEventListener('click', function() {
            if (audio.volume > 0) {
                previousVolume = volumeSlider.value;
                audio.volume = 0;
                volumeSlider.value = 0;
                volumeIcon.classList.remove('fa-volume-up');
                volumeIcon.classList.add('fa-volume-mute');
            } else {
                audio.volume = previousVolume / 100;
                volumeSlider.value = previousVolume;
                volumeIcon.classList.remove('fa-volume-mute');
                volumeIcon.classList.add('fa-volume-up');
            }
        });
    }

    // Playback speed control
    if (speedBtn && speedMenu) {
        speedBtn.addEventListener('click', function() {
            speedMenu.classList.toggle('open');
        });

        // Close speed menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!speedBtn.contains(e.target) && !speedMenu.contains(e.target)) {
                speedMenu.classList.remove('open');
            }
        });
    }

    // Speed options
    if (speedOptions && audio) {
        speedOptions.forEach(option => {
            option.addEventListener('click', function() {
                const speed = parseFloat(this.dataset.speed);
                audio.playbackRate = speed;
                speedBtn.textContent = speed + 'x';
                
                // Update active state
                speedOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Close menu
                speedMenu.classList.remove('open');
            });
        });
    }

    // Share functionality
    if (shareBtn && shareModal) {
        shareBtn.addEventListener('click', function() {
            shareModal.classList.add('open');
        });
    }

    if (closeShare && shareModal) {
        closeShare.addEventListener('click', function() {
            shareModal.classList.remove('open');
        });

        // Close share modal when clicking outside
        shareModal.addEventListener('click', function(e) {
            if (e.target === shareModal) {
                shareModal.classList.remove('open');
            }
        });
    }

    // Format time helper function
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    // Reset play icon when audio ends
    if (audio && playIcon) {
        audio.addEventListener('ended', function() {
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            progressFill.style.width = '0%';
            progressSlider.value = 0;
        });
    }
});

// Share functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    return false;
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Listen to the beautiful Centennial Jubilee Hymn from St. Lazarus' Church!");
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    return false;
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out the Centennial Jubilee Hymn from St. Lazarus' Church!");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    return false;
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
    });
    return false;
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