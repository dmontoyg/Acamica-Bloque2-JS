var unTanque = 50;
var mod1 = 15;
var mod2 = 12;
var mod3 = 10;
var rangoKM;
var tanqueLleno;

var modelo = prompt("Ingresa el modelo a manejar: opciones 1.6 - 1.8 o 2.0");
var cantidadKilometros = prompt("Ingresa la cantidad de kilometros a recorrer");


if (modelo == "1.6") {
    rangoKM = mod1 * unTanque;
    tanqueLleno = cantidadKilometros / rangoKM;
    alert("La cantidad que debes tanquear es de: " + tanqueLleno);
} else if (modelo == "1.8") {
    rangoKM = mod2 * unTanque;
    tanqueLleno = cantidadKilometros / rangoKM;
    alert("La cantidad que debes tanquear es de: " + tanqueLleno);
} else if (modelo == "2.0"){
    rangoKM = mod2 * unTanque;
    tanqueLleno = cantidadKilometros / rangoKM;
    alert("La cantidad que debes tanquear es de: " + tanqueLleno);  
} else{
    alert("Información errada");  
}



