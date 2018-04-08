import React from 'react'
import IsLoading from '../Tools/IsLoading'
import { Link } from 'react-router-dom'

const SideList = ({ comments, isCommentsLoading }) => {
  if(isCommentsLoading) {
    return <IsLoading />
  } else {

  return (
    <div className="side-list">
      <ul>
      {
        comments.map(comment => (
          <li
            className="list"
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
}

export default SideList