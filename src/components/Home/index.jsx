import Banner from './Banner';
import Main from './Main';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@observer
export default class Home extends Component {
  componentDidMount() {
  }

  render() {
    const { slogan, title } = this.props.commonStore
    return (
      <div className="home-page">
        <Banner slogan={ slogan } title={ title } />

        <div className="container page">
          <div className="row">
            <Main />
          </div>
        </div>

      </div>
    );
  }
}
