//Funciones
/* 
      Una funcion es un bloque de codigo, autocontenido, que se puede definir una vez y ejecutar en cualquier momento.
      Opcionalmente, una funcion puede aceptar paramentros y devolver un valor. 
      
      Las funciones en JavaScript son objetos, un tipo especial de objetos:
      Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
      */
/* Las funciones son unos de los bloques de construccion fundamentales en JavaScript.
Una funcion es similar a un procedimiento, un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como funcion, debe tomar alguna entrada y devolver una salida donde hay una relacion obvia entre la entrada y la salida. */

//Funcion Declarada
function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

estoEsUnaFuncion(); //Invocacion de la funcion

function funcionDevuelveValor() {
  console.log("Uno");
  //return 19; //Si la lectura del codigo en el cuerpo encuentra un return todo lo demas se ignora.
  console.log("Dos");
  console.log("Tres");
  return "La funcion ha retornado una cadena de texto.";
}
let valorDeFuncion = funcionDevuelveValor(); //Para poder mostrar el valor que devuelve la funcion se tiene que guardar en una variable

console.log(valorDeFuncion);

function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Fernando", 30);
saludar();

//Funciones declaradas VS Funciones expresadas
//En las funciones declaradas JavaScrip genera un hoisting de las funciones.
function funciosDeclarada() {
  console.log(
    "Esto es una funcion declarada puede invocarse en culaquier parte del codigo, incluso antes de que la funcion sea declarada"
  );
}

funciosDeclarada();

//Funcion Expresada
//Funcion anonima
//funcionExpresada(); en una funcion expresada no se puede invocar antes de ser declarada
//Preferentemente utilizar const con funciones expresadas
const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada, es decir una funcion que se la ha asignado como valor a una variable, si invocamos esta funcion antes de su declaracion JS nos dira... Cannot access'funcionExpresada' before initialization"
  );
};

funcionExpresada();
