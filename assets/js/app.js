/**
 * VenoSense - Shared Application JavaScript
 * Contains common functionality used across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Active page highlighting in navigation
    setActiveNavLink();
    
    // Mobile menu toggle
    setupMobileMenu();
    
    // Set current year in footer copyright
    setCurrentYear();
    
    // Setup hardware image special handling
    setupHardwareImages();
});

/**
 * Sets the active navigation link based on the current page
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'home';
    const navLinks = document.querySelectorAll('#nav-menu a');
    
    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page link
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

/**
 * Sets up the mobile menu toggle functionality
 */
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            menuToggle.classList.toggle('open');
        });
    }
}

/**
 * Sets the current year in the footer copyright text
 */
function setCurrentYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Special handling for hardware images with transparent background
 */
function setupHardwareImages() {
    const hardwareImages = document.querySelectorAll('img[src*="Hardware Overview.png"]');
    hardwareImages.forEach(img => {
        img.classList.add('hardware-image');
        
        // Create container div with appropriate background if parent doesn't already have one
        const excludedParents = ['hardware-container', 'step-image', 'integration-image'];
        const parentHasClass = excludedParents.some(cls => 
            img.parentElement && img.parentElement.classList.contains(cls)
        );
        
        if (!parentHasClass) {
            const container = document.createElement('div');
            container.classList.add('hardware-container');
            img.parentNode.insertBefore(container, img);
            container.appendChild(img);
        }
    });
}
