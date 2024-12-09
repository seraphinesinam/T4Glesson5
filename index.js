//Event AND Listening
function ChangeButtonStyle(){
    button.style.background = "green";
    button.style.color = "white";
}
// let button = document.querySelector("button");
// button.addEventListener("click",ChangeButtonStyle);
  
let button=document.querySelector("button");

function openImage(){
let image = document.querySelector(".images")
image.style.display="block"
let btn =document.querySelector(".close")
btn.style.display ="block"

}
button.addEventListener("click", openImage)
function closeImage(){
    image.style.display="block"
    let btn=document.querySelector(".close")

}btn.style.display="block"