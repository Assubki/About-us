// Toggle Dark/Light Mode
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'dark Mode';
    this.textContent = `Switch to ${currentMode}`;
});

// Scroll to Content
document.getElementById('scrollToContent').addEventListener('click', function() {
    document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
});

// Responsive Menu Toggle for Small Screens
const menuToggle = document.getElementById('menu');
menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('open');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.header a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Add your smooth scrolling logic here, for example:
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});