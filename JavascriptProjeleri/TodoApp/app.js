const addForm=document.querySelector(".add");
const ul = document.querySelector(".todos");
const filterInput=document.querySelector(".search input")


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

//Ekleme işlemi Bitti


//Silme İşlemi:

ul.addEventListener("click",e=>{
  if(e.target.classList.contains("delete"))
  {
    e.target.parentElement.remove();
  }
})

//Silme işlemi Bitti

//Filtreleme işlemi


filterInput.addEventListener("keyup",e=>{
  const filterValue=filterInput.value.trim().toLowerCase();
  console.log(filterValue)
  Array.from(ul.children).filter(item=>{
    return !item.textContent.toLowerCase().includes(filterValue)})
    .forEach(item=> item.classList.add("filter"));

    Array.from(ul.children).filter(item=>{
      return item.textContent.toLowerCase().includes(filterValue)})
      .forEach(item=> item.classList.remove("filter"));
})

//Filtreleme işlemi bitti