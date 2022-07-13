import React from 'react'
import { Listado } from './Listado';

export const Series = ({listaSeries, setValidaLayout}) => {

    setValidaLayout(true);

    return (
        <>
            <h2 className="title-cards">Series</h2>
            <div className="container_cards">
                <Listado listaProductos={listaSeries} />
            </div>
        </>
    )
}
