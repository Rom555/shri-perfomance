(()=>{"use strict";(()=>{function e(e,t,a){Array.from(e).forEach((e=>{e.addEventListener(t,a)}))}function t(t){let a=t.querySelector(".section__tab_active").dataset.id;const i=t.querySelectorAll(".section__tab"),r=Array.from(i).map((e=>e.dataset.id)),n=t.querySelector(".section__select");function c(e){const i=t.querySelector(`.section__tab[data-id=${e}]`),r=t.querySelector(`.section__panel[data-id=${e}]`),c=t.querySelector(".section__tab_active"),s=t.querySelector(".section__panel:not(.section__panel_hidden)");a=e,c.classList.remove("section__tab_active"),c.setAttribute("aria-selected","false"),c.removeAttribute("tabindex"),i.classList.add("section__tab_active"),i.setAttribute("aria-selected","true"),i.setAttribute("tabindex","0"),i.focus({preventScroll:!0}),s.classList.add("section__panel_hidden"),s.setAttribute("aria-hidden","true"),r.classList.remove("section__panel_hidden"),r.setAttribute("aria-hidden","false"),n.value=e}n.addEventListener("input",(()=>{c(n.value)})),e(i,"click",(e=>{c(e.target.dataset.id)})),e(i,"keydown",(e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let t=r.indexOf(a);if(37===e.which)--t;else if(39===e.which)++t;else if(36===e.which)t=0;else{if(35!==e.which)return;t=r.length-1}t>=r.length?t=0:t<0&&(t=r.length-1),c(r[t]),e.preventDefault()}))}function a(e){let t=!1;const a=document.querySelector(".header__links");e.addEventListener("click",(()=>{t=!t,e.setAttribute("aria-expanded",t?"true":"false"),e.querySelector(".header__menu-text").textContent=t?"Закрыть меню":"Открыть меню",a.classList.toggle("header__links_opened",t),a.classList.add("header__links-toggled")}))}document.addEventListener("DOMContentLoaded",(()=>{Array.from(document.querySelectorAll(".main__devices")).forEach(t),Array.from(document.querySelectorAll(".header__menu")).forEach(a)}))})()})();