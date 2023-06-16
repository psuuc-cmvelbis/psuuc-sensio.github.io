document.getElementById("registration").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve the input field values
    var firstName = document.getElementById("inputNameFirst").value;
    var middleName = document.getElementById("inputNameMiddle").value;
    var lastName = document.getElementById("inputNameLast").value;
    var email = document.getElementById("inputEmail4").value;
    var password = document.getElementById("inputPassword4").value;
    var address = document.getElementById("inputAddress").value;
    var address2 = document.getElementById("inputAddress2").value;
    var city = document.getElementById("inputCity").value;
    var state = document.getElementById("inputState").value;
    var zip = document.getElementById("inputZip").value;
    var agreeTerms = document.getElementById("gridCheck").checked;

    // Perform form validation
    if (!firstName || !middleName || !lastName || !email || !password || !address || !address2 || !city || !state || !zip) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (!agreeTerms) {
      alert("Please agree to the Terms and Conditions and Privacy Policy.");
      return;
    }

    // Perform registration logic here
    // You can send the form data to the server or perform any other necessary operations

    // Display success message or redirect to the next page
    alert("Registration successful! Redirecting to the dashboard...");
    window.location.href = "dashboard.html"; // Replace with the actual dashboard page URL
  });