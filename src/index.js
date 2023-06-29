import './main.scss';
import getData from './getData';

const main = document.querySelector('main');
const button = document.querySelector('button');

async function loadWeather() {
  try {
    const location = document.querySelector('input').value;
    const weather = await getData.getWeather(location);
    console.log(JSON.stringify(weather));

    const locationHeader = document.createElement('h1');
    locationHeader.classList.add('locationHeader');
    locationHeader.textContent = weather.location.name;
    main.appendChild(locationHeader);
  } catch (err) {
    const errorInfo = document.createElement('h1');
    errorInfo.textContent = 'We are sorry, could not find location You are looking for. Please try again';
    main.appendChild(errorInfo);
  }
}

button.addEventListener('click', async (e) => {
  e.preventDefault();
  loadWeather();
});
