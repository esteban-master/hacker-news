import React, { useEffect, useState } from 'react'
import './Pagination.css'

type Props = {
  currentPage: number
  totalPages: number
  onChange: (value: number) => void
}

const getPages = (currentPage: number, totalPages: number): number[] => {
  return [-3, -2, -1, 0, 1, 2, 3]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= totalPages)
}

const Pagination = ({ currentPage, totalPages, onChange }: Props) => {
  const [pageItems, setPageItems] = useState<number[]>(
    getPages(currentPage, totalPages)
  )

  useEffect(
    () => setPageItems(getPages(currentPage, totalPages)),
    [currentPage, totalPages]
  )

  return (
    <div className="container-buttons">
      {pageItems.map((page) => (
        <button
          className={`button ${currentPage === page ? 'active' : ''}`}
          key={page}
          onClick={() => onChange(page - 1)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination
