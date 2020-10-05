/**
 * 
 * **************************************
 * Cortar espacios en blanco de un String
 * **************************************
 * 
 */

const producto = '                    Monitor 20 Pulgadas                                    ';

console.log(producto);
console.log(producto.length);

//Eliminar espacios del inicio
console.log(producto.trimStart());

//Eliminar espacios al final
console.log(producto.trimEnd());

//Chaining de eventos
console.log(producto.trimStart().trimEnd());

//Se elimina los espacios en ambas direcciones
console.log(producto.trim());