let btnMnue =document.querySelector(".hamburger")
let UlNav =document.querySelector("#ul-nav")

btnMnue.addEventListener("click",()=>
{
    UlNav.classList.toggle("nav-mobile")
    
}
)