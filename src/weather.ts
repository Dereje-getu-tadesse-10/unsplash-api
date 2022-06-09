const city = document.querySelector('.city') as HTMLHeadingElement;
const temp = document.querySelector('.current-temp') as HTMLParagraphElement;
const desc = document.querySelector('.description') as HTMLParagraphElement;
const highTemp = document.querySelector('.temp-max') as HTMLParagraphElement;
const lowTemp = document.querySelector('.temp-min') as HTMLParagraphElement;

export function weather(key: string){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=besançon&appid=${key}&units=celcius&lang=fr`;
    fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        let tmp : string =  `${Math.round(data.main.temp)}°C`;
        let description : string = data.weather[0].description;
        let high : string = `${Math.round(data.main.temp_max)}°C`;
        let low : string = `${Math.round(data.main.temp_min)}°C`;
        
        temp.textContent = tmp;
        desc.textContent = description;
        highTemp.textContent = high;
        lowTemp.textContent = low;
    })
}

weather("6bb83d7cf2b4aee765f7bd3f53260c22");

