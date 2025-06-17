// script.js
alert('Welcome to the Weather App! 🌤️');
document.getElementById('get-weather').addEventListener('click', function() {
  const city = document.getElementById('city-input').value.trim();
  const apiKey = ''; // API key

  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const weatherDiv = document.getElementById('weather-result');
      weatherDiv.innerHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>${data.weather[0].description}</p>
        <p>🌡 ${data.main.temp} °C</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(err => {
      document.getElementById('weather-result').innerHTML = `<p style="color:red;">${err.message}</p>`;
    });
});
