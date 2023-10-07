// function validateform(){ 
//     var tel=document.getElementById("phonenum").value;  

//     if(tel.length<10){  
//         alert("Phone number must be of atleast 10 digits!");  
//         return false;  
//     } else if(isNaN(tel)){
//         alert("Phone number should not include character!");
//         return false;
//     }
//     return true;
// }  

let buttonTop =  document.querySelector(".top-up-button")
const refreshFunction=()=>{
    if (document.documentElement.scrollTop < 50) {
        buttonTop.style.display="none";
    } else {
        buttonTop.style.display="block";
    }
  }
  refreshFunction();
  buttonTop.addEventListener("click",()=>{
    document.documentElement.scrollTop=0;
  })

  document.addEventListener("scroll",()=>{
    refreshFunction();
  })
  let menu = document.querySelector('#menu-bar');
  let navbar = document.querySelector('.navbar');
 function menu1() {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
  }