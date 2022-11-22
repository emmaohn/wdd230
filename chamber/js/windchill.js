
// let temp = 55;
// let windspeed = 10;
// let chill

function validate(temp, windspeed) {
    if (temp <= 50 && windspeed > 3) {
        chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    } else {
        chill = 'N/A';
    };
    return chill
};

// document.getElementById('windspeed').textContent = windspeed + 'MPH';
// document.getElementById('chill').textContent = chill;


// weatherurl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
const LAT = '40.0832';
const LON = '74.0682';
const APIKEY = 'fc4826416b6e323a65f8dbe90ff92aea';
// const iconid = `http://openweathermap.org/img/wn/${iconid}@2x.png`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}`;
function showWeather(obj) {
    console.log(obj);
    let currenttemp = document.querySelector('#current-temp');
    // let iconpath = document.querySelector('#icon-src');
    let weathericon = document.querySelector('#weathericon');
    let figurecaption = document.querySelector('figcaption');
    let windspeed = document.querySelector('#windspeed');
    // let chill = document.querySelector('#chill');
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    currenttemp.textContent = Math.round((obj.main.temp - 273.15) * 1.8000 + 32);
    // iconpath.textContent = iconURL;
    weathericon.setAttribute('src', iconURL);
    weathericon.setAttribute('alt', obj.weather[0].icon);
    figurecaption.textContent = obj.weather[0].description.toUpperCase();
    windspeed.textContent = obj.wind.speed;
    chill.textContent = `${validate(currenttemp, windspeed)}`;
};

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    showWeather(jsObject);
});