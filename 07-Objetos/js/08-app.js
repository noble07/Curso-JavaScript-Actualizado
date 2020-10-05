'use strict';

/**
 * 
 * ********************************************
 * Congelar un objeto para no poderlo modificar
 * ********************************************
 * 
 */

const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true
};

Object.freeze(producto);

//Arrojaran un error estás acciones ya que el objeto no se puede modificar
// producto.disponible = false;
// producto.imagen = 'imagen.jpg';
// delete producto.precio;

console.log(producto);

//Valida si el objeto está congelado o no
console.log(Object.isFrozen(producto));