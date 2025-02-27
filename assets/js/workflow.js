/**
 * VenoSense - Workflow Page Specific JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animation for workflow steps
    const workflowSteps = document.querySelectorAll('.workflow-step');
    
    if (workflowSteps.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-step');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        workflowSteps.forEach(step => {
            step.classList.add('step-hidden');
            observer.observe(step);
        });
    }
    
    // Make sure the Hardware Overview image has the right styling
    const hardwareImages = document.querySelectorAll('img[src="Assets/Hardware Overview.png"]');
    hardwareImages.forEach(img => {
        img.classList.add('hardware-image');
        
        // Create container div with appropriate background if parent doesn't already have one
        if (!img.parentElement.classList.contains('hardware-container') && 
            !img.parentElement.classList.contains('step-image') && 
            !img.parentElement.classList.contains('integration-image')) {
            const container = document.createElement('div');
            container.classList.add('hardware-container');
            img.parentNode.insertBefore(container, img);
            container.appendChild(img);
        }
    });
});
