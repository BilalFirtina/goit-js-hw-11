const publicKey = '49926039-70f4c194fbb0b63068557ead5';
const url = 'https://pixabay.com/api/';

export function fetchImages(query) {
    const currentURL = `${url}?key=${publicKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`
    return fetch(currentURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Bir hata var !")
            }
            return response.json();
        });
}