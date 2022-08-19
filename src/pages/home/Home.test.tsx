import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from '.'
test('should show heading', () => {
  render(<Home />)

  expect(screen.getByText('Home')).toBeInTheDocument()
})
