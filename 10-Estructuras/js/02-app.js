/**
 * 
 * *******************
 * Comparador estricto
 * *******************
 * 
 */

const puntaje = 1000;

//Diferente que
/* if (puntaje != 1000) { //!= diferente == igual a
  console.log('Si! es difernte');
} */

if (puntaje === '1000') { // === Operador estricto
  console.log('Si es igual');
}else{
  console.log('No es igual');
}

// == Operador que no es estricto
// === Operador estricto

if (puntaje !== '1000') { // !== Estrictamente diferente
  console.log('Es diferente');
}else{
  console.log('Es igual');
}