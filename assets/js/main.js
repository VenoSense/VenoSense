/**
 * VenoSense - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            menuToggle.classList.toggle('open');
        });
    }
    
    // Add special handling for the Hardware Overview image which has transparent background
    const hardwareImages = document.querySelectorAll('img[src="Assets/Hardware Overview.png"]');
    hardwareImages.forEach(img => {
        img.classList.add('hardware-image');
        
        // Create container div with appropriate background if parent doesn't already have one
        if (!img.parentElement.classList.contains('hardware-container')) {
            const container = document.createElement('div');
            container.classList.add('hardware-container');
            img.parentNode.insertBefore(container, img);
            container.appendChild(img);
        }
    });
});
