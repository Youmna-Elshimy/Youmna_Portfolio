// JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Toggle Project Categories
    const toggleButtons = document.querySelectorAll('.category-toggle');
    
    // Add click event listener to each toggle button
    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Toggle active class on the button
            this.classList.toggle('active');
            
            // Get the content associated with this button
            const content = this.nextElementSibling;
            
            // Toggle active class on the content
            content.classList.toggle('active');
            
            // Close other categories if this one is opened
            toggleButtons.forEach((otherButton, otherIndex) => {
                if (otherIndex !== index && otherButton.classList.contains('active')) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

    // Initialize EmailJS with your user ID
    emailjs.init("j1E1k6y0myTGhz7uB" );

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Send email using EmailJS
                emailjs.send("service_ini8yj2", "template_lemcpqm", {
                    name: name,
                    email: email,
                    message: message
                })
                .then(function() {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }, function(error) {
                    alert('Sorry, there was an error sending your message.');
                    console.error('EmailJS error:', error);
                });
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const tableauIcon = document.querySelector('.tableau-img');

    tableauIcon.addEventListener('mouseenter', () => {
        tableauIcon.src = 'images/tableau_green.svg';
    });

    tableauIcon.addEventListener('mouseleave', () => {
        tableauIcon.src = 'images/tableau_grey.svg';
    });
});
