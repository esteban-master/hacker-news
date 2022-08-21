import { useState } from 'react'

export type Filter = 'reactjs' | 'vuejs' | 'angular'

export const useSelectFilter = (defaultValue: Filter) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem('filter')
      ? localStorage.getItem('filter')!
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
