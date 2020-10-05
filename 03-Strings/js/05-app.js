/**
 * 
 * **************
 * String Methods
 * **************
 * 
 * @see 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice'
 * @see 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substring'
 * @see 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charAt'
 * 
 */

const producto = 'Monitor 20 Pulgadas';

//Reemplazar una cadena de caracteres con otra
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//Cortar una parte de la cadena de texto
console.log(producto.slice(0, 10));
console.log(producto.slice(8));

//Si el inicio es mayor a final no va a hacer nada y devolvera una cadena vacia
console.log(producto.slice(2, 1));

//Alternativa a slice
console.log(producto.substring(0, 10));

//Si el inicio es mayor al final, substring intercambia los indices
console.log(producto.substring(2, 1)); //Quedarian los indices (1, 2)

const usuario = 'Juan';
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));