// Select form and input elements
const form = document.getElementById('forms');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('Confirmpass');

// Add event listener to form submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Clear all previous error messages
    clearErrors();

    let isValid = true;

    // Validate each input field
    if (!validateUsername(usernameInput.value)) {
        showError(usernameInput, 'Username must be at least 3 characters.');
        isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    if (!validatePassword(passwordInput.value)) {
        showError(passwordInput, 'Password must be at least 8 characters.');
        isValid = false;
    }

    if (!validateConfirmPassword(passwordInput.value, confirmPasswordInput.value)) {
        showError(confirmPasswordInput, 'Passwords do not match.');
        isValid = false;
    }

    // Submit the form if all inputs are valid
    if (isValid) {
        form.submit();
    }
});

// Validation functions
function validateUsername(username) {
    return username.trim().length >= 3;
}

function validateEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}

// Show error message
function showError(inputElement, message) {
    const parent = inputElement.parentElement;
    const errorElement = parent.querySelector('small');
    errorElement.textContent = message;
    inputElement.classList.add('error-input');
}

// Clear all errors
function clearErrors() {
    const errorMessages = document.querySelectorAll('.form-group small');
    errorMessages.forEach((error) => (error.textContent = ''));

    const errorInputs = document.querySelectorAll('.error-input');
    errorInputs.forEach((input) => input.classList.remove('error-input'));
}
