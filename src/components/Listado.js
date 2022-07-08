import React from 'react';

export const Listado = ({apartados}) => {
    return(
        <>
            { apartados != null ?
                apartados.map((apartado) => {
                    return (
                        <article className="card" key={apartado.nombre}>
                            <img src={apartado.imagen} alt={apartado.nombre} className="image-card" />
                            
                            <p className="date-card">{apartado.anio}</p>
                            <p className="title-card">{apartado.nombre}</p>
                        </article>
                    )
                })
                :
                <h2>No se encontraron resultados</h2>

            }
        </>
    );
};