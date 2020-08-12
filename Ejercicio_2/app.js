
// ------ EJERCICIO 1. SUMEMOS ------

// function sumaNumero() {
//     let total = 0;
//     for (let index = 0; index <= 4; index++) {
//         let numero = parseInt(prompt('¿ingrese un número:'))
//         console.log("Resultado: sumaNumero -> numero", numero);
//         total += numero;
//         total = total + numero; //otra forma de hacer lo anterior
//     }
//     alert(`El valor total es: ${total}`);
// }
// sumaNumero();

// ------ EJERCICIO 2. PROMEDIO ------
 
// function sumaNumero () {
//     let total = 0;
//     let promedio = 0;
//     const max = 5
//     for (let index = 1; index <= max; index++) {
//         let numero = parseInt(prompt('ingrese un número:'))
//         if(isNaN(numero)){
//             numero = parseInt(prompt('El valor ingresado no es un número,ingrese un número de nuevo:'))
//         }else{
//             total += numero;
//             promedio = total/max;
//         }
        
//     } 
//     alert(`El valor total es: ${total}`);
//     alert(`El promedio es: ${promedio}`);
// }

// sumaNumero ();

// ------ EJERCICIO 3. EDADES ------

    // let SumaMayores = 0;
    // let i = 1;

    // while (i !== 0) {
    //     i = parseInt(prompt('Ingresa la edad'))
    //     function validar() {
    //         if (isNaN(i)) {
    //             i = parseInt(prompt('Verifica! el valor ingresado no corresponde a una edad'));
    //         } else {
    //             SumaMayores += i;
    //         }
    //     }
        
    // }


///// EJERCICIO CON GERAR

// let data = ["auto", 1, 5, "rojo", "verde", 5, 11, "casa", 2, "diego"];
// let notnumber = [];
// let sum = 0;

// for (let i = 0; i < data.length; i++){
//     if (typeof data[i] === "number") {
//         sum = sum + data[i];      
//         // sum += data[i]; otra forma de hacerlo
//     }else{
//         notnumber.push(data[i]);

//     }
// }


// console.log ("resultado de la suma es: " + sum);
// console.log ("Datos no numericos: " + notnumber);

///////////////

// const limite = 'Stop';
// let arrValues = [];
// let numero;

// do{
//     numero = prompt('ingrese un número:');
//     saveValue(numero);
// }while(numero !== limite);

// function saveValue (numero){
//         if(numero != limite && !isNaN(numero)){
//             arrValues.push(numero)
//         }
// }
// alert(`Total números: ${arrValues}`);

const limite = '0';
let numero;
let arrPares = [];
let arrImpares = [];
let arrOtros = [];
let numpar;
let numimpar;
let numotro;

do{
    numero = prompt('Ingrese un número:');
    saveValue(numero);
}while(numero !== limite);

function saveValue(numero) {
    if (numero != limite && numero % 2 == 0) {
        arrPares.push(numero)
    } else if (numero != limite && numero % 2 != 0) {
        arrPares.push(numero)
    } else {
        arrOtros.push(numero)
    }
}

alert(`Los números pares son: ${arrPares}`);
alert(`Los números impares son: ${arrImpares}`);
alert(`Y el resto son: ${arrOtros}`);
