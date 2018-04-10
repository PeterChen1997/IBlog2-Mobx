import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'


@inject('commonStore', 'articlesStore', 'commentsStore')
@observer
class CommentsArea extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="container comments-area">
        评论区开发中...
      </div>
    )
  }
}

export default CommentsArea