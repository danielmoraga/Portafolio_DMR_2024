let contacto = document.querySelector(".contacto")
let anadir =document.querySelector("#anadir")
let cambio = document.querySelector(".cambio")

contacto.onclick = function(){
    anadir.innerHTML =`<h4>Nombre: Daniel Moraga</h4><br>
                       <p>Fono:+56 91234567</p><br>
                       <p>Email:danilsgjhgshgdh@gmail.com</p><br>`                                         
}

cambio.onclick = function(){
    anadir.style.cssText=  "color:blue; font-size:1rem; line-height:1rem; font-weight:200; margin:2rem 0"                                     
}




///formulario//












