document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('customForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', {
                name: name,
                email: email,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});