import React, { useState, useCallback } from "react";
import "./App.css";
import "./init.css";
import { Layout } from "antd";
import Foot from "./components/Footer";
import Form from "./components/Form";
import RealContent from "./components/Content";
export type displayFormType = boolean;
const initialDisplayFormValue = true;
import { infoInitialValue, InfoContext } from "./components/context";

function App() {
  const [formState, setformState] = useState(infoInitialValue);
  const [displayForm, setDisplayForm] = useState(initialDisplayFormValue);
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className='App'>
      <Header>在下方填写信息，即可在右边预览会生成的样子</Header>
      <Layout>
        {displayForm && (
          <Sider theme='light'>
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
