const weather = document.querySelector(".js-weather");

const API_KEY = "7e4d022a8f8f27f57eedbbea0442952b"
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp; 
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitide = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitide
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitide);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);

}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitide);
    }
}

function init(){
    loadCoords();
}

init();