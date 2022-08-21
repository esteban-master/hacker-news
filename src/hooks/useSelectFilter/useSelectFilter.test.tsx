import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { useSelectFilter } from '.'

test('mount useFavoritePosts', () => {
  const { result } = renderHook(() => useSelectFilter('reactjs'))
  expect(result.current.value).toBe('reactjs')
})

test('select filter', () => {
  const { result } = renderHook(() => useSelectFilter('reactjs'))
  act(() => {
    result.current.setFilter('vuejs')
  })

  expect(result.current.value).toBe('vuejs')
})
