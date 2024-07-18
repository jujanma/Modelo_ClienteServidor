const suma = (a, b, callback) => {
  callback(a + b);
};

const imprimir = (data) => {
  console.log(data);
};

suma(1, 2, imprimir);

// --------------------------

const getData = (cb) => {
  setTimeout(() => {
    cb({
      nombre: "Juan",
      apellido: "Perez",
    });
  }, 3000);
};

const imprimirData = (data) => console.log(data);

getData(imprimirData);
