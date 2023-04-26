const audio = new Audio("/media/img/mouse.mp3");
const contenedorOpciones = document.getElementById("contenedorOpciones");
let semaforo1 = true;
const imgMonitor = document.getElementById("imgFondoPrincipal");
const imgFondo = document.getElementById("imgFondo");

function mostrarOpciones() {
  audio.play();
  if (semaforo1 == true) {
    contenedorOpciones.style.display = "flex";
    imgFondo.style.display = "block";
    semaforo1 = false;
  } else if (semaforo1 == false) {
    contenedorOpciones.style.display = "none";
    imgFondo.style.display = "none";
    semaforo1 = true;
  }
}

imgMonitor.onclick = mostrarOpciones;
imgFondo.onclick = mostrarOpciones;

document.getElementById("contenedorBotonIR").onclick = function () {
  audio.play();
  location.href = "{% url 'ejecucionPC' %}";
};



