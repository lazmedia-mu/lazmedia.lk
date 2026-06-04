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
});