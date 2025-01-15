// Mixed Messages Program

// Importing prompt-sync for user interaction

const prompt = require("prompt-sync")({sigint: true});

// Data pools for random message generation

const categories = ["Today is a day to", "You will", "An opportunity will arise to"];
const actions = ["discover a new path", "face new challenges", "find success", ];
const outcomes = ["that will change your life.", "with unexpected rewards.", "which will bring joy and clarity."];

// Function to generate random messages

const getRandomElement = (arr) => 
    arr[Math.floor(Math.random() * arr.length)];

const generateMessage = () => {
    const category = getRandomElement(categories);
    const action = getRandomElement(actions);
    const outcome = getRandomElement(outcomes);
    return `${category} ${action} ${outcome}`;
};

// User interaction: choose how many messages to generate

const numMessages = parseInt(prompt("How many messages would you like to generate?"), 10);

// Validate user input

if (isNaN(numMessages) || numMessages <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    console.log("\n✨ Your Random Messages ✨");
    for (let i = 0; i < numMessages; i++) {
        console.log(`👉 ${generateMessage()}`);
    }
}

// Exporting functions for testing

module.exports = { getRandomElement, generateMessage };

// Output the random message

console.log(generateMessage());