
const menuBar = document.querySelector(".open-menu");

const navMenu = document.querySelector(".nav_menu");
const CloseMenu = document.querySelector(".close-menu");

const navLink = document.querySelectorAll(".nav_link");



menuBar.addEventListener("click",function (){
     navMenu.classList.add("active");
})
CloseMenu.addEventListener("click",function(){
     navMenu.classList.remove("active");
})

navLink.forEach(link => {
     link.addEventListener("click",function(){
          navMenu.classList.remove("active");
     })
})
