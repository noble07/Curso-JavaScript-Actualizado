/**
 * 
 * ***************************************
 * Como acceder a los valores de un objeto
 * ***************************************
 * 
 */

const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true
};

console.log(producto);

//Se acceden a las propiedades con la sintaxis de punto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//También se puede acceder de está manera
console.log(producto['nombre']);