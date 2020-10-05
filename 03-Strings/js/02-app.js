/**
 * 
 * *******************
 * Metodos para Strings
 * *******************
 * 
 */

const producto = "Monitor 20 Pulgadas";

console.log(producto);

//Está propiedad nos devuelve la cantidad de caracteres en la cadena de texto
console.log(producto.length);

//Devuelve la posición en donde empieza la palabra buscada, devuelve -1 si no existe la palabra en la cadena
console.log(producto.indexOf('Monitor'));

//Valida si la palabra buscada existe en la cadena de texto (Es Key Sensitive), duelve un booleano
console.log(producto.includes('Monitor'));
console.log(producto.includes('Tablet'));

