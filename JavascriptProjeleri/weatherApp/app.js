const apiKey="85355674141bde434865c100de3495f6";
//  const apiAdress=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
const form=document.querySelector('form');
const input=document.querySelector('input');
const iconContainer=document.querySelector(".iconContainer");
form.addEventListener("submit",getWeather);
const featuresList=document.querySelectorAll(".features");
const featuresContainer=document.querySelector(".featuresContainer");



async function getWeather(e){
  e.preventDefault();
  const cityValue=input.value.trim();
  try {
    const apiAdress=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
  const weatherValue=await fetch(apiAdress).then(res=>res.json());
      featuresContainer.classList.remove("d-none");
      iconContainer.style.color="black";
   iconContainer.innerHTML=`<img src=http://openweathermap.org/img/wn/${weatherValue.weather[0].icon}.png
   alt=${weatherValue.weather[0].description}>
   <p id="derece">
   <span>${Math.floor(weatherValue.main.temp)}</span>°C</p>
   `
   featuresList[0].innerHTML=`<p>Hissedilen:${weatherValue.main.feels_like}</p>`
   featuresList[1].innerHTML=`<p>Nem Oranı:${weatherValue.main.humidity}%</p>`
   featuresList[2].innerHTML=`<p>Rüzgar${weatherValue.wind.speed}m/s</p>`
  } catch (error) {
    featuresContainer.classList.add("d-none")
    iconContainer.textContent="Lütfen Girdiginiz Degeri kontrol ediniz.!";
    iconContainer.style.fontSize="25px";
    iconContainer.style.color="red";
  }
  


}
