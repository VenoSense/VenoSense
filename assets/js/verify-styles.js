document.addEventListener('DOMContentLoaded', function() {
    // Check if stylesheets are loaded properly
    const styleSheets = Array.from(document.styleSheets);
    const loadedStyles = styleSheets.map(sheet => {
        try {
            return sheet.href ? new URL(sheet.href).pathname : 'inline';
        } catch (e) {
            return 'cross-origin';
        }
    });
    
    console.log('Loaded stylesheets:', loadedStyles);
    
    // Verify if critical styles are applied
    const header = document.querySelector('.site-header');
    const headerStyles = header ? window.getComputedStyle(header) : null;
    
    if (headerStyles) {
        console.log('Header background-color:', headerStyles.backgroundColor);
        console.log('Header height:', headerStyles.height);
    } else {
        console.warn('Header element not found or styles not applied');
    }
    
    // Add visible indicator if styles are missing
    const stylesLoaded = styleSheets.some(sheet => {
        try {
            return sheet.href && sheet.href.includes('styles.css');
        } catch (e) {
            return false;
        }
    });
    
    if (!stylesLoaded) {
        const alert = document.createElement('div');
        alert.style.position = 'fixed';
        alert.style.top = '0';
        alert.style.left = '0';
        alert.style.right = '0';
        alert.style.backgroundColor = 'red';
        alert.style.color = 'white';
        alert.style.padding = '10px';
        alert.style.textAlign = 'center';
        alert.style.zIndex = '9999';
        alert.textContent = 'Warning: Main stylesheet failed to load. Please check the console for details.';
        document.body.prepend(alert);
        
        console.error('Main stylesheet not loaded. Check file paths and MIME types.');
    }
});
