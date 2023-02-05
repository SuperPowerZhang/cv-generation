import React, { useState, useCallback } from "react";
import "./App.css";
import "./init.css";
import { Layout } from "antd";
import Foot from "./components/Footer";
import Form from "./components/Form";
import RealContent from "./components/Content";

export type ContactType = {
  mobile?: string | undefined;
  mail?: string | undefined;
} | null;
export type BasicType = {
  gender?: string | undefined;
  name?: string | undefined;
  age?: string | undefined;
  expectation?: string | undefined;
  advantage?: string | undefined;
  specialization?: string | undefined;
} | null;
export type InfoType = {
  contact: ContactType;
  basic: BasicType;
};
const infoInitialValue: InfoType = {
  contact: null,
  basic: null,
};
export type displayFormType = boolean;
const initialDisplayFormValue = true;
export const InfoContext = React.createContext(infoInitialValue);

function App() {
  const [formState, setformState] = useState(infoInitialValue);
  const [displayForm, setDisplayForm] = useState(initialDisplayFormValue);
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className='App'>
      <Header>在下方填写信息，即可在右边预览会生成的样子</Header>
      <Layout>
        {displayForm && (
          <Sider>
            <Form state={formState} setState={setformState}></Form>
          </Sider>
        )}
        <Content>
          <InfoContext.Provider value={formState}>
            <RealContent></RealContent>
          </InfoContext.Provider>
        </Content>
      </Layout>
      <Footer>
        <Foot
          isShowForm={displayForm}
          hideForm={useCallback(() => {
            console.log(77777);
            setDisplayForm(false);
          }, [setDisplayForm])}
          showForm={useCallback(() => {
            setDisplayForm(true);
          }, [setDisplayForm])}
        ></Foot>
      </Footer>
    </div>
  );
}

export default App;
