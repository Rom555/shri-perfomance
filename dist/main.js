(()=>{"use strict";function e(e,t,i,n){e.addEventListener(i,(e=>{e.target.closest(`${t}`)&&n(e)}))}!function(){const t=document.querySelector(".main__devices");let i=t.querySelector(".section__tab_active").dataset.id;const n=t.querySelector(".section__tabs"),a=[].map.call(document.querySelectorAll(".section__tab"),(function(e){return e.dataset.id})),c=t.querySelector(".section__select");function s(e){const n=t.querySelector(`.section__tab[data-id=${e}]`),a=t.querySelector(`.section__panel[data-id=${e}]`),s=t.querySelector(".section__tab_active"),r=t.querySelector(".section__panel:not(.section__panel_hidden)");i=e,s.classList.remove("section__tab_active"),s.setAttribute("aria-selected","false"),s.removeAttribute("tabindex"),n.classList.add("section__tab_active"),n.setAttribute("aria-selected","true"),n.setAttribute("tabindex","0"),n.focus({preventScroll:!0}),r.classList.add("section__panel_hidden"),r.setAttribute("aria-hidden","true"),a.classList.remove("section__panel_hidden"),a.setAttribute("aria-hidden","false"),c.value=e}c.addEventListener("input",(()=>{s(c.value)})),e(n,".section__tab","click",(e=>{s(e.target.dataset.id)})),e(n,".section__tab","keydown",(e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let t=a.indexOf(i);if(37===e.which)--t;else if(39===e.which)++t;else if(36===e.which)t=0;else{if(35!==e.which)return;t=a.length-1}t>=a.length?t=0:t<0&&(t=a.length-1),s(a[t]),e.preventDefault()}))}(),function(){const e=document.getElementById("header__menu");let t=!1;const i=document.querySelector(".header__links");e.addEventListener("click",(()=>{t=!t,e.setAttribute("aria-expanded",t?"true":"false"),e.querySelector(".header__menu-text").textContent=t?"Закрыть меню":"Открыть меню",i.classList.toggle("header__links_opened",t)}))}()})();