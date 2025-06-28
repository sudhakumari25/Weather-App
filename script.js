async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "96e04ef87ff21a9183423d5a43f06e11";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        document.getElementById("weather-result").innerHTML = `
          <h2>${data.name}</h2>
          <p>🌡️ Temperature: ${data.main.temp} °C</p>
          <p>☁️ Weather: ${data.weather[0].description}</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
      } else {
        document.getElementById("weather-result").innerHTML = `<p>City not found!</p>`;
      }
    } catch (error) {
      document.getElementById("weather-result").innerHTML = `<p>Error fetching data</p>`;
    }
  }
  