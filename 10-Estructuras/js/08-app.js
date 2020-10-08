/**
 * 
 * *********************************************
 * Detener la ejecución de un If con una función
 * *********************************************
 * 
 */

const autenticado = true;

//NO hay necesidad de evaluar la expresión === true
if (autenticado) {
  console.log('El usuario esta autenticado');
}


//Return detiene la ejecución del resto de código dentro de la función
const puntaje = 500;

function revisarPuntaje() {
  if (puntaje > 400) {
    console.log('Excelente!!');
    return;
  }

  if (puntaje > 300) {
    console.log('Buen puntaje... felicidades');
  }
}

revisarPuntaje();