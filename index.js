import{a as p,S as f,i as a}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="49926039-70f4c194fbb0b63068557ead5",h="https://pixabay.com/api/";function y(s){const r=`${h}?key=${g}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;return p.get(r).then(o=>o).catch(o=>{throw new Error(o)})}const u=document.querySelector(".gallery");let b=new f(".image-li a",{captionDelay:250,captionsData:"alt"});function v(s){const r=s.map(({largeImageURL:o,webformatURL:i,tags:e,likes:t,views:n,comments:d,downloads:m})=>`<li class="image-li">
           <a href="${o}"> <img class="li-img" src="${i}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${t}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${n}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${d}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${m}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");u.insertAdjacentHTML("beforeend",r),b.refresh()}function L(){u.innerHTML=""}function $(){document.querySelector(".hidden").classList.remove("ghost")}function c(){document.querySelector(".hidden").classList.add("ghost")}const l=document.querySelector(".form"),S=document.querySelector('input[name="input"]');l.addEventListener("submit",s=>{s.preventDefault();const r=S.value.trim();if(L(),$(),!r)return c(),a.error({title:"Error",message:"Please enter a search term.",position:"topRight"});y(r).then(i=>{console.log(i),v(i.data.hits),c(),i.data.hits.length<=0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.reset()}).catch(i=>{a.error({title:"Error",message:i.message,position:"topRight"})})});
//# sourceMappingURL=index.js.map
