/**
 * 
 * **************************************
 * Concatenar un String y Template String
 * **************************************
 * 
 */

const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD ';

//Se concatenan las cadenas de texto con la función concat
console.log(producto.concat(precio));
console.log(producto.concat('en descuento'));

//También se puede concatenar una cadena con el operador de concatenación "+"
console.log(producto + 'Con un precio de: ' + precio);

//Otros ejemplos de concatenación
console.log('El producto: ' + producto + 'tiene un precio de: ' + precio);
console.log('El producto: ' , producto , 'tiene un precio de: ' , precio);

//Concatenar texto a través de un Template String ó Template Literal, se logra utilizando el Backtick '`'
console.log(`El producto ${producto}tiene un precio de $${precio}`);
//Está forma es la más nuevas, se implemento desde EMA 6