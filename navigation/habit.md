---
layout: page
title: habit
permalink: /habit/
---

{% include nav/home.html %}
<!DOCTYPE html>
<html>
<head>
  <title>Smart Habit Tracker</title>
  <style>
    body {
      font-family: Arial;
      background-color: #eef2f7;
      padding: 20px;
      max-width: 500px;
      margin: auto;
    }
    h1 {
      text-align: center;
    }
    input, button {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      font-size: 16px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
    }
    #output {
      margin-top: 20px;
      padding: 15px;
      background: white;
      border: 1px solid #ccc;
      white-space: pre-line;
    }
  </style>
</head>

<body>

<h1>Smart Habit Tracker</h1>

<label>Enter minutes spent on a productive habit:</label>
<input type="number" id="minutesInput" placeholder="Example: 40">

<button onclick="handleAdd()">Add Habit</button>
<button onclick="handleAnalyze()">Analyze Habits</button>

<div id="output">Results will appear here.</div>

<script>

  // LIST (Data abstraction)
  let habitList = [];

  // Adds data to the list
  function addHabit(minutes) {
    habitList.push(minutes);
  }

  // REQUIRED PROCEDURE WITH PARAMETER
  function analyzeHabits(list) {

    let total = 0;
    let strongHabits = 0;

    // ITERATION
    for (let i = 0; i < list.length; i++) {

      // SEQUENCE
      total = total + list[i];

      // SELECTION
      if (list[i] >= 30) {
        strongHabits = strongHabits + 1;
      }
    }

    let message = "";

    // SELECTION (decision making)
    if (total >= 120 && strongHabits >= 2) {
      message = "Excellent habit consistency!";
    } else if (total >= 60) {
      message = "Good progress. Try increasing consistency.";
    } else {
      message = "You need to spend more time on habits.";
    }

    return "Habits entered: " + list.join(", ") +
           "\nTotal minutes: " + total +
           "\nStrong habits (30+ min): " + strongHabits +
           "\nFeedback: " + message;
  }

  function handleAdd() {
    let minutes = Number(document.getElementById("minutesInput").value);

    if (minutes > 0) {
      addHabit(minutes);

      document.getElementById("output").innerText =
        "Habit added!\nCurrent list: " + habitList.join(", ");

      document.getElementById("minutesInput").value = "";
    } else {
      document.getElementById("output").innerText =
        "Enter a valid number.";
    }
  }

  function handleAnalyze() {
    if (habitList.length > 0) {
      document.getElementById("output").innerText =
        analyzeHabits(habitList);
    } else {
      document.getElementById("output").innerText =
        "Add at least one habit first.";
    }
  }

</script>

</body>
</html>