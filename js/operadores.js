//Para operaciones matematicas estan soportadas las siguientes operaciones:
/* 
suma +
resta -
multiplicacion *
division /
resto %
exponenciacion **
 */

let a = 5 + (5 - 5) * 3;
let modulo = 5 % 2;
let exponenciacion = 5 ** 3;

console.log(a);
console.log(modulo);
console.log(exponenciacion);

//Operadores de comparacion
/* >, <, >=, <=, ==, ===, !=, !== */
/* 
   = un igual es asignacion de variable
   == dos iguales es comparacion de valores
   === tres iguales es comparacion de tipo de dato y de valor
*/
console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

//Resumen
/*
Los operadores de comparacion retornan un valor boolenao.
Las cadenas se comparan letra por letra en el orden del diccionario.
Cuando se comparan valores de diferentes tipos, se convierten en numeros (excepto un control de igualdad estricta)
Los valores null y undefined son iguales == entre si y no equivalen a ningun otro valor.
Cuidado con usar comparaciones como < o > con variables que ocasionalmente pueden ser null/undefined. */

//Incremendo y Decremento
let i = 2;

console.log(i++);
console.log(++i);

// i = i + 2;
// i += 2;

//Operador unario
i++;
i--;
++i;
--i;

console.log(i);

//Operadores logicos

// ! - Not: Niega, es decir lo que es verdadero lo vuelve falso y viceversa
console.log(!true);
console.log(!false);

// || - Or: Cuando tengo dos o mas condiciones, con que una se cumpla, es decir sea verdadera, el OR sera verdadero
// Esta pensado para manipular solo valores booleanos. Si cualquiera de sus argumentos en true, retorna true, de lo contrario retorna false.
console.log("9" === 9 || 9 === 9);
console.log(true || true); // true (verdadero)
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false (falso)

// && - And: Cuando tengo dos o mas condiciones, todas tienen que cumplirse, es decir ser verdaderas para que AND se valide.
// AND retorna true si ambos operandos son valores verdaderos y false en cualquier otro caso.
console.log(9 === 9 && 9 === 9);
console.log(9 === 9 && "9" === "9");
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("La hora es 12:30");
}
