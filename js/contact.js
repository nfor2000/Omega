const preloader = document.getElementById("preloader");
const loader = document.getElementById("loader");
const error = document.getElementById("error");
var loaded = true;
function showError() {
     preloader.style.display = "none";
     error.innerHTML =
       "Error: Poor Connection. Please check your internet connection and try again.";
   }

   setTimeout(showError, 10000);

   window.addEventListener("load", function () {
          preloader.style.display = "none";
   });
