/**
 * 
 * ************
 * Introducción
 * ************
 * 
 */

//Se guarda el nombre del usuario
const nombre = prompt("Cuál es tu nombre?");

//Se obtiene el elemento con la clase contenido y se cambia el HTML interno
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno.`;

//Asigna el valor a la variable producto
const producto = 'Monitor de 24 pulgadas';

/**
 * 
 * *************************************
 * Diferentes tipos de logs a la consola
 * *************************************
 * 
 */

//Manda un mensaje de error a la consola
console.error('Algo salió mal.');

//Manda un mensaje de advertencia a la consola
console.warn('Esto es una advertencia.');

//Muestra en cuanto tiempo se ejecuto el código que sigue justo después de time y antes de timeEnd
console.time('Hola');

console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');

console.timeEnd('Hola');
