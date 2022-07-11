import React from 'react'
import { useParams } from 'react-router-dom';
import anime from '../model/anime.json';
import series from '../model/series.json';
import peliculas from '../model/peliculas.json';
import fs from 'fs';

export const Detalle = ({ setValidaLayout }) => {

  setValidaLayout(true);

  let { tipo, id } = useParams();

  switch (tipo) {
    case "pelicula":
      return (
        <>
          {
            peliculas.map((pelicula) => {
              if (pelicula.id === id) {
                return (
                  <div className='container_detalle' key={pelicula.id}>
                    <div className='detalle-flex'>
                      <section>
                        <img src={pelicula.imagen} alt={pelicula.nombre} className='imagen-detalle' />
                      </section>
                      <section className='datos-detalle'>
                        <h2 className='title-detalle'>Detalles de la película</h2>
                        <p>Nombre: <span className='color-pelicula'>{pelicula.nombre}</span></p>
                        <p>Género: <span className='color-pelicula'>{pelicula.genero}</span></p>
                        <p>Fecha: <span className='color-pelicula'>{pelicula.fecha}</span></p>
                        <p>Duración: <span className='color-pelicula'>{pelicula.duracion}</span></p>
                        <p className='boton-ver'>Ver película</p>
                      </section>
                    </div>
                    <section className='descripcion-detalle'>
                      <h2>Descripción de la película</h2>
                      <p className='parrafo-descripcion'>{pelicula.descripcion}</p>
                    </section>
                  </div>
                )
              }
            })
          }
        </>
      )
      break;
    case "serie":
      return (
        <>
          {
            series.map((serie) => {
              if (serie.id === id) {
                return (
                  <div className='container_detalle' key={serie.id}>
                    <div className='detalle-flex'>
                      <section>
                        <img src={serie.imagen} alt={serie.nombre} className='imagen-detalle' />
                      </section>
                      <section className='datos-detalle'>
                        <h2 className='title-detalle'>Detalles de la película</h2>
                        <p>Nombre: <span className='color-serie'>{serie.nombre}</span></p>
                        <p>Género: <span className='color-serie'>{serie.genero}</span></p>
                        <p>Fecha: <span className='color-serie'>{serie.fecha}</span></p>
                        <p>Duración: <span className='color-serie'>{serie.duracion}</span></p>
                        <p className='boton-ver'>Ver película</p>
                      </section>
                    </div>
                    <section className='descripcion-detalle'>
                      <h2>Descripción de la película</h2>
                      <p className='parrafo-descripcion'>{serie.descripcion}</p>
                    </section>
                  </div>
                )
              }
            })
          }
        </>
      )
      break;
    case "anime":
      return (
        <>
          {
            anime.map((anime) => {
              if (anime.id === id) {
                return (
                  <div className='container_detalle' key={anime.id}>
                    <div className='detalle-flex'>
                      <section>
                        <img src={anime.imagen} alt={anime.nombre} className='imagen-detalle' />
                      </section>
                      <section className='datos-detalle'>
                        <h2 className='title-detalle'>Detalles de la película</h2>
                        <p>Nombre: <span className='color-anime'>{anime.nombre}</span></p>
                        <p>Género: <span className='color-anime'>{anime.genero}</span></p>
                        <p>Fecha: <span className='color-anime'>{anime.fecha}</span></p>
                        <p>Duración: <span className='color-anime'>{anime.duracion}</span></p>
                        <p className='boton-ver'>Ver película</p>
                      </section>
                    </div>
                    <section className='descripcion-detalle'>
                      <h2>Descripción de la película</h2>
                      <p className='parrafo-descripcion'>{anime.descripcion}</p>
                    </section>
                  </div>
                )
              }
            })
          }
        </>
      )
      break;
  }
}