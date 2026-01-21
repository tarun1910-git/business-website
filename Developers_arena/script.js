document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle the navigation menu
        nav.classList.toggle('nav-active');
        
        // Animate the burger icon (optional)
        burger.classList.toggle('toggle');
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const userNameSpan = document.getElementById('user-name');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // 1. Prevent the page from reloading
            e.preventDefault();

            // 2. Get the name entered by the user
            const nameInput = document.getElementById('name').value;

            // 3. Hide the form
            contactForm.style.display = 'none';

            // 4. Show the success message and insert the name
            userNameSpan.textContent = nameInput;
            successMessage.classList.add('show');
            
            // Optional: Log to console to verify
            console.log("Reservation form submitted successfully.");
        });
    }
});