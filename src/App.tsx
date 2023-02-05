import React, { useState } from "react";
import "./App.css";
import "./init.css";
import { Layout } from "antd";
import Foot from "./components/Footer";
import Form from "./components/Form";
import RealContent from "./components/Content";

export type ContactType = {
  mobile: string;
  mail: string;
} | null;
export type BasicType = object | null;
export type InfoType = {
  contact: ContactType;
  basic: BasicType;
};
const infoInitialValue: InfoType = {
  contact: null,
  basic: null,
};
export const InfoContext = React.createContext(infoInitialValue);

function App() {
  const [formState, setformState] = useState(infoInitialValue);
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className='App'>
      <Header>在下方填写信息，即可在右边预览会生成的样子</Header>
      <Layout>
        <Sider>
          <Form state={formState} setState={setformState}></Form>
        </Sider>
        <Content>
          <InfoContext.Provider value={formState}>
            <RealContent></RealContent>
          </InfoContext.Provider>
        </Content>
      </Layout>
      <Footer>
        <Foot></Foot>
      </Footer>
    </div>
  );
}

export default App;
