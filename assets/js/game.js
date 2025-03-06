'use strict';

//var gameMusic = document.getElementById("gameMusic");
var winSound = new Audio("assets/sounds/win.mp3");
var loseSound = new Audio("assets/sounds/lose.mp3");

var gameMusic;
document.addEventListener("DOMContentLoaded", function() {
    gameMusic = document.getElementById("gameMusic");

    if (gameMusic) {
        gameMusic.volume = 0.5; // Adjust volume level
        gameMusic.loop = true;  // Ensure looping
        gameMusic.play().catch(error => {
            console.log("Autoplay blocked. Waiting for user interaction.");
        });
    } else {
        console.error("gameMusic element not found.");
    }
});


var selectableWords =           // Word list
    [
        "ECLIPTIC",
        "PULSAR",
        "SUPERNOVA",
        "WORMHOLE",
        "NEUTRON",
        "ORBIT",
        "LUNAR",
        "GRAVITRON",
        "CRCHRONOSPHERE",
        "SOLAR",
        "DARKMATTER",
        "QUASAR",
        "EVENTHORIZON",
        "HELIOSPHERE",
    ];

const maxTries = 10;            // Maximum number of tries player has

var guessedLetters = [];        // Stores the letters the user guessed
var currentWordIndex;           // Index of the current word in the array
var guessingWord = [];          // This will be the word we actually build to match the current word
var remainingGuesses = 0;       // How many tries the player has left
var hasFinished = false;        // Flag for 'press any key to try again'     
var wins = 0;                   // How many wins has the player racked up


// Reset our game-level variables
function resetGame() {
    remainingGuesses = maxTries;

    // Use Math.floor to round the random number down to the nearest whole.
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // Clear out arrays
    guessedLetters = [];
    guessingWord = [];

    // Make sure the hangman image is cleared
    document.getElementById("hangmanImage").src = "";
console.log()
    // Build the guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }   

    // Hide game over and win images/text
    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    // Show display
    updateDisplay();
    // Start playing the game music
    if (gameMusic) {
        gameMusic.currentTime = 0; // Restart the music from the beginning
        gameMusic.play().catch(error => console.log("Autoplay blocked"));
    }
    
};

//  Updates the display on the HTML Page
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;

    // Display how much of the word we've already guessed on screen.
    // Printing the array would add commas (,) - so we concatenate a string from each value in the array.
    var guessingWordText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }

    //
    document.getElementById("currentWord").innerText = guessingWordText;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
};


// Updates the image depending on how many guesses
function updateHangmanImage() {
    document.getElementById("hangmanImage").src = "assets/images/" + (maxTries - remainingGuesses) + ".png";
};

// This function takes a letter and finds all instances of 
// appearance in the string and replaces them in the guess word.
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        if(selectableWords[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    // if there are no indicies, remove a guess and update the hangman image
    if (positions.length <= 0) {
        remainingGuesses--;
        updateHangmanImage();
    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};
// Checks for a win by seeing if there are any remaining underscores in the guessingword we are building.
function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
        wins++;
        winSound.play();
        hasFinished = true;
    }
};


// Checks for a loss
function checkLoss() {
    if(remainingGuesses <= 0) {
        loseSound.play();
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
};

// Makes a guess
function makeGuess(letter) {
    console.log("makeGuess() called with letter:", letter); // Debugging line
    if (remainingGuesses > 0) {
        // Make sure we didn't use this letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    
};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.key').forEach(button => {
        button.addEventListener('click', function() {
            let letter = this.getAttribute('data-key');
            
            // If the game is finished, reset before making a guess
            if (hasFinished) {
                resetGame();
                hasFinished = false;
                return; // Stop further processing after reset
            }

            console.log("Button Clicked:", letter); // Debugging line to check button presses
            makeGuess(letter); // This correctly processes the letter guess
            updateDisplay();
            checkWin();
            checkLoss();
        });
    });
});

document.onkeydown = function(event) {
    // If the game has finished, reset the game on any key press
    if (hasFinished) {
        resetGame();
        hasFinished = false;
        return;
    }

    // Check to make sure A-Z was pressed
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toUpperCase());
        updateDisplay();
        checkWin();
        checkLoss();
    }
};
