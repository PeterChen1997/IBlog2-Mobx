import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'


@inject('commonStore')
@withRouter
@observer
export default class About extends Component {

  componentDidMount() {
    if(this.props.commonStore.isFirstLoad) {
      this.props.commonStore.setMenuIndex("about")
    }
  }

  render() {
    return (
      <div className="container animated fadeIn">
        <div className="picture"></div>
        <div className="details">
          <h4>Hi, 我是谌杨</h4>
          <hr/>
          <p>一名学习前端的大三学生</p>
          <h5>这是<a target="_blank" rel="noopener noreferrer" href="https://www.peterchen.club/resume/">我的在线简历</a></h5>
        </div>
      </div>          
    )
  }
}
