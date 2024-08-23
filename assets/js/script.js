let contacto = document.querySelector(".contacto")
let anadir =document.querySelector("#anadir")
let cambio = document.querySelector(".cambio")

contacto.onclick = function(){
    anadir.innerHTML =`<h4>Nombre: Daniel Moraga</h4><br>
                       <p>Fono:+56 91234567</p><br>
                       <p>Email:danilsgjhgshgdh@gmail.com</p><br>`                                         
}



cambio.onclick = function(){
    anadir.classList.toggle("descripcionRRSS_textos-cambios")     
                              
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
    icono[i].classList.toggle("icono") 
  }                               
}


///Cards//
let datosCards =[
  {titulo:"Barber Shop", parrafo:"https://danielmoraga.github.io/barbershop/", imagen:"./assets/img/port-1.jpg",modal:"modal1"},
  {titulo:"Revista", parrafo:"https://danielmoraga.github.io/gigeo/", imagen:"./assets/img/port-2.jpg",modal:"modal2"},
  {titulo:"Viajes Chile", parrafo:"https://danielmoraga.github.io/viajes_chile/", imagen:"./assets/img/port-3.jpg",modal:"modal3"},
  {titulo:"Emprendimiento", parrafo:"https://danielmoraga.github.io/Emprendimiento/", imagen:"./assets/img/port-4.jpg",modal:"modal4"},
  {titulo:"XDA", parrafo:"https://danielmoraga.github.io/tiendaxda/", imagen:"./assets/img/port-5.jpg",modal:"modal5"},
  {titulo:"Diario", parrafo:"https://danielmoraga.github.io/diario_online/", imagen:"./assets/img/port-6.jpg",modal:"modal6"},
]

for(i=0;i<datosCards.length;i++){
  console.log(datosCards[i].titulo)

  let card =document.querySelector(".portafolio_cards")
  let modal=document.querySelector(".modalescards")
  
  card.innerHTML += ` <div class="portafolio_card  card">
                        <img class="portafolio_card_image" src="${datosCards[i].imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${datosCards[i].titulo}</h5>
                            <button type="button" class="btn btn-primary-outline" data-bs-toggle="modal" data-bs-target="#${datosCards[i].modal}">
                                Ver trabajo
                              </button>
                    </div>
                </div>`

 modal.innerHTML += ` <div class="modal fade" id="${datosCards[i].modal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${datosCards[i].titulo}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <a href="${datosCards[i].parrafo}" target="_blank"><img class="portafolio_card_image w-100" src="${datosCards[i].imagen}" class="card-img-top" alt="..."></a>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>`
}










