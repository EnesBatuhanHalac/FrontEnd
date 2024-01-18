const button=document.querySelector('button');
const videoContainer=document.querySelector('.videoContainer');
const video=document.querySelector('video');
const closeButton=document.querySelector('.fa-solid');

button.addEventListener("click",()=>{
  video.currentTime=0;
  videoContainer.classList.remove("active");
  video.play();
})

closeButton.addEventListener("click",()=>{
videoContainer.classList.add("active");
video.pause();
})