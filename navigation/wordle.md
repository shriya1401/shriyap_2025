---
layout: page
title: Wordle
permalink: /wordle/
---

{% include nav/home.html %}

<style>
    body.light-theme {
        background-color: white;
        color: black;
    }

    body.dark-theme {
        background-color: #333;
        color: white;
    }

    body.blue-theme {
        background-color: #007acc;
        color: white;
    }

    body.red-theme {
        background-color: #ff4c4c;
        color: white;
    }

    body.green-theme {
        background-color: #28a745;
        color: white;
    }

    body.grey-theme {
        background-color: #aaa;
        color: white;
    }

    #game-board {
        display: grid;
        grid-template-columns: repeat(5, 60px);
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
    }

    .letter-box {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #000;
        font-size: 2em;
        font-weight: bold;
        text-transform: uppercase;
    }

    .correct {
        background-color: green;
        color: white;
    }

    .present {
        background-color: orange;
        color: white;
    }

    .absent {
        background-color: gray;
        color: white;
    }

    .button-container {
        text-align: center;
        margin-top: 10px;
    }

    .button-container button {
        padding: 10px 20px;
        margin: 5px;
        background-color: #007acc;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .button-container button:hover {
        background-color: #005fa3;
    }

    #game-over {
        font-size: 2em;
        color: red;
        text-align: center;
        display: none;
    }
</style>

<h1 id="game-over">Game Over! The word was <span id="correct-word"></span></h1>
<h1 id="win-message" style="display:none; color:green;">Congratulations! You guessed the word!</h1>

<!-- Game Board -->
<div id="game-board"></div>

<!-- Buttons for controlling the game -->
<div class="button-container">
    <button id="restart-btn">Restart Game</button>
    <button id="theme-btn">Switch Theme</button>
</div>

<script>
    // List of possible 5-letter words
    const words = ["apple", "baker", "crane", "drive", "eagle", "flame", "glove", "house", "input", "joker"];

    // Choose a random word
    let correctWord = words[Math.floor(Math.random() * words.length)];
    let currentRow = 0;
    let currentGuess = "";
    let maxTries = 6;

    // Create game board
    const gameBoard = document.getElementById('game-board');
    for (let i = 0; i < maxTries; i++) {
        for (let j = 0; j < 5; j++) {
            let div = document.createElement('div');
            div.classList.add('letter-box');
            div.setAttribute('data-row', i);
            div.setAttribute('data-col', j);
            gameBoard.appendChild(div);
        }
    }

    // Listen for keypress
    document.addEventListener('keydown', handleKeyPress);

    function handleKeyPress(event) {
        if (document.getElementById("game-over").style.display === "block" || document.getElementById("win-message").style.display === "block") {
            return; // Game over, don't allow further guesses
        }

        let letter = event.key.toLowerCase();

        if (/^[a-z]$/.test(letter) && currentGuess.length < 5) {
            currentGuess += letter;
            updateBoard();
        } else if (event.key === "Enter" && currentGuess.length === 5) {
            checkGuess();
        } else if (event.key === "Backspace" && currentGuess.length > 0) {
            currentGuess = currentGuess.slice(0, -1);
            updateBoard();
        }
    }

    // Update the board with the current guess
    function updateBoard() {
        for (let i = 0; i < 5; i++) {
            let box = document.querySelector(`.letter-box[data-row="${currentRow}"][data-col="${i}"]`);
            box.textContent = currentGuess[i] || "";
        }
    }

    // Check if the current guess is correct
    function checkGuess() {
        let guessArr = currentGuess.split('');
        let correctArr = correctWord.split('');
        let letterBoxes = document.querySelectorAll(`.letter-box[data-row="${currentRow}"]`);

        // Mark the letters as correct, present, or absent
        for (let i = 0; i < 5; i++) {
            let letterBox = letterBoxes[i];
            if (guessArr[i] === correctArr[i]) {
                letterBox.classList.add('correct');
                correctArr[i] = null; // Mark this letter as used
            } else if (correctArr.includes(guessArr[i])) {
                letterBox.classList.add('present');
                correctArr[correctArr.indexOf(guessArr[i])] = null; // Mark this letter as used
            } else {
                letterBox.classList.add('absent');
            }
        }

        // Check if the guess is completely correct
        if (currentGuess === correctWord) {
            document.getElementById("win-message").style.display = "block";
            return;
        }

        currentRow++;
        currentGuess = "";

        // If the player runs out of tries
        if (currentRow === maxTries) {
            document.getElementById("game-over").style.display = "block";
            document.getElementById("correct-word").textContent = correctWord.toUpperCase();
        }
    }

    // Restart the game
    document.getElementById('restart-btn').addEventListener('click', function() {
        correctWord = words[Math.floor(Math.random() * words.length)];
        currentRow = 0;
        currentGuess = "";
        document.getElementById("game-over").style.display = "none";
        document.getElementById("win-message").style.display = "none";

        // Clear the board
        let letterBoxes = document.querySelectorAll('.letter-box');
        letterBoxes.forEach(box => {
            box.textContent = "";
            box.classList.remove('correct', 'present', 'absent');
        });
    });

    // Theme switching functionality
    const themes = ['light-theme', 'dark-theme', 'blue-theme', 'red-theme', 'green-theme', 'grey-theme'];
    let currentTheme = 0;

    document.getElementById("theme-btn").addEventListener("click", function() {
        document.body.classList.remove(themes[currentTheme]);
        currentTheme = (currentTheme + 1) % themes.length;
        document.body.classList.add(themes[currentTheme]);
    });
</script>

