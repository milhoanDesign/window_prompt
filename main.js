const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greetingDiv = document.getElementById("greeting");

function greet() {
    const name = nameInput.value.trim();

    if (name) { // Check if the user entered a name
        greetingDiv.textContent = `Welcome to ${name}'s bar and grill`;
        // Add a class to trigger a CSS animation
        greetingDiv.classList.add('fade-in');
        // Remove the class after a delay to allow the animation to play
        setTimeout(() => {
            greetingDiv.classList.remove('fade-in');
        }, 2000); // Adjust the delay as needed
    } else {
        greetingDiv.textContent = "Please enter your name.";
    }
}

greetButton.addEventListener('click', greet);

// Optionally, you can allow pressing Enter key to submit the name
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        greet();
    }
});
