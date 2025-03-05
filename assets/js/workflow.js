/**
 * VenoSense - Workflow Page JavaScript
 * Handles interactive functionality for the workflow page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Process steps animation
    const processSteps = document.querySelectorAll('.process-step');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    processSteps.forEach(step => {
        observer.observe(step);
    });

    // Wells criteria calculator functionality
    const criteria = document.querySelectorAll('.criterion');
    const resultScore = document.querySelector('.result-score');
    const resultAssessment = document.querySelector('.result-assessment');
    
    // Initialize score
    let score = 0;
    updateResults();
    
    // Add click event listeners to criteria
    criteria.forEach(criterion => {
        criterion.addEventListener('click', function() {
            const checkBox = this.querySelector('.criterion-check');
            const pointsText = this.querySelector('.criterion-points').textContent;
            const points = parseInt(pointsText);
            
            // Toggle checked state
            if (checkBox.classList.contains('checked')) {
                checkBox.classList.remove('checked');
                score -= points;
            } else {
                checkBox.classList.add('checked');
                score += points;
            }
            
            // Update score display
            updateResults();
        });
    });
    
    function updateResults() {
        // Ensure we have the elements before trying to update them
        if (resultScore && resultAssessment) {
            resultScore.textContent = score;
            
            // Remove all assessment classes
            resultAssessment.classList.remove('high', 'moderate', 'low');
            
            // Add appropriate class and text
            if (score >= 3) {
                resultAssessment.classList.add('high');
                resultAssessment.textContent = 'HIGH RISK';
            } else if (score === 2) {
                resultAssessment.classList.add('moderate');
                resultAssessment.textContent = 'MODERATE RISK';
            } else {
                resultAssessment.classList.add('low');
                resultAssessment.textContent = 'LOW RISK';
            }
        }
    }
});
