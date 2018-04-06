import React from 'react'
// import { Link } from 'react-router-dom'

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

export default List