'use strict';

/**
 * 
 * ****************
 * Sellar un objeto
 * ****************
 * 
 */

const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true
};

//A diferencia de freeze si se pueden modificar las propiedades existentes
Object.seal(producto);

//Con seal si se puede modificar
producto.disponible = false;

//Arrojaran un error estás acciones ya que el objeto está sellado
// producto.imagen = 'imagen.jpg';
// delete producto.precio;

console.log(producto);

//Valida si el objeto está sellado o no
console.log(Object.isSealed(producto));