const city = document.querySelector('.city') as HTMLHeadingElement;
const temp = document.querySelector('.current-temp') as HTMLParagraphElement;
const desc = document.querySelector('.description') as HTMLParagraphElement;
const highTemp = document.querySelector('.temp-max') as HTMLParagraphElement;
const lowTemp = document.querySelector('.temp-min') as HTMLParagraphElement;

export function weather(key: string){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=besançon&appid=${key}&units=metric&lang=fr`;
    fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        temp.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
        desc.textContent = data.weather[0].description;
        highTemp.textContent = `${Math.round(data.main.temp_max - 273.15)}°C`;
        lowTemp.textContent = `${Math.round(data.main.temp_min - 273.15)}°C`;
    })
}

weather("6bb83d7cf2b4aee765f7bd3f53260c22");

