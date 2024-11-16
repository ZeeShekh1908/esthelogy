document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.getElementById('hamburger');

    // Toggle the navigation menu on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('active'); // Close menu after clicking
        });
    });
});
