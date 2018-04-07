import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ReactMarkdown from 'react-markdown'
import { withRouter } from 'react-router-dom'

import CommentArea from '../Tools/CommentArea'


@inject('articlesStore')
@withRouter
@observer
class ArticleDetail extends Component {
  render() {
    const containerStyleObj = {
      marginTop: "5rem",
      marginBottom: "3rem"
    }
    const id = this.props.match.params.id
    const article = this.props.articlesStore.getArticle(id)
    return (
      <div className="container" style={containerStyleObj}>
        <ReactMarkdown source={article.content} />
        <br/>
        <CommentArea />
      </div>
    )
  }
}

export default ArticleDetail