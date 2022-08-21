import React, { useEffect, useState } from 'react'

import Pagination from '../../components/pagination'
import { useLocalStorage } from '../../context/LocalStorageContext'

import FavoritePosts from './components/favoritePosts'
import { PostList } from './components/postList'
import SelectFilter from './components/selectFilter'
import './Home.css'
import type { Post } from './models/Post'
import { getHackerNews } from './services/hackerNews.service'

const Home = () => {
  const [state, setState] = useState<{
    hits: Post[]
    page: number
    nbPages: number
  }>({
    hits: [],
    nbPages: 0,
    page: 0,
  })
  const [isLoading, setIsLoading] = useState(false)
  const {
    state: { filter },
  } = useLocalStorage()

  const [page, setPage] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    getHackerNews(filter.toLowerCase(), page).then((data) => {
      setState({
        hits: data.hits.filter((item) => item.objectID),
        nbPages: data.nbPages,
        page: data.page,
      })
      setIsLoading(false)
    })
  }, [filter, page])

  return (
    <div>
      <SelectFilter />
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <div>
          <PostList posts={state.hits} />
        </div>
      )}

      <h1>Favorites</h1>
      <FavoritePosts />

      <Pagination
        onChange={(value) => setPage(value)}
        currentPage={state.page + 1}
        totalPages={state.nbPages}
      />
    </div>
  )
}

export default Home
