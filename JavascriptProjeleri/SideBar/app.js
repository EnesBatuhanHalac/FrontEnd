const openMenuButton=document.querySelector(".fa-bars");
const sideBar=document.querySelector(".sideBarContainer");
const closeButton=document.querySelector(".fa-xmark")


openMenuButton.addEventListener("click",()=>{
  sideBar.classList.toggle("openMenu")
})

closeButton.addEventListener("click",()=>{
  sideBar.classList.remove("openMenu");
})