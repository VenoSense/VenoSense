/**
 * Technology page specific JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.component-tab');
    const tabContents = document.querySelectorAll('.component-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Optional: Image zoom functionality
    const techImages = document.querySelectorAll('.rounded-image');
    techImages.forEach(image => {
        image.addEventListener('click', function() {
            // Simple lightbox effect could be implemented here
            console.log('Image clicked:', this.alt);
        });
    });
});
