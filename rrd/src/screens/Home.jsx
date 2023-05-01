import React from 'react'
import estilo from './Home.module.css'
import posts from 'json/posts.json'
import Post from 'components/Post'


export default function Home() {
  return (
    <div>
      <main>
        <ul className={estilo.posts}>
          {posts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </main>
        
    </div>
  )
}
