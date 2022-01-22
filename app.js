const API_KEY = `313cdde7436d9b8eb12f13af2b5a130b`;

const cityTemperature = () => {
  const city = document.getElementById("city-name").value;
  city.value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnertext = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  setInnertext("city", temperature.name);
  setInnertext("temp", temperature.main.temp);
  setInnertext("condition", temperature.weather[0].main);
  //set icon
  const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const source = document.getElementById("source");
  source.setAttribute("src", url);
  console.log(temperature);
};
