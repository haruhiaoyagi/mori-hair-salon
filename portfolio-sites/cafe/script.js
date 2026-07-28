const toggle=document.querySelector(".nav-toggle"),nav=document.querySelector("nav"),toast=document.querySelector(".toast");
toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));nav.classList.toggle("open",!open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{toggle.setAttribute("aria-expanded","false");nav.classList.remove("open")}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&nav.classList.contains("open")){toggle.click();toggle.focus()}});
let timer;document.querySelectorAll(".demo").forEach(el=>el.addEventListener("click",()=>{toast.classList.add("show");clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove("show"),2600)}));
