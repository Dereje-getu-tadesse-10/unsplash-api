
const img = document.querySelector('img');
const like = document.querySelector('.fa-heart');
let keyUnsplah = "DNOXP05XZ1QlAN2NxzLND4N6Gt2J5iSkIKnEtiJ_hAw";

// get day formated

// get day fomated with name day and month name and year name
function getDay(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayName = date.toLocaleString('fr-FR', {weekday: 'long'});
    let monthName = date.toLocaleString('fr-FR', {month: 'long'});
    return ` le ${dayName} ${day} ${monthName} ${year}`;
}

async function getData(key,mood){
    let url =`https://api.unsplash.com/search/photos?query=${mood}&client_id=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    let imgUrl = data.results[Math.floor(Math.random() * data.results.length)].urls.full;
    img.setAttribute('src', imgUrl);
    let id = 0;
    like.addEventListener('click', () => {
        let data = new FormData();
        data.append(`url${id++}`, imgUrl);
        data.append(`mood`, mood);
        data.append('le :', getDay());
        addDataBase(data);
    })
}

getData(keyUnsplah,'storm');

function addDataBase(data){
    fetch('./script/like.php', {
        method: 'POST',
        body: data,
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
}
