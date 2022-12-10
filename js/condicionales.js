//if else
/* Ejecuta una sentencia si una condicion especificada es evaluada como verdadera. Si la condicion es evaluada como falsa, otra sentencia puede ser ejecutada.  */

let edad = 16;

if (edad >= 18) {
  console.log("Eres mayor de edad,");
} else {
  console.log("Eres menor de edad.");
}

/*let hora = 19;

 if (hora >= 0 && hora <= 5) {
  console.log("Dejame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
} */

//Operador ternario (condicion) ? verdadero : falso

let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

//swich - case
/* La declaracion swich evalua una expresion, comparando el valor de esa expresion con una instancia case, y ejecuta declaraciones asociadas a ese case, asi como las declaraciones de los case que siguen */

let expr = "Naranjas";

switch (expr) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}

console.log("¿Hay algo más que te quisiera consultar?");
