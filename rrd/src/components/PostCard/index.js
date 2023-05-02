import React from 'react'
import estilo from './Post.module.css'
import { Link } from 'react-router-dom'
import BotaoPrincipal from 'components/BotaoPrincipal'
export default function PostCard({post}) {
  return (
    <Link to={`/post/${post.id}`}>
    
    <div className={estilo.post}>
        <img
        className={estilo.capa}
        alt={`imagem de capa do post ${post.id}`}
        src={`/assets/posts/${post.id}/capa.png`}
        />
        <h2 className={estilo.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
    </div>
    </Link>
  )
}
