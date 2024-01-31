const input = document.getElementById('emailInput');
const label = document.querySelector('.floating-label');

input.addEventListener('focus', function() {
    label.style.top = '7px';
    label.style.left = '9px';
});

input.addEventListener('blur', function() {
    if (input.value === '') {
        label.style.top = '25px';
        label.style.left = '15px'
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('emailInput1');
    const floatingLabel = document.querySelector('.low-email .floating-label');

    inputField.addEventListener('focus', function() {
        floatingLabel.style.top = '7px';
        floatingLabel.style.left = '9px';
    });

    inputField.addEventListener('blur', function() {
        if (inputField.value === '') {
            floatingLabel.style.top = '25px';
            floatingLabel.style.left = '15px';
        }
    });
});