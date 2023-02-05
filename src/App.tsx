import React,{ useState } from 'react'
import './App.css';
import { Layout } from 'antd';


function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const layoutStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  const headerStyle: React.CSSProperties = {
    display:'flex',
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          在下方填写信息，即可在右边预览会生成的样子
        </Header>
      <Layout style={layoutStyle}>
        <Sider style={siderStyle}/>
        <Content style={contentStyle}/>
      </Layout>
      <Footer />
      </Layout>

    </div>
  )
}

export default App
