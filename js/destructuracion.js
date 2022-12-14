/* Es una expresion de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables o constantes. */

//Sin destructuracion
const numeros = [1, 2, 3];
let uno = numeros[0];
dos = numeros[1];
tres = numeros[2];
console.log(uno, dos, tres);

//Con destructuracion
const [one, two, three] = numeros;
console.log(one, two, tres);

//Asignación separada de la declaración:
let a, b;
[a, b] = [10, 20];
console.log(a);
console.log(b);

//Asignar el resto de un arreglo a una variable:
let c, d, rest;
[c, d, ...rest] = [56, 81, 92, 103, 41, 17, 28];
console.log(c, d, rest);

let [e, f] = [16, { a: 81 }, true, "texto"];

console.log(e);
console.log(f);

//Asignación básica de variables
const lenguajes = ["Python", "Kotlin", "JavaScript"];
let [len1, len2] = lenguajes;

console.log(len1);
console.log(len2);

//Intercambio de variables
let g = 1,
  h = 2;

[g, h] = [h, g];

console.log(g);
console.log(h);

//Analizar un arreglo devuelto por una funcion
const devolverValores = () => {
  return [1, 2, 3];
};

let [i, , k] = devolverValores();

console.log(i);
// console.log(j);
console.log(k);

//Valores predeterminados:
let l, m;
[l = 5, m = 7] = [1];

console.log(l);
console.log(m);

//Destructuración de un objeto
let persona = {
  nombre: "Fer",
  apellido: "Carvajal",
  edad: 30,
};

let { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);

//Asignacion sin declaración (del objeto)
let n, o;
({ n, o } = { n: 18, o: false });

console.log(n);
console.log(o);

//Rest en la desestructuración de objetos
let { p, q, ...objeto } = { p: 10, q: 35, x: 120, y: 45 };

console.log(p);
console.log(q);
console.log(objeto);
