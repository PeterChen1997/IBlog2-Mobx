import React from 'react'

const TagsList = ({ tags }) => {
  return (
    <div className="box">
      <ul>
        {
          tags.map(tag => (
            <p key={tag}>{tag}</p>
          ))
        }
      </ul>
    </div>
  )
}

export default TagsList
