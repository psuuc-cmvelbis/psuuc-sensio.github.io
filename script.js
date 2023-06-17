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
          "Oops! It seems like the email address or password you entered is incorrect. Give it another shot, and please make sure to use the right credentials."
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
        alert("Please make sure to complete all the required fields.");
        return;
      }

      if (password !== repeatPassword) {
        alert("Uh-oh! The passwords you entered don't match. Please ensure that they are the same for both fields.");
        return;
      }

      alert("Congratulations! Your signup is complete! You will now be redirected to the registration page.");
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
        alert("Please make sure to complete all the necessary fields.");
        return;
      }

      if (!agreeTerms) {
        alert("In order to proceed, we kindly ask you to agree to the Terms and Conditions and Privacy Policy.");
        return;
      }

      alert("Great news! Your registration is complete! You will now be redirected to the dashboard.");
      window.location.href = "dashboard.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("forgot").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.querySelector("#header input[type='email']").value;

    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    if (email == "user@gmail.com") {
      alert("An email for password recovery has been sent to "+email + 
      ". Please check your inbox for further instructions." );
      return;
    }
    
    if (email != "user@gmail.com") {
      alert("Apologies for the confusion. It appears that there is no email associated with that account. Please verify the email address you provided during sign-up.");
      return;
    }
 
  });
});
