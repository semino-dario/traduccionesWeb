//NOTAS AL PIE//

let entrada = document.querySelectorAll(".entrada");
let nota = document.querySelectorAll(".nota");
let botonCierraNota = document.querySelectorAll(".cierra-nota");
let numeroNota

function cierraNota(){nota.forEach((item) => {
  item.style.display = "none"
});
}


entrada.forEach((item) => {item.addEventListener("click", function(){
  numeroNota = this.getAttribute("id");
  nota[numeroNota].style.display = "inline"
}
)});

botonCierraNota.forEach((item) => {item.addEventListener("click", cierraNota)

});
