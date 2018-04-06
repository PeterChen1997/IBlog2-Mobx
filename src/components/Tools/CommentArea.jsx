import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ReactMarkdown from 'react-markdown'

import CommentArea from '../Tools/CommentArea'


@inject('commonStore', 'articlesStore')
@observer
class ArticleDetail extends Component {
  render() {
    const containerStyleObj = {
      marginTop: "5rem",
      marginBottom: "3rem"
    }

    return (
      <div className="container" style={containerStyleObj}>
        
      </div>
    )
  }
}

export default ArticleDetail