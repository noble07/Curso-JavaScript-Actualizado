/**
 * 
 * *******************************************************
 * .map para iterar un array y sus diferencias con forEach
 * *******************************************************
 * 
 */

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];

carrito.forEach( function(producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} );

//Son similares pero .map crea un arreglo nuevo en una variable y forEach no lo hace
const nuevoArreglo = carrito.map( function(producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
} );

console.log(nuevoArreglo);