import React from 'react'
import estilo from './PostModelo.module.css'
export default function PostModelo({ fotoCapa, titulo,children }) {
    return (
        <article className={estilo.postModeloContainer}>
            <div
                className={estilo.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            >

            </div>
            <h2 className={estilo.titulo}>
                {titulo}
            </h2>
            <div className={estilo.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}
