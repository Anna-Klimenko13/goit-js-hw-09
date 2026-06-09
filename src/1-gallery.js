import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/riga-4202820__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/riga-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Ship',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake',
  }
];

const galleryContainer = document.querySelector(".gallery");

// Створення розмітки
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryContainer.innerHTML = galleryMarkup;

// Ініціалізація SimpleLightbox з налаштуваннями підписів
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});