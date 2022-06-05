const img = document.querySelector('img');

let keyUnsplah = "6BWyhvXSEyO3egDZ8E8UXW01I4-pElsxeaTMjx8ZN4Q";
let url =`https://api.unsplash.com/photos/?client_id=${keyUnsplah}`;

// fetch await data from unsplash

// fecth data from unsplash
fetch(url)
.then((response) =>{
    return response.json();
}
)
.then((data) => {
    let src = data[0].urls.regular;
    img.setAttribute('src', src);
    let alt = data[0].alt_description;
    img.setAttribute('alt', alt);

})
