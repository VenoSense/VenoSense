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

    // Toggle menu
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        body.style.overflow = navMenu.classList.contains('show') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('show');
            body.style.overflow = '';
        }
    });
});
