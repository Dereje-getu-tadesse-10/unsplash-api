const city = document.querySelector('.city');
const temp = document.querySelector('.current-temp');
const desc = document.querySelector('.description');
const highTemp = document.querySelector('.temp-max');
const lowTemp = document.querySelector('.temp-min');
export function weather(key) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=besançon&appid=${key}&units=celcius&lang=fr`;
    fetch(url)
        .then((res) => {
        return res.json();
    })
        .then((data) => {
        let tmp = `${Math.round(data.main.temp)}°C`;
        let description = data.weather[0].description;
        let high = `${Math.round(data.main.temp_max)}°C`;
        let low = `${Math.round(data.main.temp_min)}°C`;
        temp.textContent = tmp;
        desc.textContent = description;
        highTemp.textContent = high;
        lowTemp.textContent = low;
    });
}
weather("6bb83d7cf2b4aee765f7bd3f53260c22");
