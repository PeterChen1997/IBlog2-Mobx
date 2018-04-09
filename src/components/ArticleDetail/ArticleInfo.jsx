import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ArticleInfo extends Component {
  renderTopic = () => {
    const tagsArr = this.props.article.topic.split('-')
    const length = tagsArr.length
    return tagsArr.map((tag, index) => (
      <li
        style={{ float: 'left', marginTop: '0' }}
        key={tag}
      >
        <Link to={`/tags/${tag}`} key={tag}>{tag}</Link>
        <span
          style={{
            display: index === length - 1 ? 'none' : 'inline',
            margin: '0 8px 0 8px'
          }}>/</span>
      </li>

    ))
  }
  render() {
    const articleInfoStyleObj = {
      color: '#bbb'
    }
    const articleInfoSubStyleObj = {
      width: "100%",
      display: "flex",
      justifyContent: "space-between"
    }
    return (
      <div style={articleInfoStyleObj}>
        <div className="title">{this.props.article.title}</div>
        <div style={articleInfoSubStyleObj}>
          <div className="topic">
            <p style={{ float: 'left' }}><i className="fa fa-tag" /> 标签：</p>
            <ul style={{ listStyle: "none", float: 'left', paddingLeft: '0' }}>
              {this.renderTopic()}
            </ul>
          </div>
        </div>

        <div style={articleInfoSubStyleObj}>
          <div className="time">
            <p><i className="fa fa-calendar-times-o" /> {this.props.article.createdAt.slice(0, 10)}</p>
          </div>
          <div className="view">
            <p><i className="fa fa-book" /> 浏览数：{this.props.article.view}</p>
          </div>
        </div>

        <br />
      </div>
    )
  }
}
