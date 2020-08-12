var validUser = "usuario";
var validPassword = "pass";

function validate(usuario, password) {
    return (usuario === validUser && password === validPassword)    
}

do {
    var user = prompt("Ingrese su usuario");
    var password = prompt("Ingrese su clave");
    var login = validate(user, password);
} while (login === false);

alert("Bienvenido al sitio");