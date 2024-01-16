const inputs=document.querySelectorAll('input');
const kelvin=document.querySelector("#kelvin");
const celcius=document.querySelector("#celcius");
const fahrenheit=document.querySelector("#fahrenheit");

inputs.forEach(i=>i.addEventListener("change",play))

function play(e){
  const currentValue=Number(e.target.value);
switch(e.target.id)
{
  case 'celcius':
    kelvin.value=(currentValue + 273.32).toFixed(2);
    fahrenheit.value = (currentValue * 1.8 +32).toFixed(2)
  break;


  case 'fahrenheit':
    celcius.value=((currentValue - 32)/1.8).toFixed(2);
    kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2)
    break;
    
    
  case 'kelvin':
    celcius.value=(currentValue - 273.32).toFixed(2);
    fahrenheit.value = ((currentValue - 273.32) * 1.8 +32).toFixed(2)
    break;
}
}