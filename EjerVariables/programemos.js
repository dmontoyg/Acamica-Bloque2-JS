var numero1String = prompt("Ingresa tu primer número");
var numero2String = prompt("Ingresa tu segundo número");

var numero1 = parseInt(numero1String);
var numero2 = parseInt(numero2String);

if (!isNaN(numero1) && !isNaN(numero2) && numero1String.length === numero1.toString().length && numero2String.length === numero2.toString().length){
    alert("La suma de los números es: " + (numero1 + numero2));
}else{
    alert("Al menos uno de los dos números no es valido");
}


// Otra forma de realizar la validación

// if (!isNaN(numero1String) && isFinite(numero1String) && 
//     !isNaN(numero2String) && isFinite(numero2String)) {
//         alert("La suma de los números es: " + (numero1 + numero2));
// }else{
//         alert("Al menos uno de los dos números no es valido");
// }