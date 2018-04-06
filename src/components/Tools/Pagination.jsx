import React from 'react'

const Pagination = ({ totalCount, activeIndex }) => {
  return (
    <nav className="pagination is-rounded is-centered" aria-label="pagination">
    <a className="pagination-previous" data-type="pre">上一页</a>
    <a className="pagination-next" data-type="next">下一页</a>
    <ul className="pagination-list">
      <li>
        <a className="pagination-link" data-type="index">1</a>
      </li>
    </ul>
  </nav>
  )
}

export default Pagination
