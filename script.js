const inputField = document.querySelector("input");
const btnSubscribe = document.querySelector(".btn-subscribe");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");

btnSubscribe.addEventListener("click", checkEmail);

function checkEmail(event) {
  event.preventDefault();
  if (validateEmail(inputField.value)) {
    successMessage.classList.remove("hidden");
    inputField.classList.remove("error");
    errorMessage.classList.add("hidden");
    inputField.value = "";
  } else {
    inputField.classList.add("error");
    errorMessage.classList.remove("hidden");
    successMessage.classList.add("hidden");
  }
}

function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
