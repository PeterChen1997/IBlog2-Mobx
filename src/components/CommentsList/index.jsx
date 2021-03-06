import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'

import InputArea from './InputArea'
import List from './List'
import SideList from './SideList'
import Pagination from '../Tools/Pagination';

@inject('commonStore', 'commentsStore')
@withRouter
@observer
export default class CommentsList extends Component {

  componentDidMount() {
    if(this.props.commentsStore.isFirstLoad) {
      this.props.commonStore.setMenuIndex("commentsList")
    }
  }

  render() {
    const {
      shownComments,
      totalCommentsPaginationCount,
      commentsPaginationActiveIndex,
      newestComments,
    } = this.props.commentsStore

    const commentsPageStyleObj = {
      minHeight: '60vh'
    }

    return (
      <div className="container animated fadeIn" style={commentsPageStyleObj}>
        <div className="columns">
          <div className="column is-three-quarters">
          <h3 className="container-h3">评论区</h3>
            <InputArea />
            <List comments={ shownComments.toJS() }/>
            <Pagination
              totalCount={ totalCommentsPaginationCount }
              activeIndex={ commentsPaginationActiveIndex }
            />
          </div>

          <div className="column">
            <h3 className="container-h3">最多点赞</h3>
            <SideList comments={ newestComments }/>
          </div>
        </div>
      </div>
    )
  }
}
