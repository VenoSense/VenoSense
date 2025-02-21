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
});
