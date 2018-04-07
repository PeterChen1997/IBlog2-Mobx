import Banner from './Banner'
import Main from './Main'
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

@inject('commonStore', 'articlesStore', 'commentsStore')
@withRouter
@observer
export default class Home extends Component {
  componentWillMount() {
    // 第一次加载 需要请求信息
    if(this.props.commonStore.isFirstLoad) {
      this.props.commentsStore.init()
      this.props.articlesStore.init()
      this.props.commonStore.setLoadState()
    }
  }

  render() {
    const {
      slogan,
      title
    } = this.props.commonStore


    return (
      <div>
        <Banner slogan={ slogan } title={ title } />
        <div>
          <Main />
        </div>
      </div>
    )
  }
}
