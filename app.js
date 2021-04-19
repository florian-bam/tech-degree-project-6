// Variables
const keyboard = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
let phraseUL = phrase.firstElementChild;
let missed = 0;
const mainDiv = document.querySelector('.main-container');
const startScreen = document.querySelector('#overlay');
let letterFound;
let match = [];

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
    let liSelect;
    let liSelectContent;
    let buttonContent;
    let matchBo = false;
    let liCorrect;
    // loop over the letters
    for (let i = 0; i < letterLI.length; i++) {
        liSelect = letterLI[i];
        liSelectContent = liSelect.innerHTML.toLowerCase();
        buttonContent = button.innerHTML;
        // check if they match the letter in the button
        if (liSelectContent === buttonContent) {
            matchBo = true;
            // if there's a match, add class "show"
            liSelect = liSelect.className = 'show';
            match.push(buttonContent);
        }
    }
    if (matchBo === true) {
        return match;
    }            
}

// Event Listeners
startScreen.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        startScreen.style.display = 'none';
    }
});

// Add Event Listener only to the keyboard
keyboard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let button = e.target;
        let buttonLetter = button.innerHTML;
        // When a player chooses a letter, add the "chosen" class to that button
        button.className = 'chosen';
        // set button attribute "disabled"
        button.disabled = true;
        // pass the button to checkLetter()
        checkLetter(button);
        // if the letter is correct, store it in a variable called "letterFound"
        if (checkLetter(button) !== null) {
            letterFound = button;
        }
    }
});

// By Florian Groene