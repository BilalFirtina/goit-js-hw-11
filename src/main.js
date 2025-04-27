import { fetchImages } from './js/pixabay-api';
import { createGallery,clearGallery,showLoader,deleteLoader } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form")
const input = document.querySelector('input[name="input"]');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const enteredValue = input.value.trim();
    clearGallery();
    showLoader();
    if (!enteredValue) {
        iziToast.error({
          title: 'Error',
            message: 'Please enter a search term.',
          position:"topRight"
        });
    }
    const images = fetchImages(enteredValue);
    images.then((resolve) => {
        createGallery(resolve.data.hits)
        deleteLoader();
    })
})

