import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import List from './List'
import TagsList from './TagsList'
import Pagination from '../Tools/Pagination'

@inject('commonStore', 'articlesStore')
@withRouter
@observer
export default class ArticlesList extends Component {

  render() {
    const {
      shownArticles,
      shownTags,
      totalArticlesPaginationCount,
      articlesPaginationActiveIndex
    } = this.props.articlesStore

    const containerStyleObj = {
      marginTop: "5rem",
      marginBottom: "3rem"
    }
    const titleStyleObj = {
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
      fontWeight: "500",
      lineHeight: "1.2"
    }

    return (
      <div className="container" style={containerStyleObj}>
        <div className="columns">
          <div className="column is-three-quarters">
            <h3 style={titleStyleObj}>文章列表</h3>
            <List articles={shownArticles} />
            <Pagination
              totalCount={ totalArticlesPaginationCount }
              activeIndex={ articlesPaginationActiveIndex}
            />
          </div>

          <div className="column">
            <h3 style={titleStyleObj}>分类</h3>
            <TagsList tags={shownTags}/>
          </div>
        </div>
      </div>
    )
  }
}
