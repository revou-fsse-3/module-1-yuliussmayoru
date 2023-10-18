function validateForm() {
    var name = document.getElementById("fname").value;
    var email = document.getElementById("femail").value;
    var gender = document.getElementById("dropdown-gender").value;
    var message = document.getElementById("ftextbox").value;

    // Simple validation, check if fields are not empty
    if (name === "" || email === "" || gender === "" || message === "") {
        alert("All fields must be filled out");
        return false; // Prevent form submission
    }

    // Regular expression to validate email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false; // Prevent form submission
    }

    alert("Message Sent!");
    return true; // Allow form submission
}