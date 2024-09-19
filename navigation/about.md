---
layout: page
title: About
permalink: /about/
comments: true
---

About : Shriya Paladugu, class: 2027

# Shriya Paladugu

<h1>Gallery</h1>
<img src="{{site.baseurl}}/images/basketball.png" alt="I've been playing basketball since 6th grade" width="250" height="200">
<img src="{{site.baseurl}}/images/Food.png" alt="My favorite foods being pasta and pizza." width="250" height="200">
<img src="{{site.baseurl}}/images/Girlscouts.png" alt="I've been doing girl scouts since 5th grade" 
width="250" height="200">
<img src="{{site.baseurl}}/images/Iris.png" alt="This is one of my best friends" 
width="250" height="200">


-I've love playing basketball, I have been playing basketball since 6th grade 🏀

-I love playing volleyball 🏐

-My favorite foods are pasta and pizza.  

-I've been doing girl scouts since 5th grade

-One of my best friends is Iris

-My favorite subject is math 📘





<h2>Places:😄 </h2>
<script>
    // Unicode for the smiley emoji
    const emoji = String.fromCodePoint(0x1F604);  // 😄

    // Add the emoji to the "Places:" heading
    document.getElementById('places-heading').textContent += ` ${emoji}`;
</script>
<style>
    /* Style looks pretty compact, trace grid-container and grid-item in the code */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
</style>
<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "4/45/Flag_of_Ireland.svg", "greeting": "Dia duit", "description": "Ireland - Born there, and lived there for 5 1/2 years"},
        {"flag": "4/41/Flag_of_India.svg", "greeting": "Namaste", "description": "India - Origin"},
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "America - 9 1/2 years"},
    ]; 
    
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
  
</script>

<script src="https://utteranc.es/client.js"
        repo="shriya1401/shriyap_2025"
        issue-term="title"
        label="utterances"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>

<body style ="background-color:pink;">



