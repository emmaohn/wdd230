// weatherurl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
const LAT = '64.8378';
const LON = '-147.7164';
const APIKEY = 'fc4826416b6e323a65f8dbe90ff92aea';
// const iconid = `http://openweathermap.org/img/wn/${iconid}@2x.png`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}`;
function showWeather(obj) {
    let currenttemp = document.querySelector('#current-temp');
    let iconpath = document.querySelector('#icon-src');
    let weathericon = document.querySelector('#weathericon');
    let figurecaption = document.querySelector('figcaption');
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    currenttemp.textContent = obj.main.temp;
    iconpath.textContent = iconURL;
    weathericon.setAttribute('src', iconURL);
    weathericon.setAttribute('alt', obj.weather[0].icon);
    figurecaption.textContent = obj.weather[0].description;
}

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    showWeather(jsObject);
});