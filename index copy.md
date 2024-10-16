---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---
{% include nav/home.html %}

from IPython.display import display, HTML

# HTML code with text underneath the button, light grey transparent background on hover, and updated styles
html_code = """
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
        .btn3 { background-color: #ffd580; }
        .btn4 { background-color: #add8e6; }

        /* Hover effect - Text color change and button lift */
        button:hover {
            box-shadow: 0 8px #666;
        }

        /* Text that will appear underneath the button on hover */
        button .hover-text {
            display: none; /* Initially hidden */
            position: absolute;
            bottom: -60px; /* Place it further down from the button */
            left: 50%;
            transform: translateX(-50%);
            font-size: 10px; /* Text size */
            font-weight: bold;
            color: black; /* Text color */
            opacity: 0; /* Initially hidden */
            pointer-events: none;
            transition: opacity 0.3s ease, background-color 0.3s ease;
            background-color: rgba(211, 211, 211, 0.5); /* Light grey background with transparency */
            padding: 5px 10px; /* Padding inside the text box */
            border-radius: 4px;
        }

        /* Show the text when hovering over the button */
        button:hover .hover-text {
            display: block;
            opacity: 1; /* Show the text */
        }
    </style>
</head>

<div style="text-align: center;">
    <!-- Button 1 -->
    <button class="btn1" onclick="window.location.href = '/home/shriyap/nighthawk/shriyap_2025/_notebooks/sprint 2/2024-10-7-3.1-popcornhacks.ipynb'">
        Button 1
        <div class="hover-text">-Python Variables, and Javascript variables</div>
    </button>
    
    <!-- Button 2 -->
  
    <button class="btn2" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/07/3.1-popcornhacks_IPYNB_2_.html'">
        Button 2
        <div class="hover-text">Hovered over Button 2!</div>
    </button>
    
    <!-- Button 3 -->
    <button class="btn3" onclick="window.location.href = '2024-10-4-3.4-Hacks.ipynb'">
        Button 3
        <div class="hover-text">Hovered over Button 3!</div>
    </button>
    
    <!-- Button 4 -->
    <button class="btn4" onclick="window.location.href = '2024-10-4-3.6-Hacks.ipynb'">
        Button 4
        <div class="hover-text">Hovered over Button 4!</div>
    </button>
</div>
"""

# Display the buttons with hover effect and redirection
display(HTML(html_code))
