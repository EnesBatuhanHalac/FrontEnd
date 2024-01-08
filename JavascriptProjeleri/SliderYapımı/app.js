const nextButton=document.querySelector(".next");
const prevButton=document.querySelector(".prev")
const imageContainer=document.querySelector(".imageContainer");
const imgs=document.querySelectorAll("img");

let count=1;
let timeOut;

nextButton.addEventListener("click",()=>{
  clearTimeout(timeOut);
count +=1;
  moveSlider();
})

prevButton.addEventListener("click",()=>{
  clearTimeout(timeOut);
  count --;
  moveSlider();
})

function moveSlider(){
  console.log(count)
  if(count >imgs.length){
    count = 1
  }
  else if(count == 0)
  {
    count = imgs.length
  }
  imageContainer.style.transform=`translateX(-${(count - 1)*700}px)`
  timeOut=setTimeout(() => {
    count ++;
    moveSlider();
  }, 4000);
}

moveSlider();