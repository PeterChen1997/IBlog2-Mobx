import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

@withRouter
class List extends Component {
  renderTap = (tagsStr) => {
    const tagsArr = tagsStr.split('-')
    return tagsArr.map(tag => (
      <Link to={`/tags/${tag}`} key={tag}>{tag}</Link>
    ))
  }

  render() {
    const unOrderedListStyleObj = {
      marginBottom: "3rem"
    }
    return (
      <div className="articlesList">
        <ul style={unOrderedListStyleObj}>
          {
            this.props.articles.map(article => (
              <li
                className="box"
                key={article.id + "new"}
              >
                <Link
                  className="title"
                  to={`/articlesList/${article.id}`}
                >
                  {article.title}
                </Link>
                <p>
                  {article.content}
                </p>
                <br />
                <p style={{ marginBottom: '0.6rem' }}><i className="fa fa-tag" /> 标签：{this.renderTap(article.topic)}</p>
                <p style={{ float: 'right' }}><i className="fa fa-calendar-times-o" /> 发布日期：{article.createdAt.slice(0, 10)}</p>
                <p><i className="fa fa-book" /> 浏览数：{article.view}</p>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }

}

export default List