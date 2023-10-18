const apiKey = 'd13ca374f2f79abbac373e89e9c0210e';
const cities = ['London', 'Santiago', 'Dubai', 'New York', 'Madrid'];

async function fetchWeatherData(city) {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    if (!data || !data.main) throw new Error(`Invalid data for city: ${city}`);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error.message);
    return null;  
  }
}

function displayCityWeather(city, data) {
    if (!data) return;  
    
    const weatherBoxes = document.querySelectorAll('.weather-box');
  
    for (const box of weatherBoxes) {
      if (box.querySelector('.city-name').textContent.trim() === city) {
        const temp = box.querySelector('.temp');
        temp.innerHTML = `${data.main.temp}°C`;
        const descSpan = box.querySelector('.desc');
        let desc = data.weather[0].description;
        descSpan.textContent = desc;
        const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const weatherIcon = box.querySelector('.weather-icon');
        weatherIcon.setAttribute("src", iconSrc);
        weatherIcon.setAttribute("alt", desc);
        break;
      }
    }
}

async function initWeather() {
  for (const city of cities) {
    const data = await fetchWeatherData(city);
    if (data) {  
      displayCityWeather(city, data);
    }
  }
}

initWeather();