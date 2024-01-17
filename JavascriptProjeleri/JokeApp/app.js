const button=document.querySelector('button');
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const apiKey="S7/wVtTRl+LaPb4FszN8Kg==ET5ej67QsTEsVvaQ";
const paragraph=document.querySelector('p')
button.addEventListener("click",playJoke);


async function playJoke(){
  button.disabled=true;
  button.style.backgroundColor="red"

  const options={
    method:'GET',
    url:apiUrl,
    headers:{'X-Api-Key':apiKey},
  };

  const update="Please Wait...";

  paragraph.textContent=update;


  await fetch(apiUrl,options).then(res=>res.json()).then(res=>{
    console.log(res)
  button.disabled=false;
  button.style.backgroundColor="gainsboro"

    paragraph.textContent=res[0].joke;
  }).catch(error=>alert("Sunucu Hatasi Lütfen Yeniden Deneyiniz..."))

}
