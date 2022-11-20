import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import { galleryItems } from './gallery-items.js';


// Change code below this line
const galleryContainer = document.querySelector('.gallery');
let setImg = [];

for (let img of galleryItems) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add("gallery__item");
    const galleryA = document.createElement('a');
    galleryA.classList.add("gallery__link");
    galleryA.setAttribute('href', img.original);
    const imgGallery = document.createElement('img');
    imgGallery.classList.add("gallery__image");
    imgGallery.setAttribute('src', img.preview);
    imgGallery.setAttribute('data-source', img.original);
    imgGallery.setAttribute('alt', img.description);
    galleryItem.append(imgGallery);
    setImg.push(galleryItem);
}
galleryContainer.append(...setImg);
galleryContainer.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget)
        return;
    
    function onEscPressedHandler(e) {
        if (e.code === 'Escape') {
            lightBox.close();
        }
    }
    
    const lightBox = basicLightbox.create(
        `<img src="${event.target.dataset.source}"/>`,
        {
            onShow: (lightBox) => {
                document.addEventListener('keydown', onEscPressedHandler)
            },
            onClose: (lightBox) => {
                document.removeEventListener('keydown', onEscPressedHandler);
            }
        }
    );


    //     lightBox.show((lightBox) => console.log('finished show()', lightBox));
}