function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function checkPasswordStrength(password) {
    const strengthIndicator = document.getElementById('password-strength');
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    switch (strength) {
        case 0:
        case 1:
            strengthIndicator.textContent = 'Weak';
            strengthIndicator.style.color = 'red';
            break;
        case 2:
            strengthIndicator.textContent = 'Moderate';
            strengthIndicator.style.color = 'orange';
            break;
        case 3:
        case 4:
            strengthIndicator.textContent = 'Strong';
            strengthIndicator.style.color = 'green';
            break;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            event.preventDefault();
        }
    });

    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('input', function() {
        checkPasswordStrength(passwordInput.value);
    });
});