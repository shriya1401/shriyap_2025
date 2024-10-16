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
</div>

   <!-- Button 6 -->
  <button class="btn6" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.6-Hacks_IPYNB_2_.html'">
         3.6
        <div class="hover-text">If/else statements, comparision operators</div>
    </button>
</div>

   <!-- Button 7 -->
  <button class="btn7" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.7-Hacks_IPYNB_2_.html'">
         3.7
        <div class="hover-text">Nested Conditionals</div>
    </button>
</div>

   <!-- Button 8 -->
  <button class="btn8" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.8-Hacks_IPYNB_2_.html'">
         3.8
        <div class="hover-text">-For loops, While_Do loops, Index loops, & Continue + Break commands</div>
    </button>
</div>


   <!-- Button 10 -->
  <button class="btn10" onclick="window.location.href = 'https://shriya1401.github.io/shriyap_2025/2024/10/04/3.10-Hacks_IPYNB_2_.html'">
         3.10
        <div class="hover-text">List Operations, Pseudocode, List Functions, and List Inputs</div>
    </button>
</div>
"""










































<!--

<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
//<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script> -->



