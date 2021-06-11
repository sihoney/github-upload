const photos = document.querySelector('.photos');

const img = document.createElement('img');
img.setAttribute('src', 'images/1.jpg');
photos.appendChild(img);

img.addEventListener('click', changeImg);

function changeImg(){
    const number = Math.floor(Math.random() * 5);
    img.removeAttribute('src')
    img.setAttribute('src', `images/${number}.jpg`);
    
}

