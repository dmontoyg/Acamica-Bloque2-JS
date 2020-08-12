function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(2));
console.log(esPar(12));
console.log(esPar(5));
console.log(esPar(9));

var edad = prompt("Ingrese su edad")

if (esPar(edad)){
        alert("ganaste!");
    }else{
        alert("Intentá nuevamente!");
}