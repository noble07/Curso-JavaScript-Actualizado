/**
 * 
 * *****************
 * Recorrer un Array
 * *****************
 * 
 */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table(meses);

//Cuanto mide el arreglo
console.log(meses.length);

//Recorrer un arreglo a través de un foor loop

for(let i = 0; i < meses.length; i++){
  console.log(meses[i]);
}