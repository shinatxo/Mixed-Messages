// Mixed Messages Program

// Data pools for random message generation

const categories = ["Today is a day to", "You will", "An opportunity will arise to"];
const actions = ["discover a new path", "face new challenges", "find success", ];
const outcomes = ["that will change your life.", "with unexpected rewards.", "which will bring joy and clarity."];

// Function to get a random element from an array

export const getRandomElement = (arr) => 
    arr[Math.floor(Math.random() * arr.length)];

// Function to generate a random message

export const generateMessage = () => {
    if (categories.length === 0 || actions.length === 0 || outcomes.length === 0) {
        throw new Error("One or more arrays are empty, cannot generate message.");
    }
    const category = getRandomElement(categories);
    const action = getRandomElement(actions);
    const outcome = getRandomElement(outcomes);
    return `${category} ${action} ${outcome}`;
};

document.getElementById('generate-message').addEventListener('click', () => {
    const message = generateMessage();
    const messageDisplay = document.getElementById('message-display');
    messageDisplay.innerText = message;
    messageDisplay.className = 'generated-message';
});

document.getElementById('generate-messages').addEventListener('click', () => {
    generateMessages();
});

document.getElementById('num-messages').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        generateMessages();
    }
});

const generateMessages = () => {

    const numMessages = parseInt(document.getElementById('num-messages').value);
    const messagesContainer = document.getElementById('messages-container');

    // Clear previous messages
    messagesContainer.innerHTML = '';

    // Validate user input

    if (isNaN(numMessages) || numMessages <= 0) {
        console.log("Please enter a valid positive number.");
    } else {
        console.log("\n✨ Your Random Messages ✨");
        for (let i = 0; i < numMessages; i++) {
            const message = generateMessage();
            const messageElement = document.createElement('p');
            messageElement.innerText = `👉 ${message}`;
            messagesContainer.appendChild(messageElement);
            console.log(`👉 ${message}`);
        }
    }
};

// Exporting functions for testing

export default { getRandomElement, generateMessage };

// Output the random message

console.log(generateMessage());