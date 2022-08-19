import { render, screen } from '@testing-library/react'
import React from 'react'

import App from './App'

test('Show App Component', () => {
  render(<App />)

  expect(screen.getByText('Hacker News')).toBeInTheDocument()
})
