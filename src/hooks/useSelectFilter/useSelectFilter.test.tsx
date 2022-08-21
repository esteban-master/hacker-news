import { renderHook } from '@testing-library/react'

import { useSelectFilter } from '.'

test('mount useFavoritePosts', () => {
  const { result } = renderHook(() => useSelectFilter())
  expect(result.current).toEqual([])
})
