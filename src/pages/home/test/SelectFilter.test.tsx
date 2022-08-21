import { render, screen } from '@testing-library/react'
import React from 'react'

import SelectFilter from '../components/selectFilter'

test('should show select with options', async () => {
  const onChangeMock = jest.fn()
  const options = [
    { id: 1, label: 'Reactjs', value: 'reactjs' },
    { id: 2, label: 'Vuejs', value: 'vuejs' },
    { id: 3, label: 'Angular', value: 'angular' },
  ]
  render(<SelectFilter onChange={onChangeMock} options={options} />)

  const [option1, option2, option3] = options
  expect(screen.getByRole('combobox')).toBeInTheDocument()
  expect(
    screen.getByRole('option', { name: option1.label })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('option', { name: option2.label })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('option', { name: option3.label })
  ).toBeInTheDocument()
})

