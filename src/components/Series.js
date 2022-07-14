import React from 'react'
import { Listado } from './Listado';

export const Series = ({listaSeries}) => {
    return (
        <>
            <h2 className="title-cards">Series</h2>
            { listaSeries.length === 0 ?
                <p className='title-error'>Sin resultados</p>
                :
                null
            }
            <div className="container_cards">
                <Listado listaProductos={listaSeries} />
            </div>
        </>
    )
}