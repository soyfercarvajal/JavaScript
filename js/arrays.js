//Los arrays son objetos similares a una lista cuyo prototipo proporciona metodos para efectuar operaciones de recorrido y de mutacion.
//Tanto la longitud como el tipo de elementos de un arrays son varibles.
//Dado que longitud de un array puede cambiar en cualquier momento.

//Los arrays permiten guardar colecciones de datos a traves de nombres.
//Hay dos maneras de crear un array

let arr1 = new Array();
let arr2 = []; //Casi siempre se utiliza esta manera para crear un array

let frutas = ["melon", "sandia,", "fresa"];
console.log(frutas);
// Se pueden remplazar los elementos
frutas[2] = "naranja";
console.log(frutas);
//Agregar un elemento nuevo al array
frutas[3] = "pera";
console.log(frutas);

//Para saber el total de elementos en el array se utiliza el metodo length

console.log(frutas.length);

//Un array puede guardar cualquier tipo de elementos
//Mezcla de valores
let arr = [
  "manzana",
  { name: "Fernando" },
  true,
  function () {
    console.log("Hola");
  },
];
//Obtener el elemento del indice 1 y mostrar su nombre
console.log(arr[1].name);
arr[3]();

const d = Array(100).fill();
console.log(d);

//Como ingresar a los datos de un array
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];

console.log(b);
console.log(b[2]);
console.log(b[3][1]);
console.log(b[3][3][1]);

//El metodo .forEach() ejecuta la funcion indicada una vez por cada elemento del array.

const array1 = ["a", "b", "c", 1, 2, 3];

array1.forEach(function (elemento, indice) {
  console.log(elemento, indice);
});

frutas.forEach(function (el, index) {
  console.log(`<li id=${index}>${el}</li>`);
});

//Iterar atraves de un array utilizando el bucle for

const salad = [
  "tomate",
  "hongo",
  "brocoli",
  "pepino",
  "elote",
  "zanahoria",
  "aguacate",
];

for (let i = 0; i <= salad.length; i++) {
  console.log(`El indice del elemento ${salad[i]} es ${i}`);
}
