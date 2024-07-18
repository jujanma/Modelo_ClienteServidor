//* Promises

//le puedo pasar un parametro
const getData1 = (error) => {
  return new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "juan",
          apellido: "perez",
        });
      }, 3000);
    } else {
      reject("No se pudo obtener los datos");
    }
  });
};

console.log("inicio");
getData1(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Fin");
// //no le puede pasar un nuevo parametro
// const getData2 = new Promise((resolve, reject) => {

// })

//* ASYNC - AWAIT

const getDataAsync1 = (error) => {
  return new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "juan",
          apellido: "perez",
        });
      }, 3000);
    } else {
      reject("No se pudo obtener los datos");
    }
  });
};

const getDataAsync2 = (error) => {
  return new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "ada",
          apellido: "mam",
        });
      }, 3000);
    } else {
      reject("No se pudo obtener los datos");
    }
  });
};

const main = async () => {
  try {
    let resultado = await getDataAsync1(false);
    let resultado2 = await getDataAsync2(false);
    console.log(resultado);
    console.log(resultado2);
  } catch (error) {
    console.log(error);
  }
};

main();
