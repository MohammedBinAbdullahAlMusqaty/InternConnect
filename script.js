// Script to connect pages and handle navigation
document.addEventListener("DOMContentLoaded", () => {
    const userButtons = document.querySelectorAll(".user-button");
  
    // Event listener for user buttons to navigate to the login page
    userButtons.forEach(button => {
      button.addEventListener("click", () => {
        const userType = button.getAttribute("data-user-type");
        sessionStorage.setItem("selectedUserType", userType); // Store user type temporarily
        window.location.href = "login.html"; // Navigate to the login page
      });
    });
  
    // Populate the login form with user type if on the login page
    const userTypeField = document.getElementById("user-type");
    if (userTypeField) {
      const userType = sessionStorage.getItem("selectedUserType");
      if (userType) {
        userTypeField.textContent = `Login as ${userType}`;
      }
    }
  
    // Simple form validation
    const loginForm = document.querySelector("form");
    if (loginForm) {
      loginForm.addEventListener("submit", event => {
        event.preventDefault(); // Prevent default form submission
  
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const terms = document.getElementById("terms").checked;
  
        if (!email || !password) {
          alert("Please fill in all required fields.");
          return;
        }
  
        if (!terms) {
          alert("You must agree to the terms and conditions.");
          return;
        }
  
        // Proceed to process the form (e.g., send to server)
        alert("Login successful! Redirecting...");
        window.location.href = "dashboard.html"; // Replace with actual dashboard URL
      });
    }
  });
  