var cantDinero = prompt("Ingresa la cantidad de dinero");
var userTransf = prompt("Ingresa el usuario a transferir el dinero");
var userBDbanco = ["diego","alejandro","camilo"];

if (cantDinero !== 0 && userBDbanco.includes(userTransf)) {
    alert("Transacción existosa");
} else {
    alert("Error en la transacción. Intenta de nuevo");
}