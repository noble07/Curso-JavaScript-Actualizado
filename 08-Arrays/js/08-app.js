/**
 * 
 * ***********************
 * Destructuring de Arrays
 * ***********************
 * 
 */

const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true
};

// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring
const { nombre } = producto;
console.log(nombre);

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

const [ primero, segundo, ...tercero ] = numeros;

console.log(primero);
console.log(segundo);
console.log(tercero);