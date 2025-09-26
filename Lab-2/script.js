const apiKey = 'f89d842900b718aadccf1a6ecde0209d';

async function getWeather() {
  const city = document.getElementById('city-input').value.trim();
  const weatherCard = document.getElementById('weather-card');
  const errorMessage = document.getElementById('error-message');

  if (!city) {
    errorMessage.textContent = "Please enter a city name.";
    weatherCard.classList.add('hidden');
    return;
  }

  try {
    errorMessage.textContent = "";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherCard.classList.add('hidden');
    errorMessage.textContent = error.message;
  }
}

function displayWeather(data) {
  const weatherCard = document.getElementById('weather-card');

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const timestamp = new Date(data.dt * 1000).toLocaleTimeString();

  weatherCard.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <img src="${iconUrl}" alt="Weather icon">
    <h3>${data.main.temp}°C (Feels like ${data.main.feels_like}°C)</h3>
    <p>${data.weather[0].description}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>🌬 Wind: ${data.wind.speed} m/s</p>
    <p>🕒 Updated: ${timestamp}</p>
  `;
  weatherCard.classList.remove('hidden');
}
