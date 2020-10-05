/**
 * 
 * ***************************
 * El problema con los objetos
 * ***************************
 * 
 */


const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true
};

//A pesar de que el objeto es declarado const sus propiedades si se puede reescribir o eliminar
producto.disponible = false;
delete producto.precio;

console.log(producto);

