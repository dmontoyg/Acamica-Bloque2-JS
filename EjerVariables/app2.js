var ValidUser = "usuario";
var validPassword = "pass";

function validate(usuario, pass) {
    return usuario === ValidUser && pass === validPassword;
}

do {
    var user = prompt("Ingrese su usuario");
    var password = prompt("Ingrese su password");
    var login = validate(user, password);
}while (login === false);

alert ("Bienvenido al sitio");