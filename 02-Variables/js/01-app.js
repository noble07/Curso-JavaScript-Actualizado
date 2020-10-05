/**
 * 
 * 
 * Creación de variables en JavaScript con var
 * 
 */

//Inicializar una variable con un valor usando la palabra reservada Var
var producto = 'Monitor de 24 pulgadas';
console.log(producto);

//Reasignar variables en JavaScript
producto = 'Monitor de 19 pulgadas';
console.log(producto);

//JavaScript es un lenguaje de tipo dinámico (No hay necesidad de especificar el tipo de datos)
producto = 20;
console.log(producto);

//Se pueden inicializar variables sin ningun valor
var disponible;

disponible = true;

disponible = false;

//Inicializar múltiples variables
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

/**
 * 
 * ***************************
 * Reglas para crear variables
 * ***************************
 * 
 */

//Las variables no pueden iniciar con numeros
// var 99dias; Error
var dias99; //Esto si se puede

//No es recomendable nombrarlas de la siguiente manera
// var 01_; Error

//Estás si funcionan pero no es correcto por convención
var _01;
var _usuario;
var __usuario;

//Convenciones en la creación de variables
var nombreProductoCategoriaPrecio; //Este estilo de creación se le conoce como Camel Case, está es la más común
var nombre_producto_categoria_precio; //Este estilo de creación se le conoce como Under Score ó Snake Case
var Producto //Pascal Case, se utiliza en funciones