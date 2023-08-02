

const Boxes = document.querySelectorAll(".box");

menuBar.addEventListener("click",()=>{
     Boxes.forEach(box => {
          box.style.zIndex = "-99";
     })
})
CloseMenu.addEventListener("click",()=>{
     setTimeout(()=>{
          Boxes.forEach(box => {
               box.style.zIndex = "0";
          })
     },300)
})