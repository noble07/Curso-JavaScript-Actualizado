/**
 * 
 * *******************************
 * String Methods - Repeat y Split
 * *******************************
 * 
 */

const producto = 'Monitor 20 Pulgadas';

//Te permite repetir una cadena de texto
//Si a .repeat le pasas un decimal la función redondea el número
const texto = ' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto}!!!`);

//Divide un String
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(' '));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(','));

const tweet = 'Aprendiendo JavaScript Moderno #JSModernoConJuan';
console.log(tweet.split('#'));