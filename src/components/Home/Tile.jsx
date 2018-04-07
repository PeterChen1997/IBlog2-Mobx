import React from 'react'
import { Link } from 'react-router-dom'

import IsLoading from '../Tools/IsLoading'

const Tile = ({ mostViewedArticles, isLoading }) => {
  if (isLoading) {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <IsLoading />
          </div>
          <div className="tile is-child box">
            <IsLoading />
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <IsLoading />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child notification is-primary animated fadeIn">
            <Link
              className="title"
              to={`/articlesList/${mostViewedArticles[0].id}`}
            >
              {mostViewedArticles[0].title}
            </Link>

            <p>{mostViewedArticles[0].desc.length > 20 ? mostViewedArticles[0].desc.slice(0, 20) + '...' : mostViewedArticles[0].desc}</p>
          </div>
          <div className="tile is-child notification is-warning animated fadeIn">
          <Link
              className="title"
              to={`/articlesList/${mostViewedArticles[1].id}`}
            >
              {mostViewedArticles[1].title}
            </Link>
            <p>{mostViewedArticles[1].desc.length > 20 ? mostViewedArticles[1].desc.slice(0, 20) + '...' : mostViewedArticles[1].desc}</p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box animated fadeIn">
          <Link
              className="title"
              to={`/articlesList/${mostViewedArticles[2].id}`}
            >
              {mostViewedArticles[2].title}
            </Link>
            <p>{mostViewedArticles[2].desc.length > 80 ? mostViewedArticles[2].desc.slice(0, 80) + '...' : mostViewedArticles[2].desc}</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Tile
