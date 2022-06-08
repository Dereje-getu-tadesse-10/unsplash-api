

const img = document.querySelector('img');
const like = document.querySelector('.fa-heart');
let keyUnsplah = "o3VmNfvsRnbUKRj_m5rsjK9sJ2YhSJ1NWkbtdC7SEXo";

// get day formated

function getDay(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayName = date.toLocaleString('fr-FR', {weekday: 'long'});
    let monthName = date.toLocaleString('fr-FR', {month: 'long'});
    return ` le ${dayName} ${day} ${monthName} ${year}`;
}

function getRandomImg(keyUnsplah){
    fetch(`https://api.unsplash.com/photos/random/`,{
        method: 'GET',
        headers: {
            Authorization: `Client-ID ${keyUnsplah}`,
        }
    })
    .then((res)=>{
        // console.log(res);
        return res.json();
    })
    .then((data)=>{

        // console.log(data);
        img.src = data.urls.regular;
        img.alt = data.alt_description;
        let link = img.src;

        // give a random id to the image
        img.id = makeid();
        
        like.addEventListener('click', () => {
            const el = new FormData();
            el.append('id', img.id);
            el.append('url', JSON.stringify(link));
            el.append('mood', 'happy');
            el.append('date', JSON.stringify(getDay()));

            const req = {
                method:'post',
                body: el
            };

            fetch('./bdd-script/like.php', req)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data);
            })
        })
    })

}
// create a function hello
getRandomImg(keyUnsplah);


function makeid() {
    let id = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++){
        id += possible.charAt(Math.floor(Math.random() * possible.length));
        
    }
    
    return id;
    
}
