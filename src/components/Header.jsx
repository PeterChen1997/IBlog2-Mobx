import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@observer
class Header extends Component {
  state = {
    navs: [
      {
        nav: "articlesList",
        title: "文章列表",
        icon: "fa fa-list-ul"
      },
      {
        nav: "commentsList",
        title: "留言区",
        icon: "fa fa-pencil-square-o"
      },
      {
        nav: "about",
        title: "关于我",
        icon: "fa fa-hand-o-right"
      }
    ]
  }

  render() {
    const brandStyleObj = {
      color: "black"
    }

    return (
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/"
              style={brandStyleObj}
              onClick={() => this.props.commonStore.setMenuIndex("home")}>
              <p>{ this.props.commonStore.appName }</p>
            </Link>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            {
              this.state.navs.map(item => (
                <Link key={item.nav}
                  className={this.props.commonStore.currentMenuIndex === item.nav ? "is-active navbar-item" : "navbar-item"}
                  to={"/" + item.nav}
                  onClick={() => this.props.commonStore.setMenuIndex(item.nav)}
                >
                  <span className="icon">
                    <i className={item.icon} ></i>
                  </span>
                  <span>{item.title}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
