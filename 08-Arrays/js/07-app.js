/**
 * 
 * *****************************
 * Eliminar elementos con Splice
 * *****************************
 * 
 */

//Está es la forma imperativa

const carrito = [];

// Definir un producto
const producto = {
  nombre: 'Monitor 32 Pulgadas',
  precio: 400
};

const producto2 = {
  nombre: 'Celular',
  precio: 800
};

const producto4 = {
  nombre: 'Celular 2',
  precio: 100
};

//Añadir el elemento al array
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
  nombre: 'Teclado',
  precio: 50
};

//Añade el elemento al inicio del array
carrito.unshift(producto3);
console.table(carrito);

//Eliminar el último elemento de un arreglo...
// carrito.pop();
// console.table(carrito);

//Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

//Eliminar desde cualquier posición del Array
carrito.splice(1, 1);
console.table(carrito);