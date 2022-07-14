import anime from '../model/anime.json';
import series from '../model/series.json';
import peliculas from '../model/peliculas.json';

export const crearProducto = (event, listasProductos) => {
    event.preventDefault();

    let id = 16;
    
    let nombre = event.target.nombre.value;
    let genero = event.target.genero.value;
    let duracion = event.target.duracion.value;
    let imagen = event.target.imagen.value;
    let descripcion = event.target.descripcion.value;
    let fecha = event.target.fecha.value;
    let tipo = event.target.tipo.value;


    if (nombre == "" || genero == "" || duracion == "" || imagen == "" || descripcion == "" || fecha == "" || tipo == "") {
      alert("Error, intente de nuevo.");
    } else {
      try {
        let producto = {
          id,
          nombre,
          genero,
          duracion,
          imagen,
          descripcion,
          fecha,
          tipo
        }
        id = id+1;

        switch (tipo) {
          case "pelicula":
            peliculas.push(producto);
            listasProductos.setListaPeliculas((peliculas) => [...peliculas]);
            break;
            
            case "serie":
              series.push(producto);
              listasProductos.setListaSeries((series) => [...series]);
            break;

          case "anime":
            anime.push(producto);
            listasProductos.setListaAnime((anime) => [...anime]);
            break;
        }
        event.target.reset();
        alert("Registro exitoso.");
      } catch (error) {
        alert("Error, intente de nuevo.");
      }
    }
}