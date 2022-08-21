import { useState } from 'react'

export const useSelectFilter = (defaultValue: string) => {
  const [value, setValue] = useState(
    localStorage.getItem('filter')
      ? localStorage.getItem('filter')
      : defaultValue
  )

  const setFilter = (value: string) => {
    localStorage.setItem('filter', value)
    setValue(value)
  }

  return {
    setFilter,
    value,
  }
}
