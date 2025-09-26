// Select elements
const form = document.getElementById('signupForm');
const submitBtn = document.getElementById('submitBtn');

const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const terms = document.getElementById('terms');

// Error message elements
const errors = {
  fullName: document.getElementById('fullNameError'),
  email: document.getElementById('emailError'),
  phone: document.getElementById('phoneError'),
  age: document.getElementById('ageError'),
  terms: document.getElementById('termsError'),
};

// --- Validation Functions (Show UI feedback) ---
function validateFullName() {
  const val = fullName.value.trim();
  const regex = /^[A-Za-z\s]{2,}$/;
  if (!val) {
    errors.fullName.textContent = 'Full name is required.';
    setError(fullName);
    return false;
  } else if (!regex.test(val)) {
    errors.fullName.textContent = 'Must be at least 2 letters (no numbers/symbols).';
    setError(fullName);
    return false;
  }
  errors.fullName.textContent = '';
  setValid(fullName);
  return true;
}

function validateEmail() {
  const val = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!val) {
    errors.email.textContent = 'Email is required.';
    setError(email);
    return false;
  } else if (!regex.test(val)) {
    errors.email.textContent = 'Please enter a valid email address.';
    setError(email);
    return false;
  }
  errors.email.textContent = '';
  setValid(email);
  return true;
}

function validatePhone() {
  const val = phone.value.trim();
  const regex = /^\d{10}$/;
  if (!val) {
    errors.phone.textContent = 'Phone number is required.';
    setError(phone);
    return false;
  } else if (!regex.test(val)) {
    errors.phone.textContent = 'Phone number must be 10 digits.';
    setError(phone);
    return false;
  }
  errors.phone.textContent = '';
  setValid(phone);
  return true;
}

function validateAge() {
  const val = age.value.trim();
  const ageNum = Number(val);
  if (!val) {
    errors.age.textContent = 'Age is required.';
    setError(age);
    return false;
  } else if (isNaN(ageNum) || !Number.isInteger(ageNum)) {
    errors.age.textContent = 'Age must be a valid whole number.';
    setError(age);
    return false;
  } else if (ageNum < 18) {
    errors.age.textContent = 'You must be at least 18 years old.';
    setError(age);
    return false;
  } else if (ageNum > 120) {
    errors.age.textContent = 'Please enter a valid age.';
    setError(age);
    return false;
  }
  errors.age.textContent = '';
  setValid(age);
  return true;
}

function validateTerms() {
  if (!terms.checked) {
    errors.terms.textContent = 'You must agree to the terms.';
    return false;
  }
  errors.terms.textContent = '';
  return true;
}

// --- Helper Functions for Styling ---
function setError(el) {
  el.classList.add('error');
  el.classList.remove('valid');
}

function setValid(el) {
  el.classList.remove('error');
  el.classList.add('valid');
}

// --- Functions to Check Validity Silently (for enabling the button) ---
const isFormValid = () => {
    // Uses HTML5 constraint validation API for a quick check
    return form.checkValidity();
}

// --- Main function to validate all fields and show all errors ---
function validateFormOnSubmit() {
  const validFullName = validateFullName();
  const validEmail = validateEmail();
  const validPhone = validatePhone();
  const validAge = validateAge();
  const validTerms = validateTerms();
  return validFullName && validEmail && validPhone && validAge && validTerms;
}

// --- Event Listeners ---

// 1. Validate individual fields on 'blur' (when user clicks away)
fullName.addEventListener('blur', validateFullName);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);
age.addEventListener('blur', validateAge);
terms.addEventListener('change', validateTerms);

// 2. Check form validity on any input to enable/disable the submit button
form.addEventListener('input', () => {
  submitBtn.disabled = !isFormValid();
});

// 3. On submit, run all validations and show errors if any exist
form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateFormOnSubmit()) {
    alert('Registration successful!');
    form.reset();
    submitBtn.disabled = true;
    // Remove all validation classes and clear error messages on reset
    [fullName, email, phone, age].forEach(el => {
        el.classList.remove('valid', 'error');
    });
    Object.values(errors).forEach(errEl => errEl.textContent = '');
  }
});
