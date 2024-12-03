// Form validation script
const form = document.getElementById('forms');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {

  console.log('Submit');

    event.preventDefault(); 
    clearErrors();
    let isValid = true;

    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    if (!validatePassword(passwordInput.value)) {
        showError(passwordInput, 'Password must be at least 8 characters long.');
        isValid = false;
    }

    if (isValid) {
        form.submit();
    }
});

function validateEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}


function validatePassword(password) {
    return password.length >= 8;
}


function showError(inputElement, message) {
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.textContent = message;
    inputElement.parentNode.appendChild(errorSpan);
    inputElement.classList.add('error-input');
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((message) => message.remove());

    const errorInputs = document.querySelectorAll('.error-input');
    errorInputs.forEach((input) => input.classList.remove('error-input'));
}
