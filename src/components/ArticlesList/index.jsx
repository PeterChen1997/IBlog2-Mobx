import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import List from './List'
import TagsList from './TagsList'
import Pagination from '../Tools/Pagination'
import IsLoading from '../Tools/IsLoading'

@inject('commonStore', 'articlesStore')
@withRouter
@observer
export default class ArticlesList extends Component {

  componentDidMount() {
    if (this.props.articlesStore.isFirstLoad) {
      this.props.articlesStore.initList()
      this.props.commonStore.setMenuIndex("articlesList")
    }
  }

  setPaginationIndex = (index) => {
    this.props.articlesStore.setPaginationIndex(index)
  }

  render() {
    const {
      shownTags,
      totalArticlesPaginationCount,
      articlesPaginationActiveIndex,
      shownArticles,
      isFirstLoad,
    } = this.props.articlesStore


    return (
      <div className="container animated fadeIn">
        <div className="columns">
          <div className="column is-three-quarters">
            <h3 className="container-h3">文章列表</h3>
            {
              isFirstLoad ? <IsLoading /> :
                (
                  <div>
                    <List articles={shownArticles} />
                    <Pagination
                      totalCount={totalArticlesPaginationCount}
                      activeIndex={articlesPaginationActiveIndex}
                      setIndex={this.setPaginationIndex}
                    />
                  </div>
                )
            }
          </div>

          <div className="column">
            <h3 className="container-h3">分类</h3>
            {
              isFirstLoad ? <IsLoading /> :
                <TagsList tags={shownTags} />
            }
          </div>
        </div>
      </div>
    )

  }
}
