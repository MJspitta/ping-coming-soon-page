const emailInput = document.querySelector('input');
const btn = document.querySelector('button');
const errorMessage = document.getElementById('error');

btn.addEventListener('click', () => {
  if (emailInput.checkValidity()) {
    errorMessage.textContent = "";
    emailInput.classList.remove('error');
  } else {
    errorMessage.textContent = "Please provide a valid email address";
    errorMessage.style.color = "red";
    emailInput.classList.add('error');
  }
})