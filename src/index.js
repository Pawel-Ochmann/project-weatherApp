import './main.scss';
import getData from './getData';

const main = document.querySelector('main');
const button = document.querySelector('button');

async function loadWeather() {
  const location = document.querySelector('input').value;
  const weather = await getData.getWeather(location);
  console.log(JSON.stringify(weather));
}

button.addEventListener('click', async (e) => {
  e.preventDefault();
  loadWeather();
});
