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
const passError = document.querySelector('.pass-error');
const passConfirmError = document.querySelector('.pass-confirm-error');

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

pass.addEventListener('input', () => {
  const passConfirm = document.getElementById('pass-confirm');
  if (pass.value !== passConfirm.value) {
    passError.textContent = 'Passwords must match';
    passError.style.display = 'block';
    pass.setCustomValidity('invalid pass');
  } else {
    passError.style.display = 'none';
    passConfirmError.style.display = 'none';
    pass.setCustomValidity('');
    passConfirm.setCustomValidity('');
  }
});

passConfirm.addEventListener('input', () => {
  const pass = document.getElementById('pass');
  if (pass.value !== passConfirm.value) {
    passConfirmError.textContent = 'Passwords must match';
    passConfirmError.style.display = 'block';
    passConfirm.setCustomValidity('invalid pass');
  } else {
    passConfirmError.style.display = 'none';
    passError.style.display = 'none';
    pass.setCustomValidity('');
    passConfirm.setCustomValidity('');
  }
});

form.addEventListener('submit', (e) => {
  const zip = document.getElementById('zip');
  const pass = document.getElementById('pass');
  const passConfirm = document.getElementById('pass-confirm');

  if (!email.validity.valid) {
    e.preventDefault();
    if (email.validity.valueMissing) {
      emailError.textContent = 'Must be filled out';
      emailError.style.display = 'block';
    }
  }
  if (zip.validity.valueMissing) {
    e.preventDefault();
    zip.setCustomValidity('Invalid zip.');
    zipError.textContent = 'Must be filled out';
    zipError.style.display = 'block';
  } else if (!zip.validity.valid) {
    e.preventDefault();
  }
  if (pass.validity.valueMissing) {
    e.preventDefault();
    passError.textContent = 'Must be filled out';
    passError.style.display = 'block';
  }
  if (passConfirm.validity.valueMissing) {
    e.preventDefault();
    passConfirmError.textContent = 'Must be filled out';
    passConfirmError.style.display = 'block';
  }
  if (pass.value !== passConfirm.value) {
    e.preventDefault();
    passConfirmError.textContent = 'Passwords must match';
    passConfirmError.style.display = 'block';
    passConfirm.setCustomValidity('invalid pass');
    passError.textContent = 'Passwords must match';
    passError.style.display = 'block';
    pass.setCustomValidity('invalid pass');
  }
});
