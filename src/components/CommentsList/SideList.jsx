import React from 'react'
// import { Link } from 'react-router-dom'

const SideList = ({ comments }) => {
  return (
    <div className="side-list">
      <ul>
      {
        comments.map(comment => (
          <li
            className="box"
            key={comment.articleId + "comment"}
          >
            <h3 className="title">{ comment.title }</h3>
            <p>
              { comment.detail }
            </p>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default SideList