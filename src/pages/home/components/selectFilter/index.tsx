import type { ChangeEvent } from 'react'
import React from 'react'

import { useSelectFilter } from '../../../../hooks/useSelectFilter'

type Props = {
  onChange: (value: string) => void
  options: { id: number; value: string; label: string }[]
}

const SelectFilter = ({ onChange, options }: Props) => {
  const { value, setFilter } = useSelectFilter('reactjs')
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
    onChange(e.target.value)
  }

  return (
    <select aria-label="filter-query" value={value} onChange={handleOnChange}>
      {options.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

export default SelectFilter
