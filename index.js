const inputs = document.querySelectorAll('input');
const submitButton = document.querySelector('.submit-btn');
const successMessage = document.querySelector('.success-message');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {

  let isValid = true;

  inputs.forEach(input => {
    const errorMessage = input.nextElementSibling;

    errorMessage.textContent = '';
    input.classList.remove('error');

    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error');
      errorMessage.textContent = `${input.placeholder} cannot be empty`;
    }

    if (input.type === 'email' && input.value.trim()) {
      if (!emailRegex.test(input.value)) {
        isValid = false;
        input.classList.add('error');
        errorMessage.textContent = `Looks like this is not an email`;
      }
    }

    if (input.type === 'password' && input.value.length < 8) {
      isValid = false;
        input.classList.add('error');
        errorMessage.textContent = `Your password needs to be at least 8 characters`;
    }
  });

  return isValid;
}


submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (validateForm()) {
    successMessage.textContent = `Thank you! Check your email.`;

    inputs.forEach(input => {
      input.value = '';
      input.classList.remove('error');
    });

    setTimeout(() => {
      successMessage.textContent = '';
    }, 10000);
  }
});