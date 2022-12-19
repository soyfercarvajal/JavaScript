/* Son funciones a las cuales no se les define un nombre, sino solo la estructura de sus acciones y tan pronto como son definidas, se las ejecuta.
Para esto, debes indicarle al intérprete de JS que intérprete la función, con alguno de los siguientes operadores:
    Encerrar toda la función entre parentesis
    Poner por delante de la function un signo de exclamación o un signo + 
Finalmente, el conjunto de paréntesis que llama a la ejecución de la función. */

//Formas de escribir las funciones anonimas autoejecutables

//Clásica
(function () {
  console.log("Version Clasica");
})();

//La Crockford (JavaScript the good parts)
(function () {
  console.log("Version Crockford");
})();

//Unaria
+function () {
  console.log("version unaria");
};

//Facebook
!function () {
  console.log("version unaria");
};
