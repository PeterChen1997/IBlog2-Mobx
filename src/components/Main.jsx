import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import ArticlesList from './ArticlesList'
import CommentsList from './CommentsList'
import About from './About'

@inject('commonStore', 'articlesStore')
@observer
class Main extends Component {
  render() {
    if (this.props.commonStore.appLoaded) {
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/about' component={ About } />
            <Route exact path='/articlesList' component={ ArticlesList } />
            <Route exact path='/commentsList' component={ CommentsList } />
            <Route exact path='/' component={ Home } />
          </Switch>
          <Footer />
        </div>
      )
    }
    return (
      <Header />
    )
  }
}

export default Main