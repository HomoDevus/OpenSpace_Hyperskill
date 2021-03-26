let inputs = [];

inputs.push(document.querySelectorAll('.check-buttons input'));
inputs.push(document.querySelectorAll('.levers input'));
inputs.push(document.querySelectorAll('.lunch-button'));

// Disable page refreshing on enter
let form = document.getElementById("password-form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// Activate and deactivate control panel inputs
function controlPanelAccess(active) {
    for (let node of inputs) {
        for (let input of node) {
            input.disabled = !active;
        }
    }
}

function checkPassword(password) {
    if (password.value === 'TrustNo1') {
        controlPanelAccess(true);
    }
    return false;
}

// Trigger input on enter press
// Get the input field
let input = document.getElementById("password");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("password-submit").click();
    }
});

// Disable inputs on page load
controlPanelAccess(false);