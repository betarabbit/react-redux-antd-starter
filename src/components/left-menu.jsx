import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import _ from 'lodash';

import { MENU_DATA } from '../data/menu-content';

export class LeftMenu extends Component {
  renderMenuTree(itemData) {
    if (itemData.children) {
      const subMenuItems = _.map(itemData.children, c => this.renderMenuTree(c));

      const subMenuTitle = (
        <span>
          <Icon type={itemData.icon} />
          <span>{itemData.text}</span>
        </span>
      );

      return (
        <Menu.SubMenu key={itemData.icon} title={subMenuTitle}>
          {subMenuItems}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={itemData.icon}>
        <Icon type={itemData.icon} />
        <span>{itemData.text}</span>
      </Menu.Item>
    );
  }

  render() {
    const menuItems = _.map(MENU_DATA, d => this.renderMenuTree(d));
    return (
      <Menu theme="dark" mode="inline">
        {menuItems}
      </Menu>
    );
  }
}
