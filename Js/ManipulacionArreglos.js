// For Each

let letras = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < letras.length; i++) {
//   const element = letras[i];
//   console.log(element);
// }
console.log("for each");
letras.forEach((elemento) => {
  console.log(elemento);
});

//! PUSH, POP, SHIFT
// POP saca el ultimo elemento de mi arreglo y muta el arreglo original
// Shift saca el primer elemento de mi arreglo y muta el arreglo original

let letras2 = ["a", "b", "c", "d", "e"];

letras2.push("f");
console.log(letras2);

letras2.pop();
console.log(letras2);

letras2.shift();
console.log(letras2);

//! MAP
//Es inmutable

let estudiantes = ["juan", "dayana", "natalia", "firulais"];

let asistencia = estudiantes.map((nombres) => {
  return {
    nombre: nombres,
    asistencia: true,
  };
});
console.log(estudiantes);
console.log(asistencia);

//!FILTER
// Es inmutable, permite filtrar elementos en un arreglo

let estudiante = [
  { nombre: "Aida", edad: 19, matriculado: true },
  { nombre: "Chupelo", edad: 15, matriculado: false },
  { nombre: "Donut", edad: 35, matriculado: true },
  { nombre: "Hillaro", edad: 29, matriculado: false },
];
// let estudianteFiltrado = estudiante.filter((est) => {
//   return est.edad >= 20;
// });
let estudianteFiltrado = estudiante.filter((est) => {
  return est.edad >= 20 && est.matriculado;
});
console.log(estudiante);
console.log(estudianteFiltrado);

//! REDUCE
// reduce todo el array a un solo valor, es inmutable

let calificaciones = [3, 5, 9, 10, 10];
// en el acumulador se va a ir haciendo la suma de las calificaciones, valorActual es cada item de la calificación es cada elemento del array
let suma = calificaciones.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0
);
console.log(calificaciones);
console.log(suma);

let promedio = suma / calificaciones.length;
console.log(promedio);

let edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];

let resultado = edades.reduce((acum, edad) => {
  if (!acum[edad]) {
    acum[edad] = 1;
  } else {
    acum[edad]++;
  }
  return acum;
}, {});

console.log(edades);
console.log(resultado);

//! SOME -- EVERY

//some: nos va a ayudar a verificar si almenos 1 de todos los elementos cumple con una condicion especifica

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoSome = numeros.some((numero) => numero % 2 === 0);
console.log(resultadoSome);

//? Every
// every: retorna un valor logico si todos los elementos cumplen con una condición especifica

let resultadoEvery = numeros.every((numero) => numero % 2 === 0);
console.log(resultadoEvery);

//! FIND -- FINDINDEX
// find: nos va a ayudar a encontrar el primer elemento que cumpla con una condición y no muta el arreglo orginal
// findIndex: nos va a ayudar a encontrar (retornar)  el indice del primer elemento que cumpla con una condición

let clientes = [
  { id: 1, nombre: "peranito" },
  { id: 2, nombre: "panguanito" },
  { id: 3, nombre: "sultanito" },
  { id: 4, nombre: "Si Sabe" },
  { id: 5, nombre: "Bendito" },
];

let cliente = clientes.find((cliente) => cliente.id === 1);
console.log(cliente);
console.log(clientes);

//? FindIndex

let clientesFindIndex = [
  { id: 1, nombre: "peranito" },
  { id: 2, nombre: "panguanito" },
  { id: 3, nombre: "sultanito" },
  { id: 4, nombre: "Si Sabe" },
  { id: 5, nombre: "Bendito" },
];

let posicion = clientesFindIndex.findIndex((cliente) => cliente.id === 2);
console.log(posicion);

//! INCLUDES
// ayuda a determinar si dentro de un arreglo existe un elemento en especifico y devuelve un valor booleano

let mascotas = ["perro", "Gato", "conejo"];
let resultadoIncludes = mascotas.includes("Gato");
console.log(resultadoIncludes);

//! JOIN
// ayuda a unir todos los elem,entos de un arreglo y genera un string a partir de esa union

let elementos = ["aire", "fuego", "agua"];
let resultadoJoin = elementos.join(" - ");
console.log(resultadoJoin);

//! Concat, SORT, SLICE, SPLICE
// concat: nos ayuda a unir dos arreglos
// sort: nos ayuda a ordenar los elementos de un arreglo
// slice: nos ayuda a obtener una porción de un arreglo
// splice: nos ayuda a eliminar elementos de un arreglo

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 0];
let resultadoConcat = array1.concat(array2);
let arraySpread = [...array1, ...array2];
console.log(resultadoConcat);
console.log(arraySpread);

//? SORT
// ordena los elementos de un arreglo de forma ascendente o descendente

let arraySort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arraySort.sort());

let meses = ["Dic", "Ene", "Marzo", "Feb"];
console.log(meses.sort());

//? Splice
// nos ayuda a eliminar elementos de un arreglo, es mutable
// recibe 3 parametros, el primero es desde que inidice deseo eliminar el arreglo, el segundo es cuantos elementos voy a eliminar y el 3 es si deseo cambiar el valor en esa pos por otro valor
let nombres = ["juan", "lucho", "casta"];
console.log(nombres.splice(1, 1)); // aqui elimino la poscicion 1 y solo esa pos, si quisiera eliminar mas el segundo numero deberia ser 2,3 etc, o si es todos dejarlo sin el
//segundo 1 ejemplo nombres.splice(1)

//? Slice
// nos ayuda a obtener una porción de un arreglo, nos retorna una copia mas pequeña del arreglo
// recibe 2 parametros, el primero es desde que inidice deseo obtener el arreglo, la segunda parte es hasta donde lo deseo cortar
