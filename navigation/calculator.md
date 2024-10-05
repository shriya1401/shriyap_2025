---
layout: page
title: Complex Calculator
permalink: /Calculator/
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

    .calculator {
        width: 400px;
        margin: 50px auto;
        padding: 20px;
        border: 2px solid #007acc;
        border-radius: 10px;
        background-color: white;
    }

    .display {
        width: 100%;
        height: 50px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 10px;
        font-size: 1.5em;
        text-align: right;
        padding-right: 10px;
        line-height: 50px;
    }

    .button-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
    }

    .button-container button {
        padding: 20px;
        background-color: #007acc;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1.2em;
        cursor: pointer;
    }

    .button-container button:hover {
        background-color: #005fa3;
    }

    .wide-button {
        grid-column: span 2;
    }

</style>

<div class="calculator">
    <div id="display" class="display">0</div>
    <div class="button-container">
        <button onclick="clearDisplay()">C</button>
        <button onclick="deleteLast()">DEL</button>
        <button onclick="insert('%')">%</button>
        <button onclick="insert('/')">/</button>

        <button onclick="insert('7')">7</button>
        <button onclick="insert('8')">8</button>
        <button onclick="insert('9')">9</button>
        <button onclick="insert('*')">*</button>

        <button onclick="insert('4')">4</button>
        <button onclick="insert('5')">5</button>
        <button onclick="insert('6')">6</button>
        <button onclick="insert('-')">-</button>

        <button onclick="insert('1')">1</button>
        <button onclick="insert('2')">2</button>
        <button onclick="insert('3')">3</button>
        <button onclick="insert('+')">+</button>

        <button onclick="insert('0')" class="wide-button">0</button>
        <button onclick="insert('.')">.</button>
        <button onclick="calculate()">=</button>

        <!-- Scientific Buttons -->
        <button onclick="insert('Math.PI')">π</button>
        <button onclick="insert('Math.E')">e</button>
        <button onclick="insert('Math.sqrt(')">√</button>
        <button onclick="insert('Math.log(')">log</button>

        <button onclick="insert('Math.sin(')">sin</button>
        <button onclick="insert('Math.cos(')">cos</button>
        <button onclick="insert('Math.tan(')">tan</button>
        <button onclick="insert('Math.pow(')">x^y</button>
    </div>
</div>

<script>
    let display = document.getElementById("display");

    // Clear the display
    function clearDisplay() {
        display.innerHTML = "0";
    }

    // Delete the last character
    function deleteLast() {
        if (display.innerHTML.length > 1) {
            display.innerHTML = display.innerHTML.slice(0, -1);
        } else {
            display.innerHTML = "0";
        }
    }

    // Insert value into the display
    function insert(value) {
        if (display.innerHTML === "0") {
            display.innerHTML = value;
        } else {
            display.innerHTML += value;
        }
    }

    // Calculate the result
    function calculate() {
        try {
            display.innerHTML = eval(display.innerHTML);
        } catch (e) {
            display.innerHTML = "Error";
        }
    }
</script>
