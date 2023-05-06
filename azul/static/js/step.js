const audio = new Audio("/media/img/mouse.mp3");
window.addEventListener("resize", function (event) {
  if (window.innerWidth <= 1366 && window.innerHeight <= 768) {
    document.body.style.zoom = "90%";
  } else if (window.innerWidth <= 1920 && window.innerHeight <= 1080) {
    document.body.style.zoom = "130%";
  }
});
window.onload = function () {
  // Comprobamos si la resolución es de 1920 x 1080
  if (screen.width === 1920 && screen.height === 1080) {
    document.body.style.zoom = "130%"; // Establecemos el zoom al 150%
  } else if (screen.width === 1366 && screen.height === 768) {
    document.body.style.zoom = "90%"; // Establecemos el zoom al 150%
  }
};

const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const main3 = document.getElementById("main3");
const main4 = document.getElementById("main4");
const main5 = document.getElementById("main5");
const img9 = document.getElementById("img-9");
const papelera = document.getElementById("papelera");
const img10 = document.getElementById("img-10");
const img11 = document.getElementById("img-11");
const c1Img11 = document.getElementById("cont2-img-11");
const c2Img11 = document.getElementById("cont3-img-11");
const escudo = document.getElementById("escudo");
const texto = document.getElementById("texto");
const contenedorEscudo2 = document.getElementById("contenedor-escudo2");
const contenedortexto = document.getElementById("contenedor-texto");
const barraEscudo = document.getElementById("barra-escudo");
const barraTexto = document.getElementById("barra-texto");
const contenedorImg6 = document.getElementById("contenedor-img-6");
const notificaciones = document.getElementById("notificaciones");
const notificaciones2 = document.getElementById("notificaciones2");
const contenedor2Img10 = document.getElementById("contenedor2-img-10");
const contenedor3Img10 = document.getElementById("contenedor3-img-10");
const salirImg10 = document.getElementById("salir-img-10");
const containerEncriptados = document.getElementById("containerEncriptados");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const contenedorEmsisoft = document.getElementById("contenedorEmsisoft");
let bandera = true;
let bandera2 = true;
let bandera3 = true;
let bandera4 = true;
let bandera5 = false;
let bandera6 = false;
let bandera7 = true;
let bandera8 = true;
let bandera9 = true;
let bandera10 = true;

const showImage1 = () => {
  // main1.style.display = "none";
  main2.style.display = "block";
  setTimeout(() => {
    main2.style.display = "none";
    main3.style.display = "block";
  }, 4000);
  // 4000

  setTimeout(() => {
    main3.style.display = "none";
    main4.style.display = "block";
  }, 7000);
  // 7000
};

showImage1();

const showImage2 = () => {
  main2.style.display = "none";
  main3.style.display = "block";
};
const showImage3 = () => {
  main3.style.display = "none";
  main4.style.display = "block";
};
function actualizarHora() {
  const fechaActual = new Date();
  document.getElementById("fecha").innerHTML = fechaActual.toLocaleString();
}

actualizarHora();
setInterval(actualizarHora, 1000);

function actualizarHora2() {
  const fechaActual2 = new Date();
  document.getElementById("fecha2").innerHTML = fechaActual2.toLocaleString();
}

actualizarHora2();
setInterval(actualizarHora2, 1000);

img9.onmouseover = function () {
  img9.classList.remove("img-9");
  img9.classList.add("img-9-cambiado");
};

img9.onmouseout = function () {
  img9.classList.remove("img-9-cambiado");
  img9.classList.add("img-9");
};

papelera.onmouseover = function () {
  papelera.classList.remove("papelera");
  papelera.classList.add("papelera-cambiado");
};

papelera.onmouseout = function () {
  papelera.classList.remove("papelera-cambiado");
  papelera.classList.add("papelera");
};
// Mostrar el menu de inicio de main4
const showImage5 = () => {
  audio.play();
  if (bandera2 == true) {
    img11.style.display = "block";
    c1Img11.classList.add("cont2-img-11");
    c2Img11.classList.add("cont3-img-11");
    bandera2 = false;
  } else if (bandera2 == false) {
    img11.style.display = "none";
    c1Img11.classList.remove("cont2-img-11");
    c2Img11.classList.remove("cont3-img-11");
    bandera2 = true;
  }
};
// Reinicia Máquina main 5
const showImage7 = () => {
  audio.play();
  main4.style.display = "none";
  main2.style.display = "flex";
  setTimeout(() => {
    main2.style.display = "none";
    main3.style.display = "block";
  }, 4000);
  setTimeout(() => {
    main3.style.display = "none";
    main4.style.display = "block";
  }, 7000);
  img11.style.display = "none";
  bandera2 = true;
};
escudo.onmouseover = function () {
  escudo.classList.remove("escudo");
  escudo.classList.add("escudo-cambiado");
};
escudo.onmouseout = function () {
  escudo.classList.remove("escudo-cambiado");
  escudo.classList.add("escudo");
};
texto.onmouseover = function () {
  texto.classList.remove("texto");
  texto.classList.add("texto-cambiado");
};
texto.onmouseout = function () {
  texto.classList.remove("texto-cambiado");
  texto.classList.add("texto");
};
// Mostra el escudo del cesmag
const showImage8 = () => {
  audio.play();
  if (bandera3 == true) {
    contenedorEscudo2.style.display = "block";
    bandera3 = false;
    if (bandera5 == false) {
      bandera5 = true;
      barraCambioE();
    }
  } else if (bandera3 == false) {
    contenedorEscudo2.style.display = "none";
    bandera3 = true;
  }
};
// oculta el escudo
const showImage9 = () => {
  audio.play();
  contenedorEscudo2.style.display = "none";
  barraEscudo.style.display = "none";
  bandera3 = true;
  bandera5 = false;
};
// quita el estudo barra
const barraCambioE = () => {
  if (bandera6 == true) {
    barraEscudo.style.marginLeft = "120px";
    barraEscudo.style.display = "block";
    if (parseInt(barraTexto.style.marginLeft) === 120) {
      barraEscudo.style.marginLeft = "60px";
      barraEscudo.style.display = "block";
    }
  } else if (bandera6 == false) {
    barraEscudo.style.marginLeft = "60px";
    barraEscudo.style.display = "block";
  }
};
// Mostra el text del escritorio
const showImage10 = () => {
  audio.play();
  if (bandera4 == true) {
    contenedortexto.style.display = "block";
    bandera4 = false;
    if (bandera6 == false) {
      bandera6 = true;
      barraCambioT();
    }
  } else if (bandera4 == false) {
    contenedortexto.style.display = "none";
    bandera4 = true;
  }
};
// ocultar el text
const showImage11 = () => {
  audio.play();
  contenedortexto.style.display = "none";
  barraTexto.style.display = "none";
  bandera4 = true;
  bandera6 = false;
};
// quita texto de la barra
const barraCambioT = () => {
  if (bandera5 == true) {
    barraTexto.style.marginLeft = "120px";
    barraTexto.style.display = "block";
    if (parseInt(barraEscudo.style.marginLeft) === 120) {
      barraTexto.style.marginLeft = "60px";
      barraTexto.style.display = "block";
    }
  } else if (bandera5 == false) {
    barraTexto.style.marginLeft = "60px";
    barraTexto.style.display = "block";
  }
};
barraEscudo.onmouseover = function () {
  barraEscudo.classList.remove("barra-escudo");
  barraEscudo.classList.add("barra-escudo-cambiado");
};
barraEscudo.onmouseout = function () {
  barraEscudo.classList.remove("barra-escudo-cambiado");
  barraEscudo.classList.add("barra-escudo");
};
barraTexto.onmouseover = function () {
  barraTexto.classList.remove("barra-texto");
  barraTexto.classList.add("barra-texto-cambiado");
};
barraTexto.onmouseout = function () {
  barraTexto.classList.remove("barra-texto-cambiado");
  barraTexto.classList.add("barra-texto");
};
contenedorImg6.onmouseover = function () {
  contenedorImg6.classList.remove("contenedor-img-6");
  contenedorImg6.classList.add("contenedor-img-6C");
};
contenedorImg6.onmouseout = function () {
  contenedorImg6.classList.remove("contenedor-img-6C");
  contenedorImg6.classList.add("contenedor-img-6");
};
// Mostrar notificaciones
const showImage12 = () => {
  audio.play();
  if (bandera7 == true) {
    notificaciones.style.display = "block";
    bandera7 = false;
  } else if (bandera7 == false) {
    notificaciones.style.display = "none";
    bandera7 = true;
  }
};
const showImage16 = () => {
  audio.play();
  if (bandera8 == true) {
    notificaciones2.style.display = "block";
    bandera8 = false;
  } else if (bandera8 == false) {
    notificaciones2.style.display = "none";
    bandera8 = true;
  }
};
let bandera12 = true;
const contTarea10 = document.getElementById("contTarea10");
const contTareaFlecha10 = document.getElementById("contTareaFlecha10");
const contTarea6 = document.getElementById("contTarea6");
const contTareaFlecha6 = document.getElementById("contTareaFlecha6");
const img15 = document.getElementById("img15");
const cifradoDecryptJigsaw = document.getElementById("cifradoDecryptJigsaw");
const contTarea7 = document.getElementById("contTarea7");
const contTarea9 = document.getElementById("contTarea9");
const contenedorVideo1 = document.getElementById("contenedorVideo1");
const miVideo1 = document.getElementById("miVideo1");
const cerrarVideo1 = document.getElementById("cerrarVideo1");
const contenedorVideo = document.getElementById("contenedorVideo2");
const miVideo2 = document.getElementById("miVideo2");
const cerrarButton = document.getElementById("cerrardiv");
const contenedorVideo3 = document.getElementById("contenedorVideo3");
const miVideo3 = document.getElementById("miVideo3");
const cerrarVideo3 = document.getElementById("cerrarVideo3");
const contenedorVideo4 = document.getElementById("contenedorVideo4");
const miVideo4 = document.getElementById("miVideo4");
const cerrarVideo4 = document.getElementById("cerrarVideo4");
const contenedorVideo5 = document.getElementById("contenedorVideo5");
const miVideo5 = document.getElementById("miVideo5");
const cerrarVideo5 = document.getElementById("cerrarVideo5");
const contenedorVideo6 = document.getElementById("contenedorVideo6");
const miVideo6 = document.getElementById("miVideo6");
const cerrarVideo6 = document.getElementById("cerrarVideo6");

let arrayVideos = [
  "https://www.youtube.com/embed/cBFrohg8FOE?autoplay=1",
  "https://www.youtube.com/embed/60uu97eaXFQ?autoplay=1",
  "https://www.youtube.com/embed/wWd0T_P4KG4?autoplay=1",
  "https://www.youtube.com/embed/enHkY_kME0M?autoplay=1",
  "https://www.youtube.com/embed/Mo7JouELCvk?autoplay=1",
  "https://www.youtube.com/embed/J___zKRv33o?autoplay=1"
];

function cerrarVideos(miVideo, contVideo, cerrarVideo) {
  miVideo.src = "";
  contVideo.style.display = "none";
  cerrarVideo.style.display = "none";
}

function reproducirVideos(miVideo, urlVideo, contVideo, cerrarVideo) {
  miVideo.src = urlVideo;
  contVideo.style.display = "block";
  setTimeout(() => {
    cerrarVideo.style.display = "block";
  }, 1000);
}

function cerrarTareas (tarea, flecha) {
  tarea.style.display = "none"
  flecha.style.display = "none"
}
function mostrarTareas (tarea, flecha) {
  tarea.style.display = "flex"
  flecha.style.display = "flex"
}

cerrarButton.onclick = function () {
  audio.play();
  cerrarVideos(miVideo2, contenedorVideo, cerrarButton);
}
cerrarVideo1.onclick = function () {
  audio.play();
  cerrarVideos(miVideo1, contenedorVideo1, cerrarVideo1);
  mostrarTareas(contTarea10, contTareaFlecha10);
}
cerrarVideo3.onclick = function () {
  audio.play();
  cerrarVideos(miVideo3, contenedorVideo3, cerrarVideo3);
  cerrarTareas(contTarea10, contTareaFlecha10);
  // Video 4
  reproducirVideos(miVideo4, arrayVideos[3], contenedorVideo4, cerrarVideo4);
}
cerrarVideo4.onclick = function () {
  cerrarVideos(miVideo4, contenedorVideo4, cerrarVideo4);
  mostrarTareas(img15, cifradoDecryptJigsaw);
  mostrarTareas(contTarea6, contTareaFlecha6);
}
cerrarVideo5.onclick = function () {
  cerrarVideos(miVideo5, contenedorVideo5, cerrarVideo5);
}
cerrarVideo6.onclick = function () {
  cerrarVideos(miVideo6, contenedorVideo6, cerrarVideo6);
}

document.getElementById("tarea10Boton").onclick = function () {
  audio.play();
  cerrarTareas(contTarea10, contTareaFlecha10);
}
document.getElementById("tarea6Boton") .onclick = function () {
  audio.play();
  cerrarTareas(contTarea6, contTareaFlecha6);
}
document.getElementById("tarea7Boton").onclick = function () {
  audio.play();
  contTarea7.style.display = "none";
}
document.getElementById("tarea9Boton").onclick = function () {
  audio.play();
  contTarea9.style.display = "none";
}
document.getElementById("tarea8Boton").onclick = function () {
  audio.play();
  document.getElementById("contTarea8").style.display = "none";
}

const showImage17 = () => {
  if (bandera12 == true){
    audio.play();
    reproducirVideos(miVideo3, arrayVideos[2], contenedorVideo3, cerrarVideo3);
  }
  bandera12 = false;
};

let semaforo4 = true;
const showImage4 = () => {
  audio.play();
  if (semaforo4 == true) {
    reproducirVideos(miVideo2, arrayVideos[0], contenedorVideo, cerrarButton);
    semaforo4 = false;
  }
  if (bandera == true) {
    img10.style.display = "block";
    contenedor2Img10.classList.add("contenedor2-img-10");
    contenedor3Img10.classList.add("contenedor3-img-10");
    salirImg10.classList.add("salir-img-10");
    bandera = false;
  } else if (bandera == false) {
    img10.style.display = "none";
    contenedor2Img10.classList.remove("contenedor2-img-10");
    contenedor3Img10.classList.remove("contenedor3-img-10");
    salirImg10.classList.remove("salir-img-10");
    bandera = true;
  }
};

// Letra que escribe en el jigsaw
let myString =
  "Los archivos de tu ordenador han sido encriptados. Tus fotos, vídeos, documentos, etc.... Pero, ¡no te preocupes! No los he borrado, todavía.Usted tiene 24 horas para pagar 150 USD en Bitcoins para obtener la clave de descifrado. Cada hora los archivos serán borrados. Aumentando en cantidad cada vez. Después de 72 horas todos los que queden serán borrados. Si no tienes bitcoins busca en Google la web localbitcoins.Compra 150 dólares americanos en Bitcoins o 4 BTC. El sistema aceptará el envío a la dirección de Bitcoins especificada.A los dos minutos de recibir el pago su ordenador recibirá el descifrado. Intente algo raro y el ordenador tiene varias medidas de seguridad para borrar su información.Tan pronto como se reciba el pago los archivos cifrados volverán a la normalidad.Gracias";
let myArray = myString.split("");
let loopTimer;

function frameLooper() {
  if (myArray.length > 0) {
    document.getElementById("letraSaw").innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout("frameLooper()", 80);
}
// Este es el ejecutable del jigsaw

const showImage13 = () => {
  audio.play();
  reproducirVideos(miVideo1, arrayVideos[1], contenedorVideo1, cerrarVideo1);
  let countdown = 60 * 60 * 1000; // 60 minutes
  let timerId = setInterval(function () {
    countdown -= 1000;
    let min = Math.floor(countdown / (60 * 1000));
    let sec = Math.floor((countdown - min * 60 * 1000) / 1000);
    document.getElementById("timer").innerHTML = min + ":" + sec + "";
    if (countdown <= 0) {
      clearInterval(timerId);
      alert("Time is up!");
    }
  }, 1000);

  frameLooper();
  //mostra el main4
  main4.style.display = "none";
  main5.style.display = "block";
};
const showImage14 = () => {
  audio.play();
  img10.style.display = "none";
  bandera = true;
};
const showImage15 = () => {
  audio.play();
  img10.style.display = "none";
  bandera = true;
};
const showImage18 = () => {
  audio.play();
  containerEncriptados.style.display = "flex";
};
const showImage19 = () => {
  audio.play();
  containerEncriptados.style.display = "none";
};
// Esto muestra cuando se le da click a la herramienta de des

let bandera13 = true;

const showImage20 = () => {
  audio.play();
  contenedorEmsisoft.style.display = "flex";
  if(bandera13 == true){  
    reproducirVideos(miVideo5, arrayVideos[4], contenedorVideo5, cerrarVideo5);
  }
  bandera13 = false;
};
boton5.onmouseover = function () {
  boton5.classList.remove("boton5");
  boton5.classList.add("boton5Cambio");
};
boton5.onmouseout = function () {
  boton5.classList.remove("boton5Cambio");
  boton5.classList.add("boton5");
};
boton6.onmouseover = function () {
  boton6.classList.remove("boton6");
  boton6.classList.add("boton6Cambio");
};
boton6.onmouseout = function () {
  boton6.classList.remove("boton6Cambio");
  boton6.classList.add("boton6");
};
boton7.onmouseover = function () {
  boton7.classList.remove("boton7");
  boton7.classList.add("boton7Cambio");
};
boton7.onmouseout = function () {
  boton7.classList.remove("boton7Cambio");
  boton7.classList.add("boton7");
};
const contenedorBoton1 = document.getElementById("contenedorEmsisoft7");
const contenedorBoton2 = document.getElementById("contenedorEmsisoft73");
const contenedorBoton3 = document.getElementById("contenedorEmsisoft72");
const contenedorBoton4 = document.getElementById("contenedorEmsisoft71");
let bandera11 = true;

const BotonDecryptor = () => {
  audio.play();
  boton5.style.display = "block";
  boton6.style.display = "block";
  boton7.style.display = "block";
  boton1.style.backgroundColor = "#43484e";
  boton2.style.backgroundColor = "#6c757d";
  boton3.style.backgroundColor = "#6c757d";
  boton4.style.backgroundColor = "#6c757d";
  contenedorBoton1.style.display = "block";
  contenedorBoton2.style.display = "none";
  contenedorBoton3.style.display = "none";
  contenedorBoton4.style.display = "none";
};

const BotonResults = () => {
  audio.play();
  boton5.style.display = "none";
  boton6.style.display = "none";
  boton7.style.display = "none";
  boton1.style.backgroundColor = "#6c757d";
  boton2.style.backgroundColor = "#43484e";
  boton3.style.backgroundColor = "#6c757d";
  boton4.style.backgroundColor = "#6c757d";
  contenedorBoton1.style.display = "none";
  contenedorBoton2.style.display = "block";
  contenedorBoton3.style.display = "none";
  contenedorBoton4.style.display = "none";
};
const BotonOptiones = () => {
  audio.play();
  boton5.style.display = "none";
  boton6.style.display = "none";
  boton7.style.display = "none";
  boton1.style.backgroundColor = "#6c757d";
  boton2.style.backgroundColor = "#6c757d";
  boton3.style.backgroundColor = "#43484e";
  boton4.style.backgroundColor = "#6c757d";
  contenedorBoton1.style.display = "none";
  contenedorBoton2.style.display = "none";
  contenedorBoton3.style.display = "block";
  contenedorBoton4.style.display = "none";
};
const BotonAbout = () => {
  audio.play();
  boton5.style.display = "none";
  boton6.style.display = "none";
  boton7.style.display = "none";
  boton1.style.backgroundColor = "#6c757d";
  boton2.style.backgroundColor = "#6c757d";
  boton3.style.backgroundColor = "#6c757d";
  boton4.style.backgroundColor = "#43484e";
  contenedorBoton1.style.display = "none";
  contenedorBoton2.style.display = "none";
  contenedorBoton3.style.display = "none";
  contenedorBoton4.style.display = "block";
};

const contenedorImagen = document.getElementById("contenedorImagen");
const contenedorImagen2 = document.getElementById("contenedorImagen2");
const contenedorImagen3 = document.getElementById("contenedorImagen3");
const contenedorBuscar1 = document.getElementById("contenedorBuscar1");
let semaforo1 = true;
let semaforo2 = true;

const botonAdd = () => {
  audio.play();
  contenedorBuscar1.style.display = "block";
};

const botonCancel = () => {
  audio.play();
  contenedorBuscar1.style.display = "none";
  div.style = "display: none";
  div2.style = "display: none";
  div3.style = "display: none";
};

const botonFlecha = () => {
  audio.play();
  if (semaforo1 == true) {
    contenedorImagen.style.display = "flex";
    semaforo1 = false;
  } else if (semaforo1 == false) {
    contenedorImagen.style.display = "none";
    contenedorImagen2.style.display = "none";
    contenedorImagen3.style.display = "none";
    semaforo1 = true;
  }
};

const escribeDesktop = document.getElementById("escribeDesktop");
const div = document.createElement("div");
div.textContent = "C:/Desktop";
const div2 = div.cloneNode();
div2.textContent = "C:/Desktop/Cesmag.png.fun";
const div3 = div.cloneNode();
div3.textContent = "C:/Desktop/texto.txt.fun";
const div4 = div.cloneNode();
div4.textContent = "Starting ...";
const div5 = div.cloneNode();
div5.textContent = "File: C:/Desktop/UniCesmag.png.fun";
const div6 = div.cloneNode();
div6.textContent = "Decrypted: C:/Desktop/UniCesmag.png";
const div7 = div.cloneNode();
div7.textContent = "File: C:/Desktop/Texto.txt.fun";
const div8 = div.cloneNode();
div8.textContent = "File: C:/Desktop/desktop.ini";
const div9 = div.cloneNode();
div9.textContent = "Error: Length of the data to decrypt is invalid";
const espaciado = div.cloneNode();
espaciado.className = "espaciado";
const espaciado2 = div.cloneNode();
espaciado2.className = "espaciado";

const botonDesktop = () => {
  audio.play();
  escribeDesktop.appendChild(div);
};

const botonDesktop2 = () => {
  audio.play();
  if (semaforo2 == true) {
    contenedorImagen2.style.display = "flex";
    contenedorImagen3.style.display = "flex";
    semaforo2 = false;
  } else if (semaforo2 == false) {
    contenedorImagen2.style.display = "none";
    contenedorImagen3.style.display = "none";
    semaforo2 = true;
  }
};

const botonCesmag = () => {
  audio.play();
  escribeDesktop.appendChild(div2);
};

const botonTexto = () => {
  audio.play();
  escribeDesktop.appendChild(div3);
};

const botonOK = () => {
  audio.play();
  contenedorBuscar1.style.display = "none";
  contenedorImagen.style.display = "none";
  contenedorImagen2.style.display = "none";
  contenedorImagen3.style.display = "none";
  semaforo2 = true;
  semaforo1 = true;
};

const botonClear = () => {
  audio.play();
  if (escribeDesktop.contains(div)) {
    escribeDesktop.removeChild(div);
  }
  if (escribeDesktop.contains(div2)) {
    escribeDesktop.removeChild(div2);
  }
  if (escribeDesktop.contains(div3)) {
    escribeDesktop.removeChild(div3);
  }
};

const spanResults = document.getElementById("spanResults");
const desencriptar = document.getElementById("desencriptar");
const containerSaw = document.getElementById("containerSaw");
const contenedorEncuesta1 = document.getElementById("contenedorEncuesta1");

const contenedosUnicesmagPng = document.getElementById(
  "contenedosUnicesmagPng"
);

const img = document.createElement("img");
img.src = "https://live.staticflickr.com/65535/52870277862_c425e471d1_o.png";
img.className = "desencriptarUnicesmagFun";
img.onclick = function () {
  audio.play();
  contenedosUnicesmagPng.style.display = "block";
};

const ocultarUnicesmag = () => {
  audio.play();
  contenedosUnicesmagPng.style.display = "none";
};

const div10 = div.cloneNode();
div10.textContent = "UniCesmag.png";
div10.className = "desencriptarUnicesmagPng";

const botonEncuesta = document.createElement("button");
botonEncuesta.textContent = "Encuesta 1";
botonEncuesta.className = "botonEncuesta";
botonEncuesta.onclick = function () {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScdvjH_NFHfaU27kFuDmMWhREv08tigGm60AohZ6UcAyUDzpQ/viewform";
}

let semaforo3 = true;

const botonDecrypt = () => {
  audio.play();
  if (semaforo3 == true) {
    boton5.style.display = "none";
    boton6.style.display = "none";
    boton7.style.display = "none";
    boton1.style.backgroundColor = "#6c757d";
    boton2.style.backgroundColor = "#43484e";
    boton3.style.backgroundColor = "#6c757d";
    boton4.style.backgroundColor = "#6c757d";
    contenedorBoton1.style.display = "none";
    contenedorBoton2.style.display = "block";
    contenedorBoton3.style.display = "none";
    contenedorBoton4.style.display = "none";

    const elements = [
      div4,
      div5,
      div6,
      espaciado,
      div7,
      espaciado2,
      div8,
      div9,
    ];
    let i = 0;
    const interval = setInterval(() => {
      spanResults.appendChild(elements[i]);
      i++;
      if (i === elements.length) {
        clearInterval(interval);
        desencriptar.appendChild(img);
        desencriptar.appendChild(div10);
        containerSaw.style.display = "none";
        main5.style.backgroundColor = "#3a227d";
        cerrarTareas(contTarea6, contTareaFlecha6);
        cerrarTareas(contTarea7, contTarea9);
        reproducirVideos(miVideo6, arrayVideos[5], contenedorVideo6, cerrarVideo6);
        contenedorEncuesta1.appendChild(botonEncuesta);
      }
    }, 1500);
    semaforo3 = false;
  }
};
const cerrarEmsisoft = () => {
  audio.play();
  contenedorEmsisoft.style.display = "none";
};
// Borrar el texto de txt
let verifica = true;
function borrarTexto() {
  if (verifica == true) {
    document.getElementById("escribeAqui").textContent = "";
    verifica = false;
  } else if (verifica == false) {
  }
}

const contenedorPapelera = document.getElementById("contenedorPapelera");

const showPapelera = () => {
  contenedorPapelera.style.display = "flex";
};

const ocultarPapelera = () => {
  audio.play();
  contenedorPapelera.style.display = "none";
};

const saveText = () => {
  audio.play();
};

const ctPapeleraC = document.getElementById("contenedorPapeleraCifrado");
const papeleraX = document.getElementById("contenedorPapeleraX");
const cifradoPapelera = document.getElementById("cifradoPapelera");

cifradoPapelera.onclick = function () {
  audio.play();
  ctPapeleraC.style.display = "block";
};

papeleraX.onclick = function () {
  audio.play();
  ctPapeleraC.style.display = "none";
};

document.getElementById("tarea1Boton").onclick = function () {
  audio.play();
  const cerrarToast1 = document.getElementById("contTarea4");
  cerrarToast1.style.display = "none";
};

document.getElementById("tarea2Boton").onclick = function () {
  audio.play();
  const cerrarToast2 = document.getElementById("contTarea1");
  cerrarToast2.style.display = "none";
};

document.getElementById("tarea3Boton").onclick = function () {
  audio.play();
  const cerrarToast3 = document.getElementById("contTarea2");
  cerrarToast3.style.display = "none";
};

document.getElementById("tarea4Boton").onclick = function () {
  audio.play();
  const cerrarToast4 = document.getElementById("contTarea3");
  cerrarToast4.style.display = "none";
};

document.getElementById("tarea5Boton").onclick = function () {
  audio.play();
  const cerrarToast5 = document.getElementById("contTarea5");
  cerrarToast5.style.display = "none";
};


