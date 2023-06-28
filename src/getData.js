async function getWeather(location) {
  console.log(location);
  const locationAdress = `https://api.weatherapi.com/v1/current.json?key=549175c8c74e42a6ab0172636232606&q=${location}`;

  return fetch(locationAdress, {
    mode: 'cors',
  })
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export default { getWeather };
