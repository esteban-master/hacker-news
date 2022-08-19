import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'

import Home from '..'
import { getHackerNews } from '../../../../mocks/handlers'
import { server } from '../../../../mocks/server'

import { generatePostList } from './factories/post'
test('should show heading', () => {
  render(<Home />)

  expect(screen.getByText('Home')).toBeInTheDocument()
})

test('It should display a list of 5 posts on the first page', async () => {
  const posts = generatePostList(5)
  server.use(
    getHackerNews({
      hits: posts,
      page: 0,
    })
  )
  render(<Home />)

  await waitFor(() => {
    posts.forEach((post) =>
      expect(screen.getByText(post.story_title)).toBeInTheDocument()
    )
  })
})
