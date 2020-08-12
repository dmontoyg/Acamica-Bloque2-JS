var signo = prompt("Cual signo quieres preguntar?")

switch (signo) {
    case "+":
    console.log("sumar");
    break;
    case "-":
    console.log("restar");
    break;
    case "/":
    console.log("dividir");
    break;
    case "*":
    console.log("multiplicar");
    break;
    default:
        console.log("operación desconocida");
}