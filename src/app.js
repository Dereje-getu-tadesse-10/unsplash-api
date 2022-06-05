const fs = require('fs');
const img = document.querySelector('img');
const like = document.querySelector('.fa-heart');
let keyUnsplah = "DNOXP05XZ1QlAN2NxzLND4N6Gt2J5iSkIKnEtiJ_hAw";

async function getData(key,mood){
    let url =`https://api.unsplash.com/search/photos?query=${mood}&client_id=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    let imgUrl = data.results[Math.floor(Math.random() * data.results.length)].urls.full;
    img.setAttribute('src', imgUrl);

    // button like
    like.addEventListener('click', () => {

    })
}

getData(keyUnsplah,'city');