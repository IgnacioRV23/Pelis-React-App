import React from 'react'
import { Listado } from './Listado';

export const Peliculas = ({listaPeliculas, setValidaLayout}) => {

    setValidaLayout(true);

    return (
        <>
            <h2 className="title-cards">Películas</h2>
            <div className="container_cards">
                <Listado listaProductos={listaPeliculas} />
            </div>
        </>
    )
}
