const accessKey="Jm9QDGXF5iuHyySqCsccgP9zjegtXpomezQot154Sro";
const countImage=30;
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${countImage}`;
let imagesList=[];
const imageContanier=document.getElementById("imageContainer");


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
  imagesList.forEach(img=>{
    const a=document.createElement('a');
     a.setAttribute("href",img.urls.regular)
     const picture=document.createElement('img');
     picture.setAttribute("src",img.urls.regular)
     picture.setAttribute("alt",img.alt_description)
     a.appendChild(picture);
     imageContanier.appendChild(a);
  })
}