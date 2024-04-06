export {};
import emailjs from "@emailjs/browser";

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("7MzvNmdzIcgWarKne");
  const form = document.getElementById("email-form") as HTMLFormElement | null;

  form?.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      sendEmail();
    }
  });
});

const sendEmail = (): void => {
  const form = document.getElementById("email-form") as HTMLFormElement | null;
  const formContainer = document.querySelector(
    ".contact-form__right-wrap"
  ) as HTMLElement | null;

  if (form && formContainer) {
    const sendButton = document.querySelector(
      'input[type="submit"]'
    ) as HTMLInputElement | null;
    const originalButtonText = sendButton?.value;
    sendButton!.value =
      sendButton!.getAttribute("data-wait") || "Please wait...";

    emailjs.sendForm("service_5wd6svt", "template_fa309b7", form).then(
      () => {
        displayMessage(
          formContainer,
          "Thank you! Your submission has been received!",
          "success"
        );
        form.reset();
        sendButton!.value = originalButtonText!;
      },
      (error) => {
        console.log("FAILED...", error);
        displayMessage(
          formContainer,
          "Oops! Something went wrong while submitting the form.",
          "error"
        );
        sendButton!.value = originalButtonText!;
      }
    );
  }
};

const validateForm = (): boolean => {
  const name = document.getElementById("name") as HTMLInputElement;
  const contact = document.getElementById("Contact") as HTMLInputElement;
  const message = document.getElementById("Message") as HTMLTextAreaElement;
  let isValid = true;

  document.querySelectorAll(".form-error").forEach((e) => e.remove());

  if (
    !name.value ||
    name.value.length < 3 ||
    !/^[a-zA-Z\s]*$/.test(name.value)
  ) {
    showError("name", "Full name must be at least 3 letters");
    isValid = false;
  }

  if (!contact.value || !validateEmail(contact.value)) {
    showError("Contact", "A valid email is required");
    isValid = false;
  }

  if (!message.value || message.value.length < 10) {
    showError("Message", "Message must be at least 10 characters long");
    isValid = false;
  }

  const sendButton = document.querySelector(
    'input[type="submit"]'
  ) as HTMLInputElement;
  sendButton.disabled = !isValid;

  return isValid;
};

const validateEmail = (email: string): boolean => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

const showError = (fieldId: string, message: string): void => {
  const field = document.getElementById(fieldId) as HTMLInputElement | null;
  clearError(fieldId);
  let error = document.createElement("div");
  error.textContent = message;
  error.className = "form-error";
  field?.parentElement?.insertBefore(error, field.nextSibling);
};

const displayMessage = (
  container: HTMLElement,
  message: string,
  type: "success" | "error"
): void => {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = message;
  container.appendChild(messageDiv);
};

const fields = ["name", "Contact", "Message"];
fields.forEach((fieldId) => {
  const field = document.getElementById(fieldId);
  field?.addEventListener("input", () => validateField(fieldId));
  field?.addEventListener("blur", () => validateField(fieldId, true));
});

const validateField = (fieldId: string, checkOnBlur: boolean = false): void => {
  const field = document.getElementById(fieldId) as HTMLInputElement | null;
  if (!field) return;

  const value = field.value.trim();
  let isValid = true;
  let message = "";

  if (!value) {
    clearError(fieldId);
    return;
  }

  switch (fieldId) {
    case "name":
      if (value.length < 3 || !/^[a-zA-Z\s]*$/.test(value)) {
        message = "Full name must be at least 3 letters";
        isValid = false;
      }
      break;
    case "Contact":
      if (!validateEmail(value)) {
        message = "A valid email is required";
        isValid = false;
      }
      break;
    case "Message":
      if (value.length < 10) {
        message = "Message must be at least 10 characters long";
        isValid = false;
      }
      break;
  }

  if (!isValid) {
    showError(fieldId, message);
  } else {
    clearError(fieldId);
  }
};

const clearError = (fieldId: string): void => {
  const field = document.getElementById(fieldId) as HTMLInputElement | null;
  if (!field) return;

  const error = field.parentElement?.querySelector(".form-error");
  if (error) {
    error.remove();
  }
};
