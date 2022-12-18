class Animal {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase.
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Metodos
  sonar() {
    console.log("Hago sonidos porque estoy vivo.");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamaño) {
    //con el metodo super() se manda a llamar al constructor de la clase padre
    super(nombre, genero);
    this.tamaño = tamaño;
    this.raza = null;
  }

  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {
    console.log("guau guau!");
  }
  //un método estático se puede ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log(
      "Los perros somos animales mamíferos que pertenecen a la familia de los caninos. Son considerados los mejores amigos del hombre."
    );
  }
  //los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase.
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
console.log(scooby.getRaza);
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);

//Los getters y setters son una función que obtiene el valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.

const persona = {
  name: "Fernando",
  lastname: "Carvajal",
  get fullname() {
    return `${this.name} ${this.lastname}`;
  },
  set fullname(fullvalue) {
    const arreglo = fullvalue.split(" ");
    this.name = arreglo[0];
    this.lastname = arreglo[1];
  },
};

console.log(persona.fullname);

persona.fullname = 'Jose Rodriguez';

console.log(persona.fullname);