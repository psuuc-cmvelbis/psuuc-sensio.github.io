document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      var validEmail = "user@gmail.com";
      var validPassword = "password";

      if (email === "" || password === "") {
        alert("Please enter both email address and password.");
      } else if (email === validEmail && password === validPassword) {
        alert("Login successful! Redirecting to the dashboard...");
        window.location.href = "dashboard.html";
      } else {
        alert(
          "Invalid email address or password. Please try again. \n\ntry this(  user@gmail.com | password )"
        );
      }
    });
});
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var email = document.getElementById("email").value;
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var repeatPassword = document.getElementById("repeatPassword").value;
      localStorage.setItem("username", username);
      if (
        email === "" ||
        username === "" ||
        password === "" ||
        repeatPassword === ""
      ) {
        alert("Please fill in all the fields.");
        return;
      }

      if (password !== repeatPassword) {
        alert("Passwords do not match.");
        return;
      }

      alert("Signup successful! Redirecting to the registration page...");
      window.location.href = "registration.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registration")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var firstName = document.getElementById("inputNameFirst").value;
      var middleName = document.getElementById("inputNameMiddle").value;
      var lastName = document.getElementById("inputNameLast").value;
      var address = document.getElementById("inputAddress").value;
      var address2 = document.getElementById("inputAddress2").value;
      var city = document.getElementById("inputCity").value;
      var state = document.getElementById("inputState").value;
      var zip = document.getElementById("inputZip").value;
      var agreeTerms = document.getElementById("gridCheck").checked;

      if (
        !firstName ||
        !middleName ||
        !lastName ||
        !address ||
        !address2 ||
        !city ||
        !state ||
        !zip
      ) {
        alert("Please fill in all the required fields.");
        return;
      }

      if (!agreeTerms) {
        alert("Please agree to the Terms and Conditions and Privacy Policy.");
        return;
      }

      alert("Registration successful! Redirecting to the dashboard...");
      window.location.href = "dashboard.html";
    });
});
