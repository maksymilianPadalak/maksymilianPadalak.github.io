//functions that reveals small text when something is typed

const nameInput = document.getElementById("name-input");
const surnameInput = document.getElementById("surname-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");

const nameInputWrapper = document.getElementById("name-input-wrapper");
const surnameInputWrapper = document.getElementById("surname-input-wrapper");
const emailInputWrapper = document.getElementById("email-input-wrapper");
const messageInputWrapper = document.getElementById("message-input-wrapper");

nameInput.addEventListener("input", () => {
  if (nameInput.value.length === 0) {
    gsap.to(".name-while-input", { display: "none" });
  } else {
    gsap.to(".name-while-input", { display: "block" });
  }
});

surnameInput.addEventListener("input", () => {
  if (surnameInput.value.length === 0) {
    gsap.to(".surname-while-input", { display: "none" });
  } else {
    gsap.to(".surname-while-input", { display: "block" });
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.length === 0) {
    gsap.to(".email-while-input", { display: "none" });
  } else {
    gsap.to(".email-while-input", { display: "block" });
  }
});

messageInput.addEventListener("input", () => {
  if (messageInput.value.length === 0) {
    gsap.to(".message-while-input", { display: "none" });
  } else {
    gsap.to(".message-while-input", { display: "block" });
  }
});

// form validation
const contactValidationText = document.querySelector(
  ".contact-validation-text"
);

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validateForm = () => {
  if (nameInput.value.trim() === "") {
    nameInputWrapper.style.border = "2px solid red";
    contactValidationText.style.color = "red";
    contactValidationText.textContent =
      "Polę z imieniem nie powinno być puste.";
    return false;
  }
  if (nameInput.value.trim() !== "") {
    nameInputWrapper.style.border = "none";
  }

  if (surnameInput.value.trim() === "") {
    surnameInputWrapper.style.border = "2px solid red";
    contactValidationText.textContent =
      "Polę z nazwiskiem nie powinno być puste.";
    contactValidationText.style.color = "red";
    return false;
  }
  if (surnameInput.value.trim() !== "") {
    surnameInputWrapper.style.border = "none";
  }

  if (emailInput.value === "" || !validateEmail(emailInput.value )) {
    emailInputWrapper.style.border = "2px solid red";
    contactValidationText.textContent = "Wprowadź mail poprawnie!";
    contactValidationText.style.color = "red";
    return false;
  }
  if (emailInput.value.trim() !== "") {
    emailInputWrapper.style.border = "none";
  }

  if (messageInput.value.trim() === "") {
    messageInputWrapper.style.border = "2px solid red";
    contactValidationText.textContent =
      "Treść wiadomości nie powinna być pusta.";
    contactValidationText.style.color = "red";
    return false;
  }
  if (messageInput.value.trim() !== "") {
    messageInputWrapper.style.border = "none";
  }

  if (document.querySelector(".checkbox").checked === false) {
    contactValidationText.textContent = "Zgoda musi zostać zaakceptowana.";
    contactValidationText.style.color = "red";
    return false;
  }

  //if any case doesn't fulfil requirements code will stop before it reaches this lines

  contactValidationText.textContent = "Zgłoszenie wysłane!";
  contactValidationText.style.color = "green";
};
