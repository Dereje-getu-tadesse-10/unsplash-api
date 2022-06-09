import { weather } from './weather.js';

const img = document.querySelector('img') as HTMLImageElement;
const like = document.querySelector('.fa-heart') as HTMLElement;

let keyUnsplash : string = "o3VmNfvsRnbUKRj_m5rsjK9sJ2YhSJ1NWkbtdC7SEXo";


function getDay(){
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth() +1;
    let year = date.getFullYear();
    let dayName = date.toLocaleString('fr-FR', { weekday: 'long' });
    let monthName = date.toLocaleString('fr-FR', { month: 'long' });
    let dateString : string | number = `Le ${dayName} ${day} ${monthName} ${year}`;
    return dateString;
}

function getRandomImg(key: string){
    let url = `https://api.unsplash.com/photos/random?client_id=${key}`;
    fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        img.src = data.urls.regular;
        img.alt = data.alt_description;
        let link = img.src;
        img.id = makeId();
        let id = img.id;

        // let da = {id, link};

        // set addeventlistener on like button
        like.addEventListener('click', () =>{
            const el = new FormData();
            el.append('id', id);
            el.append('link', link);
            el.append('mood', 'happy');
            el.append('date', getDay());

            console.log('el')

            const req = {
                method: 'POST',
                body: el
            }

            fetch('./bdd-script/like.php', req)
            .then((res) =>{
                return res.json();
            })
            .then((data) =>{
                console.log(data);

            })
    });
    })

}

function makeId(){
    let id :string = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < 5; i++){
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}

getRandomImg(keyUnsplash);

weather("6bb83d7cf2b4aee765f7bd3f53260c22");