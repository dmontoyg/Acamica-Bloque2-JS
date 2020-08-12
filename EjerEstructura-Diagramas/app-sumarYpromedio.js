function sumaNumero () {
    let total = 0;
    let promedio = 0;
    const max = 5;
    for (let index = 1; index <= max; index++) {
       let numero = parseInt(prompt('Ingrese el ' + index + ' número'));
       if (isNaN(numero)) {
          numero = parseInt (prompt('No es un número, ingrese uno nuevamente'));
       } else{
          total += numero;         
          promedio = total/max;
       }
    }
       alert(`El valor total es: ${total}`);
       alert(`El promedio es: ${promedio}`);
       // alert("El valor total es: " + total); Es lo mismo tener eso      
}

 sumaNumero();