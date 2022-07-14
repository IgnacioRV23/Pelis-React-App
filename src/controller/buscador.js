export const buscador = (event, listaElementos) => {
    let nombre = event.target.value;

    // Se buscan las peliculas que coinciden con la busqueda y se setea el resultado a la lista.
    let productosEncontrados = listaElementos.peliculas.filter(pelicula => {
        return pelicula.nombre.toLowerCase().includes(nombre.toLowerCase());
    });
    listaElementos.setListaPeliculas(productosEncontrados);

    // Se buscan las series que coinciden con la busqueda y se setea el resultado a la lista.
    productosEncontrados = listaElementos.series.filter(serie => {
        return serie.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase());
    });
    listaElementos.setListaSeries(productosEncontrados);

    // Se buscan los animes que coinciden con la busqueda y se setea el resultado a la lista.
    productosEncontrados = listaElementos.anime.filter(anime => {
        return anime.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase());
    });
    listaElementos.setListaAnime(productosEncontrados);
};