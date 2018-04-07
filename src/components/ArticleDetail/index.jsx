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
    console.log("did mount")
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

    const {
      shownArticle
    } = this.props.articlesStore

    if(JSON.stringify(shownArticle) === "{}") {
      return (
        <IsLoading />
      )
    }
    return (
      <div className="container" style={containerStyleObj}>
        <ReactMarkdown source={shownArticle.content} />
        <br />
        <CommentArea />
      </div>
    )

  }
}

export default ArticleDetail