import { render, screen } from '@testing-library/react'
import React from 'react'

import { generatePost } from '../../../factories/post'
import Post from '../components/post'

test('should show post attributes', () => {
  const post = generatePost()
  render(<Post post={post} isFavorite={false} />)

  expect(screen.getByText(post.story_title)).toBeInTheDocument()
  expect(screen.getByText(`2 hours age by ${post.author}`)).toBeInTheDocument()
  expect(screen.getByAltText('heart icon')).toBeInTheDocument()
})
