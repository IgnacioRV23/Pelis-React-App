import React from 'react'
import { Listado } from './Listado'

export const Buscador = () => {
  return (
    <>
            <h2 className="title-cards">Resultados encotrados</h2>
            <div className="container_cards">
                <Listado listaProductos={""} />
            </div>
        </>
  )
}