import { act, renderHook } from '@testing-library/react'

import { generatePost, generatePostList } from '../factories/post'

import LocalStorageProvider, { useLocalStorage } from './LocalStorageContext'

afterEach(() => {
  const { result } = renderHook(() => useLocalStorage(), {
    wrapper: LocalStorageProvider,
  })
  act(() => {
    result.current.clean()
  })
})

test('mount useLocalStorage with LocalStorage Provider', () => {
  const { result } = renderHook(() => useLocalStorage(), {
    wrapper: LocalStorageProvider,
  })
  expect(result.current.state.favorites.length).toBe(0)
})

test('add post to favorites', () => {
  const { result } = renderHook(() => useLocalStorage(), {
    wrapper: LocalStorageProvider,
  })
  const post = generatePost()
  act(() => {
    result.current.addPostToFavorites(post)
  })
  expect(result.current.state.favorites.length).toBe(1)
})

test('add 2 post to favorites', () => {
  const { result } = renderHook(() => useLocalStorage(), {
    wrapper: LocalStorageProvider,
  })
  const posts = generatePostList(2)
  const [postOne, postTwo] = posts
  act(() => {
    result.current.addPostToFavorites(postOne)
  })
  act(() => {
    result.current.addPostToFavorites(postTwo)
  })
  expect(result.current.state.favorites.length).toBe(2)
  expect(result.current.state.favorites).toEqual(expect.arrayContaining(posts))
})

test('add 2 post to favorites and remove one', () => {
  const { result } = renderHook(() => useLocalStorage(), {
    wrapper: LocalStorageProvider,
  })

  const posts = generatePostList(2)
  const [postOne, postTwo] = posts
  act(() => {
    result.current.addPostToFavorites(postOne)
  })
  act(() => {
    result.current.addPostToFavorites(postTwo)
  })
  expect(result.current.state.favorites.length).toBe(2)
  expect(result.current.state.favorites).toEqual(expect.arrayContaining(posts))

  act(() => {
    result.current.removePostToFavorites(postTwo.objectID)
  })

  expect(result.current.state.favorites.length).toBe(1)
  expect(result.current.state.favorites).toEqual(
    expect.arrayContaining([postOne])
  )
})

test('Select Vuejs filter', () => {
  const { result } = renderHook(() => useLocalStorage(), {
    wrapper: LocalStorageProvider,
  })
  act(() => {
    result.current.setFilter('Vuejs')
  })

  expect(result.current.state.filter).toBe('Vuejs')
})
