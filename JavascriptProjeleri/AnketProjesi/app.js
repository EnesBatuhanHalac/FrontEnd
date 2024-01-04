const form = document.querySelector('form');
const answers=[form.q1,form.q2,form.q3,form.q4]
const bigScore=document.querySelector("#big-span")
const scoreContainer=document.querySelector("#big-score")
const defaultAnswers=["E","E","E","E"]
form.addEventListener("submit",e=>{
  e.preventDefault();
  let score=0;

  answers.forEach((answer,index)=>{
    if(answer.value === defaultAnswers[index])
    {
      score +=25;
    }
  })

  scoreContainer.classList.remove("display-none");

  let timeCount = 0;
  const timeCounter=setInterval(() => {
    bigScore.textContent=`${timeCount}`
    if(timeCount == score){
      clearInterval(timeCounter);
    }
    else
    {
      timeCount++;
    }
  }, 30);
})

let a =0;
const enes=setInterval(()=>{
  console.log("Enes")
a++;
if(a == 10){
  console.log("durdur")
  clearInterval(enes)
}
},200)