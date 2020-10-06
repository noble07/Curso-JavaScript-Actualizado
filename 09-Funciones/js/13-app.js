/**
 * 
 * *******************************************
 * Arrow Functions en el reproductor de Música
 * *******************************************
 * 
 */

const reproductor = {
  cancion: '',

  reproducir: id => console.log(`Reproduciendo canción con el id ${id}`) ,
  pausar: () => console.log(`Pausando...`),
  borrar: id => console.log(`Borrando canción... ${id}`),
  agregarPlaylist: nombre => console.log(`Se ha agregado la playlist ${nombre}`),
  reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

  //Set y Get en objetos
  set nuevaCancion(cancion){
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion(){
    console.log(`${this.cancion}`);
  }
};

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.agregarPlaylist('Heavy Metal');
reproductor.agregarPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Heavy Metal');