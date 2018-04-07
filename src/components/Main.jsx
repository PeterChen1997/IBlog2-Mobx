import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import ArticlesList from './ArticlesList'
import CommentsList from './CommentsList'
import About from './About'
import ArticleDetail from './ArticleDetail'

@inject('commonStore')
@withRouter
@observer
class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/articlesList/:id' component={ArticleDetail} />
          <Route exact path='/articlesList' component={ArticlesList} />
          <Route exact path='/commentsList' component={CommentsList} />
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main