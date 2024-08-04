// Simple form handling and interaction
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            alert('Thank you for your message! We will get back to you soon.');
            event.preventDefault(); // Prevent form submission for demo purposes
        });
    }
});
