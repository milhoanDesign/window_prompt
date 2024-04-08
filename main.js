
const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    
    if (name) { // Check if the user entered a name
        const greeting = document.querySelector("#greeting");
        greeting.textContent = `Hello ${name}, nice to meet you!`;
    } else {
        alert("Please enter your name.");
    }
}

button.addEventListener('click', greet); 