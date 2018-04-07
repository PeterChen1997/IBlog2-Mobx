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
  render() {
    const containerStyleObj = {
      marginTop: "5rem",
      marginBottom: "3rem",
      padding: "1rem"
    }

    const {
      shownComments,
      totalCommentsPaginationCount,
      commentsPaginationActiveIndex,
      newestComments
    } = this.props.commentsStore

    return (
      <div className="container" style={containerStyleObj}>
        <div className="columns">
          <div className="column is-three-quarters">
            <InputArea />
            <List comments={ shownComments.toJS() }/>
            <Pagination
              totalCount={ totalCommentsPaginationCount }
              activeIndex={ commentsPaginationActiveIndex }
            />
          </div>

          <div className="column">
            <SideList comments={ newestComments }/>
          </div>
        </div>
      </div>
    )
  }
}
