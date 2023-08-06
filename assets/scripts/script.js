class DOMActions {
  static createListIcon() {
    const icon = document.createElement("div");
    icon.classList.add("list-icon");
    return icon;
  }

  static addIconToList(ul) {
    const lis = ul.querySelectorAll("li");
    for (const li of lis) {
      const icon = document.createElement("div");
      icon.classList.add("list-icon");
      li.prepend(DOMActions.createListIcon());
    }
  }

  /**
   *
   * @param {HTMLElement} input
   * @param {boolean} status
   */
  static setInputErrorStatus(input, status) {
    input.classList[`${status ? "add" : "remove"}`]("input-error");
    DOMActions.shakeInput(input);
  }

  static shakeInput(input) {
    const container = input.parentNode;
    if (container.classList.contains("shake")) {
      container.classList.remove("shake");
    }
    setTimeout(() => container.classList.add("shake"), 0);
  }

  /**
   *
   * @param {HTMLElement} input
   * @returns
   */
  static hasInputErrorStatus(input) {
    return input.classList.contains("input-error");
  }

  static showErrorText(form) {
    const errorEl = form.querySelector(".input-error-text");
    errorEl.style.display = "inline-block";
  }

  static hideErrorText(form) {
    const errorEl = form.querySelector(".input-error-text");
    errorEl.style.display = "none";
  }

  static hideSubscriptionModal() {
    const modal = document.querySelector(".signup-form--container");
    modal.style.display = "none";
  }

  static showThanksMessage(email) {
    const modal = document.querySelector(".thanks");
    modal.querySelector("span.specified-email").innerHTML = email;
    modal.style.display = "flex";
    const closeButton = modal.querySelector(".button");
    closeButton.addEventListener("click", DOMActions.hideThanksMessage);
  }

  static hideThanksMessage() {
    const modal = document.querySelector(".thanks");
    modal.style.display = "none";
  }
}

/**
 *
 * @param {string} email
 * @returns
 */
const isEmailvalid = (email) =>
  email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)?.length ? true : false;

/**
 *
 * @param {HTMLElement} form
 */
const handleFormSubmission = function (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const value = email.value;
    if (!isEmailvalid(value)) {
      DOMActions.setInputErrorStatus(emailInput, true);
      DOMActions.showErrorText(e.target);
      return;
    }
    DOMActions.hideSubscriptionModal();
    DOMActions.showThanksMessage(value);
  });
};

const init = (event) => {
  console.log("content loaded");
  const form = document.getElementById("signup-form");
  handleFormSubmission(form);
};

DOMActions.addIconToList(document.querySelector(".signup-form--container"));

document.addEventListener("DOMContentLoaded", init);
