/* eslint-disable prettier/prettier */
import React from 'react'
const Pagination = ({ postsPerPage, totalPosts, paginate, previous, next }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a onClick={() => previous()} className="page-link">
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={() => next()} className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
