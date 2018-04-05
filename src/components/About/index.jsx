import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@observer
export default class About extends Component {
  render() {
    return (
      <div>
        <p>"Hello About"</p>
      </div>
    )
  }
}
