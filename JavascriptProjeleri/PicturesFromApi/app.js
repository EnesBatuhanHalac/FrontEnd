const accessKey="b1UX1o-OMtL1CERrgsut3MIFb2FCyOiqExSP32z-GdM";
const countImage=30;
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${countImage}`;
let imagesList=[];
const imageContanier=document.getElementById("imageContainer");
const loader=document.querySelector('.loadingContainer');
let count =0;
let totalImages=0;
async function getImages(){
  try {
    const response = await fetch(apiUrl);
    imagesList= await response.json();
    // console.log(imagesList)
      addImages();
  } catch (error) {
    
  }
}

getImages();

function addImages(){
  totalImages=0;
  totalImages = imagesList.length;
  imagesList.forEach(img=>{
    const a=document.createElement('a');
     a.setAttribute("href",img.urls.regular)
     const picture=document.createElement('img');
     picture.setAttribute("src",img.urls.regular)
     picture.setAttribute("alt",img.alt_description)
     a.appendChild(picture);
    picture.addEventListener("load",()=>{
      count++;
      if(count == totalImages){
        loader.hidden=true;
      }
    })
     imageContanier.appendChild(a);
  })
}



window.addEventListener("scroll",()=>{
  if(window.innerHeight + scrollY >=document.body.offsetHeight - 1000){
    getImages();
  }
})

