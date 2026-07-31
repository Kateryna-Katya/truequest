import{S as g,A as m,P as S}from"./vendor-Bvc6Cv_u.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const b=1440;let p=null,f=null,h=null,w=null;const v={delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0};function y(o){var l;if(!((l=o.pagination)!=null&&l.bullets))return;const n=Array.from(o.pagination.bullets),r=o.realIndex;n.forEach((e,t)=>{if(e.classList.remove("features-bullet-active","features-bullet-next","features-bullet-small"),t===r){e.classList.add("features-bullet-active");return}const c=(r+1)%n.length;t===c?e.classList.add("features-bullet-next"):e.classList.add("features-bullet-small")})}function E(){document.querySelector(".how-swiper")&&(p||(p=new g(".how-swiper",{modules:[m],slidesPerView:1.4,spaceBetween:24,loop:!0,speed:700,autoplay:v})),!f&&document.querySelector(".features-swiper")&&(f=new g(".features-swiper",{modules:[m,S],slidesPerView:1,spaceBetween:16,loop:!0,speed:700,autoplay:v,pagination:{el:".features-pagination",clickable:!0,bulletClass:"features-pagination-bullet",bulletActiveClass:"features-pagination-bullet-current"},on:{init(o){y(o)},slideChange(o){y(o)},paginationUpdate(o){y(o)}}})),!h&&document.querySelector(".gallery-swiper")&&(h=new g(".gallery-swiper",{modules:[m],slidesPerView:1.5,spaceBetween:16,loop:!0,speed:700,autoplay:v})),!w&&document.querySelector(".reviews-swiper")&&(w=new g(".reviews-swiper",{modules:[m],slidesPerView:1.45,spaceBetween:8,loop:!0,speed:700,autoplay:v})))}function M(){p&&(p.destroy(!0,!0),p=null),f&&(f.destroy(!0,!0),f=null),h&&(h.destroy(!0,!0),h=null),w&&(w.destroy(!0,!0),w=null)}function k(){window.innerWidth<b?E():M()}k();window.addEventListener("resize",k);document.querySelectorAll(".faq-acc-el-trigger").forEach(o=>{o.addEventListener("click",()=>{const n=o.closest(".faq-acc-el"),r=n.querySelector(".faq-acc-el-descr-frame"),l=o.querySelector("svg"),e=n.classList.contains("open"),t=`
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.16602 10H15.834M10 4.16602V15.834" stroke="#9D85FF" stroke-width="2" stroke-linecap="round" />
</svg>`,c=`
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_19_178)">
    <path d="M4.16675 10H15.8334" stroke="#9D85FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_19_178">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>`;e?(n.classList.remove("open"),r.style.maxHeight="0",l.outerHTML=t):(n.classList.add("open"),r.style.maxHeight=r.scrollHeight+"px",l.outerHTML=c)})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".menu-button"),n=o.querySelector(".icon"),r=document.querySelector(".modal"),l=document.querySelectorAll(".menu-list-item"),e=document.querySelector(".header");let t=!1;const c=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_401)">
    <path d="M4 6H20" stroke="#FF4D8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 12H20" stroke="#FF4D8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 18H20" stroke="#FF4D8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_1_401">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `,i=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_369)">
    <path d="M18 6L6 18" stroke="#FF4D8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 6L18 18" stroke="#FF4D8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_1_369">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;o.addEventListener("click",()=>{t=!t,n.innerHTML=t?i:c,t?s():a()}),l.forEach(u=>u.addEventListener("click",()=>{a(),n.innerHTML=c,t=!1})),window.addEventListener("scroll",d);function s(){r.style.display="block"}function a(){r.style.display="none"}function d(){e&&(window.scrollY>60?e.classList.add("header-scroll"):e.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function o(){const i=document.getElementById("site-header");return i?i.offsetHeight:0}function n(i){const s=document.getElementById(i);if(!s)return;const a=o(),d=s.getBoundingClientRect().top+window.pageYOffset-a;window.scrollTo({top:d,behavior:"smooth"})}document.querySelectorAll(".navigation-item a").forEach(i=>{i.addEventListener("click",function(s){const a=this.getAttribute("href");if(!a)return;const[d,u]=a.split("#");if(!u)return;const L=window.location.pathname.split("/").pop();!(d===""||d==="./"||d===L||d==="./"+L)||!document.getElementById(u)||(s.preventDefault(),n(u),t(u))})});const l=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".navigation-item");function t(i){e.forEach(a=>a.classList.remove("active"));const s=document.querySelector(`.navigation-item a[href*="#${i}"]`);s&&s.closest(".navigation-item").classList.add("active")}function c(){const i=window.pageYOffset+o()+100;l.forEach(s=>{const a=s.offsetTop,d=a+s.offsetHeight;i>=a&&i<d&&t(s.id)})}if(window.addEventListener("scroll",c),window.location.hash){const i=window.location.hash.substring(1);setTimeout(()=>{n(i),t(i)},300)}});
//# sourceMappingURL=main-DDRj3O28.js.map
