(()=>{"use strict";var e=window.innerWidth,t=document.querySelector("#A-btn"),n=document.querySelector("#B-btn"),i=document.querySelector("#C-btn"),s=document.querySelector("#D-btn"),o=document.querySelector("#Only-with-us-btn"),r=document.querySelector("#Additional-classes-btn"),c=document.querySelector(".prices__info"),a=document.querySelector(".prices__A-container"),l=document.querySelector(".prices__B-container"),u=document.querySelector(".prices__C-container"),d=document.querySelector(".prices__D-container"),_=document.querySelector(".prices__only-with-us-container"),p=document.querySelector(".prices__additional-classes-container"),v=document.querySelectorAll(".button_type_consult-form"),m=document.querySelector("#license"),y=document.querySelectorAll(".popup"),b=document.querySelector("#tablet-computer-licenses"),f=document.querySelector("#mobile-license-one"),h=document.querySelector("#mobile-license-two"),L=document.querySelector("#contacts-popup"),g=document.querySelector("#burger-popup"),S=document.querySelector(".header"),E=document.querySelector(".header__links"),q=document.querySelector(".logo_type_header"),w=document.querySelector(".logo").querySelector("img"),x=document.querySelector(".main__bg-first"),A=document.querySelector(".main__bg-second"),k=document.querySelector(".main__image_type_three"),C=document.querySelector(".main__image_type_seven"),B=document.querySelector(".main__image_type_arrows"),D=document.querySelector("#contacts-form"),O=document.querySelector("#contacts-form-popup"),M=document.querySelector(".club__license-title"),N=document.querySelector(".contacts__subtitle"),j=document.querySelectorAll(".guru__teacher"),H=document.querySelector(".club__underground-svg"),I=document.querySelector(".club__background-string");function T(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,s=function(){};return{s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){c=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw o}}}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}for(var K=[!1,!1,!1],P=0;P<j.length;P++)Y(j[P]);function Y(e){e.addEventListener("mouseenter",(function(){var t=e.querySelector(".guru__teacher-expearence");t.style.opacity=1,t.style.visibility="visible"})),e.addEventListener("mouseleave",(function(){var t=e.querySelector(".guru__teacher-expearence");t.style.opacity=0,t.style.visibility="hidden"}))}function W(e){e.classList.add("popup_visible")}function $(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__cross")||"Escape"===e.key)&&(y[0].classList.remove("popup_visible"),y[1].classList.remove("popup_visible"),y[2].classList.remove("popup_visible"),y[3].classList.remove("popup_visible"),y[4].classList.remove("popup_visible"))}function J(){if(!K[1]){if(e<768){M.insertAdjacentHTML("afterend",'\n      <div class="club__licenses">\n        <button class="button button_type_license" id="license-one-btn">лицензия 1</button>\n        <button class="button button_type_license" id="license-two-btn">лицензия 2</button>\n      </div>\n      ');var t=document.querySelector("#license-one-btn"),n=document.querySelector("#license-two-btn");t.addEventListener("click",(function(){W(f)})),n.addEventListener("click",(function(){W(h)}))}else M.insertAdjacentHTML("afterend","");K[1]=!0}}function Q(){K[2]||(e<768&&(D.remove(),N.insertAdjacentHTML("afterend",'<button class="button button_type_consult-popup">Консультация</button>'),document.querySelector(".button_type_consult-popup").addEventListener("click",(function(){W(L)}))),K[2]=!0)}function X(){if(!K[0]&&e<768){E.remove(),q.insertAdjacentHTML("afterend",'\n      <button class="burger-menu__btn btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModal">\n        <span></span>\n      </button>\n      ');var t=document.querySelector(".burger-menu__btn");t.addEventListener("click",(function(e){t.classList.add("burger-menu__btn_active"),t.style.position="fixed",g.classList.add("popup_visible")})),window.addEventListener("touchend",(function(e){e.target.classList.contains("popup")&&(t.classList.remove("burger-menu__btn_active"),g.classList.remove("popup_visible"),t.style.position="absolute")})),K[0]=!0}}document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});var t=document.querySelector(".burger-menu__btn");y[4].classList.remove("popup_visible"),t.classList.remove("burger-menu__btn_active")}))})),J(),Q(),X();var z=function(e){return document.body.getElementsByClassName(e)};function R(e,t,n){e.style.transition=n+"s linear",e.style.color=t}A.onmouseenter=function(e){x.classList.add("animation"),k.classList.add("animated"),C.classList.add("animated"),B.classList.add("animated-arrows");var t,n=T(document.body.getElementsByClassName("header__link"));try{for(n.s();!(t=n.n()).done;)R(t.value,"#181818",.5)}catch(e){n.e(e)}finally{n.f()}R(z("header__connection")[0],"#181818",.5),w.style.opacity=0},A.onmouseleave=function(e){x.classList.remove("animation"),k.classList.remove("animated"),C.classList.remove("animated"),B.classList.remove("animated-arrows");var t,n=T(document.body.getElementsByClassName("header__link"));try{for(n.s();!(t=n.n()).done;)R(t.value,"#f8f8f8",.5)}catch(e){n.e(e)}finally{n.f()}R(z("header__connection")[0],"#FFF",.5),w.style.opacity=1};var U=0;H.style.backgroundPosition="0px 0px",I.style.backgroundPosition="0px 0px";var V=function(e,t,n,i){var s=e.style.backgroundPosition,o=s.split(" ")[0],r=o.substring(0,o.length-2),c=s.split(" ")[1],a=c.substring(0,c.length-2),l=r;(n<Number(r)+t&&t<0||i>Number(r)+t&&t>0)&&(l=Number(r)+t),e.style.backgroundPosition=String(l)+"px "+a+"px"};function G(e,t){return e?t:-1*t}window.onscroll=function(t){var n,i,s,o=U>window.pageYOffset?(U=window.pageYOffset,!0):(U=window.pageYOffset,!1),r=e/100*47,c=e/100*78,a=e/100;i=document.getElementsByClassName("club__underground-image")[0],s=document.getElementsByClassName("club")[0],i.offsetTop+s.offsetTop<pageYOffset+window.innerHeight&&(-1!=(n=navigator.userAgent.toLowerCase()).indexOf("Android".toLowerCase())||-1!=n.indexOf("IOS".toLowerCase())?(V(I,G(o,-1),-1200,1200),V(H,G(o,a),-c,0)):(V(I,G(o,-1),-1200,1200),V(H,G(o,a),-r,0))),U>700?(S.style.display="none",S.style.position="fixed",S.style.display="flex",S.style.transition="all 500ms ease-out",S.style.opacity="1",S.style.backgroundColor="#181818"):(S.style.display="none",S.style.position="absolute",S.style.backgroundColor="transparent",S.style.display="flex")},window.addEventListener("DOMContentLoaded",(function(){[].forEach.call(document.querySelectorAll(".contacts__form-input"),(function(e){var t;function n(e){e.keyCode&&(t=e.keyCode),this.selectionStart<3&&e.preventDefault();var n="+7 (___) ___ __ __",i=0,s=n.replace(/\D/g,""),o=this.value.replace(/\D/g,""),r=n.replace(/[_\d]/g,(function(e){return i<o.length?o.charAt(i++)||s.charAt(i):e}));-1!=(i=r.indexOf("_"))&&(i<5&&(i=3),r=r.slice(0,i));var c=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=r),"blur"==e.type&&this.value.length<5&&(this.value="")}"phone"==e.id&&(e.addEventListener("input",n,!1),e.addEventListener("focus",n,!1),e.addEventListener("blur",n,!1),e.addEventListener("keydown",n,!1)),"phone-popup"==e.id&&(e.addEventListener("input",n,!1),e.addEventListener("focus",n,!1),e.addEventListener("blur",n,!1),e.addEventListener("keydown",n,!1))}))})),window.addEventListener("load",(function(){J(),Q(),X()})),window.addEventListener("rezise",(function(){J(),Q(),X()})),window.addEventListener("orientationchange",(function(){J(),Q(),X()})),m.addEventListener("click",(function(){e>767&&W(b)})),v.forEach((function(e){e.addEventListener("click",(function(){W(L)}))})),D.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector("#name").value,n=document.querySelector("#phone").value,i="Запрос о консультации:%0A <b>".concat(t,"</b>%0A <b>").concat(n,"</b>");fetch("https://api.telegram.org/bot".concat("1685594101:AAE_XcN8JKxhesOBuW6-e8M5IFsBHpdLQK8","/sendMessage?chat_id=").concat("-561913957","&parse_mode=html&text=").concat(i)),e.target.name.value="",e.target.phone.value="",y[3].classList.remove("popup_visible")})),O.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector("#name-popup").value,n=document.querySelector("#phone-popup").value,i="Запрос о консультации:%0A <b>".concat(t,"</b>%0A <b>").concat(n,"</b>");fetch("https://api.telegram.org/bot".concat("1685594101:AAE_XcN8JKxhesOBuW6-e8M5IFsBHpdLQK8","/sendMessage?chat_id=").concat("-561913957","&parse_mode=html&text=").concat(i)),e.target.name.value="",e.target.phone.value="",y[3].classList.remove("popup_visible")})),L.addEventListener("click",$),L.addEventListener("touchstart",$),L.addEventListener("touchend",$),b.addEventListener("click",$),f.addEventListener("click",$),f.addEventListener("touchstart",$),f.addEventListener("touchend",$),h.addEventListener("click",$),h.addEventListener("touchstart",$),h.addEventListener("touchend",$),t.addEventListener("click",(function(){a.classList.add("prices__A-container_visible"),l.classList.remove("prices__B-container_visible"),u.classList.remove("prices__C-container_visible"),d.classList.remove("prices__D-container_visible"),_.classList.remove("prices__only-with-us-container_visible"),p.classList.remove("prices__additional-classes-container_visible"),e>1365&&(c.style.height="512px"),e>767&&e<1366&&(c.style.height="626px"),e<768&&(c.style.height="415px")})),n.addEventListener("click",(function(){a.classList.remove("prices__A-container_visible"),l.classList.add("prices__B-container_visible"),u.classList.remove("prices__C-container_visible"),d.classList.remove("prices__D-container_visible"),_.classList.remove("prices__only-with-us-container_visible"),p.classList.remove("prices__additional-classes-container_visible"),e>1365&&(c.style.height="512px"),e>767&&e<1366&&(c.style.height="697px"),e<768&&(c.style.height="415px")})),i.addEventListener("click",(function(){a.classList.remove("prices__A-container_visible"),l.classList.remove("prices__B-container_visible"),u.classList.add("prices__C-container_visible"),d.classList.remove("prices__D-container_visible"),_.classList.remove("prices__only-with-us-container_visible"),p.classList.remove("prices__additional-classes-container_visible"),e>1365&&(c.style.height="238px"),e>767&&e<1366&&(c.style.height="130px"),e<768&&(c.style.height="415px")})),s.addEventListener("click",(function(){a.classList.remove("prices__A-container_visible"),l.classList.remove("prices__B-container_visible"),u.classList.remove("prices__C-container_visible"),d.classList.add("prices__D-container_visible"),_.classList.remove("prices__only-with-us-container_visible"),p.classList.remove("prices__additional-classes-container_visible"),e>1365&&(c.style.height="238px"),e>767&&e<1366&&(c.style.height="130px"),e<768&&(c.style.height="415px")})),o.addEventListener("click",(function(){a.classList.remove("prices__A-container_visible"),l.classList.remove("prices__B-container_visible"),u.classList.remove("prices__C-container_visible"),d.classList.remove("prices__D-container_visible"),_.classList.add("prices__only-with-us-container_visible"),p.classList.remove("prices__additional-classes-container_visible"),e>1365&&(c.style.height="518px"),e>767&&e<1366&&(c.style.height="645px"),e<768&&(c.style.height="415px")})),r.addEventListener("click",(function(){a.classList.remove("prices__A-container_visible"),l.classList.remove("prices__B-container_visible"),u.classList.remove("prices__C-container_visible"),d.classList.remove("prices__D-container_visible"),_.classList.remove("prices__only-with-us-container_visible"),p.classList.add("prices__additional-classes-container_visible"),e>1365&&(c.style.height="452px"),e>767&&e<1366&&(c.style.height="533px"),e<768&&(c.style.height="415px")}))})();