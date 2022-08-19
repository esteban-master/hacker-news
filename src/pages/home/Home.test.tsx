import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from '.'
test('should show heading', () => {
  render(<Home />)

  expect(screen.getByText('Home')).toBeInTheDocument()
})

test('It should display response query', async () => {
  render(<Home />)

  expect(await screen.findByText('reactjs')).toBeInTheDocument()
  expect(await screen.findByText('20')).toBeInTheDocument()
})
