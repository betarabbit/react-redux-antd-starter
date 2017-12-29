import React, { Component } from 'react';
import { Layout, Icon, Input, Divider, Row, Col } from 'antd';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMenu } from '../../actions/menu-actions';

const { Header } = Layout;
const { Search } = Input;

class AppHeader extends Component {
  toggle() {
    this.props.toggleMenu();
  }

  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Row>
          <Col span={18}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => this.toggle()}
            />
          </Col>

          <Col span={4}>
            <Search
              className="sub-element align right"
              placeholder="input search text"
              onSearch={value => console.log(value)}
            />
          </Col>
        </Row>
      </Header>
    );
  }
}

AppHeader.propTypes = {
  collapsed: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleMenu }, dispatch);
}

function mapStatesToProps({ menu }) {
  return { ...menu };
}

export default connect(mapStatesToProps, mapDispatchToProps)(AppHeader);
