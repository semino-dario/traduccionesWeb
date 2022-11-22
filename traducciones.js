//////PRELODER/////////

let preloder = document.querySelector("#preloder");

window.addEventListener("load", function() {
  preloder.style.display = "none"
})


/////////// BOTONES DE IDIOMAS DESACTIVADOS//////////////

let botonFrances = document.querySelector(".boton-frances");
let botonCastellano1 = document.querySelector(".castellano1");
let botonIngles = document.querySelector(".boton-ingles");
let botonCastellano2 = document.querySelector(".castellano2");

botonIngles.disabled = true;
botonCastellano1.disabled = true;
botonCastellano2.disabled = true;
botonFrances.disabled= true;

///////EFECTOS DE FADE IN E INGRESOS DE ELMENTOS A MEDIDA QUE SE SCROLLEA////////

let divIdiomas = document.querySelector(".divIdiomas")
let animado = document.querySelectorAll(".animado")
let flaubert = document.querySelector(".flaubert")
let cotizacion = document.querySelector(".cardcotiza")
let contacto = document.querySelector(".cardContacto")
let imagenPortada = document.querySelector(".imagen-portada")

function mostrarScroll (){
                          let scrollTop = document.documentElement.scrollTop;
                          let alturaFlaubert = flaubert.offsetTop;
                          let alturaCotizacion = cotizacion.offsetTop;
                          let alturaContacto = contacto.offsetTop;
                          let alturaBotonFrances = botonFrances.offsetTop;
                            for (let i=0; i<animado.length; i++)
                            { let alturaAnimado = animado[i].offsetTop;
                              if (alturaAnimado - 630 < scrollTop)
                                {animado[i].style.opacity = 1;
                                      animado[i].classList.add("mostrarArriba")
                              }

                              if (alturaFlaubert - 500 < scrollTop)
                              {
                              flaubert.style.opacity = 1;

                              }
                              if (alturaCotizacion -700 < scrollTop)
                              {
                                cotizacion.style.opacity = 1;
                                cotizacion.classList.add("mostrarArriba")
                              }
                              if (alturaContacto - 700 < scrollTop)
                              { contacto.style.opacity = 1;
                                contacto.classList.add("mostrarIzquierda")
                              }
                              if (alturaAnimado - 1800 < scrollTop){
                                divIdiomas.style.opacity = 1;
                              }
                            }
                          }

window.addEventListener("scroll", mostrarScroll)

// TRANSICIÓN DE IMAGEN DE PORTADA//
/*function aparecer() {imagenPortada.style.opacity = 1
}*/

//aparecer()

// DETIENE EFECTO BUZZ EN ICONO DE WHATSAPP
let botonWasap = document.querySelector(".linkWasap")
function detenerWasap(){botonWasap.classList.remove("hvr-buzz")}

setTimeout(detenerWasap, 1500)
