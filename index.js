import{i as d,S as u}from"./assets/vendor-DpVPnhEv.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="49926039-70f4c194fbb0b63068557ead5",p="https://pixabay.com/api/";function h(s){const i=`${p}?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;return fetch(i).then(o=>{if(!o.ok)throw new Error("Bir hata var !");return o.json()})}const c=document.querySelector(".ul-wrapper"),a=document.querySelector(".form"),m=document.querySelector('input[name="input"]'),l=document.querySelector(".hidden");a.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",l.classList.remove("ghost"),h(m.value).then(i=>{i.hits.length<=0&&(d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.reset()),i.hits.forEach(r=>{let e=`<li class="image-li">
           <a href="${r.largeImageURL}"> <img class="li-img" src="${r.previewURL}" alt="${r.tags.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${r.likes}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${r.views}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${r.comments}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${r.downloads}</div>
            </li>

            </ul>
          </div>
        </li>`;c.insertAdjacentHTML("beforeend",e)}),a.reset(),new u(".image-li a",{captionDelay:250,captionsData:"alt"}).refresh(),l.classList.add("ghost")}).catch(i=>{console.log(i)})});
//# sourceMappingURL=index.js.map
