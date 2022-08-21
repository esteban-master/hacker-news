import React from 'react'
import './SelectTab.css'

const SelectTab = ({
  selected,
  setSelectTab,
}: {
  selected: string
  setSelectTab: (value: string) => void
}) => {
  return (
    <div className="tab-container">
      <div className="tab-options">
        <button
          className={`tab-item ${selected === 'All' ? 'active-tab' : ''}`}
          onClick={() => {
            setSelectTab('All')
          }}
        >
          All
        </button>
        <button
          className={`tab-item ${selected === 'Favorites' ? 'active-tab' : ''}`}
          onClick={() => {
            setSelectTab('Favorites')
          }}
        >
          Favorites
        </button>
      </div>
    </div>
  )
}

export default SelectTab
