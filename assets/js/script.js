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

    function toggleMenu(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const isMenuOpen = navMenu.classList.contains('show');
        
        if (!isMenuOpen) {
            // Opening menu
            scrollPosition = window.pageYOffset;
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.top = `-${scrollPosition}px`;
            body.style.width = '100%';
            navMenu.classList.add('show');
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            // Closing menu
            body.style.removeProperty('overflow');
            body.style.removeProperty('position');
            body.style.removeProperty('top');
            body.style.removeProperty('width');
            window.scrollTo(0, scrollPosition);
            navMenu.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Menu toggle button click
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('show') && 
            !navMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            toggleMenu();
        }
    });

    // Close menu on resize if needed
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
            toggleMenu();
        }
    });

    // Add touch events for better mobile interaction
    document.addEventListener('touchstart', function() {}, {passive: true});
});
