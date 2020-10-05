/**
 * 
 * *******************************
 * Object .keys, .values, .entries
 * *******************************
 * 
 */

const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true
};

//Se obtienen las llaves del objeto, se utiliza para saber si tiene información
console.log(Object.keys(producto));

//Se obtienen los valores
console.log(Object.values(producto));

//Retorna las llaves y los valores agrupados en un array
console.log(Object.entries(producto));