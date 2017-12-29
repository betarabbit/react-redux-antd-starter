import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { AppMenu } from '../../components/app-menu/app-menu';

const { Sider } = Layout;

class LeftMenuSider extends Component {
  render() {
    const { props } = this;

    return (
      <Sider collapsible collapsed={props.collapsed} trigger={null}>
        <div className="logo" />
        <AppMenu />
      </Sider>
    );
  }
}

AppMenu.propTypes = {
  collapsed: PropTypes.bool,
};

function mapStateToProps({ menu }) {
  return { ...menu };
}

export default connect(mapStateToProps)(LeftMenuSider);
