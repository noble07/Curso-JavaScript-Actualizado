/**
 * 
 * ********************************************
 * Funciones en objetos y acceder a sus valores
 * ********************************************
 * 
 */

let nombre = 'Hola',
    precio = 20;

//La palabra reservada this hace referencia a los valores almacenados en el mismo objeto, por ende si no se utiliza
//accedera a las variables por fuera del objeto

const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 300,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
  }
};

const producto2 = {
  nombre: 'Tablet',
  precio: 3000,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
  }
};

producto.mostrarInfo();
producto2.mostrarInfo();