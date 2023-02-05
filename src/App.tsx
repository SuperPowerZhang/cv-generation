import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";
import Foot from "./components/Footer";
import Form from "./components/Form";
import RealContent from "./components/Content";

function App() {
  const [formState, setformState] = useState(null);
  const { Header, Footer, Sider, Content } = Layout;
  const layoutStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    color: "#fff",
    width: "100%",
    backgroundColor: "#3ba0e9",
  };
  const headerStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };
  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };
  const footStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "grey",
  };
  return (
    <div className='App'>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          在下方填写信息，即可在右边预览会生成的样子
        </Header>
        <Layout style={{ ...layoutStyle, flexDirection: "row" }}>
          <Sider style={siderStyle}>
            <Form state={formState} setState={setformState}></Form>
          </Sider>
          <Content style={contentStyle}>
            <RealContent state={formState}></RealContent>
          </Content>
        </Layout>
        <Footer style={footStyle}>
          <Foot></Foot>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
