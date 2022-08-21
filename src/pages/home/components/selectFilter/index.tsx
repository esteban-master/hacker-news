import type { ChangeEvent } from 'react'
import React, { useState } from 'react'

import { useSelectFilter } from '../../../../hooks/useSelectFilter'

import './SelectFilter.css'

type Props = {
  onChange: (value: string) => void
  options: { id: number; value: string; label: string }[]
}

const SelectFilter = ({ onChange, options }: Props) => {
  const { value, setFilter } = useSelectFilter('reactjs')
  const [open, setOpen] = useState(false)
  const handleOnChange = (value: string) => {
    setFilter(value)
    onChange(value)
    setOpen(false)
  }

  return (
    <div>
      <div className="selectbox">
        <button
          aria-label="filter-query"
          className="select"
          onClick={() => {
            setOpen((value) => !value)
          }}
        >
          <div className="contenido-select">
            <p className="titulo">{value}</p>
          </div>
        </button>

        {open && (
          <div className="options">
            <button
              onClick={() => {
                handleOnChange('Reactjs')
              }}
              className="content-option"
            >
              <img src="/react.png" alt="Reactjs" />
              <div>
                <p className="title">Reactjs</p>
              </div>
            </button>

            <button
              onClick={() => {
                handleOnChange('Vuejs')
              }}
              className="content-option"
            >
              <img src="/vue.png" alt="Vuejs" />
              <div>
                <p className="title">Vuejs</p>
              </div>
            </button>

            <button
              onClick={() => {
                handleOnChange('Angular')
              }}
              className="content-option"
            >
              <img src="/angular.png" alt="Angular" />
              <div>
                <p className="title">Angular</p>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectFilter
