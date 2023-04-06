const email = document.getElementById('email');
const countrySelect = document.getElementById('country');
const country = countrySelect.value;
const zip = document.getElementById('zip');
const pass = document.getElementById('pass');
const passConfirm = document.getElementById('pass-confirm');
const submit = document.getElementById('submit-button');
const form = document.querySelector('form');

const emailError = document.querySelector('.email-error');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Must be an email address';
    emailError.style.display = 'block';
  } else if (email.validity.valueMissing) {
    emailError.textContent = 'Must be filled out';
  } else {
    emailError.style.display = 'none';
  }
});

form.addEventListener('submit', (e) => {
  if (!email.validity.valid) {
    e.preventDefault();
    if (email.validity.valueMissing) {
      emailError.textContent = 'Must be filled out';
      emailError.style.display = 'block';
    }
  }
});
