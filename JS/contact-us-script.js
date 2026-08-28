document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Map load animation
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.style.opacity = '0';
        mapContainer.style.transform = 'translateY(20px)';
        mapContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            mapContainer.style.opacity = '1';
            mapContainer.style.transform = 'translateY(0)';
        }, 300);
    }

    // Add touch support for better mobile experience
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // Initialize Google Map with custom logo marker
    function initMap() {
        // Church coordinates - update these with your exact location
        const churchLocation = { lat: 7.0432, lng: 79.9654 };
        
        // Create map
        const map = new google.maps.Map(document.getElementById('custom-map'), {
            zoom: 16,
            center: churchLocation,
            mapTypeId: 'roadmap'
        });

        // Custom church logo marker
        const churchIcon = {
            url: 'Assets/Essentials/Jubilee-logo.png', // Your church logo path
            scaledSize: new google.maps.Size(50, 50), // Size of your marker
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(25, 25) // Center the pin on the coordinates
        };

        // Add marker with custom icon
        const marker = new google.maps.Marker({
            position: churchLocation,
            map: map,
            icon: churchIcon,
            title: 'St. Lazarus\' Church - Kurukulawa',
            animation: google.maps.Animation.DROP
        });

        // Add info window when clicking the marker
        const infoWindow = new google.maps.InfoWindow({
            content: '<div style="padding:10px;text-align:center;"><strong>St. Lazarus\' Church</strong><br>Kurukulawa, Ragama<br>Sri Lanka</div>'
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    }

    // Load Google Maps API if not already loaded
    if (typeof google !== 'undefined' && google.maps) {
        initMap();
    } else {
        // If API isn't loaded yet, wait for it
        window.initMap = initMap;
    }
});