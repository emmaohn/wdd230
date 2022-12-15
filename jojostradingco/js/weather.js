
// weatherurl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
const LAT = '32.7555';
const LON = '97.3308';
const APIKEY = 'fc4826416b6e323a65f8dbe90ff92aea';
// const iconid = `http://openweathermap.org/img/wn/${iconid}@2x.png`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}`;
function showWeather(obj) {
    console.log(obj);
    let currenttemp = document.querySelector('#current-temp');
    // let iconpath = document.querySelector('#icon-src');
    let weathericon = document.querySelector('#weathericon');
    let figurecaption = document.querySelector('figcaption');
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    currenttemp.textContent = Math.round((obj.main.temp - 273.15) * 1.8000 + 32);
    // iconpath.textContent = iconURL;
    weathericon.setAttribute('src', iconURL);
    weathericon.setAttribute('alt', obj.weather[0].icon);
    figurecaption.textContent = obj.weather[0].description.toUpperCase();
};

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    showWeather(jsObject);
});