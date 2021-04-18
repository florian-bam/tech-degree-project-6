// Variables
const keyboard = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
let phraseUL = phrase.firstElementChild;
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

const phraseArray = getRandomPhraseAsArray();

function addPhraseToDisplay(arr = phraseArray) {
    // loop through an array
    for (let i = 0; i < arr.length; i++) {
        // for each character, create a list item
        let li = document.createElement('li');
        let liContent = arr[i];
        // put the character inside inside of the list item (textContent)
        li.innerHTML = liContent;
        // append li to #phrase ul
        phraseUL.appendChild(li);
        // if character is letter
        if (liContent !== ' ') {
            // add class "letter"
            li.className = 'letter';
        }
    }
}
addPhraseToDisplay();

// get all of the elements with class "letter"
let letterLI = document.querySelectorAll('.letter')

function checkLetter(button) {
    // loop over the letters
    for (let i = 0; i < letterLI.length; i++) {
        liSelect = letterLI[i];
        liSelect = liSelect.toLowerCase();
        // check if they match the letter in the button
        if (liSelect === button.innerHTML) {
            // if there's a match, add class "show"
            liSelect.className = 'show';
        } else {
            // else return null
            return null;
        }
    }
}

// Event Listeners
startScreen.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        startScreen.style.display = 'none';
    }
});

// By Florian Gröne