const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const checkPassword = () => {
  confirmPassword.value === password.value
    ? confirmPassword.setCustomValidity('')
    : confirmPassword.setCustomValidity('The passwords must match');
};

confirmPassword.addEventListener('keyup', checkPassword);
password.addEventListener('keyup', checkPassword);
