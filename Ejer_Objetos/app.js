// let car = {
//     brand: 'Fiat',
//     model: "Freemont",
//     year: 2011,
//     color: "gray",
//     fuel: 100,
//     drive: function(){
//         this.fuel = this.fuel - 6;
//         console.log("Brrmmm, arrancando. ");
//     }
// };

// var string = "brand";

// //  Property look-up
// console.log(car.brand);
// console.log(car["color"]);
// console.log(car[string]);

// console.log(car.fuel)
// car.drive();
// console.log(car.fuel)

// car.color = 'red';
// console.log(car);

// function user(username, name, lastName, email, password){
//     this.username = username;
//     this.name = name;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//     this.isAdmin = false;
// }

// var usuario_1 = new user('Diego_dmon','Diego','Montoya','dmontoyg@gmail.com',1234 )

// console.log(usuario_1);


// class Clothes{
//     constructor(productName, type, size, color, price, quantity){
//         this.productName = productName;
//         this.type = type;
//         this.size = size;
//         this.color = color;
//         this.price = price;
//         this.quantity = quantity;
//     }
//     getSaleInfo(){
//         return `${this.productName.toUpperCase()} - ${this.type} ${this.color} ${
//             this.size
//         } \n Precio: $${this.price}`;
//     }
// }

// let clothes1 = new Clothes(
//     "remera ivy",
//     "Remera",
//     "XS",
//     "Blanca",
//     10000,
//     2
// )

class Persona {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  
    esMayor() {
      return this.edad > 18;
    }
  
    nombreCompleto() {
      return `${this.nombre} ${this.apellido}`;
    }
  }
  
  let promptNombre = prompt("Ingrese el nombre");
  let promptApellido = prompt("Ingrese el apellido");
  let promptEdad = prompt("Ingrese el edad");
  
  const mi_persona = new Persona(promptNombre, promptApellido, promptEdad);
  
  console.log(mi_persona);
  console.log(mi_persona.esMayor());
  console.log(mi_persona.nombreCompleto());