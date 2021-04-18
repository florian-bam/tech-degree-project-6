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
function getRandomPhraseAsArray(arr) {
    
}

// Event Listeners
startScreen.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        startScreen.style.display = 'none';
    }
});

// By Florian Gröne