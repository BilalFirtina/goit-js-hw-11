import { fetchImages } from './pixabay';
// Dokümantasyonda belirtilen import
import iziToast from "izitoast";
// Stil importu
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const ul = document.querySelector('.ul-wrapper');
const form = document.querySelector(".form")
const input = document.querySelector('input[name="input"]');
const hidden = document.querySelector('.hidden');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    ul.innerHTML = "";
    hidden.classList.remove('ghost');
    fetchImages(input.value)
        .then(images => {

            if (images.hits.length <= 0) {
                iziToast.error({
                  message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: "topRight"
                });
                form.reset();
            };
            images.hits.forEach(element => {
                let appendHtml = `<li class="image-li">
           <a href="${element.largeImageURL}"> <img class="li-img" src="${
                  element.previewURL
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
                ul.insertAdjacentHTML("beforeend",appendHtml)
            });
            form.reset();
            let lightbox = new SimpleLightbox('.image-li a', {
              captionDelay: 250,
              captionsData: 'alt',
            });
            lightbox.refresh();
            hidden.classList.add('ghost');
        })
    .catch ((err) => {
        console.log(err);

    })
})

