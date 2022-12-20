import saludar, { PI, usuario } from "./constantes.js";
import { aritmetica } from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI, usuario);

console.log(aritmetica.restar(5, 3));
console.log(aritmetica.sumar(5, 5));

saludar("Fernando");
