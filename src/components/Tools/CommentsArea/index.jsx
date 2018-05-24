import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

class CommentsArea extends Component {
  componentDidMount() {
  }

  handleNewComment = (comment) => {
		console.log(comment.text)
	}

  render() {
    const article = this.props.article

    return (
      // <div className="container comments-area">
      //   评论区开发中...
      // </div>
      <ReactDisqusComments
        shortname="blog-qrkvqdkukq"
        identifier={article.id}
        title={article.title}
        url={`https://blog.peterchen.club/articlesList/${article.id}`}
        onNewComment={this.handleNewComment}/>
    )
  }
}

export default CommentsArea