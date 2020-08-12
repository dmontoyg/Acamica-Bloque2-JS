let name = prompt("Ingrese su nombre");
let backgroundcolor = prompt("Ingrese su color de fondo");
let textcolor = prompt("Ingrese su color de texto");
let fontsize = prompt("Ingrese su tamaño del texto");


let caja = document.getElementById("caja");

console.log(caja);

let nuevoelemento = document.createElement("p");
nuevoelemento.textContent = name;
nuevoelemento.textContent.backgroundcolor = backgroundcolor;
nuevoelemento.textContent.fontsize = fontsize;

