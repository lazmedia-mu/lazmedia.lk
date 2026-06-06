// Album data with photos for each gallery album
const albumData = {
    histroArch: {
        title: "Historical Archives of St. Lazarus Parish",
        photos: [
            { src: "Assets/Gallery/Album Card 1/histroArch1.jpeg", caption: "Introduction of this new platform" },
            { src: "Assets/Gallery/Album Card 1/histroArch2.jpeg", caption: "First interaction with the website" },
            { src: "Assets/Gallery/Album Card 1/histroArch3.jpeg", caption: "Behind the scenes" },
            { src: "Assets/Gallery/Album Card 1/histroArch4.jpeg", caption: "Team spent day and night to launch the website" }
        ]
    },

    testdriveA: {
        title: "Testdrive A",
        photos: [
            { src: "Assets/Gallery/Album Card 1/histroArch1.jpeg", caption: "Introduction of this new platform" },
            { src: "Assets/Gallery/Album Card 1/histroArch2.jpeg", caption: "First interaction with the website" },
            { src: "Assets/Gallery/Album Card 1/histroArch3.jpeg", caption: "Behind the scenes" },
            { src: "Assets/Gallery/Album Card 1/histroArch4.jpeg", caption: "Team spent day and night to launch the website" }
        ]
    },

    testdriveB: {
        title: "Testdrive B",
        photos: [
            { src: "Assets/Gallery/Album Card 1/histroArch1.jpeg", caption: "Introduction of this new platform" },
            { src: "Assets/Gallery/Album Card 1/histroArch2.jpeg", caption: "First interaction with the website" },
            { src: "Assets/Gallery/Album Card 1/histroArch3.jpeg", caption: "Behind the scenes" },
            { src: "Assets/Gallery/Album Card 1/histroArch4.jpeg", caption: "Team spent day and night to launch the website" }
        ]
    }
};

// DOM Elements
const albumsGrid = document.getElementById('albumsGrid');
const photosGrid = document.getElementById('photosGrid');
const backBtn = document.getElementById('backBtn');
let currentAlbum = null;

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

// Open an album and display its photos
function openAlbum(albumId) {
    currentAlbum = albumId;
    const album = albumData[albumId];

    if (!album) return;

    // Hide albums grid, show photos grid and back button
    albumsGrid.style.display = 'none';
    backBtn.style.display = 'inline-flex';
    photosGrid.style.display = 'grid';
    photosGrid.innerHTML = '';

    // Populate photos
    album.photos.forEach((photo, index) => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.innerHTML = `
            <a href="${photo.src}" data-lightbox="gallery-${albumId}" data-title="${photo.caption}">
                <img src="${photo.src}" alt="${photo.caption}">
            </a>
        `;
        photosGrid.appendChild(photoCard);

        // Stagger the animations
        setTimeout(() => {
            photoCard.classList.add('visible');
        }, index * 50);
    });

    // Scroll to top of photos grid
    photosGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Go back to albums grid
function closeAlbum() {
    currentAlbum = null;

    // Hide photos grid and back button, show albums grid
    photosGrid.style.display = 'none';
    backBtn.style.display = 'none';
    albumsGrid.style.display = 'grid';

    // Scroll back to albums
    albumsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to album cards
    document.querySelectorAll('.album-card').forEach(card => {
        card.addEventListener('click', () => {
            const albumId = card.dataset.album;
            openAlbum(albumId);
        });
    });

    // Back button click handler
    backBtn.addEventListener('click', closeAlbum);

    // Initialize album animations
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