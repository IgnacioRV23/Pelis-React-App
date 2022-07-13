import React from 'react'
import { Listado } from './Listado';

export const Anime = ({listaAnime, setValidaLayout}) => {

    setValidaLayout(true);

    return (
        <>
            <h2 className="title-cards">Anime</h2>
            <div className="container_cards">
                <Listado listaProductos={listaAnime} />
            </div>
        </>
    )
}