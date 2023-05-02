import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import  posts  from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css';
import NotFound from 'screens/NotFound/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';
export default function Post() {
  
  // pega os os parametros de url
    const parametros=useParams();
    const post=posts.find((post)=>{
        return post.id === parseInt(parametros.id)
    })
    if(!post){
        return <NotFound />
    }
    console.log(post)
  return (
    <Routes>
      <Route path="*" element={PaginaPadrao}>
        <Route index element={
          <PostModelo
          fotoCapa={`/assets/posts/${post.id}/capa.png`}
          titulo={post.titulo}
      
      
          >
              <div className='post-markdown-container'>
                <ReactMarkdown>
                {post.texto}  
              </ReactMarkdown>  
              </div>
              
              
          </PostModelo>
        } />
      </Route>
    </Routes>
   
  )
}
