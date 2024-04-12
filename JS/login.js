document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('pass');

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate email
        if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
            return;
        }

        // Validate password
        if (passInput.value.trim() === '') {
            showError(passInput, 'Please enter your password.');
            return;
        }

        // If input is valid, submit the form
        form.submit();
    });

    // Function to validate email format
    function isValidEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to show error message
    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = message;
        errorDiv.style.visibility = 'visible';
    }
});
