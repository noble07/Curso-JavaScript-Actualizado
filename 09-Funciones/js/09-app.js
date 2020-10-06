/**
 * 
 * ********************
 * Metodos de Propiedad
 * ********************
 * 
 */

const reproductor = {
  reproducir: function(id) {
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: function(){
    console.log(`Pausando...`);
  },
  borrar: function(id) {
    console.log(`Borrando canción... ${id}`);
  },
  agregarPlaylist: function(nombre) {
    console.log(`Se ha agregado la playlist ${nombre}`);
  },
  reproducirPlaylist: function(nombre) {
    console.log(`Reproduciendo la playlist ${nombre}`);
  }
};

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.agregarPlaylist('Heavy Metal');
reproductor.agregarPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Heavy Metal');