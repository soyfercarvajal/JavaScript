/* Los prototipos son un mecanismo mediante el cual los objetos heredan caracteristicas entre si. Para proporcionar mecanismos de herencia, los objetos pueden tener un objeto prototipo, el cual la actúa como un objeto plantilla que hereda métodos y propiedades. */

//Funcion constructora

/* function Animal(nombre, genero) {
    //Atributos
    this.nombre = nombre,
    this.genero = genero,
    //Metodos
    this.sonar = function () {
      console.log("Hago sonidos porque estoy vivo.");
    };
    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
} */

//Funcion constructora donde asignamos los metodos al prototipo, no a la funcion como tal.
function Animal(nombre, genero) {
  //Atributos
  (this.nombre = nombre), (this.genero = genero);
}

//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo.");
};
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

//Herencia Prototípica
function Perro(nombre, genero, tamaño) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamaño = tamaño;
}

//Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
  console.log("Soy un perro y mi sonido es un ladrido")
}

Perro.prototype.ladrar = function(){
  console.log("guau guau!")
}

//New crea un objeto sin propiedades y posteriormente llama a función pasándole el nuevo objeto como valor de la palabra reservasa this.
const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
  lola = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lola);

snoopy.sonar();
snoopy.saludar();

lola.sonar();
lola.saludar();


