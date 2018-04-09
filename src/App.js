import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { ScrollContext } from 'react-router-scroll-4'

import Main from './components/Main'
import rootStore from './stores/rootStore'

export default class App extends Component {

  shouldUpdateScroll = (prevRouterProps, { location, history }) => {
    if (history.action === 'POP') {
      return false;
    }
   
    if (location.state["MY-USER-KEY"] === "NoScroll") {
      return [0, 0];
    }
   
    return true;
  }

  render() {
    return (
      <Provider {...rootStore}>
        <BrowserRouter>
          <ScrollContext>
            <Main />
          </ScrollContext>
        </BrowserRouter>
      </Provider>
    )
  }
}