

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

function getRandomImg(key, mood) {
    fetch(`https://api.unsplash.com/search/photos?query=${mood}&client_id=${key}`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // get random image from unsplash
        let imgUrl = data.results[Math.floor(Math.random() * data.results.length)].urls.full;
        img.setAttribute('src', imgUrl);
        // get link of image
        like.addEventListener('click', () => {
            const el = new FormData();
            el.append('url', JSON.stringify(imgUrl));
            el.append('mood', mood);
            el.append('date', JSON.stringify(getDay()));

            const req = {
                method:'post',
                body: el
            };

            fetch('./script/like.php', req)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data);
            })
        })
    })
}

getRandomImg(keyUnsplah, 'Architecture');
