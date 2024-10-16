---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---
{% include nav/home.html %}

About : Shriya , 2027
<h3>Favorite basketball teams:</h3>
<a href="https://en.wikipedia.org/wiki/Golden_State_Warriors">Warriors</a>

<a href="https://en.wikipedia.org/wiki/Los_Angeles_Lakers">Lakers</a>


# Lesson Acomplishments
<head>
    <!-- Link to Google Fonts for 'Poppins' font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    
  <style>
        /* Styling buttons */
        button {
            padding: 15px 30px;
            margin: 10px;
            font-size: 18px;
            font-family: 'Poppins', sans-serif;
            border: none;
            border-radius: 8px;
            box-shadow: 0 4px #999;
            cursor: pointer;
            transition: all 0.3s ease;
            color: black;
            position: relative;
        }
        
        /* Color changes for each button */
        .btn1 { background-color: #ffcccb; }
        .btn2 { background-color: #fffacd; }
        .btn4 { background-color: #ffd580; }
        .btn6 { background-color: #add8e6; }
        .btn7 { background-color: #ffcccb; }
        .btn8 { background-color: #fffacd; }
        .btn10 { background-color: #ffd580; }
        

        /* Hover effect - Text color change and button lift */
        button:hover {
            box-shadow: 0 8px #666;
        }

        /* Text that will appear underneath the button on hover */
        button .hover-text {
            display: none; /* Initially hidden */
            position: absolute;
            top: -30px; /* Positioned relative to the button */
            right: 10px; /* Position text towards the top-right corner */
            font-size: var(--hover-text-size, 12px); /* Dynamic font size via CSS variable */
            font-weight: var(--hover-text-weight, bold); /* Dynamic font weight */
            color: var(--hover-text-color, black); /* Dynamic text color */
            opacity: 0; /* Initially hidden */
            pointer-events: none;
            transition: opacity 0.3s ease, background-color 0.3s ease;
            background-color: rgba(211, 211, 211, 0.5); /* Light grey background with transparency */
            padding: 5px 10px; /* Padding inside the text box */
            border-radius: 4px;
            transform: translateY(10px); /* Slight shift when hidden */
        }
     
        /* Show the text when hovering over the button */
        button:hover .hover-text {
            display: block;
            opacity: 1; /* Show the text */
            transform: translateY(0); /* Reset shift for smoother transition */
        }
    </style>
</head>

<div style="text-align: center;">
    <!-- Button 1 -->
    <button class="btn1" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/07/3.1-popcornhacks_IPYNB_2_.html'">
        3.1
        <div class="hover-text">-Python Variables, and Javascript variables</div>
    </button>
    
  <!-- Button 2 -->  
  <button class="btn2" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/07/3.2-popcorn_hacks_IPYNB_2_.html'">
        3.2
        <div class="hover-text">-Integers, Floats, Strings, Lists, Tuples, Dictionaries, Sets, Booleans, None</div>
    </button>
    
   <!-- Button 4 -->
  <button class="btn4" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.4-Hacks_IPYNB_2_.html'">
        3.4
        <div class="hover-text">-Java script strings, python strings</div>
    </button>

   <!-- Button 6 -->
  <button class="btn6" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.6-Hacks_IPYNB_2_.html'">
        3.6
        <div class="hover-text">-If/else statements, comparision operators</div>
    </button>

   <!-- Button 7 -->
  <button class="btn7" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.7-Hacks_IPYNB_2_.html'">
        3.7
        <div class="hover-text">-Nested Conditionals</div>
    </button>

   <!-- Button 8 -->
  <button class="btn8" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.8-Hacks_IPYNB_2_.html'">
        3.8
        <div class="hover-text">-For loops, While_Do loops, Index loops, & Continue + Break commands</div>
    </button>

   <!-- Button 10 -->
  <button class="btn10" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.10-Hacks_IPYNB_2_.html'">
        3.10
        <div class="hover-text">-List Operations, Pseudocode, List Functions, and List Inputs</div>
    </button>
</div>

   <!-- Button 11 -->
  <button class="btn11" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.10-Hacks_IPYNB_2_.html'">
        3.10
        <div class="hover-text">-List Operations, Pseudocode, List Functions, and List Inputs</div>
    </button>
</div>
"""









































