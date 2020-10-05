/**
 * 
 * ************************************************
 * Buenas practicas a la hora de evaluar un Boolean
 * ************************************************
 * 
 */

const auntenticado = true;

if (auntenticado) {
  console.log('Si puedes ver netflix');
}else{
  console.log('No, no puedes ver netflix');
}

//Operador ternario
console.log(auntenticado ? 'Si esta autenticado' : 'No esta autenticado');