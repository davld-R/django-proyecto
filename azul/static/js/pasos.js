// TODO: va js freyder

const button1 = document.getElementById("div__paso1");
const button2 = document.getElementById("div__paso2");
const button3 = document.getElementById("div__paso3");
const button4 = document.getElementById("div__paso4");
const button5 = document.getElementById("div__paso5");

const mostrarPaso1 = () => {
  button1.style.display = "block";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  button5.style.display = "none";
  btn1.style.display = "none";
  btn3.style.display = "none";
  btn5.style.display = "none";
  btn7.style.display = "none";
  btn9.style.display = "none";
};

const mostrarPaso2 = () => {
  button2.style.display = "block";
  button1.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  button5.style.display = "none";
  btn1.style.display = "none";
  btn3.style.display = "none";
  btn5.style.display = "none";
  btn7.style.display = "none";
  btn9.style.display = "none";
};

const mostrarPaso3 = () => {
  button3.style.display = "block";
  button1.style.display = "none";
  button2.style.display = "none";
  button4.style.display = "none";
  button5.style.display = "none";
  btn1.style.display = "none";
  btn3.style.display = "none";
  btn5.style.display = "none";
  btn7.style.display = "none";
  btn9.style.display = "none";
};
const mostrarPaso4 = () => {
  button4.style.display = "block";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button5.style.display = "none";
  btn1.style.display = "none";
  btn3.style.display = "none";
  btn5.style.display = "none";
  btn7.style.display = "none";
  btn9.style.display = "none";
};
const mostrarPaso5 = () => {
  button5.style.display = "block";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  btn1.style.display = "none";
  btn3.style.display = "none";
  btn5.style.display = "none";
  btn7.style.display = "none";
  btn9.style.display = "none";
};

/* PROGRAMACION DE IFRAME VIDEO PASO A PASO METODOLOGIA*/

/* PASO 1*/

const btn1 = document.getElementById("vp1");
const btn2 = document.getElementById("vp1");

const iframe1 = () => {
  btn1.style.display = "block";
  button1.style.display = "none";
};

const iframe2 = () => {
  btn2.style.display = "none";
  button1.style.display = "block";
};

/* PASO 2 */

const btn3 = document.getElementById("vp2");
const btn4 = document.getElementById("vp2");

const iframe3 = () => {
  btn3.style.display = "block";
  button2.style.display = "none";
};

const iframe4 = () => {
  btn4.style.display = "none";
  button2.style.display = "block";
};

/* PASO 3 */

const btn5 = document.getElementById("vp3");
const btn6 = document.getElementById("vp3");

const iframe5 = () => {
  btn5.style.display = "block";
  button3.style.display = "none";
};

const iframe6 = () => {
  btn6.style.display = "none";
  button3.style.display = "block";
};

/* PASO 4 */

const btn7 = document.getElementById("vp4");
const btn8 = document.getElementById("vp4");

const iframe7 = () => {
  btn7.style.display = "block";
  button4.style.display = "none";
};

const iframe8 = () => {
  btn8.style.display = "none";
  button4.style.display = "block";
};

/* PASO 5 */

const btn9 = document.getElementById("vp5");
const btn10 = document.getElementById("vp5");

const iframe9 = () => {
  btn9.style.display = "block";
  button5.style.display = "none";
};

const iframe10 = () => {
  btn10.style.display = "none";
  button5.style.display = "block";
};
