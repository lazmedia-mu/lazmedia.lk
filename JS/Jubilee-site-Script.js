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


// =======================Event Scripting=======================
function filterEvents(category, element) {
    // Update active tab styling
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');

    // Filter events
    const events = document.querySelectorAll('.event-card');
    events.forEach(event => {
        if (category === 'all' || event.dataset.category === category) {
            event.style.display = 'flex';
            setTimeout(() => {
                event.style.opacity = '1';
                event.style.transform = 'translateX(0)';
            }, 50);
        } else {
            event.style.opacity = '0';
            event.style.transform = 'translateX(20px)';
            setTimeout(() => {
                event.style.display = 'none';
            }, 300);
        }
    });
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