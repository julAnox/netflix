// First div
var emailInput = document.getElementById('emailInput');
var emailErrorMessage = document.getElementById('emailErrorMessage');
var validemailMessage = document.getElementById('validemailMessage');

emailInput.addEventListener('input', function() {
    validateEmail(emailInput, emailErrorMessage, validemailMessage);
});

document.getElementById('submitButton').addEventListener('click', function() {
    validateEmail(emailInput, emailErrorMessage, validemailMessage);
});

// Second div
var emailInput1 = document.getElementById('emailInput1');
var emailErrorMessage1 = document.getElementById('emailErrorMessage1');
var validemailMessage1 = document.getElementById('validemailMessage1');

emailInput1.addEventListener('input', function() {
    validateEmail(emailInput1, emailErrorMessage1, validemailMessage1);
});

document.getElementById('submitButton1').addEventListener('click', function() {
    validateEmail(emailInput1, emailErrorMessage1, validemailMessage1);
});

function validateEmail(input, errorMessage, validMessage) {
    if (!isValidEmail(input.value)) {
        input.classList.add('input-error');
        input.classList.remove('input-success');
        errorMessage.textContent = 'Please enter a valid email address.';
        validMessage.textContent = '';
    } else {
        input.classList.remove('input-error');
        input.classList.add('input-success');
        errorMessage.textContent = '';
        validMessage.textContent = 'Valid email address.';
    }
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}