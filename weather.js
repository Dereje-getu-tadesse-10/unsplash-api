function weather(){
    let exclude = ['hourly', 'minutely'];
    let APIkey = 'b564580fa51b396961e1b514f309af07';
    let lat = '47.2455';
    let long = '6.0209';
    let test = "hourly, minutely";
    const  urlWeatherApi = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=bc1ef978f2536b193348acb9b38e57e0';

    fetch(urlWeatherApi)
    .then((res)=>{
        return res.json();
    })
        .then((data)=>{
            console.log(data);
                // let current = data.current;
                // let temp = current.temp;
                // let feelsLike = current.feels_like;
                // let humidity = current.humidity;
                // let windSpeed = current.wind_speed;
                // let windDeg = current.wind_deg;
                // let weather = current.weather[0].main;
                // let icon = current.weather[0].icon;
        })
}


// function get lat long from ip
function getLatLong(){
    let url = 'https://ipapi.co/json';
    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            let lat = data.latitude;
            let lon = data.longitude;
            // weather(lat, lon);
            console.log(lat, lon);
            return {lat, lon};
        })
}

getLatLong()

weather()