import { useState } from 'react'

import type { Post } from '../../pages/home/models/Post'

export const useFavoritePosts = () => {
  const [value, setValue] = useState<Post[]>(
    localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites')!)
      : []
  )

  const addPostToFavorites = (post: Post) => {
    const newPosts = [...value, post]
    localStorage.setItem('favorites', JSON.stringify(newPosts))
    setValue(newPosts)
  }

  const removePostToFavorites = (id: number) => {
    const newPosts = value.filter((item) => item.objectID !== id)
    localStorage.setItem('favorites', JSON.stringify(newPosts))
    setValue(newPosts)
  }

  const clean = () => {
    localStorage.setItem('favorites', JSON.stringify([]))
    setValue([])
  }

  return {
    addPostToFavorites,
    clean,
    favorites: value,
    removePostToFavorites,
  }
}
