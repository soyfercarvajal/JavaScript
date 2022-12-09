//El valor de una constante no puede cambiarse a traves de la reasignacion.
//Las constantes no se pueden redeclarar.
//NO se puede declarar una constante sin un valor.

let a;
const PI = 3.1614;
//const NUEVE;
console.log(PI);
//PI = 3.15;

a = "kenai";
console.log(a);

//con valores compuestos como objetos o array si se puede agregar o quitar elementos declarados con const

const objeto = {
  nombre: "Fernando",
  edad: 30,
};

const colores = ["blanco", "negro", "azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "soyfer@gmail.com";
colores.push("naranja");

console.log(objeto);
console.log(colores);
