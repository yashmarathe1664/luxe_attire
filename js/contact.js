function validate() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document
          .getElementById("confirmPassword")
          .value.trim();
        const message = document.getElementById("message").value.trim();
        const gender = document.querySelector("input[name='gender']:checked");
        const agree = document.getElementById("agree").checked;

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const mobileError = document.getElementById("mobileError");
        const passwordError = document.getElementById("passwordError");
        const confirmPasswordError = document.getElementById(
          "confirmPasswordError"
        );
        const messageError = document.getElementById("messageError");
        const genderError = document.getElementById("genderError");
        const agreeError = document.getElementById("agreeError");

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        mobileError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";
        messageError.textContent = "";
        genderError.textContent = "";
        agreeError.textContent = "";

        let isValid = true;

        // Name validation
        if (name === "") {
          nameError.textContent = "Please enter your name.";
          isValid = false;
        } else if (name.length < 3) {
          nameError.textContent = "Please enter at least three characters.";
          isValid = false;
        }

        // Email validation
        if (email === "") {
          emailError.textContent = "Please enter your email.";
          isValid = false;
          //this is Regular Expression in email
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          emailError.textContent = "Please enter a valid email.";
          isValid = false;
        }

        // Mobile validation
        if (mobile === "") {
          mobileError.textContent = "Please enter your mobile number.";
          isValid = false;
        } else if (!/^\d{10}$/.test(mobile)) {
          mobileError.textContent = "Please enter a valid 10-digit number.";
          isValid = false;
        }

        // Password validation
        const passwordPattern =
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (password === "") {
          passwordError.textContent = "Please enter a password.";
          isValid = false;
        } else if (!passwordPattern.test(password)) {
          passwordError.textContent =
            "Password must be at least 8 characters and include a number, uppercase, lowercase, and a special character.";
          isValid = false;
        }

        // Confirm password validation
        if (confirmPassword === "") {
          confirmPasswordError.textContent = "Please confirm your password.";
          isValid = false;
        } else if (confirmPassword !== password) {
          confirmPasswordError.textContent = "Passwords do not match.";
          isValid = false;
        }

        // Message validation
        if (message === "") {
          messageError.textContent = "Please enter a message.";
          isValid = false;
        }

        // Gender validation
        if (!gender) {
          genderError.textContent = "Please select your gender.";
          isValid = false;
        }

        // Agree to terms validation
        if (!agree) {
          agreeError.textContent = "You must agree to the terms & conditions.";
          isValid = false;
        }

        if (isValid) {
          alert("Form submitted successfully!");
        }
        return isValid;
    }

    // Opens sticky-chat automatically within 5 seconds of page load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("offchat-menu").checked = true;
  }, 5000);
});