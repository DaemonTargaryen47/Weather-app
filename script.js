async function getWeather() {
    let city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = "https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=CityName
"; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            ${data.name}, ${data.sys.country}: ${data.weather[0].description} <br>
            Temperature: ${data.main.temp}°C <br>
            Humidity: ${data.main.humidity}%
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
