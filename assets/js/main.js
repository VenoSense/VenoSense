/**
 * VenoSense - Main JavaScript
 * Handles common stuff 
 */

document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const yearElements = document.querySelectorAll('#current-year');
    if (yearElements.length) {
        yearElements.forEach(el => {
            el.textContent = new Date().getFullYear();
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const siteNav = document.getElementById('site-nav');
    
    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('open');
            siteNav.classList.toggle('show');
        });
    }
    
    // Fix for hero buttons on mobile - ensure they're clickable
    const heroButtons = document.querySelectorAll('.hero-banner__cta .btn');
    if (heroButtons.length) {
        heroButtons.forEach(button => {
            button.addEventListener('touchstart', function() {
                // This empty handler ensures touch events work properly
            });
        });
    }
});