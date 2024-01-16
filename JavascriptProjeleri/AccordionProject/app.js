const mainContainers=document.querySelectorAll(".firstAccordion");


mainContainers.forEach(main=>{
  const button=main.querySelector('button');
  const minusButton=main.querySelector(".minus");
  const plusButton=main.querySelector(".plus");
  const paragraphContainer=main.querySelector(".paragraphContainer");

  // console.log(button)
  button.addEventListener("click",()=>{
    plusButton.classList.toggle("d-none");
    minusButton.classList.toggle("d-none");
    paragraphContainer.classList.toggle("d-none");
  })
})














