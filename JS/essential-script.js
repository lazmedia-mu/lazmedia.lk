document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');

    function openMenu() {
        mobileMenu.classList.add('active');
        hamburgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        document.body.style.overflow = 'visible';
    }

    // Open menu
    hamburgerBtn.addEventListener('click', openMenu);

    // Close menu
    closeBtn.addEventListener('click', closeMenu);

    // Close when clicking menu links
    document.querySelectorAll('.menu-nav a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add header scroll effect for desktop
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.heads-up');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url("https://imgs.search.brave.com/mEktM9IE94CvjgVMGuutGG34_juJskVZyfnBkmfH_3o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRpYS5nZXR0eWltYWdlcy5jb20vaWQvNTg0NjgxODQyL3Bob3RvL3RoZS1nb2xkZW4taG91ci5qcGc_cz02MTJ4NjEyJnc9MCZrPTIwJmM9V2ZPdFl4TXJrekVlOU1jV3E3QUp6WF9TdjBPLTJWaG9PTlVpQXhWUlJraz0")';
            header.style.backgroundSize = 'cover';
            header.style.backgroundPosition = 'center';
        }
    });
});