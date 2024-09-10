// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            if (name && email) {
                localStorage.setItem('contactForm', JSON.stringify({ name, email }));
                alert('Form submitted successfully!');
            } else {
                alert('Please fill in all fields.');
            }

        });
    }

});