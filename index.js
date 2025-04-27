import{a as l,S as d,i as a}from"./assets/vendor-BLPZKqeQ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="49926039-70f4c194fbb0b63068557ead5",p="https://pixabay.com/api/";function f(o){const i=`${p}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;return l.get(i).then(t=>t).catch(t=>{throw new Error(t)})}const c=document.querySelector(".gallery");let m=new d(".image-li a",{captionDelay:250,captionsData:"alt"});function g(o){const i=o.map(t=>`<li class="image-li">
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
        </li>`).join("");c.innerHTML=i,m.refresh()}function h(){c.innerHTML=""}function y(){document.querySelector(".hidden").classList.remove("ghost")}function v(){document.querySelector(".hidden").classList.add("ghost")}const b=document.querySelector(".form"),L=document.querySelector('input[name="input"]');b.addEventListener("submit",o=>{o.preventDefault();const i=L.value.trim();h(),y(),i||a.error({title:"Error",message:"Please enter a search term.",position:"topRight"}),f(i).then(s=>{g(s.data.hits),v(),s.data.hits.length<=0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})});
//# sourceMappingURL=index.js.map
