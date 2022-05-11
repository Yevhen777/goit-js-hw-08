// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

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

let lightbox = new SimpleLightbox('.gallery__link');

const galleryImageFunction = e => {
  e.preventDefault();

  if (e.target.tagName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1400" height="900">`,
  );

  instance.show();

  function onKeydown(e) {
    if (e.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onKeydown);
    }
  }
  window.addEventListener('keydown', onKeydown);
};
gallery.addEventListener('click', galleryImageFunction);
