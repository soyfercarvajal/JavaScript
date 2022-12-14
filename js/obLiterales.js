let nombre = "Kenai",
  edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guauu guauu");
  },
};

console.log(perro);
perro.ladrar();

const dog = {
  nombre,
  edad,
  raza: "Callejero",
  ladrar() {
    console.log("guau guau guau!");
  },
};

console.log(dog);
dog.ladrar();
