//var funciona en el ambito global al contrario de let o const que funciona solo en el ambito de bloque, var genera una elevacion o un hoisting.
//PREFERENTEMENTE SIEMPRE UTILIZAR LET O CONST

var hola = "Hola mundo"; // var = variable de ambito global
let hello = "Hello world"; //let = variable de ambito de bloque

console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);

//Ambito de bloque

//Ejemplo de una mala practica utilizando var

var musica = "Rock";
console.log("Variable musica antes del bloque", musica);

{
  //Si se declara nuevamente musica dentro del bloque, se genera un hoisting
  var musica = "Pop";
  console.log("Variable musica dentro del bloque", musica);
}
console.log("Variable musica antes del bloque", musica); //Por logica al estar declarada la nueva variable dentrio del bloque deberia darnos nuevamente Rock, pero por el hoisting nos imprime nuevamente Pop

//////////////////  let  ////////////////////////
//Al contrario de var, let genera la variable en ambito de bloque lo cual evita errores en la lectura de las variables.

let musica2 = "Rock";
console.log("Variable musica antes del bloque", musica2);

{
  let musica2 = "Pop";
  console.log("Variable musica dentro del bloque", musica2);
}

console.log("Variable musica antes del bloque", musica2);

//RESUMEN
/* Podemos declarar variables para almacenar datos al utilizar las palabras clave var, let o const.

let - es la forma moderna de declarar una variable
var - es la declaracion de variable de la vieja escuela. Normalmente no la utilizamos en los absoluto.
const - es como let, pero el valor de la variable no puede der alterado.

Las variables deben ser nombradas de tal manera que entendamos facilmente lo que esta en su interior.
 */
