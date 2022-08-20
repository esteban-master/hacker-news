import React, { useEffect, useState } from 'react'

import PostComponent from './components/post'
import './Home.css'
import type { Post } from './models/Post'
import { getHackerNews } from './services/hackerNews.service'

const Home = () => {
  const [state, setState] = useState<{
    hits: Post[]
    page: number
  }>()
  useEffect(() => {
    getHackerNews('reactjs', 20).then((data) => {
      setState({
        hits: data.hits.filter((item) => item.objectID),
        page: data.page,
      })
    })
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {state && (
        <div>
          {state.hits.map((post) => (
            <PostComponent key={post.objectID} post={post} isFavorite={false} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
