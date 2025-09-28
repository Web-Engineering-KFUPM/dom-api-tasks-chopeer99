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

    const btn = document.getElementById("t2-btn");
    const text = document.getElementById("t2-status");
    btn.addEventListener("click", function () {
        text.innerHTML = "You clicked the button!";
    });

    const btn1 = document.getElementById("t3-loadQuote");
    btn1.addEventListener("click", function () {
        fetch("https://dummyjson.com/quotes/random")
            .then(response => response.json())
            .then(data => {
                // Correct property name is "quote", not "content"
                document.getElementById("t3-quote").innerHTML = data.quote;
                document.getElementById("t3-author").innerHTML = data.author;
            });
    });

    const btn2 = document.getElementById("t4-loadWx");
    btn2.addEventListener("click", function () {
        const city = "Dammam";
        const units = "metric";
        const apiKey = "1581de6cd2fc29843d129ea6be4375d7"; 
        
        const base = "https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric";
        const errorMsg = document.getElementById("t4-err");
        
        fetch(base)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Display the weather data.
                document.getElementById("t4-temp").innerHTML = data.main.temp;
                document.getElementById("t4-hum").innerHTML = data.main.humidity;
                document.getElementById("t4-wind").innerHTML = data.wind.speed;
                errorMsg.innerHTML = ""; // Clear any previous error messages.
            })
            .catch(e => {
                // Display a user-friendly error message.
                errorMsg.innerHTML = `Error: Please check your API key and network connection.`;
                console.error("There was a problem with the fetch operation: " + e.message);
            });
    });
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
