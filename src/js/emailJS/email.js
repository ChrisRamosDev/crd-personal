import { init, sendForm } from "emailjs-com";
// init emailjs
init("user_eYlv9Fd7bHkFlVIIMXiLr");

window.onload = () => {
  const form = document.getElementById("contact-form");
  const inputs = document.querySelectorAll("form input");
  const textArea = document.querySelector("textArea");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // generate random 5 digit number for contact_number
    this.contact_number.value = (Math.random() * 100000) | 0;
    //  send content of form / log result
    sendForm("contact_service", "contact_form", this).then(
      function () {
        console.log("success");
        inputs.forEach((input) => (input.value = ""));
        textArea.value = "";
      },
      (error) => {
        console.log("error - ".error);
      }
    );
    form.button.innerText = "Thank You!";
    form.classList.add("btn-clicked");
    setTimeout(() => {
      form.button.innerText = "Send Message";
      form.classList.remove("btn-clicked");
    }, 2000);
  });
};
