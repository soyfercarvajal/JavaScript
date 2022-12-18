//Las clases son moldes para creación de objetos, me permiten crear un monton de objetos similares apoyandome de su molde.

class Persona {
  constructor( //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
    nombre = "sin nombre",
    apellido = "sin apellido",
    localidad = "sin localidad"
  ) {
    //Podemos agregar argumentos por defecto.
    this.nombre = nombre;
    this.apellido = apellido;
    this.localidad = localidad;
  }
  //Metodos
  sonar() {
    console.log("Hago sonidos porque estoy vivo.");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
  }
} //TERMINA LA CLASE PERSONA

class cliente001 extends Persona {
  constructor(nombre, apellido, edad) {
    //el método super() se manda a llamar al constructor de la clase padre
    super(nombre, apellido);
    this.edad = edad;
  }
  sonar(){
    console.log('Hago un nuevo sonido')
  }
  ladrar(){
    console.log('Imito el sonido de un perro guau guau!')
  }
}

const cliente01 = new cliente001("Fernando", "Carvajal", 30, "Villa Juarez");
cliente01.tel = "8129007849";

const cliente02 = new Persona("Luis", "Luna", 25);
const cliente03 = new Persona(); //si creamos un nuevo objeto sin argumentos, no nos dara error, nos mostrara undefined

console.log(cliente01);
cliente01.saludar();
cliente01.sonar();
cliente01.ladrar();
console.log(cliente02);
cliente02.saludar();
cliente02.sonar();
console.log(cliente03);
