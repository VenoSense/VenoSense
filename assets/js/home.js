/**
 * VenoSense - Homepage Specific JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animate stats with counter when they come into view
    const stats = document.querySelectorAll('.stat-number');
    
    // Only run if stats exist on the page
    if (stats.length > 0) {
        const animateStats = () => {
            stats.forEach(stat => {
                const targetValue = parseInt(stat.getAttribute('data-value'), 10);
                const duration = 1500; // milliseconds
                const startTime = Date.now();
                const startValue = 0;
                
                const updateStat = () => {
                    const currentTime = Date.now();
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    
                    // Use easeOutQuad for smoother animation
                    const easeProgress = 1 - (1 - progress) * (1 - progress);
                    const currentValue = Math.floor(startValue + easeProgress * (targetValue - startValue));
                    
                    stat.textContent = currentValue.toLocaleString();
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateStat);
                    } else {
                        stat.textContent = targetValue.toLocaleString();
                    }
                };
                
                updateStat();
            });
        };
        
        // Use Intersection Observer to trigger animation when stats come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.disconnect(); // Only animate once
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('.welcome-stats'));
    }
    
    // Add parallax effect to the splash background
    const splashBg = document.querySelector('.splash-bg');
    
    if (splashBg) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const translateY = scrollPosition * 0.4; // Adjust parallax speed
            
            splashBg.style.transform = `translateY(${translateY}px)`;
        });
    }
    
    // Add animation classes to features cards when they come into view
    const animateOnScroll = document.querySelectorAll('.feature-card, .step');
    
    if (animateOnScroll.length > 0) {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });
        
        animateOnScroll.forEach(element => {
            // Add base animation style
            element.classList.add('animate-on-scroll');
            scrollObserver.observe(element);
        });
    }
    
    // Add hover effect for features
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            featureCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.add('dim');
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            featureCards.forEach(otherCard => {
                otherCard.classList.remove('dim');
            });
        });
    });
    
    // Add testimonial slider if present on the page
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (testimonialSlider) {
        let currentSlide = 0;
        const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');
        const totalSlides = testimonials.length;
        
        // Hide all testimonials except the first one
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Create navigation dots
        if (totalSlides > 1) {
            const dotsContainer = document.createElement('div');
            dotsContainer.classList.add('slider-dots');
            
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('slider-dot');
                if (i === 0) dot.classList.add('active');
                
                dot.addEventListener('click', () => {
                    goToSlide(i);
                });
                
                dotsContainer.appendChild(dot);
            }
            
            testimonialSlider.appendChild(dotsContainer);
            
            // Auto-rotate testimonials
            setInterval(() => {
                goToSlide((currentSlide + 1) % totalSlides);
            }, 5000);
        }
        
        function goToSlide(slideIndex) {
            testimonials.forEach((testimonial, index) => {
                testimonial.style.display = 'none';
                document.querySelectorAll('.slider-dot')[index].classList.remove('active');
            });
            
            testimonials[slideIndex].style.display = 'block';
            document.querySelectorAll('.slider-dot')[slideIndex].classList.add('active');
            currentSlide = slideIndex;
        }
    }
});
