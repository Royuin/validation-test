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
  if (country === 'us' || country === 'it') {
    if (zip.value.length !== 5) {
      zip.setCustomValidity('Invalid zip.');
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 5 digit zip code';
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
      zip.setCustomValidity('');
    }
  } else if (country === 'se') {
    if (zip.value.length !== 4) {
      zip.setCustomValidity('Invalid zip.');
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 4 digit zip code';
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
      zip.setCustomValidity('');
    }
  } else if (country === 'jp') {
    if (zip.value.length !== 7) {
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 7 digit zip code';
      zip.setCustomValidity('Invalid zip.');
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
      zip.setCustomValidity('');
    }
  }
});

zip.addEventListener('input', (e) => {
  const country = countrySelect.value;

  if (country === 'us' || country === 'it') {
    if (zip.value.length !== 5) {
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 5 digit zip code';
      zip.setCustomValidity('Invalid zip.');
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
      zip.setCustomValidity('');
    }
  } else if (country === 'se') {
    if (zip.value.length !== 4) {
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 4 digit zip code';
      zip.setCustomValidity('Invalid zip.');
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
      zip.setCustomValidity('');
    }
  } else if (country === 'jp') {
    if (zip.value.length !== 7) {
      zipError.style.display = 'block';
      zipError.textContent = 'Must be a 7 digit zip code';
      zip.setCustomValidity('Invalid zip.');
    } else {
      zipError.textContent = '';
      zipError.style.display = 'none';
      zip.setCustomValidity('');
    }
  }
});

form.addEventListener('submit', (e) => {
  const zip = document.getElementById('zip');
  if (!email.validity.valid) {
    e.preventDefault();
    if (email.validity.valueMissing) {
      emailError.textContent = 'Must be filled out';
      emailError.style.display = 'block';
    }
  } else if (zip.validity.valueMissing) {
    e.preventDefault();
    zip.setCustomValidity('Invalid zip.');
    zipError.textContent = 'Must be filled out';
    zipError.style.display = 'block';
  } else if (!zip.validity.valid) {
    e.preventDefault();
  }
});
