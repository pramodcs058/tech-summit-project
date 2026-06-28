// JavaScript functions for the Tech Event 2026 website

// Function to handle navigation bar interactions
function handleNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default behavior for smooth scrolling
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Function to initialize the website
function init() {
    handleNavigation();
}

// Call the init function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);