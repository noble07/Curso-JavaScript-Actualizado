/**
 * 
 * ******************
 * Comparar 2 valores
 * ******************
 * 
 */

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si 2 números son iguales
console.log(numero1 == numero3); //false
console.log(numero1 == numero2); //true, el operador "==" trata de convertir los valores para que se cumpla la condición

//Comparador estricto
console.log(numero1 === numero2); //false, compara hasta los tipos de datos
console.log(numero1 === parseInt(numero2)); //true, se convierte el valor de numero2 a entero

//typeof devuelve el tipo de dato
console.log(typeof numero1); //number
console.log(typeof numero2); //string

//Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); //true
console.log(numero1 != numero2); //false, compara solo los valores, trata de convertir para que se cumpla la condición

//Diferente estricto
console.log(numero1 !== numero2); //true
console.log(numero1 !== parseInt(numero2)); //false