
let temp = 55;
let windspeed = 10;
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

document.getElementById('windspeed').textContent = windspeed + 'MPH';
document.getElementById('chill').textContent = chill;