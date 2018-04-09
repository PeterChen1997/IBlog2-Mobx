import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

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
    const aboutDetail = 
`
## 关于页面

### Hi, 我是谌杨

一名学习前端的大三学生

这是[我的简历](https://www.peterchen.club/resume/)
`
    return (
      <div className="container animated fadeIn markdown-body">
        <ReactMarkdown
          source={ aboutDetail }
        />
        {/* <div className="picture"></div>
        <div className="details">
          <h4>Hi, 我是谌杨</h4>
          <hr/>
          <p>一名学习前端的大三学生</p>
          <h5>这是<a target="_blank" rel="noopener noreferrer" href="https://www.peterchen.club/resume/">我的在线简历</a></h5>
        </div> */}
      </div>          
    )
  }
}
