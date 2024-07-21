document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('pass');
    const loginButton = document.getElementById('submit')

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate email
        if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
            emailInput.style.borderColor = 'red';
            passInput.style.borderColor = 'red';
            return;
        }else {
            showError(emailInput, ''); 
            emailInput.style.borderColor = 'green';   
        }

        // Validate password
        if (passInput.value.trim() === '') {
            showError(passInput, 'Please enter your password.');
            passInput.style.borderColor = 'red';
            return;
        }else {
            showError(passInput, '');
            passInput.style.borderColor = 'green';
        }

        
    });

    // Function to validate email format
    function isValidEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to show error message
    function showError(input, message) {
        let errorDiv = input.nextElementSibling;
        errorDiv.textContent = message;
        errorDiv.style.visibility = 'visible';
       
    }
});

