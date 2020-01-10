const weather = document.querySelector('.js-weather');

const API_KEY = "063805d757a3b5fcc9a1fb40dd2c99be";
const COORDS = 'coords';

function getWeather(lat,lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
    // then 은 함수를 호출하는 역할을 함. 데이터가 완전히 들어온 다음 호출함
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuces(position){
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
       latitude,
       longitude
     //    객체 변수 이름과 객체 key 이름을 같게 할때는 하나만 입력해도 됨.
   };
   saveCoords(coordsObj);
   getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access goe loc');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();