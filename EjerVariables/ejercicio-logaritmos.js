var cantidadKilometros = prompt("Ingresa la cantidad de kilometros a recorrer");
var unTanque = 45;
var unLitro = 15;
var carroLleno = unTanque * unLitro;

if (cantidadKilometros > carroLleno){
    alert("Debes tanquear en tu próxima parada, porque no llegarás con un tanque lleno");
    alert("en total debe tanquear cada "+ Math.floor(cantidadKilometros/carroLleno) + " veces");
}else{
    alert("Vas a llegar con un tanque lleno de nafta");
}
