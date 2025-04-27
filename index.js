import{a as c,S as l,i as d}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const u="49926039-70f4c194fbb0b63068557ead5",f="https://pixabay.com/api/";function p(o){const r=`${f}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;return c.get(r).then(t=>t).catch(t=>{throw new Error(t)})}const a=document.querySelector(".gallery");let m=new l(".image-li a",{captionDelay:250,captionsData:"alt"});function g(o){const r=o.map(t=>`<li class="image-li">
           <a href="${t.largeImageURL}"> <img class="li-img" src="${t.previewURL}" alt="${t.tags.split(",").slice(0,3).join(",")}"> </a>
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
        </li>`).join("");a.innerHTML=r,m.refresh()}function h(){a.innerHTML=""}function v(){document.querySelector(".hidden").classList.remove("ghost")}function y(){document.querySelector(".hidden").classList.add("ghost")}const b=document.querySelector(".form"),L=document.querySelector('input[name="input"]');b.addEventListener("submit",o=>{o.preventDefault();const r=L.value.trim();h(),v(),r||d.error({title:"Error",message:"Please enter a search term.",position:"topRight"}),p(r).then(s=>{g(s.data.hits),y()})});
//# sourceMappingURL=index.js.map
