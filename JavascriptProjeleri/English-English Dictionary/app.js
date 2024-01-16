const button=document.querySelector('button');
const explanations=document.querySelector(".explanation");
const input=document.querySelector('input');
const definition=document.querySelector("#definition");
const word=document.querySelector("#word")
const audio=document.querySelector("audio");



button.addEventListener("click",async()=>{

explanations.classList.toggle("d-none");
const value=input.value;

await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`).then(res=>res.json()).then(res=>{
  console.log(res)

  if(res.title)
  {
    word.textContent=res.message;
    definition.parentElement.classList.add("d-none")
    audio.style.visibility="hidden"
  }
  else if(res == "")
  {
    console.log("sory")
  }
  else{
    const response=res[0].meanings[0].definitions[0].definition;

    console.log(response);
    definition.textContent=response;
    word.textContent=res[0].word;
    
    const voice=res[0].phonetics[0].audio;
    
    audio.setAttribute("src",voice);
  }


})

})