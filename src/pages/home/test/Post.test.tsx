import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { generatePost } from '../../../factories/post'
import Post from '../components/post'

test('should show post attributes', () => {
  const post = generatePost()
  render(<Post post={post} isFavorite={false} handleFavorite={() => {}} />)

  expect(screen.getByText(post.story_title)).toBeInTheDocument()
  expect(screen.getByText(`2 hours age by ${post.author}`)).toBeInTheDocument()
  expect(screen.getByAltText('heart icon')).toBeInTheDocument()
})

test('Clicking on the like button', async () => {
  const user = userEvent.setup()
  const post = generatePost()
  const handleFavoriteMock = jest.fn()
  render(
    <Post post={post} isFavorite={false} handleFavorite={handleFavoriteMock} />
  )

  await user.click(
    screen.getByRole('button', {
      name: 'favorite',
    })
  )
  expect(handleFavoriteMock).toHaveBeenCalledTimes(1)
})
