import React from 'react'

export const Formulario = () => {
  return (
    <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Género" />
        <input type="text" placeholder="Duración" />
        <input type="text" placeholder="Imagen URL" />
        <input type="date" className="form-date"/>
        <select>
            <option value="">Elegir tipo</option>
            <option value="pelicula">Película</option>
            <option value="serie">Serie</option>
            <option value="anime">Anime</option>
        </select>
        <button className="button">CREAR</button>
    </form>
  )
}