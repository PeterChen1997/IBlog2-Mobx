import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import IsLoading from '../Tools/IsLoading'

@withRouter
class List extends Component {
  renderTap = (tagsStr) => {
    const tagsArr = tagsStr.split('-')
    return tagsArr.map(tag => (
      <Link to={`/tags/${tag}`} key={tag}>{tag} </Link>
    ))
  }

  forLoop = () => {
    let res = []
    for(let article of this.props.articles) {
      res.push(<li
        className="list"
        key={article.id + "new"}
      >
        <Link
          className="title"
          to={`/articlesList/${article.id}`}
        >
          {article.title}
        </Link>
        <p>
          {article.desc.length > 55 ? article.desc.slice(0, 55) + "..." : article.desc}
        </p>
        <br />
        <p style={{ marginBottom: '0.6rem' }}><i className="fa fa-tag" /> 标签：{this.renderTap(article.topic)}</p>
        <p style={{ float: 'right' }}><i className="fa fa-calendar-times-o" /> 发布日期：{article.createdAt.slice(0, 10)}</p>
        <p><i className="fa fa-book" /> 浏览数：{article.view}</p>
      </li>)
    }
    return res
  }

  render() {
    const unOrderedListStyleObj = {
      marginBottom: "3rem"
    }
    if(this.props.isLoading) {
      return (
      <div className="articlesList">
        <IsLoading />
      </div>        
      )
    } else {

    return (
      <div className="articlesList">
        <ul style={unOrderedListStyleObj}>
          {
            this.forLoop(this.props.articles)
          }
        </ul>
      </div>
    )
  }
}

}

export default List