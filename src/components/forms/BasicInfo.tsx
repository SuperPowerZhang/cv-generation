import React from "react";
import { Input } from "antd";
import { BASIC_INFO, CONTACT_INFO } from "../../constants/INFO";
import { BasicType, ContactType, InfoType } from "../../App";

function BasicInfo(props: {
  state: InfoType;
  setState: (newState: InfoType) => void;
}) {
  const { state, setState } = props;
  const contactForm = CONTACT_INFO.map((item) => {
    return (
      <div key={item.key} className='item-wrap'>
        <span className='tag'>{item.val}:</span>
        <Input
          type='primary'
          onInput={(e) => {
            const contactNew: ContactType = { ...state.contact };
            contactNew[item.key] = e.target?.value;
            setState({ ...state, contact: contactNew });
          }}
        ></Input>
      </div>
    );
  });
  const basicForm = BASIC_INFO.map((item) => {
    return (
      <div key={item.key} className='item-wrap'>
        <span className='tag'>{item.val}:</span>
        <Input
          type='primary'
          onInput={(e) => {
            const basicNew = { ...state.basic };
            basicNew[item.key] = e.target?.value;
            console.log(111, basicNew);
            setState({ ...state, basic: basicNew });
          }}
        ></Input>
      </div>
    );
  });
  return (
    <>
      {contactForm}
      {basicForm}
    </>
  );
}

export default BasicInfo;
