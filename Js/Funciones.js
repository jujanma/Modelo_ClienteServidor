//declarativo

// function nombreDeLaFuncion(){
//     // Cuerpo de la función
// }

function saludar(name) {
  console.log(`Hola soy ${name}`);
}

saludar("juan");

function saludar(name) {
  return `Hola soy ${name}`;
}

let saludo = saludar("Pichu");
console.log(saludo);

//Funciones de expresion
let suma = function (a, b) {
  return a + b;
};

console.log(suma(2, 3));

//Funcion flecha o arrow function

let resta = (a, b) => {
  return a - b;
};
console.log(resta(3, 1));
