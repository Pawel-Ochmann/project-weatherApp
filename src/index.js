import './main.scss';
import getData from './getData';

const main = document.querySelector('main');
const button = document.querySelector('button');
button.addEventListener('click', async (e) => {
  e.preventDefault();
  const location = document.querySelector('input').value;
  const weather = await getData.getWeather(location);
  main.textContent = JSON.stringify(weather);
});

