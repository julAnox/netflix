const emailInput = document.getElementById('emailInput');
const emailInput1 = document.getElementById('emailInput1');
const emailErrorMessage = document.getElementById('emailErrorMessage');
const emailErrorMessage1 = document.getElementById('emailErrorMessage-1');

emailInput.addEventListener('blur', function() {
    if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('input-error');
        emailErrorMessage.textContent = 'Please enter a valid email address.';
    } else {
        emailInput.classList.remove('input-error');
        emailErrorMessage.textContent = '';
    }
});

emailInput1.addEventListener('blur', function() {
    if (!isValidEmail(emailInput1.value)) {
        emailInput1.classList.add('input-error');
        emailErrorMessage1.textContent = 'Please enter a valid email address.';
    } else {
        emailInput.classList.remove('input-error');
        emailErrorMessage1.textContent = '';
    }
});

document.getElementById('submitButton').addEventListener('click', function() {
    emailInput.dispatchEvent(new Event('blur'));
});

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}