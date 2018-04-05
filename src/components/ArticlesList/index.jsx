import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@observer
export default class ArticlesList extends Component {
  render() {
    return (
      <div>
        <p>"Hello ArticlesList"</p>
      </div>
    )
  }
}
