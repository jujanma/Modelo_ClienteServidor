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
