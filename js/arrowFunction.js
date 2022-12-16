// const saludar = () => console.log("Hola");

const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Fernando");

const humos = function (factor) {
  const ingrediente = function (cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    console.log()
  };
};
