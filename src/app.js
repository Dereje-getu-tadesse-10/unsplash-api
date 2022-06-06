

const img = document.querySelector('img');
const like = document.querySelector('.fa-heart');
let keyUnsplah = "o3VmNfvsRnbUKRj_m5rsjK9sJ2YhSJ1NWkbtdC7SEXo";

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

function getRandomImg(keyUnsplah = "o3VmNfvsRnbUKRj_m5rsjK9sJ2YhSJ1NWkbtdC7SEXo"){
    let suer = "@brookecagle";
    fetch(`https://api.unsplash.com/photos/random/`,{
        method: 'GET',
        headers: {
            Authorization: `Client-ID ${keyUnsplah}`,
        }
    })
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{

        console.log(data);
        img.src = data.urls.regular;
        img.alt = data.alt_description;
        let link = img.src;

        like.addEventListener('click', () => {
            const el = new FormData();
            el.append('url', JSON.stringify(link));
            el.append('mood', 'happy');
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

getRandomImg(keyUnsplah);
