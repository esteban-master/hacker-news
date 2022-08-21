import { act, renderHook } from '@testing-library/react'

import { generatePost, generatePostList } from '../../factories/post'

import { useFavoritePosts } from '.'

afterEach(() => {
  const { result } = renderHook(() => useFavoritePosts())
  act(() => {
    result.current.clean()
  })
})

test('mount useFavoritePosts', () => {
  const { result } = renderHook(() => useFavoritePosts())
  expect(result.current.favorites.length).toBe(0)
})

test('add post to favorites', () => {
  const { result } = renderHook(() => useFavoritePosts())
  const post = generatePost()
  act(() => {
    result.current.addPostToFavorites(post)
  })
  expect(result.current.favorites.length).toBe(1)
})

test('add 2 post to favorites', () => {
  const { result } = renderHook(() => useFavoritePosts())
  const posts = generatePostList(2)
  const [postOne, postTwo] = posts
  act(() => {
    result.current.addPostToFavorites(postOne)
  })
  act(() => {
    result.current.addPostToFavorites(postTwo)
  })
  expect(result.current.favorites.length).toBe(2)
  expect(result.current.favorites).toEqual(expect.arrayContaining(posts))
})

test('add 2 post to favorites and remove one', () => {
  const { result } = renderHook(() => useFavoritePosts())
  const posts = generatePostList(2)
  const [postOne, postTwo] = posts
  act(() => {
    result.current.addPostToFavorites(postOne)
  })
  act(() => {
    result.current.addPostToFavorites(postTwo)
  })
  expect(result.current.favorites.length).toBe(2)
  expect(result.current.favorites).toEqual(expect.arrayContaining(posts))

  act(() => {
    result.current.removePostToFavorites(postTwo.objectID)
  })

  expect(result.current.favorites.length).toBe(1)
  expect(result.current.favorites).toEqual(expect.arrayContaining([postOne]))
})
