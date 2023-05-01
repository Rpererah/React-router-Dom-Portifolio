import React from 'react'
import estilo from './Post.module.css'
export default function Post({post}) {
  return (
    <div className={estilo.post}>
        <img
        className={estilo.capa}
        alt={`imagem de capa do post ${post.id}`}
        src={`/assets/posts/${post.id}/capa.png`}
        />
        <h2 className={estilo.titulo}>{post.titulo}</h2>
        <button className={estilo.botaoLer}>Ler</button>
    </div>
  )
}
