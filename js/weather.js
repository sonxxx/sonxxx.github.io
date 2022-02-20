const API_KEY = "2a89dd44d4c49605042520dea3036da6";

function geoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function geoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoOk,geoError);