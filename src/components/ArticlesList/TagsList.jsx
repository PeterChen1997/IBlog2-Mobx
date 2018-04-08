import React from 'react'
import { Link } from 'react-router-dom'

const TagsList = ({ tags }) => {
  return (
    <div className="box">
      <ul>
        {
          tags.map(tag => (
            <div key={tag}>
              <Link
                to={`tags/${tag}`}
              >{tag}</Link>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default TagsList
