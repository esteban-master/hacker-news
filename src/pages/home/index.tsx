import React, { useEffect, useState } from 'react'

import Pagination from '../../components/pagination'

import PostComponent from './components/post'
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
  const [filterQuery, setFilterQuery] = useState('reactjs')
  const [page, setPage] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    getHackerNews(filterQuery, page).then((data) => {
      setState({
        hits: data.hits.filter((item) => item.objectID),
        nbPages: data.nbPages,
        page: data.page,
      })
      setIsLoading(false)
    })
  }, [filterQuery, page])

  return (
    <div>
      <SelectFilter
        options={[
          { id: 1, label: 'Reactjs', value: 'reactjs' },
          { id: 2, label: 'Vuejs', value: 'vuejs' },
          { id: 3, label: 'Angular', value: 'angular' },
        ]}
        onChange={(value) => {
          setPage(0)
          setFilterQuery(value)
        }}
      />
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <div>
          {state.hits.map((post) => (
            <PostComponent
              key={post.objectID}
              post={post}
              isFavorite={false}
              handleFavorite={() => {}}
            />
          ))}
        </div>
      )}

      <Pagination
        onChange={(value) => setPage(value)}
        currentPage={state.page + 1}
        totalPages={state.nbPages}
      />
    </div>
  )
}

export default Home
