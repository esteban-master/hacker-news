import React from 'react'

import { useLocalStorage } from '../../../../context/LocalStorageContext'
import { PostList } from '../postList'

const FavoritePosts = () => {
  const {
    state: { favorites },
  } = useLocalStorage()
  return <PostList posts={favorites} />
}

export default FavoritePosts
