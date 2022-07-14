import React from 'react'
import { Listado } from './Listado';

export const Anime = ({listaAnime}) => {
    return (
        <>
            <h2 className="title-cards">Anime</h2>
            { listaAnime.length === 0 ?
                <p className='title-error'>Sin resultados</p>
                :
                null
            }
            <div className="container_cards">
                <Listado listaProductos={listaAnime} />
            </div>
        </>
    )
}