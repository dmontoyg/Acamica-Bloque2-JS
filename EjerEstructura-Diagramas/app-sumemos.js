function sumaNumero () {
   let total = 0;
   for (let index = 1; index < 6; index++) {
      
      let numero = parseInt(prompt('Ingrese el ' + index + ' número'));
      console.log("Resultado: sumaNumero -> Número", numero);
      
      if (isNaN(numero)) {
         return 'No es un número';
      } 
         total += numero;         
      }
      alert(`El valor total es: ${total}`);
      // alert(`El valor total es: ` + total); Es lo mismo tener eso
      
}

sumaNumero();