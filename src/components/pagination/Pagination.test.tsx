import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import Pagination from '.'

test('should show buttons with number page', async () => {
  const pages = [1, 2, 3, 4, 5]
  render(<Pagination currentPage={2} totalPages={10} onChange={() => {}} />)

  pages.forEach((page) => expect(screen.getByText(page)).toBeInTheDocument())
})

test('select page number 3', async () => {
  const user = userEvent.setup()
  const onChangeMock = jest.fn()
  const page = 3
  render(<Pagination currentPage={2} totalPages={10} onChange={onChangeMock} />)

  await user.click(screen.getByText(page))
  expect(onChangeMock).toHaveBeenCalledTimes(1)
  expect(onChangeMock).toHaveBeenCalledWith(page - 1)
})
