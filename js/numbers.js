//El metodo toFixed(n) redondea el numero a n digitos despues del punto decimal.
//El metodo toFixed devuelve una cadena y no un Number.
let num = 1.23456;
console.log(+num.toFixed(2));

let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2));

// let a = +prompt("Ingresa un numero a sumar:")
// let b = +prompt("Ingresa un numero a sumar:")
// alert(a+b)

function readNumber() {
  let num;

  do {
    num = prompt("Ingrese un numero por favor:", 0);
  } while (!isFinite(num));
  if (num === null || num === " ") return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

// alert(9999999999999999);

//Diferencias entre floor, ceil, round, trunc
/*             Math.floor	Math.ceil	Math.round	Math.trunc
      3.1 	       3	        4	        3	          3
      3.6 	       3	        4	        4	          3
      -1.1  	    -2	       -1	       -1	         -1
      -1.6  	    -2	       -1	       -2	         -1
      */
