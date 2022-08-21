import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'

import Home from '..'
import { getHackerNews } from '../../../../mocks/handlers'
import { server } from '../../../../mocks/server'
import { generatePostList } from '../../../factories/post'

test('should show loading posts', () => {
  render(<Home />)
  expect(screen.getByText('Loading posts...')).toBeInTheDocument()
})

test('It should display a list of 5 posts on the first page', async () => {
  const posts = generatePostList(5)
  server.use(
    getHackerNews({
      hits: posts,
      nbPages: 50,
      page: 0,
    })
  )
  render(<Home />)

  await waitFor(() => {
    posts.forEach((post) =>
      expect(screen.getByText(post.story_title)).toBeInTheDocument()
    )
  })

  expect(screen.queryByText('Loading posts...')).not.toBeInTheDocument()
})
