import React, { useEffect, useState } from 'react'

import './Home.css'
import { Post } from './models/Post'
import { getHackerNews } from './services/hackerNews.service'

const Home = () => {
  const [state, setState] = useState<any>()
  useEffect(() => {
    getHackerNews('reactjs', 20).then(setState)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {state && (
        <>
          <p>{state.query}</p>
          <p>{state.page}</p>
        </>
      )}
    </div>
  )
}

export default Home
