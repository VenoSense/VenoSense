// script.js

// Add any dynamic functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a class to the landing content after a delay
    setTimeout(function() {
        const landingContent = document.querySelector('#landing .landing-content');
        landingContent.classList.add('show');
    }, 500);

    // Add event listeners to social sharing buttons (replace with actual sharing logic)
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const platform = this.classList[1]; // e.g., 'twitter', 'facebook'
            alert(`Sharing on ${platform}! (This is a placeholder)`);
            // Replace the alert with actual social sharing logic here
        });
    });

    // Add event listener to the share incentive button
    const shareIncentiveButton = document.querySelector('.share-incentive-button');
    shareIncentiveButton.addEventListener('click', function() {
        alert('Thank you for sharing! You have been entered into the draw. (This is a placeholder)');
        // Replace the alert with actual incentive logic here (e.g., form submission, cookie tracking)
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;
    let scrollPosition = 0;

    // Handle menu toggle
    function toggleMenu() {
        const isOpen = navMenu.classList.contains('show');
        
        if (!isOpen) {
            // Store scroll position and prevent body scroll
            scrollPosition = window.pageYOffset;
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.top = `-${scrollPosition}px`;
            body.style.width = '100%';
        } else {
            // Restore scroll position
            body.style.removeProperty('overflow');
            body.style.removeProperty('position');
            body.style.removeProperty('top');
            body.style.removeProperty('width');
            window.scrollTo(0, scrollPosition);
        }
        
        navMenu.classList.toggle('show');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    }

    // Menu toggle event
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('show') && 
            !navMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Handle navigation clicks
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    // Handle resize events
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
                toggleMenu();
            }
        }, 250);
    });

    // Add touch events for better mobile interaction
    document.addEventListener('touchstart', function() {}, {passive: true});
});
