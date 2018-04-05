import React from 'react'

import ArticlesList from '../ArticlesList/List'

const Main = ({ mostViewedArticles, newestArticles }) => {
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
    color: "gray"
  }

  const mainViewStyleObj = {
    marginTop: "3rem",
    marginBottom: "1rem",
    padding: "1rem"
  }

  return (
    <div className="container" style={mainViewStyleObj}>

      <h3 style={titleStyleObj}>最多浏览</h3>
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">{ mostViewedArticles[0].title }</p>
            <p>{ mostViewedArticles[0].content.length > 80 ? mostViewedArticles[0].content.slice(0, 81) + '...' : mostViewedArticles[0].content}</p>
          </div>
          <div className="tile is-child box">
          <p className="title">{ mostViewedArticles[1].title }</p>
            <p>{ mostViewedArticles[1].content.length > 80 ? mostViewedArticles[1].content.slice(0, 81) + '...' : mostViewedArticles[1].content}</p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
          <p className="title">{ mostViewedArticles[2].title }</p>
            <p>{ mostViewedArticles[2].content.length > 80 ? mostViewedArticles[2].content.slice(0, 81) + '...' : mostViewedArticles[2].content}</p>
          </div>
        </div>
      </div>

      <h3 style={titleStyleObj}>最新发布</h3>
        <ArticlesList articles={ newestArticles }/>
      <h3 style={linkStyleObj} className="has-text-centered">>> 文章列表</h3>
    </div>
  )
};

export default Main;
