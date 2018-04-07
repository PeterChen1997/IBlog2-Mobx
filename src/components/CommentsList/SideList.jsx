import React from 'react'
import IsLoading from '../Tools/IsLoading'
// import { Link } from 'react-router-dom'

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
}

export default SideList