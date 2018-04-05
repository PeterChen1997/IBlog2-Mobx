import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@observer
export default class CommentsList extends Component {
  render() {
    return (
      <div>
        <p>"Hello CommentsList"</p>
      </div>
    )
  }
}
