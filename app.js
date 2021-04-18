// Variables
const keyboard = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
let missed = 0;
const mainDiv = document.querySelector('.main-container');
const startScreen = document.querySelector('#overlay');

// Arrays
let phrases = [
    `JavaScript is fun`,
    `Cascading Style Sheets`,
    `Hypertext Markup Language`,
    `Kurzgesagt`,
    `Team Tree House`
];

// Functions

// get a Math.random function to select a random number from 0 - arr.length
function randomEngine (arr = phrases) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    return randomNumber;
}

function getRandomPhraseAsArray(arr = phrases) {
    // Choose randomly a phrase + save that randomly selected phrase in a variable
    let randomPhrase = arr[randomEngine(arr)];
    // Split that phrase into a new array of characters
    let phraseLetters = [];
    phraseLetters = randomPhrase.split("");
    // for (let i = 0; i < randomPhrase.length; i++) {
    //     // loop through every letter and store it in an array
    // }
    // // return the new character array
    return phraseLetters;
}

// Event Listeners
startScreen.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        startScreen.style.display = 'none';
    }
});

// By Florian Gröne