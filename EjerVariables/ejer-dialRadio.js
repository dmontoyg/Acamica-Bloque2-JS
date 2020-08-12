var ingreseDial = prompt("Ingresa el dial")
var dialIngresado = parseFloat(ingreseDial)

if (dialIngresado % 2 == 0) {
    alert ("Dial no permitido, debe de ser un número impar")
} else {
    if (dialIngresado <= 89.9) {
        alert ("Dial no permitido, debe de ingresar un número mayor a 89,9")
    } else {
        if (dialIngresado >= 107.9) {
            alert ("Dial no permitido, debe de ingresar un número menor a 107,9")
        } else {
            alert ("Tú dial preferido es: " + ingreseDial)
        }
    }   
}