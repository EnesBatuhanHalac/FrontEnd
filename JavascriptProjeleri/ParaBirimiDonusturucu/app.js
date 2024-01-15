const firstSelect=document.querySelector("#firstSelect");
const secondSelect=document.querySelector("#secondSelect");
const valueSpan=document.querySelector("#valueSpan");
const valueInput=document.querySelector("#valueInput");
const exchangerate=document.querySelector(".exchangeRate");
startChange();

function startChange(){
  fetch(`https://v6.exchangerate-api.com/v6/4f14efd6a27dd3e5bf3f746c/latest/${firstSelect.value}`).then(res=>res.json()).then(res=>{
    const value=res.conversion_rates[secondSelect.value]
    console.log(value)
    valueSpan.textContent=(valueInput.value*value).toFixed(2)
  exchangerate.textContent=`1 ${firstSelect.value}=
  ${value.toFixed(2)} ${(secondSelect.value)}
  `
  })
  
}


firstSelect.addEventListener("change",startChange);
secondSelect.addEventListener("change",startChange);
valueInput.addEventListener("change",startChange);
