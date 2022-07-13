import React from 'react'
import { Listado } from '../components/Listado';

export const Main = ({ listaPeliculas, listaSeries, listaAnime, setValidaLayout }) => {

    setValidaLayout(false);

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

            <h2 className="title-cards">Series</h2>
            { listaSeries.length === 0 ?
                <p className='title-error'>Sin resultados</p>
                :
                null
            }
            <div className="container_cards">
                <Listado listaProductos={listaSeries} />
            </div>

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