const preloader = document.getElementById("preloader");
const loader = document.getElementById("loader");
const error = document.getElementById("error");

function showError() {
       preloader.style.display = "none";
       error.innerHTML =
              "Error: Poor Connection. Please check your internet connection and try again.";
       error.style.display = "block";
       if(document.readyState == 'complete'){
              error.style.display = "none";
       }
}

setTimeout(showError, 10000);

window.addEventListener("load", function () {
       preloader.style.display = "none";
});

const map = document.querySelector(".map_container");

menuBar.addEventListener("click",()=>{
          map.style.zIndex = "-99";
})
CloseMenu.addEventListener("click",()=>{
     setTimeout(()=>{
          Boxes.forEach(box => {
              map.style.zIndex = "0";
          })
     },300)
})
