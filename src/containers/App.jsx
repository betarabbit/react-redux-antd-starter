import React from 'react';
import { Layout } from 'antd';

import AppSideMenu from './left-menu/left-menu-sider';
import AppHeader from './app-header/app-header';

const { Header, Content } = Layout;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  handleChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Layout className="row-100-vh">
          <AppSideMenu />
          <Layout>
            <AppHeader />
            <Content> Content</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
