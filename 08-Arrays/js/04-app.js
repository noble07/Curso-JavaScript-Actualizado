/**
 * 
 * *********************************
 * Agregar nuevos valores a un array
 * *********************************
 * 
 */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//A pesar que está declarado como const, sus valores si se pueden modificar
meses[0] = 'Nuevo mes';
meses[10] = 'Último mes';

console.table(meses);