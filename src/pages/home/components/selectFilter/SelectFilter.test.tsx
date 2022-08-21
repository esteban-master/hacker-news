import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import LocalStorageProvider from '../../../../context/LocalStorageContext'

import SelectFilter from '.'

test('select vuejs option', async () => {
  const user = userEvent.setup()

  render(
    <LocalStorageProvider>
      <SelectFilter />
    </LocalStorageProvider>
  )

  await user.click(screen.getByRole('button', { name: 'filter-query' }))
  await user.click(screen.getByText('Vuejs'))

  expect(screen.getByText('Vuejs')).toBeInTheDocument()
})
