const nameInput = document.getElementById("nameInput");
        const greetButton = document.getElementById("greetButton");
        const greetingDiv = document.getElementById("greeting");

        function greet() {
            const name = nameInput.value.trim();

            if (name) { // Check if the user entered a name
                greetingDiv.textContent = `Hello ${name}, nice to meet you!`;
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