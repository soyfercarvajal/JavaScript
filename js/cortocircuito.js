/* Los operadores cortocircuito sirven para hacer evaluaciones booleanas */

//Cortocircuito OR || cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se mostrará por defecto.

//Cortocircuito AND && cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se mostrará por defecto.

function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

saludar("Fernando");
saludar();

console.log("cadena" || "valor de la derecha");
console.log(19 || "valor de la derecha");
console.log([] || "valor de la derecha");
console.log({} || "valor de la derecha");

console.log("cadena" && "valor de la derecha");
console.log(19 && "valor de la derecha");
console.log([] && "valor de la derecha");
console.log({} && "valor de la derecha");
