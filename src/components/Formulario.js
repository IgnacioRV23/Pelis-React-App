import React, { useState } from 'react'
import anime from '../model/anime.json';
import series from '../model/series.json';
import peliculas from '../model/peliculas.json';

export const Formulario = ({setListaPeliculas, setListaSeries, setListaAnime}) => {

  let [id, setId] = useState(16);

  const crearProducto = (e) => {
    e.preventDefault();
    
    let nombre = e.target.nombre.value;
    let genero = e.target.genero.value;
    let duracion = e.target.duracion.value;
    let imagen = e.target.imagen.value;
    let descripcion = e.target.descripcion.value;
    let fecha = e.target.fecha.value;
    let tipo = e.target.tipo.value;


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
        setId(id+1);

        switch (tipo) {
          case "pelicula":
            peliculas.push(producto);
            setListaPeliculas((peliculas) => [...peliculas]);
            break;
            
            case "serie":
              series.push(producto);
              setListaSeries((series) => [...series]);
            break;

          case "anime":
            anime.push(producto);
            setListaAnime((anime) => [...anime]);
            break;
        }
        e.target.reset();
        alert("Registro exitoso.");
      } catch (error) {
        alert("Error, intente de nuevo.");
      }
    }
  };

  return (
    <form onSubmit={crearProducto}>
      <input type="text" name="nombre" placeholder="Nombre" />
      <input type="text" name="genero" placeholder="Género" />
      <input type="text" name="duracion" placeholder="Duración" />
      <input type="text" name="imagen" placeholder="Imagen URL" />
      <input type="text" name="descripcion" placeholder="Descripción" />
      <input type="date" name="fecha" className="form-date" />
      <select name="tipo">
        <option value="">Elegir tipo</option>
        <option value="pelicula">Película</option>
        <option value="serie">Serie</option>
        <option value="anime">Anime</option>
      </select>
      <input className="submit" type="submit" value="CREAR" />
    </form>
  )
}