// script.js

// Add any dynamic functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a class to the landing content after a delay
    setTimeout(function() {
        const landingContent = document.querySelector('#landing .landing-content');
        landingContent.classList.add('show');
    }, 500);
});
