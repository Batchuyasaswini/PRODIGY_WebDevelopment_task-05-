document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    getWeather(location);
});

function getWeather(location) {
    fetch(`https://wttr.in/${location}?format=3`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('weather').textContent = data;
            document.getElementById('location').textContent = location;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
