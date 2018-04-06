import Banner from './Banner'
import Main from './Main'
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

@inject('commonStore', 'articlesStore', 'commentsStore')
@withRouter
@observer
export default class Home extends Component {
  render() {
    const {
      slogan,
      title
    } = this.props.commonStore
    const {
      mostViewedArticles,
      newestArticles,
    } = this.props.articlesStore
    const {
      newestComments
    } = this.props.commentsStore

    return (
      <div>
        <Banner slogan={ slogan } title={ title } />
        <div>
          <Main 
            mostViewedArticles={ mostViewedArticles.toJS() }
            newestArticles={ newestArticles.toJS() }
            newestComments={ newestComments.toJS() }
          />
        </div>
      </div>
    )
  }
}
