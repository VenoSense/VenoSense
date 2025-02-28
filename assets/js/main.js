/**
 * VenoSense - Main JavaScript
 * Handles common functionality across the website
 */

document.addEventListener('DOMContentLoaded', function() {

    function adjustHeroLayout() {
        const heroSection = document.querySelector('.hero-banner');
        const ctaButtons = document.querySelector('.hero-banner__cta');
        const waveElement = document.querySelector('.hero-banner__wave');
        
        if (heroSection && ctaButtons && waveElement) {
            // Make sure wave doesn't overlap with buttons
            waveElement.style.pointerEvents = 'none';
            
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
});