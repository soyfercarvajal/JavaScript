/* El while es una estructura de control que se utiliza para ejecutar un bloque de codigo repetidamente mientras se cumple la condición dada. La sintaxis para crear un while es la siguiente:
 */

// while (condicion) {
//   //codigo a ejecutarse mientras se cumpla la condición
// }

/* Por ejemplo, si quieres imprimir los numeros del 1 al 10 en consola, puedes usar el while de la siguiente manera:*/

function bucleWhile(num) {
  let i = 0;
  while (i <= num) {
    console.log(i);
    i++;
  }
}

bucleWhile(10);
/* El do...while es una variante del while que se utiliza para ejecutar un bloque de código repetidamente mientras se cumple una condición dada. La principal diferencia entre el while y el do...while es que el do...while garantiza que el código dentro del loop se ejecutará al menos una vez, ya que la condición se evalúa después de ejecutar el código dentro del loop en lugar de antes.
La sintaxis es: */

// do {
//   //codigo a ejecutarse al menos una vez
// } while (condicion);

//Bucle for
/* El bucle for se utiliza para iterar sobre una secuencia de valores, como una matriz. Un bucle for tiene tres partes: una declaración incial que se ejecuta antes de que el bucle comience a ejecutarse, una condición que se evalúa en casa iteración de bucle y deternina si el bucle debe continuar o no, y una expresión que se ejecuta al final de casa iteración de bucle.  */

// Crea una matriz de números
var numeros = [1, 2, 3, 4, 5];

// Usa un bucle for para iterar sobre la matriz
for (var i = 0; i < numeros.length; i++) {
  // Imprime cada elemento de la matriz en la consola
  console.log(numeros[i]);
}
/* En este ejemplo, la declaración inicial del bucle establece una variable 'i' en cero. La condición del bucle evalúa si 'i' es menor que el número de elementos en la matriz 'numeros', y la expresión final del bucle incrementa 'i' en uno en cada iteración. Esto hace que el bucle recorra todos los elementos de la matriz y los imprima en la consola.  */
for (let i = 1; i <= 10; i++) {
  console.log("for " + i);
}
