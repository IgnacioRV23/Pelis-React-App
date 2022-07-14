import React from 'react';
import {Link} from 'react-router-dom';

export const Listado = ({listaProductos}) => {

    const errorImagen = (event) => {
        event.target.src = "https://www.globalsign.com/application/files/9516/0389/3750/What_Is_an_SSL_Common_Name_Mismatch_Error_-_Blog_Image.jpg";
        event.onerror = null
    };

    return(
        <>
            {listaProductos != null ?
                listaProductos.map((apartado) => {
                    return (
                        <article className="card" key={apartado.id}>
                            <Link to={`/detalle/${apartado.tipo}/${apartado.id}`}>
                                <img src={apartado.imagen} onError={event => errorImagen(event)} alt={apartado.nombre} className="image-card" />
                                <p className="date-card">{apartado.fecha}</p>
                                    <p className="title-card">{apartado.nombre}</p>
                            </Link>
                        </article>
                    )
                })
                :
                <h2>No se encontraron resultados</h2>
            }
        </>
    );
};