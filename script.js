/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("t1-msg").innerHTML = "Hello, World!";
});
/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/
const btn = document.getElementById("t2-status");
btn.addEventListener("click", function () {
    <p id="t2-status">You clicked the button!</p>
}); 

/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/
const btn1 = document.getElementById("t3-loadQuote");
btn1.addEventListener("click", function () {
    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("t3-quote").innerHTML = data.content;
            document.getElementById("t3-author").innerHTML = data.author;
        });
});


/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/
const btn2 = document.getElementById("t4-loadWx");
btn2.addEventListener("click", function () {
    const base  = "https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=YOUR_API_KEY&units=metric";
    const city  = "Dammam";
    const units = "metric";
    const key   = "https://openweathermap.org/api";  // replace with your key for this lab
    fetch(base)
        .then(response => response.json())
        .then(data => {
            document.getElementById("t4-temp").innerHTML = data.main.temp;
            document.getElementById("t4-hum").innerHTML = data.main.humidity;
            document.getElementById("t4-wind").innerHTML = data.wind.speed;
        });
});