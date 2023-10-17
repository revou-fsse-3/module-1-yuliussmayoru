 // Function to validate email
 function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("femail");
    const email = emailInput.value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }

    // If email is valid, you can submit the form or perform other actions here.
    alert("Form submitted successfully!");
    this.submit(); // This line submits the form.
});
