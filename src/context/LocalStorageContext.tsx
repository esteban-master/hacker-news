import type { ReactNode } from 'react'
import React, { createContext, useState, useContext } from 'react'

import type { Post } from '../pages/home/models/Post'

type LocalStorageState = {
  filter: string
  favorites: Post[]
}

export const LocalStorageContext = createContext<{
  state: LocalStorageState
  removePostToFavorites: (id: number) => void
  setFilter: (value: string) => void
  clean: () => void
  addPostToFavorites: (post: Post) => void
}>({
  addPostToFavorites: () => {},
  clean: () => {},
  removePostToFavorites: () => {},
  setFilter: () => {},
  state: {
    favorites: [],
    filter: 'Reactjs',
  },
})

export const useLocalStorage = () => {
  const context = useContext(LocalStorageContext)
  if (!context) {
    throw new Error('Init context before use')
  }
  return context
}

const LocalStorageProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<LocalStorageState>({
    favorites: localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites')!)
      : [],
    filter: localStorage.getItem('filter')
      ? localStorage.getItem('filter')!
      : 'Reactjs',
  })

  const addPostToFavorites = (post: Post) => {
    const newPosts = [...state.favorites, post]
    localStorage.setItem('favorites', JSON.stringify(newPosts))
    setState((prev) => ({ favorites: newPosts, filter: prev.filter }))
  }

  const removePostToFavorites = (id: number) => {
    const newPosts = state.favorites.filter((item) => item.objectID !== id)
    localStorage.setItem('favorites', JSON.stringify(newPosts))
    setState((prev) => ({ favorites: newPosts, filter: prev.filter }))
  }

  const setFilter = (value: string) => {
    localStorage.setItem('filter', value)
    setState((prev) => ({ favorites: prev.favorites, filter: value }))
  }

  const clean = () => {
    localStorage.setItem('favorites', JSON.stringify([]))
    localStorage.setItem('filter', 'Reactjs')
    setState(() => ({ favorites: [], filter: 'Reactjs' }))
  }

  return (
    <LocalStorageContext.Provider
      value={{
        addPostToFavorites,
        clean,
        removePostToFavorites,
        setFilter,
        state,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  )
}

export default LocalStorageProvider
