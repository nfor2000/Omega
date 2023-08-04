
const slideshow_container = document.querySelector(".slideshow_container");

menuBar.addEventListener("click",()=>{
          slideshow_container.style.zIndex = "-99";
})
CloseMenu.addEventListener("click",()=>{
     setTimeout(()=>{
              slideshow_container.style.zIndex = "0";
     },300)
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


