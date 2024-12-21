// contact us section email and password input code/////
document.getElementById("btnlogin").addEventListener("click", function () {
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const emailRegex = /^[^@]+@vertex\.com$/; // Email validation for @vertex.com
    
    // If both fields are empty
    if (!email && !password) {
      alert("Please fill both the fields.");
    }
    // If email field is empty
    else if (!email) {
      alert("Please fill the email field.");
    }
    // If email doesn't match the required format
    else if (!emailRegex.test(email)) {
      alert("Email must include '@vertex.com'.");
    }
    // If password field is empty
    else if (!password) {
      alert("Please fill the password field.");
    }
    else {
      // If everything is correct, show the Bootstrap modal
      const modal = new bootstrap.Modal(document.getElementById('myModal'));
      modal.show();
    }
  });