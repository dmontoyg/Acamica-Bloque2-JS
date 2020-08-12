var nombre = prompt("Ingresa tu nombre");
var edad = 33;
var esProfe = true;

console.log("Su nombre es: " + nombre + " y tu edad es: " + edad);
console.log(typeof(esProfe)); // Typeof es para verificar el tipo de variable ⚠️

// Para ver el tipo de las variables
console.log("El tipo de nombre es " + typeof nombre)
console.log("El tipo de edad es " + typeof edad)
console.log("El tipo de esProfe es " + typeof esProfe)


// Condicional
if(esProfe == true){
    console.log(nombre + ", es profesor");
}else{
    console.log(nombre + ", no es profesor");
}

// Metodos de string:

// String en mayusculas
console.log(nombre.toUpperCase());

// String en minusculas
console.log(nombre.toLowerCase());

// Operadores aritmeticos
console.log("2 + 2 = " + (2 + 2));
console.log("2 - 2 = " + (2 - 2));
console.log("2 * 2 = " + (2 * 2));
console.log("2 / 2 = " + (2 / 2));

// Operadores logicos
console.log("false && false = " + false && false);
console.log("false && true = " + false && true);
console.log("true && true = " + true && true);
console.log("false || false = " + false || false);
console.log("false || true = " + false || true);
console.log("true || true = " + true || true);
console.log("!true = " + !true);
console.log("!false = " + !false);

// Operadores de comparación

// Igualdad
console.log("2 es igual a 2?", 2 == 2);
console.log("2 es igual a 3?", 2 == 3);

// Mayor que
console.log("4 es mayor a 2?", 4 > 2);
console.log("2 es mayor a 4?", 2 > 4);