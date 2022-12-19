/* Las expresiones regulares son patrones de evaluación de formato de cadenas de texto, se utiliza para la validación de datos cuando se ingresa a los formularios de una aplicación web. */

let cadena =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore perferendis error porro culpa ex vel laborum, quam sapiente blanditiis adipisci dicta loremmolestias sit autem dignissimos optio voluptates tenetur assumenda ipsam!";

// let expReg = RegExp("lorem", "ig");
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

let expReg2 = /lorem{1}/gi;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
