import Banner from './Banner';
import Main from './Main';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('commonStore', 'articlesStore')
@observer
export default class Home extends Component {
  render() {
    const { slogan, title } = this.props.commonStore
    const { mostViewedArticles, newestArticles } = this.props.articlesStore

    return (
      <div>
        <Banner slogan={ slogan } title={ title } />
        <div>
          <Main 
            mostViewedArticles={ mostViewedArticles.toJS() }
            newestArticles={ newestArticles.toJS() }
          />
        </div>
      </div>
    )
  }
}
