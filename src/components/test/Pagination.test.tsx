import { render, screen } from '@testing-library/react'
import React from 'react'

import Pagination from '../pagination'

test('should show buttons with number page', async () => {
  const pages = [1, 2, 3, 4, 5]
  render(<Pagination currentPage={2} totalPages={10} onChange={() => {}} />)

  pages.forEach((page) => expect(screen.getByText(page)).toBeInTheDocument())
})
