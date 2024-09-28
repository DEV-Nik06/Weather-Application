// let url ='https://api.weatherstack.com/current?access_key=57fd084774d221391348357139aba2d6&query=palam,delhi';

// fetch(url).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

/*
locationInput
locationName
temperature
description
fetchWeatherBtn
*/
const city = document.getElementById('locationInput');

const cityName = document.querySelector('#locationName');
const temperature = document.querySelector('#temperature');
const weather = document.querySelector('#description');
const fetchBtn = document.querySelector('#fetchWeatherBtn');
const hiddenContainer = document.querySelector('#weatherInfo');
const wind = document.querySelector('#wind');

const apiKey = '008bbf9e4ab047cc9178fbfffa427c1b';

function fetchWeather(e) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;
    const data = fetch(url);
    data.then((response)=>{
        return response.json();
    }).then((data)=>{
        
        cityName.innerHTML = data.name;
        temperature.innerHTML = `${data.main.temp}°C`;
        weather.innerHTML = data.weather[0].description;
        wind.innerHTML = `${data.wind.speed}km/h`;
        
        hiddenContainer.classList.remove('hidden');
        
    }).catch((err)=>{
        console.log(err);
        
    })
    
}

fetchBtn.addEventListener('click',fetchWeather);
