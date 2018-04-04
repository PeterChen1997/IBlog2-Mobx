import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// @inject('commonStore')
@observer
class Header extends Component {
  state = {
    current: 'mail',
  }
  
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const subMenuStyleObj = {
      float: "right"
    }
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="title">
          <Icon type=""/>晨阳再升
        </Menu.Item>
        <Menu.Item key="articles"
          style={subMenuStyleObj}
        >
          <Icon type="bars" />文章列表
        </Menu.Item>
        <Menu.Item key="app"
          style={subMenuStyleObj}
        >
          <Icon type="edit" />留言
        </Menu.Item>
        <Menu.Item key="alipay"
          style={subMenuStyleObj}
        >
          <Icon type="user" />个人简介
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
