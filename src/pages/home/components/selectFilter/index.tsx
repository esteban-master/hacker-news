import type { ChangeEvent } from 'react'
import React from 'react'

type Props = {
  onChange: (value: string) => string
  options: { id: number; value: string; label: string }[]
}

const SelectFilter = ({ onChange, options }: Props) => {
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }
  return (
    <select onChange={handleOnChange}>
      {options.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

export default SelectFilter
