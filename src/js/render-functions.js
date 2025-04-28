import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ul = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.image-li a', {
  captionDelay: 250,
  captionsData: 'alt',
});

export function createGallery(images) {
  const appendHtml = images.map((element) => {
      return `<li class="image-li">
           <a href="${element.largeImageURL}"> <img class="li-img" src="${
        element.webformatURL
      }" alt="${element.tags.split(',').slice(0, 3).join(',')}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${element.likes}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${element.views}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${element.comments}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${element.downloads}</div>
            </li>

            </ul>
          </div>
        </li>`;
    }).join("");
  ul.insertAdjacentHTML("beforeend", appendHtml);
    lightbox.refresh();
}

export function clearGallery() {
    ul.innerHTML = "";
}

export function showLoader() {
document.querySelector('.hidden').classList.remove("ghost");
}

export function deleteLoader() {
    document.querySelector(".hidden").classList.add("ghost")
}