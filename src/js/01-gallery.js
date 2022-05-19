import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const allGalleryImage = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      data-source="${original}"
    src="${preview}" alt="${description}" />
        </a>
    </div>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', allGalleryImage);

let lightbox = new SimpleLightbox('.gallery__link', {
  docClose: true,
  captionsData: 'alt',

  captionDelay: 250,
});
