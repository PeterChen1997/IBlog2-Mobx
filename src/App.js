import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Main from './components/Main'
import rootStore from './stores/rootStore'

export default class App extends Component {
  render() {
    return (
      <Provider {...rootStore}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    )
  }
}