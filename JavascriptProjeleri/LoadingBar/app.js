const counterFirst=document.querySelector(".counterFirst");
const writeCounter=document.querySelector(".counter");
let counter=0;

const startTime=()=>{
  let timer=setInterval(() => {
    counter++;
    if(counter < 101)
    {
      writeCounter.textContent=`${counter}%`
      counterFirst.style.width=`${counter}%`
    }
  }, 30);
}

startTime();