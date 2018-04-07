import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter, Link } from 'react-router-dom'

import ArticlesList from '../ArticlesList/List'
import CommentsSideList from '../CommentsList/SideList'
import Tile from './Tile'

@inject('commonStore', 'articlesStore', 'commentsStore')
@withRouter
@observer
class Main extends Component {
  render() {
    const titleStyleObj = {
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
      fontWeight: "500",
      lineHeight: "1.2"
    }

    const linkStyleObj = {
      fontSize: "1.3rem",
      marginBottom: "1.5rem",
      fontWeight: "500",
      lineHeight: "1.2",
      color: "gray",
      display: "block"
    }

    const mainViewStyleObj = {
      marginTop: "3rem",
      marginBottom: "1rem",
      padding: "1rem"
    }

    const {
      mostViewedArticles,
      newestArticles,
      isLoading
    } = this.props.articlesStore
    const {
      newestComments,
      isCommentsLoading,
      isFirstLoad
    } = this.props.commentsStore

    return (
      <div className="container" style={mainViewStyleObj}>

        <h3 style={titleStyleObj}>最多浏览</h3>
        <Tile
          isLoading={isLoading}
          mostViewedArticles={mostViewedArticles}
        />

        <div className="columns animated fadeIn">
          <div className="column is-three-quarters">
            <h3 style={titleStyleObj}>最新发布</h3>
            <ArticlesList
              articles={newestArticles}
              isLoading={isLoading}
            />
            <Link
              style={linkStyleObj}
              className="has-text-centered"
              to="/articlesList"
            >
              >> 文章列表
            </Link>
          </div>

          <div className="column">
            <h3 style={titleStyleObj}>最新回复</h3>
            <CommentsSideList
              comments={newestComments}
              isCommentsLoading={isCommentsLoading || isFirstLoad}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
