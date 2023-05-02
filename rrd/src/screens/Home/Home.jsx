import React from 'react'
import estilo from './Home.module.css'
import posts from 'json/posts.json'
import PostCard from 'components/PostCard'


export default function Home() {
  return (
    <div>
      <main>
        <ul className={estilo.posts}>
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </main>
        
    </div>
  )
}
