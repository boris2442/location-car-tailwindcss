const menu=document.querySelector("nav ul");
const bgr=document.querySelector(".burger");

bgr.addEventListener("click", ()=>{
    menu.classList.toggle("title")
})