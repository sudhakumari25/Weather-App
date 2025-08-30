// Async function to get weather data
async function getWeather() {
    // Get the value entered in the input field with id "city"
    const city = document.getElementById("city").value;

    // ✅ Check if input is empty
    if(city.trim() === "") {
        alert("Please enter a city name"); // Alert user if no city is entered
        return; // Stop function execution
    }

    // Your OpenWeatherMap API key
    const apiKey = "96e04ef87ff21a9183423d5a43f06e11";

    // Construct the API URL with city name, API key, and metric units (Celsius)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch data from API
        const response = await fetch(url);

        // Convert response to JSON
        const data = await response.json();

        // Check if API returned successful result
        if (data.cod === 200) {
            // Display weather information in the div with id "weather-result"
            document.getElementById("weather-result").innerHTML = `
                <h2>${data.name}</h2> <!-- City Name -->
                <p>🌡️ Temperature: ${data.main.temp} °C</p> <!-- Temperature in Celsius -->
                <p>☁️ Weather: ${data.weather[0].description}</p> <!-- Weather description -->
                <p>💧 Humidity: ${data.main.humidity}%</p> <!-- Humidity percentage -->
            `;
        } else {
            // Show message if city not found
            document.getElementById("weather-result").innerText = "City not found!";
        }
    } catch (error) {
        // Catch network or other errors
        console.error("Error fetching weather:", error);
        document.getElementById("weather-result").innerText = "Failed to fetch weather data.";
    }
}

         