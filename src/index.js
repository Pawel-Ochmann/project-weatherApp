import './main.scss';
import getData from './getData';

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
    tempContainer.appendChild(temperatureFahrenheit);
    weatherDetails.appendChild(tempContainer);
    const moreInfo = document.createElement('div');
    moreInfo.classList.add('moreInfo');
    const moreInfoHeader = document.createElement('h3');
    moreInfoHeader.textContent = weather.current.condition.text;
    moreInfo.appendChild(moreInfoHeader);
    const feelingInfo = document.createElement('div');
    const feelingHeader = document.createElement('h4');
    feelingHeader.textContent = 'Feelslike';
    feelingInfo.appendChild(feelingHeader);
    const feelingTemp = document.createElement('p');
    feelingTemp.textContent = `${weather.current.feelslike_c}°C/${weather.current.feelslike_f}°F`;
    feelingInfo.appendChild(feelingTemp);
    moreInfo.appendChild(feelingInfo);
    const pressureInfo = document.createElement('div');
    const pressureHeader = document.createElement('h4');
    pressureHeader.textContent = 'Pressure';
    pressureInfo.appendChild(pressureHeader);
    const pressureValue = document.createElement('p');
    pressureValue.textContent = `${weather.current.pressure_mb} hPa`;
    pressureInfo.appendChild(pressureValue);
    moreInfo.appendChild(pressureInfo);
    const windInfo = document.createElement('div');
    const windHeader = document.createElement('h4');
    windHeader.textContent = 'Wind';
    windInfo.appendChild(windHeader);
    const windValue = document.createElement('p');
    windValue.textContent = `${weather.current.wind_kph} km/h`;
    windInfo.appendChild(windValue);
    moreInfo.appendChild(windInfo);

    weatherDetails.appendChild(moreInfo);
    container.appendChild(weatherDetails);
  } catch (err) {
    console.log(err);
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
