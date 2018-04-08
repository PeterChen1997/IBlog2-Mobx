import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ comments }) => {
  const unOrderedListStyleObj = {
    marginBottom: "3rem",
    marginTop: "1rem"
  }

  return (
    <div className="commentsList">
      <ul style={unOrderedListStyleObj}>
      {
        comments.map(comment => (
          <li
            className="box"
            key={comment.articleId + "comment"}
          >
            <Link
              className="title"
              to={`commentsList/${comment.id}`}
            >{ comment.title }</Link>
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

export default List