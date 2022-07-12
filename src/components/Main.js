import React from 'react'
import { Listado } from '../components/Listado';

export const Main = ({ listaPeliculas, listaSeries, listaAnime, setValidaLayout, }) => {

    setValidaLayout(false);

    return (
        <>
            <h2 className="title-cards">Películas</h2>
            <div className="container_cards">
                <Listado listaProductos={listaPeliculas} />
            </div>

            <h2 className="title-cards">Series</h2>
            <div className="container_cards">
                <Listado listaProductos={listaSeries} />
            </div>

            <h2 className="title-cards">Anime</h2>
            <div className="container_cards">
                <Listado listaProductos={listaAnime} />
            </div>
        </>
    )
}