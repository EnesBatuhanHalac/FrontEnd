const addForm=document.querySelector(".add");
const ul = document.querySelector(".todos");




//Ekleme işlemi
const addToUl=addValue=>{
  const html=`
  <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${addValue}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
  `;
ul.innerHTML += html
}


//Ekleme işlemi
addForm.addEventListener("submit",e=>{
  e.preventDefault();
  const addValue=addForm.add.value.trim();
    // console.log(addValue)
  if(addValue.length)
  {
    addToUl(addValue);
    addForm.reset();
  }
});

//Silme İşlemi:

ul.addEventListener("click",e=>{
  if(e.target.classList.contains("delete"))
  {
    e.target.parentElement.remove();
  }
})
