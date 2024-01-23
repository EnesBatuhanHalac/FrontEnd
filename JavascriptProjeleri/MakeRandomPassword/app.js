const button=document.querySelector('button');
const input=document.querySelector('input');
const passwordCopy=document.querySelector(".copy");
const alertContainer=document.querySelector(".alertContainer");

button.addEventListener("click",()=>{//Butona tiklandigi zaman şifre olusturuluyor
  const passwordLength=76;
  const passwordCharacters="qwertyuıopğüi,şlkjhgfdsazxcvbnmöç.1234567890QWERTYUIOPĞÜİŞLKJHGFDSAZXCVBNMÖÇ";
  let password="";
  for(let i = 1; i<=8; i++)
  {
  const mixNumber=Math.floor(Math.random()*passwordLength);
     password += passwordCharacters[mixNumber]
  }
  input.value = password;
})

passwordCopy.addEventListener("click",()=>copyText());

function copyText(){//Kopyalama işlemi yapilan alan
  if(input.value)
  {
    input.select();
    navigator.clipboard.writeText(input.value);
    alertContainer.style.translate="-400px";
    setTimeout(() => {
    alertContainer.style.translate="400px"
    }, 3000);
  }
}

