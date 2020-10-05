/**
 * 
 * *********************************************
 * Crear un nuevo arreglo con el spread operator
 * *********************************************
 * 
 */

//Está es la forma declarativa

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

const producto3 = {
  nombre: 'Teclado',
  precio: 50
};

//Se crea un nuevo arreglo con el spread operator (forma declarativa)

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];

console.table(resultado);