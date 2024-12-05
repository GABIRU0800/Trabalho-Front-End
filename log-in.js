// Get the modal
var modal = document.getElementById("registerModal");

// Get the button that opens the modal
var btn = document.getElementById("registerBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
var form = modal.querySelector('form');
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form
    var username = document.getElementById("reg-username").value.trim();
    var email = document.getElementById("reg-email").value.trim();
    var password = document.getElementById("reg-password").value.trim();

    // Check if all fields are filled
    if (username && email && password) {
        // Create the JSON object
        var userData = {
            user: {
                username: username,
                email: email,
                password: password
            }
        };

        // Log the JSON object to the console (or handle it as needed)
        console.log(JSON.stringify(userData));

        // Optionally, you can close the modal after registration
        modal.style.display = "none";
        
        // You can also send the userData to your server here using fetch or XMLHttpRequest
    } else {
        alert("Please fill in all fields.");
    }
};