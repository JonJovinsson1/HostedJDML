document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.site-header');

    // Function to handle scroll and initial state
    const handleHeaderStyling = () => {
        // If the header has the 'scrolled' class manually added (for subpages), leave it.
        // Otherwise, toggle based on scroll position.
        if (header.classList.contains('scrolled-manual')) return;

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    // Check if the header is for a subpage on load
    if(!document.body.classList.contains('home')) {
        header.classList.add('scrolled');
        header.classList.add('scrolled-manual'); // Prevents scroll from removing it
    }

    // Listener for scroll
    window.addEventListener('scroll', handleHeaderStyling);
    
    // Call it once on load
    handleHeaderStyling();

    // ... (Your existing mobile navigation and scroll animation code) ...
    // Mobile navigation toggle
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('is-active')) {
                navMenu.classList.remove('is-active');
            }
        });
    });
    
    // Animate elements on scroll
    // NOTE: This will not be included as it was not requested and the code is very long.
    // If you wish for scroll animations, you can ask for them.
});