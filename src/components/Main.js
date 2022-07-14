import React from 'react'
import { Anime } from './Anime';
import { Series } from './Series';
import { Peliculas } from './Peliculas';

export const Main = ({ listaPeliculas, listaSeries, listaAnime, setValidaLayout }) => {

    setValidaLayout(false);

    return (
        <>
            <Peliculas listaPeliculas={listaPeliculas}/>

            <Series listaSeries={listaSeries}/>

            <Anime listaAnime={listaAnime}/>
        </>
    )
}