/**
 * VenoSense - Main JavaScript
 * Handles common functionality across the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality - Fixed to ensure it works on all pages
    const menuToggle = document.getElementById('menu-toggle');
    const siteNav = document.getElementById('site-nav');
    
    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('open');
            siteNav.classList.toggle('show');
        });
    }
    
    // Adjust hero layout - modified to work without the wave
    function adjustHeroLayout() {
        const heroSection = document.querySelector('.hero-banner');
        const ctaButtons = document.querySelector('.hero-banner__cta');
        
        if (heroSection && ctaButtons) {
            // Calculate and set proper bottom padding to ensure space below buttons
            const ctaRect = ctaButtons.getBoundingClientRect();
            const heroRect = heroSection.getBoundingClientRect();
            const bottomSpace = heroRect.bottom - ctaRect.bottom;
            
            // If there's not enough space below the buttons, add more padding
            if (bottomSpace < 40) {
                const additionalPadding = 40 - bottomSpace;
                heroSection.style.paddingBottom = `${Math.max(32, additionalPadding)}px`;
            }
        }
    }
    
    // Run on load and on resize
    adjustHeroLayout();
    window.addEventListener('resize', adjustHeroLayout);
    
    // Add touch tap highlight to improve mobile experience with buttons
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Set active navigation based on current page
    function setActiveNavigation() {
        const currentPath = window.location.pathname;
        const pageName = currentPath.split('/').pop() || 'index.html'; // Default to index.html if no page specified
        
        const navLinks = document.querySelectorAll('.site-nav__link');
        navLinks.forEach(link => {
            // Reset all links
            link.classList.remove('active');
            
            // Set active class for current page
            if (link.getAttribute('href') === pageName) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize navigation
    setActiveNavigation();
});