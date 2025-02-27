/**
 * VenoSense - Component Include System
 * Handles the loading of reusable page components
 * Im not sure if this is the correct way to implement this, but it works
 * Please let me know if you have a better way to do this :)
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load all components marked for inclusion
    loadComponents();
    
    // Set current year in any elements with the year-placeholder class
    setCurrentYear();
    
    // Handle hardware images with special rendering needs
    setupHardwareImages();
});

/**
 * Loads HTML components into their placeholders
 */
function loadComponents() {
    // Dictionary of component types and their file paths
    const components = {
        'vs-header': 'includes/header.html',
        'vs-footer': 'includes/footer.html',
        'vs-page-header': 'includes/page-header.html',
    };
    
    // Process each component type
    Object.keys(components).forEach(componentType => {
        const elements = document.querySelectorAll(componentType);
        
        elements.forEach(element => {
            fetch(components[componentType])
                .then(response => response.text())
                .then(html => {
                    // Transfer all data attributes to the loaded content
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
                    
                    // Copy data attributes from placeholder to component
                    Array.from(element.attributes).forEach(attr => {
                        if (attr.name.startsWith('data-')) {
                            tempDiv.firstChild.setAttribute(attr.name, attr.value);
                        }
                    });
                    
                    // Replace placeholder with component
                    element.outerHTML = tempDiv.innerHTML;
                    
                    // Run any scripts in the component
                    Array.from(tempDiv.querySelectorAll('script')).forEach(script => {
                        eval(script.innerHTML);
                    });
                })
                .catch(error => {
                    console.error(`Failed to load component ${componentType}:`, error);
                });
        });
    });
}

/**
 * Sets the current year in year placeholder elements
 */
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.year-placeholder').forEach(el => {
        el.textContent = currentYear;
    });
}

/**
 * Special handling for hardware images with transparent backgrounds
 */
function setupHardwareImages() {
    const hardwareImages = document.querySelectorAll('img[src*="Hardware Overview.png"]');
    hardwareImages.forEach(img => {
        img.classList.add('hardware-image');
        
        const excludedContainers = ['hardware-container', 'step-image', 'integration-image'];
        const needsContainer = !excludedContainers.some(cls => 
            img.parentElement && img.parentElement.classList.contains(cls)
        );
        
        if (needsContainer) {
            const container = document.createElement('div');
            container.classList.add('hardware-container');
            img.parentNode.insertBefore(container, img);
            container.appendChild(img);
        }
    });
}
