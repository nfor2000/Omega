
const menuBar = document.querySelector(".open-menu");

const navMenu = document.querySelector(".nav_menu");
const CloseMenu = document.querySelector(".close-menu");

const navLink = document.querySelectorAll(".nav_link");

var slideIndex = 0;


menuBar.addEventListener("click", function () {
     navMenu.classList.add("active");
     document.querySelector(".slideshow_container").style.zIndex = "-2"
})
CloseMenu.addEventListener("click", function () {
     navMenu.classList.remove("active");
     setTimeout(function(){
          document.querySelector(".slideshow_container").style.zIndex = "0"
     },300)
})

navLink.forEach(link => {
     link.addEventListener("click", function () {
          navMenu.classList.remove("active");
     })
})

slideShow()
function slideShow(){
     const slides = document.getElementsByClassName("slide_show");

     for(var i = 0; i < slides.length; i ++)
     {
          slides[i].style.display = "none";
     }

     slideIndex ++;
     if(slideIndex > slides.length){
          slideIndex = 1;
     }
     slides[slideIndex-1].style.display = "flex";

     setTimeout(slideShow,3000);
}

