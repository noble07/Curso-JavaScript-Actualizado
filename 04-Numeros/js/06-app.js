/**
 * 
 * ***************************
 * Convertir Strings a Números
 * ***************************
 * 
 */

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

//El operador typeof retorna el tipo de variable que se tiene (string, number, object, NaN, etc...)
// console.log(typeof numero1);

//Convertir de string a numero entero
console.log(numero1);
console.log(Number.parseInt(numero1));
console.log(Number.parseInt(numero2)); //Queda 20 sin los decimales
console.log(Number.parseFloat(numero2)); //Lo convierte en flotante para que conserve los decimales
console.log(Number.parseInt(numero3)); //Retorna NaN (Not a Number)

//Revisar si un número es entero o no
console.log(Number.isInteger(numero4)); //True
console.log(Number.isInteger(numero3)); //False