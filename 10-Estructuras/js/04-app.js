/**
 * 
 * ********************************
 * Comparador Mayor que y Menor que
 * ********************************
 * 
 */

const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if (dinero >= totalAPagar) {
  console.log('Si podemos pagar');
} else if (cheque){
  console.log('Sí, tengo un cheque');
}else if (tarjeta){
  console.log('Si puedo pagar porque tego la tarjeta');
}else{
  console.log('Fondos insuficientes');
}