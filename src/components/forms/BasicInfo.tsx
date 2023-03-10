import React from "react";
import { Input } from "antd";
import { BASIC_INFO, CONTACT_INFO } from "../../constants/INFO";
import { BasicType, ContactType, InfoType, HTMLElementEvent } from "../../App";

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
            const element = e.currentTarget as HTMLInputElement;
            const value = element.value;
            const contactNew: ContactType = { ...state.contact };
            contactNew[item.key] = value;
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
            const element = e.currentTarget as HTMLInputElement;
            const value = element.value;
            const basicNew: BasicType = { ...state.basic };
            basicNew[item.key] = value;
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
