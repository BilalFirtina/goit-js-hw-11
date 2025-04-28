import{a as u,S as f,i as a}from"./assets/vendor-BLPZKqeQ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="49926039-70f4c194fbb0b63068557ead5",p="https://pixabay.com/api/";function g(s){const i=`${p}?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;return u.get(i).then(t=>t).catch(t=>{throw new Error(t)})}const d=document.querySelector(".gallery");let h=new f(".image-li a",{captionDelay:250,captionsData:"alt"});function y(s){const i=s.map(t=>`<li class="image-li">
           <a href="${t.largeImageURL}"> <img class="li-img" src="${t.webformatURL}" alt="${t.tags.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${t.likes}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${t.views}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${t.comments}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${t.downloads}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",i),h.refresh()}function b(){d.innerHTML=""}function v(){document.querySelector(".hidden").classList.remove("ghost")}function c(){document.querySelector(".hidden").classList.add("ghost")}const l=document.querySelector(".form"),L=document.querySelector('input[name="input"]');l.addEventListener("submit",s=>{s.preventDefault();const i=L.value.trim();if(b(),v(),!i)return c(),a.error({title:"Error",message:"Please enter a search term.",position:"topRight"});g(i).then(o=>{console.log(o),y(o.data.hits),c(),o.data.hits.length<=0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.reset()}).catch(o=>{a.error({title:"Error",message:o.message,position:"topRight"})})});
//# sourceMappingURL=index.js.map
