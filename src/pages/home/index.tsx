import React, { useEffect, useState } from 'react'

import './Home.css'
import type { Post } from './models/Post'
import { getHackerNews } from './services/hackerNews.service'

const Home = () => {
  const [state, setState] = useState<{
    hits: Post[]
    page: number
  }>()
  useEffect(() => {
    getHackerNews('reactjs', 20).then(setState)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {state && (
        <div>
          {state.hits.map((post) => (
            <div key={post.story_id}>
              <h2>{post.story_title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
