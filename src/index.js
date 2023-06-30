import './main.scss';
import getData from './getData';
import weatherList from './weatherList';

const container = document.querySelector('.container');
const button = document.querySelector('button');

async function loadWeather() {
  container.textContent = '';
  try {
    const location = document.querySelector('input').value;
    const weather = await getData.getWeather(location);

    const locationHeader = document.createElement('h1');
    locationHeader.classList.add('locationHeader');
    locationHeader.textContent = weather.location.name;
    container.appendChild(locationHeader);
    console.log(weather);

    const weatherDetails = document.createElement('div');
    weatherDetails.classList.add('weatherDetails');

    const details = document.createElement('p');
    details.textContent = `Current weather - ${weather.location.localtime}, ${weather.location.name}, ${weather.location.country}`;
    weatherDetails.appendChild(details);

    const icon = document.createElement('img');
    icon.src = weather.current.condition.icon;
    weatherDetails.appendChild(icon);

    const tempContainer = document.createElement('div');
    tempContainer.classList.add('tempContainer');
    const temperature = document.createElement('h1');
    temperature.textContent = `${weather.current.temp_c}°C`;
    tempContainer.appendChild(temperature);
    const temperatureFahrenheit = document.createElement('p');
    temperatureFahrenheit.textContent = `(${weather.current.temp_f}°F)`;
    tempContainer.appendChild(temperatureFahrenheit)
    weatherDetails.appendChild(tempContainer);

    container.appendChild(weatherDetails);
  } catch (err) {
    const errorInfo = document.createElement('h1');
    errorInfo.textContent =
      'We are sorry, could not find location You are looking for. Please try again';
    container.appendChild(errorInfo);
  }
}

button.addEventListener('click', async (e) => {
  e.preventDefault();
  loadWeather();
});
