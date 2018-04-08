import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ReactMarkdown from 'react-markdown'
import { withRouter } from 'react-router-dom'

import CommentArea from '../Tools/CommentArea'
import IsLoading from '../Tools/IsLoading'


@inject('articlesStore')
@withRouter
@observer
class ArticleDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    if(!this.props.articlesStore.ishaveArticle(id)) {
      this.props.articlesStore.getArticle(id)
    }
  }
  render() {
    const containerStyleObj = {
      marginTop: "5rem",
      marginBottom: "3rem"
    }

    let {
      currentArticle
    } = this.props.articlesStore

    const id = this.props.match.params.id

    if(!this.props.articlesStore.ishaveArticle(id)) {
      return (
        <IsLoading />
      )
    }

    currentArticle = this.props.articlesStore.getArticle(id)
    return (
      <div className="container" style={containerStyleObj}>
        {currentArticle.id}
        <ReactMarkdown source={currentArticle.content} />
        <br />
        <CommentArea />
      </div>
    )

  }
}

export default ArticleDetail