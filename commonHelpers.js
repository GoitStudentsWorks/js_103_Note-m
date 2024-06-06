import{i as k,S as _}from"./assets/vendor-43af55b9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link, .header-nav-link")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"),t.modal.classList.contains("is-hidden")?(t.openModalBtn.style.display="block",t.closeModalBtn.style.display="none"):(t.openModalBtn.style.display="none",t.closeModalBtn.style.display="block")}function i(e){const s=document.querySelector(e);if(s){const r=s.getBoundingClientRect().top+window.scrollY;window.scrollBy({top:r-window.scrollY,left:0,behavior:"smooth"})}else console.warn(`Element not found: ${e}`)}t.menuLinks.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault();const r=e.getAttribute("href");t.modal.classList.contains("is-hidden")||o(),i(r)})})})();function B(){const t=document.querySelectorAll(".accordion-block");t.forEach(o=>{const i=o.querySelector(".accordion-title"),e=o.querySelector(".accordion-content"),s=i.querySelector("span");i.addEventListener("click",()=>{o.classList.contains("active")?(o.classList.remove("active"),e.classList.remove("active"),e.style.maxHeight=0,s.querySelector("svg").style.transform="rotate(0deg)"):(t.forEach(r=>{r.classList.remove("active"),r.querySelector(".accordion-content").classList.remove("active"),r.querySelector(".accordion-content").style.maxHeight=0,r.querySelector("span svg").style.transform="rotate(0deg)"}),o.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")}),o===t[0]&&(o.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")})}function T(){const t=document.querySelector(".work-together-form"),o=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),e=document.querySelector(".work-together-input-email"),s=document.querySelector(".work-together-error-message"),r=document.querySelector(".work-together-adress-icon-form"),c=document.querySelector(".work-together-input-message"),n=document.querySelector(".work-together-modal-main"),j=document.querySelector(".work-together-modal-second"),f={},$="https://portfolio-js.b.goit.study/api/";t.addEventListener("submit",p=>{if(p.preventDefault(),e.value.trim()!==""&&e.value.trim()!==" ")if(s.classList.remove("active"),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.value.trim())===!0){r.classList.remove("hidden"),e.style.color="black",f.email=e.value,f.comment=c.value;const N={method:"POST",body:JSON.stringify(f),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch(`${$}requests`,N).then(u=>{if(!u.ok)throw new Error(u.status);return u.json()}).then(u=>{n.textContent=u.title,j.textContent=u.message,o.classList.add("active"),r.classList.remove("hidden")}).catch(u=>{k.info({title:"Info",message:"Sorry, something went wromg, please check your request once more, fill all the fields"}),console.log(u)})}else s.innerHTML="Please input correct Email adress",e.style.color="red",s.classList.add("active");else s.innerHTML="Field Email cannot be blank",s.classList.add("active")}),i.addEventListener("click",()=>{o.classList.remove("active"),e.value="",r.classList.add("hidden"),c.value=""}),o.addEventListener("click",p=>{p.target.classList.value!=="work-together-modal-btn-closing"&&p.target.classList.value!=="work-together-modal"&&(o.classList.remove("active"),e.value="",r.classList.add("hidden"),c.value="")}),document.addEventListener("keydown",p=>{p.key==="Escape"&&(o.classList.remove("active"),e.value="",r.classList.add("hidden"),c.value="")})}const l="/js_103_Note-m/assets/icons-33941ae6.svg",M="https://portfolio-js.b.goit.study/api",S=document.querySelector(".swiper-wrapper"),d=document.querySelector(".swiper-button-prev"),m=document.querySelector(".swiper-button-next"),g=d.querySelector(".icon-swipe-prev use"),h=m.querySelector(".icon-swipe-next use");let w;const A=async()=>{try{const t=await fetch(`${M}/reviews`);if(!t.ok)throw new Error("Failed to fetch reviews");return await t.json()}catch(t){throw k.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),t}},I=t=>t.map(({author:o,avatar_url:i,review:e})=>`
    <li class='swiper-slide user-review'>
      <p class='text-review'>${e}</p>
      <div class='icon-photo-name'>
        <img
          src="${i}"
          alt="${o}"
          width="40"
          height="40"
          class="avatar-icon"
        />
        <p class="user-name-review">${o}</p>
      </div>
    </li>`).join(""),P=async()=>{try{w=await A(),w.length>0&&(S.innerHTML+=I(w),y.update())}catch(t){console.log(t),S.innerHTML="<p class='not-found'>Not found</p>",a(d,!0,g,"reviews-grey-btn-prev"),a(m,!0,h,"reviews-grey-btn-next")}},y=new _(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const t=y.activeIndex,o=y.params.slidesPerView,i=w.length;t===0?document.body.classList.contains("body-dark")?a(d,!0,g,"reviews-dark-grey-btn-prev"):a(d,!0,g,"reviews-grey-btn-prev"):document.body.classList.contains("body-dark")?a(d,!1,g,"reviews-white-btn-prev"):a(d,!1,g,"reviews-black-btn-prev"),t>=i-o?(document.body.classList.contains("body-dark")?a(m,!0,h,"reviews-dark-grey-btn-next"):a(m,!0,h,"reviews-grey-btn-next"),k.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):document.body.classList.contains("body-dark")?a(m,!1,h,"reviews-white-btn-next"):a(m,!1,h,"reviews-black-btn-next")}}}),a=(t,o,i,e)=>{t.disabled=o,i.setAttribute("href",`${l}#${e}`),o?t.style.cursor="not-allowed":t.style.cursor=""};document.body.classList.contains("body-dark")?a(d,!0,g,"reviews-dark-grey-btn-prev"):a(d,!0,g,"reviews-grey-btn-prev");d.addEventListener("click",()=>{y.slidePrev()});m.addEventListener("click",()=>{y.slideNext()});P();document.addEventListener("DOMContentLoaded",()=>{const t=()=>{const i=document.getElementById("workTogether");i?i.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},o=document.getElementById("scrollButton");o?o.addEventListener("click",t):console.error('Element with ID "scrollButton" not found.')});const R="/js_103_Note-m/assets/power-2x-7a1fbbd3.jpg",J="/js_103_Note-m/assets/power-1x-dc5a1c34.jpg",H="/js_103_Note-m/assets/mimino-2x-fc76a66c.jpg",C="/js_103_Note-m/assets/mimino-1x-8666f2c8.jpg",O="/js_103_Note-m/assets/vyshyvanka-2x-a051def3.jpg",V="/js_103_Note-m/assets/vyshyvanka-1x-3a9dd024.jpg",F="/js_103_Note-m/assets/chego-2x-5f3c1d1b.jpg",G="/js_103_Note-m/assets/chego-1x-b5c2f6e2.jpg",D="/js_103_Note-m/assets/energy-2x-8cd25da6.jpg",U="/js_103_Note-m/assets/energy-1x-d20414c1.jpg",z="/js_103_Note-m/assets/fruitbox-2x-051da1fe.jpg",Y="/js_103_Note-m/assets/fruitbox-1x-0db2fa14.jpg",Z="/js_103_Note-m/assets/starlight-2x-63c6cf4f.jpg",K="/js_103_Note-m/assets/starlight-1x-5b96ea05.jpg",b=[{origin:R,preview:J,technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:H,preview:C,technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:O,preview:V,technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:F,preview:G,technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:D,preview:U,technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{origin:z,preview:Y,technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:Z,preview:K,technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],Q=document.querySelector(".my-projects-list"),q=document.querySelector(".my-projects-btn-load-more");let v=0,x=3;const W=t=>{if(v<b.length){const i=b.slice(v,v+x).map(e=>`
       <li class="my-projects-item">
        <picture>
          <source
            srcset="
             ${e.preview} 1x,
              ${e.origin} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
            ${e.preview} 1x,
              ${e.origin} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
             ${e.preview} 1x,
              ${e.origin} 2x
            "
            media="(max-width: 767px)"
          />
          <img
            src="${e.preview}"
            alt="${e.title.toLocaleUpperCase()}"
            class="my-projects-img"
            width="1008"
            height="578"
          />
        </picture>

        <p class="my-projects-text">${e.technologies}</p>
        <div class="my-projects-name-btn">
          <h3 class="my-projects-name">${e.title.toLocaleUpperCase()}</h3>
          <a
            class="my-projects-btn-visit"
            href="https://github.com/Note-m/SuccessBuilders"
            target="_blank"
            >VISIT<svg class="my-projects-icon" width="18" height="18">
              <use href="${l}#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`).join("");Q.insertAdjacentHTML("beforeend",i),v+=x}v>=b.length&&q.classList.add("is-hidden")};q.addEventListener("click",W);const E=document.querySelector(".switch-btn"),L=t=>{E.classList.toggle("dark-on"),document.body.classList.toggle("body-dark");const o=document.querySelectorAll(".use-acardion"),i=document.querySelectorAll(".up-line-icon"),e=document.querySelectorAll(".down-line-icon"),s=document.querySelector(".arrow-revi-prev"),r=document.querySelector(".arrow-revi-next");o.forEach(c=>{let n;document.body.classList.contains("body-dark")?(n="reviews-dark-grey-btn-prev",s.setAttribute("href",`${l}#${n}`)):(n="reviews-grey-btn-prev",s.setAttribute("href",`${l}#${n}`))}),o.forEach(c=>{let n;document.body.classList.contains("body-dark")?(n="reviews-white-btn-next",r.setAttribute("href",`${l}#${n}`)):(n="reviews-black-btn-next",r.setAttribute("href",`${l}#${n}`))}),o.forEach(c=>{let n;document.body.classList.contains("body-dark")?n="faq-arrow-white-down-icon":n="faq-arrow-down-icon",c.setAttribute("href",`${l}#${n}`)}),e.forEach(c=>{let n;document.body.classList.contains("body-dark")?n="tech-skills-dark-white-square-icon":n="tech-skills-black-square-icon",c.setAttribute("href",`${l}#${n}`)}),i.forEach(c=>{let n;document.body.classList.contains("body-dark")?n="tech-skills-dark-green-square-icon":n="tech-skills-green-square-icon",c.setAttribute("href",`${l}#${n}`)})};E.addEventListener("click",L);document.addEventListener("DOMContentLoaded",()=>{L()});B();T();L();
//# sourceMappingURL=commonHelpers.js.map
