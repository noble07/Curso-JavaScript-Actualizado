/**
 * 
 * ****************
 * Copiar 2 objetos
 * ****************
 * 
 * @see 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator'
 * 
 */

const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true
};

const medidas = {
  peso: '1kg',
  medida: '1m'
};

console.log(producto);
console.log(medidas);

//Se asignan ambos onjetos a una nueva variable y los junta
const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator, está es la más utilizada
const resultado2 = {...producto, ...medidas};

console.log(resultado);
console.log(resultado2);