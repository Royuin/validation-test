const email = document.getElementById('email');
const countrySelect = document.getElementById('country');
const country = countrySelect.value;
const zip = document.getElementById('zip');
const pass = document.getElementById('pass');
const passConfirm = document.getElementById('pass-confirm');
const submit = document.getElementById('submit-button');
const form = document.querySelector('form');

const emailError = document.querySelector('.email-error');
const zipError = document.querySelector('.zip-error');

email.addEventListener('input', (e) => {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Must be an email address';
    emailError.style.display = 'block';
  } else if (email.validity.valueMissing) {
    emailError.textContent = 'Must be filled out';
  } else {
    emailError.style.display = 'none';
  }
});

countrySelect.addEventListener('change', (e) => {
  const country = countrySelect.value;
  if (country === 'us') {
    if (zip.value.length !== 5) {
      zip.invalid = true;
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 5 digit zip code';
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
    }
  } else if (country === 'se') {
    if (zip.value.length !== 4) {
      zip.invalid = true;
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 4 digit zip code';
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
    }
  }
});

zip.addEventListener('input', (e) => {
  const country = countrySelect.value;

  if (country === 'us') {
    if (zip.value.length !== 5) {
      zip.invalid = true;
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 5 digit zip code';
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
    }
  } else if (country === 'se') {
    if (zip.value.length !== 4) {
      zip.invalid = true;
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 4 digit zip code';
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
    }
  }
});

form.addEventListener('submit', (e) => {
  if (!email.validity.valid) {
    e.preventDefault();
    if (email.validity.valueMissing) {
      emailError.textContent = 'Must be filled out';
      emailError.style.display = 'block';
    }
  } else if (!zip.validity.value) {
    e.preventDefault();
  }
});
