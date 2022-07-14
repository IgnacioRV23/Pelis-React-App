import React from 'react'
import { Listado } from './Listado';

export const Peliculas = ({listaPeliculas}) => {
    return (
        <>
            <h2 className="title-cards">Películas</h2>
            { listaPeliculas.length === 0 ?
                <p className='title-error'>Sin resultados</p>
                :
                null
            }
            <div className="container_cards">
                <Listado listaProductos={listaPeliculas} />
            </div>
        </>
    )
}