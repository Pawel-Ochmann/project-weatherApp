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

    const icon = document.createElement('img');
    icon.src = weather.current.condition.icon;
    container.appendChild(icon);
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

console.log(weatherList.length);
