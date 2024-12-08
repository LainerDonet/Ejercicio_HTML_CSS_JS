const letras =  document.querySelectorAll(".letras span");

letras.forEach((letra) => {
    
    letra.addEventListener("click",(e)=>{
        e.target.classList.add("active");
    })
});