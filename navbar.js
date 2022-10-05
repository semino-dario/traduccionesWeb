
//BARRA DE NAVEGACIÓN//

let botonBarra = document.querySelector(".navbar-toggler")
let barraCuadro = document.querySelector("#navbarText")
let navbarBrand = document.querySelector(".navbar-brand")
let span = document.querySelector("#span")
let icon = document.querySelector("#icon")

//Cambia ícono de la barra al clickear
function cambiaBotonBarra(){
if (span.textContent == "x"){
  span.textContent = "+"
}
else {span.textContent = "x"}}

botonBarra.addEventListener("click", cambiaBotonBarra)

//Cierra Barra
function cierraBarra(){
$('.navbar-collapse').collapse('hide');
span.textContent = "+"}

//Cierra barra al clickear en sus elementos internos
$('.navbar-nav>li>a').on('click', cierraBarra);

//Cierra barra cuando se hace click fuera de ella
document.addEventListener("mouseup", function(event) {
    var obj = document.getElementById("barra");
    if (!obj.contains(event.target)) {
        cierraBarra()
      }
    }
)
