/* 
Un objeto es una colleccion de datos relacionados entre si, estan generalmente formados por variables y funciones, propiedades y metodos cuando estos forman parte de un objeto.
Las variables que son de un objeto o estan dentro de un objeto se les llama propiedades/atributos y a las funciones se les llama metodos.
 */

//Forma de declarar un objeto, se puede declarar con let, const o var.
const b = {};
console.log(b);

/* Dentro de un objeto a las variables se les llama atributos/propiedades y a las funciones se les llama metodos.  */

//Normalmente se utilizan las llaves {...}. Esa declaracion se le llama objeto literal.
//Para ingresar propiedades se utiliza clave:valor
const fer = {
  nombre: "Fer",
  apellido: "Carvajal",
  edad: 30,
  pasatiempos: ["Correr", "Leer", "Estudiar"],
  soltero: true,
  contacto: {
    email: "soyfercarvajal@gmail.com",
    twitter: "@soyfercarvajal",
    movil: "8129007849",
  },
  saludar: function () {
    console.log("Hola");
  },
  decirMiNombre: function () {
    console.log(
      `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir en twitter como ${this.contacto.twitter}.`
    );
  },
};
fer.peso = "64";
console.log(fer.peso);
console.log(fer.nombre);
console.log(fer.pasatiempos[2]);
console.log(fer.contacto.email);
fer.saludar();
fer.decirMiNombre();

console.log(Object.keys(fer));
console.log(Object.values(fer));
console.log(fer.hasOwnProperty("nombre"));

//let fruta = prompt("Que fruta comprar");
// let bolsa = {};
// bolsa[fruta] = 5;

//console.log(bolsa);

//Atajo para valores de propiedad
//En el codigo real, a menudo usamos variables exitentes como valores de los nombres de propiedad.
//Por ejemplo:

function makeUser(name, age) {
  return {
    name: name, //las propiedades tienen los mismos nombres que las variables
    age: age,
    //otras propiedades
  };
}

let user = makeUser("Fer", 30);
console.log(`Mi nombre es ${user.name} y tengo ${user.age} años.`);

//Manera de simplificar
/*
function makeUser(name, age) {
  return {
    name, // igual que name:name
    age, // igual que age:age
    // ...
  };
}
*/

let usuario = {
  name: "Fernando",
  edad: 30,
  isAdmin: true,
};

for (let key in usuario) {
  console.log(key);
  console.log(usuario[key]);
}


//RESUMEN
/* 
Los objetos son arreglos asociativos con varias caracteristicas especiales.
Almacenan propiedades(pares de clave:valor), donde:
-Las claves de propiedad deben ser cadenas o simbolos (generalmente strings).
-Los valores pueden ser de cualquier tipo.
Para acceder a una propiedad, podemos usar:
-La notacion de punto: obj.propiedad
-La notacion de corchetes: obj["propiedad"]. Los corchetes permiten tomar la clave de una variable, como obj[varWithKey]

Operadores adicionales:
-Para eliminar una propiedad: delete obj.prop
-Para comprobar si si existe una propiedad con la clave proporcionada "key" in obj
-Para crear bucles sobre un objeto for (let key in obj)
*/