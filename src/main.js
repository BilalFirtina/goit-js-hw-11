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
    deleteLoader();
      return iziToast.error({
          title: 'Error',
            message: 'Please enter a search term.',
          position:"topRight"
        });
    }
    const images = fetchImages(enteredValue);
  images.then((resolve) => {
      console.log(resolve)
        createGallery(resolve.data.hits)
        deleteLoader();
        if (resolve.data.hits.length <= 0) {
            iziToast.error({
              title: 'Error',
              message:
                'Sorry, there are no images matching your search query. Please try again!',
              position: 'topRight',
            });
      }
      form.reset();
    })
      .catch((err) => {
        iziToast.error({
          title: "Error",
          message: err.message,
          position: "topRight"
        })
  })
})

