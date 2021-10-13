const list = document.querySelector('#lista');
const search = document.querySelector('#searchword');
const imageSearch = document.querySelector('#image-Search');
const bigPic = document.querySelector('#mainImage');

async function getImages(image) {
   const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e4f9ad022bf9e1fbfcf8c454cda27175&tags=${image}&format=json&nojsoncallback=1`);
    const data = await response.json();
    showPhotos(data.photos.photo);
};

function showPhotos(array) {
    array.forEach(picture => {
        const item = document.createElement('li');
        item.innerHTML = `<img src="https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg" class="pics">`;
        list.appendChild(item);
    });
};

imageSearch.addEventListener('submit', e =>{
    e.preventDefault();
    const query = search.value;
    getImages(query);
});