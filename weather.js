let city = document.querySelector('.city');
let temp = document.querySelector('.current-temp');
let description = document.querySelector('.description');
let highTemp = document.querySelector('.temp-max');
let minTemp = document.querySelector('.temp-min');

function weather(key){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=besançon&appid=${key}&units=metric&lang=fr`)
      .then((response) => {
       return response.json()
    })
      .then((data)=>{
        console.log(data)
        city.textContent = data.name;
        temp.textContent = data.main.temp.toFixed(0);
        description.textContent = data.weather[0].description;
        highTemp.textContent = `H:${data.main.temp_max.toFixed(0)}°`;
        minTemp.textContent = `M:${data.main.temp_min.toFixed(0)}°`;
      })
}


weather("6bb83d7cf2b4aee765f7bd3f53260c22");