import React from 'react'
import {crearProducto} from '../controller/crearProducto';

export const Formulario = (listasProductos) => {
  return (
    <form onSubmit={(e) => crearProducto(e, listasProductos)}>
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