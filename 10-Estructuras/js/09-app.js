/**
 * 
 * ********************
 * El operador ternario
 * ********************
 * 
 */

const autenticado = true;
const puedePagar = true;

console.log( (autenticado && puedePagar) ? 'Si puede pagar' : 'No, no está atenticado');

//Ternario anidado
console.log( autenticado ? puedePagar  ? 'Si autenticado y puede pagar' : 'Si autenticado, no pede pagar' : 'No, no está atenticado');