import React from 'react'
import anime from '../model/anime.json';
import series from '../model/series.json';
import peliculas from '../model/peliculas.json';
import { useParams } from 'react-router-dom';

export const Detalle = ({ setValidaLayout }) => {

  let arrayProducto = [];

  let nombreProducto = "";
  
  setValidaLayout(true);
  
  let { tipo, id } = useParams();
  
  const errorImagen = (event) => {
    event.target.src = "https://www.globalsign.com/application/files/9516/0389/3750/What_Is_an_SSL_Common_Name_Mismatch_Error_-_Blog_Image.jpg";
    event.onerror = null;
  };

  switch (tipo) {
    case "pelicula":
      arrayProducto = peliculas;
      nombreProducto = "película";
      break;
      case "serie":
      arrayProducto = series;
      nombreProducto = "serie";
      break;
      case "anime":
        arrayProducto = anime;
        nombreProducto = "anime";
      break;
  }

  return (
    <>
      {
        arrayProducto.map((elemento) => {
          if (elemento.id == id) {
            return (
              <div className='container_detalle' key={elemento.id}>
                <div className='detalle-flex'>
                  <section>
                    <img src={elemento.imagen} alt={elemento.nombre} onError={(event) => errorImagen(event)} className='imagen-detalle'/>
                  </section>
                  <section className='datos-detalle'>
                    <h2 className='title-detalle'>Detalle {nombreProducto}</h2>
                    <p>Nombre: <span className='color-elemento'>{elemento.nombre}</span></p>
                    <p>Género: <span className='color-elemento'>{elemento.genero}</span></p>
                    <p>Fecha: <span className='color-elemento'>{elemento.fecha}</span></p>
                    <p>Duración: <span className='color-elemento'>{elemento.duracion}</span></p>
                    <p className='boton-ver'>Ver {nombreProducto}</p>
                  </section>
                </div>
                <section className='descripcion-detalle'>
                  <h2>Descripción {nombreProducto}</h2>
                  <p className='parrafo-descripcion'>{elemento.descripcion}</p>
                </section>
              </div>
            )
          }
        })
      }
    </>
  )
}