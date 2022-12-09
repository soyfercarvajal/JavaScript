//Cadenas de texto aka Strings
//Los strigs pueden estar dentro de comillas simples, comillas dobles o backticks

// let nombre = "Fernando";
// let apellido = "Carvajal";
// let saludo = new String("Hola mundo");

// console.log(nombre, apellido, saludo);
// console.log(nombre.length, apellido.length, saludo.length);

//Concatenacion

let nombre = "Fernando"
let apellido = "Carvajal"

let saludo = "Hola mi nombres es " + nombre + " " + apellido + "."
console.log(saludo);

//Interpolacion de variables con Template Strings

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`
console.log(saludo2);


//RESUMEN
/* 
Existen tres tipos de entrecomillado. Los backticks permiten que una cadena abarque varias lineas e insertar expresiones ${}.
Podemos utilizar caracteres especiales como el salto de linea \n.
Para obtener un caracter, usa: [] o el metodo at.
Para obtener un substring, usa: slice o substring.
Para convertir un string en minusculas/mayusculas, usa: toLowerCase/toUpperCase.
Para buscar un substring, usa: indexOf, o para chequeos simples includes/startsWith/endsWhit.
Para comparar strings de acuerdo al idioma, usa: localCompare, de otra manera seran comparados por sus codigos de caracter.

Existen otros metodos utiles:
str.trim() - remueve("recorta") espacios desde el comienzo y final de un string.
str.repeat(n) - repite el string n veces. 

*/
