import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
// import About from './About'
// import Message from './Message'
// import ListDetail from './ListDetail'
// import ArticleItem from './ArticleItem'

@inject('commonStore')
@observer
class Main extends Component {
  render() {
    if (this.props.commonStore.appLoaded) {
      return (
        <div>
          <Header />
          <Switch>
            {/* <Route exact path='/articles/:id' component={ArticleItem} />
            <Route exact path='/about' component={About} />
            <Route path='/list' component={ListDetail} />
            <Route exact path='/message' component={Message} /> */}
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