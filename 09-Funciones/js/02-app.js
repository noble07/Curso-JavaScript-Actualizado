/**
 * 
 * **************************************************************
 * La diferencia entre Function expression y Function Declaration
 * **************************************************************
 * 
 */

//Declaración de Función ( Function Declaration )
function sumar() {
  console.log(2 + 2);
}

sumar();

//Expresión de Función ( Function Expression )
const sumar2 = function(){
  console.log(3 + 3);
}

sumar2();

//La diferencia entre ambas es que la función declaration se puede llamar a ejecutar antes de ser definida mientras que function expression no