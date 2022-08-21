import React, { useState } from 'react'

import { useLocalStorage } from '../../../../context/LocalStorageContext'

import './SelectFilter.css'

const SelectFilter = () => {
  const {
    state: { filter },
    setFilter,
  } = useLocalStorage()
  const [open, setOpen] = useState(false)
  const handleOnChange = (value: string) => {
    setFilter(value)
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
            <p className="titulo">{filter}</p>
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
