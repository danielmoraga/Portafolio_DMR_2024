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

let formulario = document.querySelector("#form")


formulario.addEventListener("submit",function(event){
    event.preventDefault()

    let name =document.getElementById("name").value
    let textoarea = document.getElementById("textoarea").value
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value


    if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
        alert("debes escribir en los campos")
         return false;
        }

    if( textoarea == null || textoarea.length == 0 || /^\s+$/.test(textoarea) ) {
            alert("debes escribir tu mensaje")
             return false;
            }    
   

  let mensaje =document.querySelector(".modal-body")
  
  mensaje.innerHTML = `<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel2">Sus datos son</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h4>Su nombre ${name}</h4> <p>su email es ${email}</p> <p>su telefono es ${phone}</p> <p>Su mensaje es ${textoarea}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>`

    //let mensaje = `Su nombre ${name}, su email es ${email}, su telefono es ${phone} y ha escrito ${textoarea}`

   // alert(mensaje)
})

let btn = document.getElementById("boton-icono")
let icono =document.querySelectorAll(".cajaicono")

btn.onclick = function(){
  for(i=0;i<icono.length;i++){
    icono[i].className= "mododetrabajo_caja_icono-secondary bi bi-book-half text-center icono" 
  }                               
}











