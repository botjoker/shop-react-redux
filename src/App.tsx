import React from 'react';
import './App.css';
import { Layout, Breadcrumb } from 'antd';
import { HeaderPanel } from './components/HeaderPanel';
import { FooterPanel } from './components/FooterPanel';
import AppRouter from './components/AppRouter';
const { Content } = Layout;


function App() {
  return (
    <Layout>
      <HeaderPanel />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <AppRouter/>
        </div>
      </Content>
      <FooterPanel />
    </Layout>
  );
}

export default App;
