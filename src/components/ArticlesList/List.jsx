import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ articles }) => {
  const unOrderedListStyleObj = {
    marginBottom: "3rem"
  }

  const renderTap = (tagsStr) => {
    const tagsArr = tagsStr.split('-')
    return tagsArr.map(tag => (
      <Link to={`/tags/${tag}`} key={tag}>{tag}</Link>
    ))
  }

  return (
    <div className="articlesList">
      <ul style={ unOrderedListStyleObj }>
        {
          articles.map(article => (
            <li
              className="box"
              key={article.id + "new"}
            >
              <h3 className="title">{ article.title }</h3>
              <p>
                { article.content }
              </p>
              <br/>
              <p style={{marginBottom:'0.6rem'}}><i className="fa fa-tag" /> 标签：{renderTap(article.topic)}</p>
              <p style={{float:'right'}}><i className="fa fa-calendar-times-o"/> 发布日期：{article.createdAt.slice(0, 10)}</p>
              <p><i className="fa fa-book" /> 浏览数：{article.view}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default List